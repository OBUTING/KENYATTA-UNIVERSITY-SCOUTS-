  document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
      date: new Date().toISOString()
    };
    
    try {
      const response = await fetch('http://localhost:3000/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      const formMessage = document.getElementById('formMessage');
      
      if (response.ok) {
        formMessage.innerHTML = '<div class="alert alert-success">Message sent successfully!</div>';
        this.reset(); // Clear the form
      } else {
        formMessage.innerHTML = '<div class="alert alert-danger">Error sending message: ' + result.error + '</div>';
      }
    } catch (error) {
      document.getElementById('formMessage').innerHTML =
        '<div class="alert alert-danger">Error: Could not connect to server</div>';
    }
  });
  function updateDateTime() {
            const now = new Date();
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            };
            const dateTimeString = now.toLocaleDateString('en-US', options);
            document.getElementById('dateTime').textContent = dateTimeString;
        }

        // Update immediately and every second
        updateDateTime();
        setInterval(updateDateTime, 1000);