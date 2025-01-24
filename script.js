document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate sending the message
    document.getElementById('messageResponse').innerHTML = 'Thank you for your message! We will get back to you soon.';
    
    // Clear the form
    document.getElementById('contactForm').reset();
  });
  
  