// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.navbar')) {
        navMenu.classList.remove('active');
      }
    });
  }
  
  // Email obfuscation
  const emailForms = document.querySelectorAll('.contact-form');
  emailForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Reconstruct email
      const user = 'emberstoeverbloomwellness';
      const domain = 'gmail.com';
      const email = user + '@' + domain;
      
      // Get form data
      const formData = new FormData(form);
      const subject = formData.get('subject') || 'Contact Form Submission';
      const body = Array.from(formData.entries())
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n\n');
      
      // Create mailto link
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      const successMsg = form.querySelector('.form-success');
      if (successMsg) {
        successMsg.style.display = 'block';
        setTimeout(() => {
          successMsg.style.display = 'none';
          form.reset();
        }, 5000);
      }
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}); 