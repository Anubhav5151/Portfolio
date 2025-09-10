function showMessage() {
      document.getElementById('message').textContent = "Thanks for checking my portfolio!";
    }

    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
    }

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.onscroll = function() {
      const btn = document.getElementById('scrollTopBtn');
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };

    const sections = document.querySelectorAll('section');
    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
          section.classList.add('reveal');
        }
      });
    };
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);