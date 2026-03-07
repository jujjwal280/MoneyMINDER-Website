document.addEventListener("DOMContentLoaded", function() {
  // Loading Screen
  const loadingScreen = document.getElementById('loadingScreen');
  setTimeout(() => {
    loadingScreen.classList.add('hidden');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }, 2000);

  // Initialize Particles
  if (window.particlesJS) {
    const isLightMode = document.body.classList.contains('light');
    const particleColor = isLightMode ? '#053F5C' : '#F27F0C';
    const lineColor = isLightMode ? '#053F5C' : '#F27F0C';

    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: particleColor },
        shape: { type: 'circle' },
        opacity: { value: 4, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 100,
          color: lineColor,
          opacity: 1,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        }
      },
      retina_detect: true
    });
  }

  // Function to reinitialize particles with new colors
  function updateParticleColors() {
    const isLightMode = document.body.classList.contains('light');
    const particleColor = isLightMode ? '#053F5C' : '#F27F0C';
    const lineColor = isLightMode ? '#053F5C' : '#F27F0C';

    if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
      // Update existing particles
      const pJS = window.pJSDom[0].pJS;
      pJS.particles.color.value = particleColor;
      pJS.particles.line_linked.color = lineColor;

      // Update all existing particle objects
      if (pJS.particles.array) {
        pJS.particles.array.forEach(particle => {
          particle.color.value = particleColor;
        });
      }

      // Trigger a refresh
      pJS.fn.particlesRefresh();
    }
  }

  // Floating Action Button
  const fabMain = document.getElementById('fabMain');
  const fabOptions = document.getElementById('fabOptions');
  let fabOpen = false;

  if (fabMain) {
    fabMain.addEventListener('click', () => {
      fabOpen = !fabOpen;
      fabMain.classList.toggle('active', fabOpen);
      fabOptions.classList.toggle('active', fabOpen);
    });
  }

  // Chat Widget
  let chatOpen = false;

  function toggleChat() {
    const chatBody = document.getElementById('chatBody');
    const chatToggle = document.getElementById('chatToggle');
    chatOpen = !chatOpen;
    chatBody.classList.toggle('active', chatOpen);
    chatToggle.style.transform = chatOpen ? 'rotate(180deg)' : 'rotate(0deg)';
  }

  // Make toggleChat globally available
  window.toggleChat = toggleChat;

  window.addChatMessage = function(message) {
    const chatBody = document.getElementById('chatBody');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message';
    messageDiv.innerHTML = `<p><strong>You:</strong> ${message}</p>`;
    chatBody.appendChild(messageDiv);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = document.createElement('div');
      botResponse.className = 'chat-message bot-message';
      let response = '';
      switch (message) {
        case 'Tell me about features':
          response = 'MoneyMINDER AI offers expense tracking, AI forecasting, smart categorization, and beautiful insights!';
          break;
        case 'How to download?':
          response = 'Click the download button or visit our Google Drive link to get the latest version!';
          break;
        case 'Pricing info':
          response = 'MoneyMINDER AI is currently free! We believe in making financial management accessible to everyone.';
          break;
        default:
          response = 'Thanks for your question! Feel free to explore our features or contact our team.';
      }
      botResponse.innerHTML = `<p>${response}</p>`;
      chatBody.appendChild(botResponse);
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
  };

  // Cursor Trail
  const cursorTrail = document.getElementById('cursorTrail');
  let mouseX = 0, mouseY = 0;
  let trailX = 0, trailY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function updateCursorTrail() {
    trailX += (mouseX - trailX) * 0.1;
    trailY += (mouseY - trailY) * 0.1;

    if (cursorTrail) {
      cursorTrail.style.left = trailX + 'px';
      cursorTrail.style.top = trailY + 'px';
    }

    requestAnimationFrame(updateCursorTrail);
  }
  updateCursorTrail();

  // Enhanced Scroll Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  // Add scroll reveal to sections
  document.querySelectorAll('.section, .normal-card').forEach(el => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
  });

  // Enhanced Progress Bar with segments
  const enhancedProgressBar = document.getElementById('progressBar');
  if (enhancedProgressBar) {
    window.addEventListener('scroll', () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      enhancedProgressBar.style.width = Math.min(progress, 100) + '%';
    });
  }

  // Parallax Effect for Hero Section
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });

  // Dynamic Navbar Background
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      const scrolled = window.pageYOffset;
      const opacity = Math.min(scrolled / 100, 0.95);
      navbar.style.background = document.body.classList.contains('light')
        ? `rgba(226, 246, 246, ${opacity})`
        : `rgba(18, 18, 18, ${opacity})`;
    }
  });

  // Typed.js or fallback typing
  if (window.Typed) {
    new Typed("#typed-text", {
      strings: [
        "Track your expenses.",
        "Plan your savings.",
        "Predict your future spending.",
        "MoneyMINDER AI at your service!"
      ],
      typeSpeed: 40,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });
  } else {
    const heroTagline = document.getElementById("hero-tagline");
    if (heroTagline) {
      const phrases = [
        "Full Stack Developer",
        "Open Source Enthusiast",
        "Tech Blogger",
        "Lifelong Learner",
      ];
      let phraseIndex = 0,
        letterIndex = 0,
        typingSpeed = 100,
        deletingSpeed = 50,
        delayBetweenPhrases = 1800;

      function type() {
        if (letterIndex <= phrases[phraseIndex].length) {
          heroTagline.textContent = phrases[phraseIndex].slice(0, letterIndex);
          letterIndex++;
          setTimeout(type, typingSpeed);
        } else {
          setTimeout(deleteText, delayBetweenPhrases);
        }
      }

      function deleteText() {
        if (letterIndex >= 0) {
          heroTagline.textContent = phrases[phraseIndex].slice(0, letterIndex);
          letterIndex--;
          setTimeout(deleteText, deletingSpeed);
        } else {
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(type, typingSpeed);
        }
      }

      type();
    }
  }

  // AOS initialization
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
  });

  // Back to top
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.pageYOffset > 100 ? "block" : "none";
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Ripple effect
  document.querySelectorAll(".ripple").forEach(button => {
    button.addEventListener("click", function(e) {
      const circle = document.createElement("span");
      const diameter = Math.max(this.clientWidth, this.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;
      circle.style.top = `${e.clientY - this.offsetTop - radius}px`;
      circle.classList.add("ripple-effect");

      const ripple = this.querySelector(".ripple-effect");
      if (ripple) ripple.remove();

      this.appendChild(circle);
    });
  });

  // Counter
  let countersStarted = false;
  const counters = document.querySelectorAll(".count");
  const runCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 100;

        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  window.addEventListener("scroll", () => {
    const stats = document.getElementById("stats");
    if (!countersStarted && stats && stats.getBoundingClientRect().top < window.innerHeight * 0.8) {
      runCounters();
      countersStarted = true;
    }
  });

  // === Carousel with Captions ===
  let currentSlide = 0;
  const slides = document.querySelectorAll('.screen-img');
  const captions = [
    "🏡 Dashboard",
    "💸 Transactions",
    "📊 Insights"
  ];
  const captionElement = document.getElementById("caption");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    if (captionElement) {
      captionElement.textContent = captions[index];
    }
  }

  window.nextSlide = function() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  };

  window.prevSlide = function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  };

  showSlide(currentSlide); // Initial setup
  setInterval(window.nextSlide, 5000); // Auto-slide every 5 sec

  // Feedback Form
  const feedbackForm = document.getElementById('feedback-form');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('✅ Thank you for your feedback!');
      feedbackForm.reset();
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;

      // Simulate successful subscription
      alert(`🎉 Thank you for subscribing! We'll send updates to ${email}`);
      this.reset();

      // You could integrate with an actual email service here
      // Example: send data to your backend or email service API
    });
  }

  // Theme Toggle
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light");
      themeToggle.textContent = "🌞";
    }

    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light");
      const isLight = document.body.classList.contains("light");
      themeToggle.textContent = isLight ? "🌞" : "🌙";
      localStorage.setItem("theme", isLight ? "light" : "dark");

      // Update particle colors when theme changes
      setTimeout(updateParticleColors, 100);
    });
  }

  // Mobile Nav Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // FAQ Functionality
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const isExpanded = question.getAttribute('aria-expanded') === 'true';
      const answer = question.nextElementSibling;

      // Close all other FAQ items
      faqQuestions.forEach(otherQuestion => {
        if (otherQuestion !== question) {
          otherQuestion.setAttribute('aria-expanded', 'false');
          otherQuestion.nextElementSibling.classList.remove('active');
        }
      });

      // Toggle current FAQ item
      question.setAttribute('aria-expanded', !isExpanded);
      answer.classList.toggle('active', !isExpanded);
    });
  });

  // Smooth scroll with offset for navbar
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for navbar height
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Add keyboard navigation for accessibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // Close mobile menu if open
      if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }

      // Close any open FAQ items
      faqQuestions.forEach(question => {
        question.setAttribute('aria-expanded', 'false');
        question.nextElementSibling.classList.remove('active');
      });
    }
  });
});