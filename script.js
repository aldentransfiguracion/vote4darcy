// Mobile Navigation Toggle
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navToggle.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
  });
});

// Navbar scroll effect and Parallax
let ticking = false;

function updateParallax() {
  const navbar = document.querySelector(".navbar");
  const hero = document.querySelector(".hero");
  const scrolled = window.pageYOffset;
  const heroHeight = hero ? hero.offsetHeight : 0;

  // Navbar effect
  if (scrolled > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Parallax effect for hero background (only when hero is visible)
  if (hero && scrolled < heroHeight) {
    const rate = scrolled * -0.3;
    hero.style.transform = `translate3d(0, ${rate}px, 0)`;
  }

  ticking = false;
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateParallax);
    ticking = true;
  }
}

window.addEventListener("scroll", requestTick);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Contact Form Handling (if form exists)
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Basic validation
    if (!data.name || !data.email) {
      alert("Please fill in all required fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate form submission
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = "Submitting...";
    submitButton.disabled = true;

    // Simulate API call
    setTimeout(() => {
      alert("Thank you for your interest! We'll be in touch soon.");
      this.reset();
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }, 1000);
  });
}

// Resources Section Interaction (if elements exist)
const amountButtons = document.querySelectorAll(".amount-btn");
const customAmountInput = document.getElementById("custom-amount");
const donateBtn = document.getElementById("donate-btn");

if (amountButtons.length > 0 && donateBtn) {
  let selectedAmount = 0;

  amountButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      amountButtons.forEach((btn) => btn.classList.remove("active"));

      // Add active class to clicked button
      button.classList.add("active");

      const amount = button.getAttribute("data-amount");

      if (amount === "other") {
        if (customAmountInput) {
          customAmountInput.style.display = "block";
          customAmountInput.focus();
        }
        selectedAmount = 0;
      } else {
        if (customAmountInput) {
          customAmountInput.style.display = "none";
        }
        selectedAmount = parseInt(amount);
      }

      updateDonateButton();
    });
  });

  if (customAmountInput) {
    customAmountInput.addEventListener("input", () => {
      selectedAmount = parseInt(customAmountInput.value) || 0;
      updateDonateButton();
    });
  }

  function updateDonateButton() {
    if (selectedAmount > 0) {
      donateBtn.textContent = `Visit Link $${selectedAmount}`;
      donateBtn.style.opacity = "1";
      donateBtn.style.pointerEvents = "auto";
    } else {
      donateBtn.textContent = "Visit Link";
      donateBtn.style.opacity = "0.7";
      donateBtn.style.pointerEvents = "none";
    }
  }

  donateBtn.addEventListener("click", () => {
    if (selectedAmount > 0) {
      alert(`Redirecting to external resource for $${selectedAmount}`);
    }
  });
}

// Intersection Observer for Fade-in Animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Add fade-in class to elements and observe them
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(
    ".issue-card, .endorsement, .event-card, .about-content, .hero-stats"
  );

  elementsToAnimate.forEach((element) => {
    element.classList.add("fade-in");
    observer.observe(element);
  });
});

// Social Media Share Functionality (if social links exist)
const socialLinks = document.querySelectorAll(".social-link");
if (socialLinks.length > 0) {
  function shareOnSocialMedia(
    platform,
    url = window.location.href,
    text = "Support Darcy Ripplinger for City Council!"
  ) {
    const encodedUrl = encodeURIComponent(url);
    const encodedText = encodeURIComponent(text);

    let shareUrl;

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
  }

  socialLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const platform = link.querySelector("i").classList.contains("fa-facebook")
        ? "facebook"
        : link.querySelector("i").classList.contains("fa-twitter")
        ? "twitter"
        : link.querySelector("i").classList.contains("fa-linkedin")
        ? "linkedin"
        : null;

      if (platform) {
        shareOnSocialMedia(platform);
      }
    });
  });
}

// Keyboard Navigation Support
document.addEventListener("keydown", (e) => {
  // Close mobile menu with Escape key
  if (e.key === "Escape" && navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
  }
});

// Form Field Focus Enhancement (if forms exist)
const formFields = document.querySelectorAll("input, select, textarea");
if (formFields.length > 0) {
  formFields.forEach((field) => {
    field.addEventListener("focus", function () {
      this.parentElement.classList.add("focused");
    });

    field.addEventListener("blur", function () {
      this.parentElement.classList.remove("focused");
      if (this.value) {
        this.parentElement.classList.add("filled");
      } else {
        this.parentElement.classList.remove("filled");
      }
    });
  });
}

// Error Handling for Images
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", function () {
    // Replace with placeholder if image fails to load
    this.src =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBBdmFpbGFibGU8L3RleHQ+PC9zdmc+";
    this.alt = "Image not available";
  });
});

// Basic Analytics Event Tracking (console logging for development)
function trackEvent(action, category, label = "") {
  console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Track button interactions
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent.trim();
    trackEvent("click", "button", buttonText);
  });
});

// Track form submissions (if form exists)
if (contactForm) {
  contactForm.addEventListener("submit", () => {
    trackEvent("submit", "form", "contact-form");
  });
}

// Accessibility: Skip to main content
document.addEventListener("DOMContentLoaded", () => {
  // Add skip link for screen readers
  const skipLink = document.createElement("a");
  skipLink.href = "#home";
  skipLink.textContent = "Skip to main content";
  skipLink.className = "skip-link";
  skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 9999;
        transition: top 0.3s;
    `;

  skipLink.addEventListener("focus", () => {
    skipLink.style.top = "6px";
  });

  skipLink.addEventListener("blur", () => {
    skipLink.style.top = "-40px";
  });

  document.body.insertBefore(skipLink, document.body.firstChild);

  // Add main content ID to hero section while preserving the home ID
  const heroSection = document.getElementById("home");
  if (heroSection) {
    heroSection.setAttribute("id", "home"); // Keep the home ID
    heroSection.setAttribute("data-main-content", "true"); // Add data attribute for accessibility
  }
});

console.log(
  "Darcy Ripplinger Campaign Website - JavaScript Loaded Successfully"
);
