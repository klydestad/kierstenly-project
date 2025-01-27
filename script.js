function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function generatePDF() {
    // Fetch the HTML content
    fetch('resume.html')
      .then(response => response.text())
      .then(html => {
        // Create a temporary container
        const container = document.createElement('div');
        container.innerHTML = html;
        document.body.appendChild(container);
  
        // Configure html2pdf options
        const opt = {
          margin:       10,
          filename:     'Kiersten_Lyde-Stad_Resume.pdf',
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { scale: 2, useCORS: true },
          jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
  
        // Generate PDF
        html2pdf().from(container).set(opt).save().then(() => {
          // Remove the temporary container after PDF generation
          document.body.removeChild(container);
        });
      })
      .catch(error => {
        console.error('Error generating PDF:', error);
      });
  }

// Add this function to update the timestamp
function updateLastModified() {
    const timestampElement = document.getElementById('timestamp');
    const buildTime = timestampElement.textContent || new Date().toUTCString();
    
    // If no build time is injected, use current time
    if (buildTime === '__BUILD_TIME__') {
        timestampElement.textContent = new Date().toUTCString();
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', updateLastModified);