var typedInstance = new Typed(".text", {
    strings:["Frontend Developer", "Backend Developer", "Full Stack Developer"],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});

  // Close mobile navbar when a link is clicked
  document.querySelectorAll('.navbar ul li a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('nav-toggle').checked = false;
    });
  });
  // Animate skill bars on load
    window.addEventListener("DOMContentLoaded", () => {
      const progressBars = document.querySelectorAll(".progress");
      progressBars.forEach(bar => {
        const value = bar.getAttribute("data-progress");
        bar.style.width = value;
      });
    });
