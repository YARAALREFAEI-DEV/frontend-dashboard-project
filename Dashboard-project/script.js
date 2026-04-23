// Dark Mode 
const toggle = document.getElementById("darkModeToggle");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
const ctx = document.getElementById('ticketsChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // X-axis labels
    datasets: [
      {
        label: 'Tickets Overview',
        data: [100, 200, 350, 400, 300, 450, 500], // Y-axis values
        borderColor: '#3b82f6', // Line color
        backgroundColor: 'rgba(138, 160, 239, 0.76)', // Fill color
        borderWidth: 3, // Line thickness
        tension: 0.4, // Smooth curve
        fill: true, // Fill under the line
        pointRadius: 0, // Remove points
        pointHoverRadius: 6, // Larger points on hover
        pointBackgroundColor: '#3b82f6', // Hover point color
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#000000",

          font: {
            size: 12, 
          },
        },
      },
      y: {
        beginAtZero: true, 
        grid: {
          color: '#f4f4f4', 
        },
        ticks: {
          color: "#000000",

          font: {
            size: 12, 
          },
          stepSize: 100, 
        },
      },
    },
  },
  
});
const ctx2 = document.getElementById('attachmentsPieChart').getContext('2d');  
const attachmentsPieChart = new Chart(ctx2, {  
    type: 'doughnut', 
    data: {  
        labels: ['Documents', 'Images', 'Voice', 'Videos'],  
        datasets: [{  
            data: [1225, 1849, 1005, 723],  
            backgroundColor: ['#52AFFF', '#f43f5e', '#fbbf24', '#5852FF'],  
        }]  
    },  
    options: {  
        responsive: true,  
        plugins: {  
            legend: {  
                display: false,
            },  
        }  
    }  
});
const progressBar = document.querySelector(".progress-container");
const progressFill = document.querySelector(".progress-fill");
const progressThumb = document.querySelector(".progress-thumb");
const progressIndicator = document.querySelector(".progress-indicator");
const progressLine = document.querySelector(".progress-line");

let isDragging = false;

progressThumb.addEventListener("mousedown", startDrag);
progressThumb.addEventListener("touchstart", startDrag, { passive: false });

document.addEventListener("mousemove", onDrag);
document.addEventListener("touchmove", onDrag, { passive: false });

document.addEventListener("mouseup", stopDrag);
document.addEventListener("touchend", stopDrag);

function startDrag(event) {
    isDragging = true;
    document.body.style.userSelect = "none"; 
}

function onDrag(event) {
    if (!isDragging) return;

    let clientX = event.touches ? event.touches[0].clientX : event.clientX;
    let rect = progressBar.getBoundingClientRect();
    let percentage = ((clientX - rect.left) / rect.width) * 100;
    
    percentage = Math.max(0, Math.min(100, percentage));  

    updateProgress(percentage);
}

function stopDrag() {
    isDragging = false;
    document.body.style.userSelect = "auto";
}

function updateProgress(value) {
    progressFill.style.width = value + "%";  
    progressThumb.style.left = value + "%";
    progressLine.style.width = value + "%"; 
    progressIndicator.textContent = Math.round(value) + "%";  
    progressIndicator.style.left = `calc(${value}% - 20px)`;  
}



document.getElementById("addTicketBtn").addEventListener("click", function() {
  // Redirect to the add-ticket page
  window.location.href = "add-ticket.html";  // Make sure the URL is correct for your case
});




