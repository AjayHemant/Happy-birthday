document.addEventListener("DOMContentLoaded", () => {
  // Initialize particles.js
  initParticles();

  // Setup birthday timer
  setupBirthdayTimer();

  // Create balloons
  createBalloons();

  // Create stars
  createStars();

  // Setup gallery navigation
  setupGallery();

  // Setup candle interaction
  setupCandles();

  // Setup music toggle
  setupMusic();

  // Setup greeting cards
  setupGreetingCards();

  // Setup floating hearts
  setupFloatingHearts();

  // Setup gift boxes
  setupGiftBoxes();

  // Setup cake rotation
  setupCakeRotation();

  // Add sparkles to wishes
  addSparkles();
});

// Initialize particles.js
function initParticles() {
  // Check if particlesJS is defined before using it
  if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ["#ff6b95", "#9c6bff", "#ffb347"]
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 250,
            size: 6,
            duration: 2,
            opacity: 0.8,
            speed: 3
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  } else {
    console.warn("particlesJS not loaded! Make sure the particles.js library is included in your HTML.");
  }
}

// Setup birthday timer
function setupBirthdayTimer() {
  const birthday = new Date("April 19, 2008");

  function updateTimer() {
    const now = new Date();
    const timeDiff = now - birthday;

    // Calculate years, months, days, hours, minutes, seconds
    let years = now.getFullYear() - birthday.getFullYear();
    let months = now.getMonth() - birthday.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    // Create a new date for calculating days
    const lastMonth = new Date(now);
    lastMonth.setDate(1);
    lastMonth.setMonth(lastMonth.getMonth() - 1);

    const daysInLastMonth = new Date(lastMonth.getFullYear(), lastMonth.getMonth() + 1, 0).getDate();
    let days = now.getDate() - birthday.getDate();

    if (days < 0) {
      months--;
      if (months < 0) {
        years--;
        months += 12;
      }
      days += daysInLastMonth;
    }

    // Calculate hours, minutes, seconds
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Update the DOM
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  // Update timer immediately and then every second
  updateTimer();
  setInterval(updateTimer, 1000);
}

// Create floating balloons
function createBalloons() {
  const colors = ["#ff6b95", "#9c6bff", "#ffb347", "#98d8c8", "#f67280"];
  const balloonContainer = document.getElementById("balloon-container");

  for (let i = 0; i < 15; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";

    // Random balloon properties
    const size = Math.random() * 30 + 30;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const delay = Math.random() * 5;
    const xSpeed = Math.random() * 2 - 1;

    balloon.style.width = `${size}px`;
    balloon.style.height = `${size * 1.5}px`;
    balloon.style.background = color;
    balloon.style.left = `${left}%`;
    balloon.style.animationDelay = `${delay}s`;
    balloon.style.setProperty("--x-speed", xSpeed);

    // Add string to balloon
    const string = document.createElement("div");
    string.style.position = "absolute";
    string.style.width = "1px";
    string.style.height = `${size}px`;
    string.style.background = "rgba(0,0,0,0.1)";
    string.style.bottom = "100%";
    string.style.left = "50%";

    balloon.appendChild(string);
    balloonContainer.appendChild(balloon);
  }
}

// Create falling confetti
function createConfetti() {
  const colors = ["#ff6b95", "#9c6bff", "#ffb347", "#98d8c8", "#f67280"];
  const confettiContainer = document.getElementById("confetti-container");

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    // Random confetti properties
    const size = Math.random() * 8 + 5;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 3 + 3;

    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.background = color;
    confetti.style.left = `${left}%`;
    confetti.style.animationDelay = `${delay}s`;
    confetti.style.animationDuration = `${duration}s`;

    // Random shapes
    if (Math.random() > 0.5) {
      confetti.style.borderRadius = "50%";
    } else {
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    }

    confettiContainer.appendChild(confetti);
  }
}

// Create twinkling stars
function createStars() {
  const starsContainer = document.getElementById("stars-container");

  for (let i = 0; i < 50; i++) {
    const star = document.createElement("div");
    star.className = "star";

    // Random star properties
    const size = Math.random() * 3 + 1;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 2;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${left}%`;
    star.style.top = `${top}%`;
    star.style.animationDelay = `${delay}s`;

    starsContainer.appendChild(star);
  }
}

// Setup gallery navigation
function setupGallery() {
  const gallery = document.querySelector(".gallery");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const items = document.querySelectorAll(".gallery-item");

  let currentIndex = 0;

  // Hide all items except the first one
  items.forEach((item, index) => {
    if (index !== 0) {
      item.style.display = "none";
    }
  });

  nextBtn.addEventListener("click", () => {
    items[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].style.display = "block";
    
    // Add fade-in animation
    items[currentIndex].style.animation = "fadeIn 0.5s ease-out";
  });

  prevBtn.addEventListener("click", () => {
    items[currentIndex].style.display = "none";
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    items[currentIndex].style.display = "block";
    
    // Add fade-in animation
    items[currentIndex].style.animation = "fadeIn 0.5s ease-out";
  });
}

// Setup candle interaction
function setupCandles() {
  const candles = document.querySelectorAll(".candle");
  let candlesBlown = 0;

  candles.forEach((candle) => {
    candle.addEventListener("click", function () {
      const flame = this.querySelector(".flame");
      
      // Add blow out animation
      flame.style.animation = "fadeOut 0.3s forwards";
      
      setTimeout(() => {
        flame.style.display = "none";
        candlesBlown++;

        if (candlesBlown === candles.length) {
          setTimeout(() => {
            // Show modal instead of alert
            showModal("Happy Birthday! Your wish has been made! 🎉");
            
            // Add extra confetti for celebration
            createExtraConfetti();
            
            // Create floating hearts
            for (let i = 0; i < 20; i++) {
              setTimeout(() => {
                createHeart();
              }, i * 100);
            }
          }, 500);
        }
      }, 300);
    });
  });
}

// Create extra confetti for celebration
function createExtraConfetti() {
  const colors = ["#ff6b95", "#9c6bff", "#ffb347", "#98d8c8", "#f67280", "#ffdf00"];
  const confettiContainer = document.getElementById("confetti-container");

  for (let i = 0; i < 150; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.className = "confetti";

      // Random confetti properties
      const size = Math.random() * 10 + 5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = Math.random() * 100;
      const delay = Math.random() * 2;
      const duration = Math.random() * 3 + 3;

      confetti.style.width = `${size}px`;
      confetti.style.height = `${size}px`;
      confetti.style.background = color;
      confetti.style.left = `${left}%`;
      confetti.style.animationDelay = `${delay}s`;
      confetti.style.animationDuration = `${duration}s`;

      // Random shapes
      if (Math.random() > 0.6) {
        confetti.style.borderRadius = "50%";
      } else if (Math.random() > 0.3) {
        confetti.style.borderRadius = "0";
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      } else {
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      }

      confettiContainer.appendChild(confetti);
      
      // Remove confetti after animation
      setTimeout(() => {
        confetti.remove();
      }, (delay + duration) * 1000);
    }, i * 20);
  }
}

// Setup music toggle
function setupMusic() {
  const musicToggle = document.getElementById("music-toggle");
  const music = document.getElementById("birthday-music");
  const musicText = document.querySelector(".music-text");

  musicToggle.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicText.textContent = "Pause Music";
      musicToggle.style.background = "#ff6b95";
      musicToggle.style.color = "white";
    } else {
      music.pause();
      musicText.textContent = "Play Music";
      musicToggle.style.background = "rgba(255, 255, 255, 0.9)";
      musicToggle.style.color = "#333";
    }
  });
}

// Setup greeting cards
function setupGreetingCards() {
  const cards = document.querySelectorAll(".greeting-card");

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      if (!e.target.classList.contains("response-btn")) {
        card.classList.toggle("flipped");
      }
    });
  });

  const acceptBtn = document.getElementById("accept-btn");
  const declineBtn = document.getElementById("decline-btn");

  if (acceptBtn && declineBtn) {
    acceptBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      sendResponse("Accepted");
      showModal("Yay! Looking forward to seeing you! 🎂");
      
      // Create celebration effects
      createExtraConfetti();
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          createHeart();
        }, i * 100);
      }
    });

    declineBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      sendResponse("Declined");
      showModal("Aww, maybe next time! 😊");
    });
  }
}

// Create a floating heart
function createHeart() {
  const heartsContainer = document.getElementById("hearts-container");
  const heart = document.createElement("div");
  heart.className = "heart";

  // Random heart properties
  const left = Math.random() * 100;
  const size = Math.random() * 20 + 20;
  const xSpeed = Math.random() * 2 - 1;

  heart.style.left = `${left}%`;
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  heart.style.setProperty("--x-speed", xSpeed);

  heartsContainer.appendChild(heart);

  // Remove heart after animation completes
  setTimeout(() => {
    heart.remove();
  }, 4000);
}

// Setup floating hearts button
function setupFloatingHearts() {
  const sendLoveBtn = document.getElementById("send-love-btn");
  
  sendLoveBtn.addEventListener("click", () => {
    // Create multiple hearts with staggered timing
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        createHeart();
      }, i * 100);
    }
    
    // Add button animation
    sendLoveBtn.classList.add("pulse");
    setTimeout(() => {
      sendLoveBtn.classList.remove("pulse");
    }, 1000);
  });
}

// Setup gift boxes
function setupGiftBoxes() {
  const giftBoxes = document.querySelectorAll(".gift-box");
  
  giftBoxes.forEach(box => {
    box.addEventListener("click", function() {
      // Open the gift box
      this.classList.add("open");
      
      // Get the message from data attribute
      const message = this.getAttribute("data-message");
      
      // Show message in modal
      setTimeout(() => {
        showModal(message);
        
        // Create celebration effects
        for (let i = 0; i < 10; i++) {
          setTimeout(() => {
            createHeart();
          }, i * 100);
        }
      }, 500);
    });
  });
}

// Setup cake rotation
function setupCakeRotation() {
  const rotateBtn = document.getElementById("rotate-cake");
  const cake = document.querySelector(".cake");
  
  rotateBtn.addEventListener("click", () => {
    cake.classList.toggle("rotating");
    
    if (cake.classList.contains("rotating")) {
      rotateBtn.textContent = "Stop Rotation";
    } else {
      rotateBtn.textContent = "Rotate Cake";
    }
  });
}

// Add sparkles to wishes
function addSparkles() {
  const wishSparkles = document.querySelectorAll(".wish-sparkles");
  
  wishSparkles.forEach(sparkleContainer => {
    for (let i = 0; i < 5; i++) {
      const sparkle = document.createElement("div");
      sparkle.style.position = "absolute";
      sparkle.style.width = "5px";
      sparkle.style.height = "5px";
      sparkle.style.background = "#ffdf00";
      sparkle.style.borderRadius = "50%";
      sparkle.style.top = `${Math.random() * 100}%`;
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.animation = `twinkle ${1 + Math.random()}s infinite alternate`;
      sparkle.style.animationDelay = `${Math.random() * 2}s`;
      
      sparkleContainer.appendChild(sparkle);
    }
  });
}

// Show modal with message
function showModal(message) {
  const modal = document.getElementById("message-modal");
  const modalMessage = document.getElementById("modal-message");
  const closeModal = document.querySelector(".close-modal");
  
  modalMessage.textContent = message;
  modal.style.display = "flex";
  
  // Close modal when clicking the X
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}

// Send response to Google Sheet
function sendResponse(responseText) {
  const GOOGLE_SHEET_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbyOm4o59Efzy5wHzY7-Yfo5JF1ruv3RcRQaXktgCObacl14Qw1m-_Eff699RKYT_QxLDw/exec";
  
  fetch(GOOGLE_SHEET_WEBHOOK_URL, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({ response: responseText }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log("Response sent");
    })
    .catch((err) => console.error("Error sending to sheet:", err));
}
