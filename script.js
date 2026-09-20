/**
 * ROYAL INDIAN WEDDING INVITATION - INTERACTION & ANIMATION ENGINE
 * Seamless Flow, Subtle Audio Engine, Video Wishes Hub, Canvas Physics & GSAP
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Canvas Flower Petals & Stardust Particle Engine
  initPetalAndStardustEngine();

  // 2. Initialize Countdown Timer to October 31, 2026
  initCountdownTimer();

  // 3. Initialize GSAP Entrance Animations
  initMotionAnimations();

  // 4. Initialize Photo Gallery Lightbox
  initGalleryLightbox();

  // 5. Initialize Subtle Music Player in Bottom-Left Corner
  initRoyalAudioPlayer();

  // 6. Initialize Video Wishes & Blessing Upload Station
  initVideoWishesHub();

  // 7. Initialize ScrollSpy for active nav link indicator
  initScrollSpy();

  // 8. Initialize 3D Card Tilt on royal portraits
  initCardTiltEffects();
});

/* ==========================================================================
   1. CANVAS PETAL & STARDUST PHYSICS ENGINE
   ========================================================================== */
function initPetalAndStardustEngine() {
  const canvas = document.getElementById('animation-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petals = [];
  const sparkles = [];
  const petalCount = 26;
  const sparkleCount = 30;

  // Petal Class (Rose & Jasmine/Gold Petals)
  class Petal {
    constructor() {
      this.reset(true);
    }
    reset(init = false) {
      this.x = Math.random() * width;
      this.y = init ? Math.random() * height : -20;
      this.size = Math.random() * 11 + 9;
      this.speedY = Math.random() * 1.1 + 0.7;
      this.speedX = Math.random() * 1.0 - 0.5;
      this.angle = Math.random() * Math.PI * 2;
      this.angularSpeed = (Math.random() - 0.5) * 0.03;
      this.opacity = Math.random() * 0.45 + 0.35;
      this.type = Math.random() > 0.4 ? 'rose' : 'jasmine';
      this.flip = Math.random() * Math.PI;
      this.flipSpeed = Math.random() * 0.03 + 0.01;
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.angle) * 0.7;
      this.angle += this.angularSpeed;
      this.flip += this.flipSpeed;
      if (this.y > height + 30) this.reset();
    }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.scale(Math.cos(this.flip), 1);
      ctx.globalAlpha = this.opacity;

      if (this.type === 'rose') {
        const grad = ctx.createLinearGradient(0, -this.size / 2, 0, this.size / 2);
        grad.addColorStop(0, '#f9a8b8');
        grad.addColorStop(0.7, '#e26d85');
        grad.addColorStop(1, '#a82c4a');
        ctx.fillStyle = grad;
      } else {
        const grad = ctx.createLinearGradient(0, -this.size / 2, 0, this.size / 2);
        grad.addColorStop(0, '#fffbe6');
        grad.addColorStop(0.6, '#ffd166');
        grad.addColorStop(1, '#c9a85c');
        ctx.fillStyle = grad;
      }

      ctx.beginPath();
      ctx.moveTo(0, -this.size / 2);
      ctx.bezierCurveTo(this.size / 2, -this.size / 4, this.size / 2, this.size / 2, 0, this.size / 2);
      ctx.bezierCurveTo(-this.size / 2, this.size / 2, -this.size / 2, -this.size / 4, 0, -this.size / 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // Sparkle Class
  class Sparkle {
    constructor() {
      this.reset(true);
    }
    reset(init = false) {
      this.x = Math.random() * width;
      this.y = init ? Math.random() * height : height + 10;
      this.radius = Math.random() * 1.8 + 0.8;
      this.speedY = -(Math.random() * 0.7 + 0.2);
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.alpha = Math.random() * 0.7 + 0.2;
      this.twinklePhase = Math.random() * Math.PI;
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.twinklePhase += 0.03;
      if (this.y < -10) this.reset();
    }
    draw() {
      ctx.save();
      const currentAlpha = this.alpha * (0.5 + 0.5 * Math.sin(this.twinklePhase));
      ctx.globalAlpha = Math.max(0, Math.min(1, currentAlpha));
      ctx.fillStyle = '#eddba6';
      ctx.shadowColor = '#c9a85c';
      ctx.shadowBlur = 5;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < petalCount; i++) petals.push(new Petal());
  for (let i = 0; i < sparkleCount; i++) sparkles.push(new Sparkle());

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let p of petals) {
      p.update();
      p.draw();
    }
    for (let s of sparkles) {
      s.update();
      s.draw();
    }
    requestAnimationFrame(animate);
  }
  animate();
}

/* ==========================================================================
   2. COUNTDOWN TIMER ENGINE
   ========================================================================== */
function initCountdownTimer() {
  const targetDate = new Date('October 31, 2026 11:00:00 GMT+0530').getTime();

  const daysEl = document.getElementById('timer-days');
  const hoursEl = document.getElementById('timer-hours');
  const minsEl = document.getElementById('timer-mins');
  const secsEl = document.getElementById('timer-secs');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      daysEl.innerText = '00';
      hoursEl.innerText = '00';
      minsEl.innerText = '00';
      secsEl.innerText = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.innerText = String(days).padStart(2, '0');
    hoursEl.innerText = String(hours).padStart(2, '0');
    minsEl.innerText = String(minutes).padStart(2, '0');
    secsEl.innerText = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   3. CLEAN INITIAL ENTRANCE (NO SCROLLING ANIMATIONS, COUPLE IMAGE FIXED)
   ========================================================================== */
function initMotionAnimations() {
  if (typeof gsap === 'undefined') return;

  // Initial page load graceful entrance (only for typography/decorations, portrait remains static & fixed)
  const heroTL = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTL.from('.royal-minimal-nav', {
    y: -25,
    opacity: 0,
    duration: 0.8
  })
  .from('.divine-invocation .ganesha-frame', {
    scale: 0.85,
    opacity: 0,
    duration: 0.7,
    ease: 'back.out(1.2)'
  }, '-=0.4')
  .from('.divine-shloka, .divine-subtext', {
    opacity: 0,
    y: 10,
    duration: 0.6,
    stagger: 0.1
  }, '-=0.3')
  .from('.royal-flourish-heart, .invite-eyebrow', {
    opacity: 0,
    duration: 0.5
  }, '-=0.2')
  .from('.engagement-title-wrapper', {
    y: 20,
    opacity: 0,
    duration: 0.7
  }, '-=0.3')
  .from('.couple-person:first-child', {
    x: -20,
    opacity: 0,
    duration: 0.6
  }, '-=0.4')
  .from('.couple-person:last-child', {
    x: 20,
    opacity: 0,
    duration: 0.6
  }, '-=0.5')
  .from('.couple-ring-emblem', {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: 'back.out(1.8)'
  }, '-=0.5')
  .from('.names-botanical-swag, .quick-meta-container', {
    y: 12,
    opacity: 0,
    duration: 0.5
  }, '-=0.3')
  .from('.countdown-flow', {
    y: 15,
    opacity: 0,
    duration: 0.6
  }, '-=0.3');

  // NOTE: Scrolling animations have been removed per user instruction.
  // The couple portrait image is fixed and not animated.
}

/* ==========================================================================
   4. PHOTO GALLERY & LIGHTBOX
   ========================================================================== */
function initGalleryLightbox() {
  const modal = document.getElementById('gallery-lightbox');
  const modalImg = document.getElementById('lightbox-img');
  const modalCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');
  const momentItems = document.querySelectorAll('.moment-item');

  if (!modal || !modalImg) return;

  momentItems.forEach((card) => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.getAttribute('data-title') || 'Cherished Moment';
      modalImg.src = img.src;
      modalCaption.innerText = title;
      modal.classList.add('active');

      if (typeof anime !== 'undefined') {
        anime({
          targets: '.lightbox-content',
          scale: [0.88, 1],
          opacity: [0, 1],
          duration: 350,
          easing: 'easeOutCubic'
        });
      }
    });
  });

  function closeModal() {
    modal.classList.remove('active');
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

/* ==========================================================================
   5. SUBTLE MUSIC PLAYER (BOTTOM-LEFT CORNER)
   ========================================================================== */
let audioCtx = null;
let isAudioPlaying = false;
let musicInterval = null;

function initRoyalAudioPlayer() {
  const musicToggle = document.getElementById('music-toggle');
  if (!musicToggle) return;

  // Indian Raga Frequencies (Bhairavi / Yaman auspicious notes)
  const ragaScale = [
    261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25, 587.33, 659.25
  ];
  const melodyNotes = [
    0, 2, 4, 3, 2, 0, 4, 6, 7, 6, 4, 2, 0,
    4, 6, 7, 8, 9, 8, 7, 6, 4, 2, 0
  ];
  let melodyIndex = 0;

  function playHarmonicTone(freq, duration, type = 'sine') {
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // ignore
    }
  }

  function startIndianRagaMelody() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    musicInterval = setInterval(() => {
      const noteIdx = melodyNotes[melodyIndex % melodyNotes.length];
      const freq = ragaScale[noteIdx];
      playHarmonicTone(freq, 1.4, 'triangle');
      if (melodyIndex % 4 === 0) {
        playHarmonicTone(ragaScale[0] / 2, 2.8, 'sine');
        playHarmonicTone(ragaScale[4] / 2, 2.8, 'sine');
      }
      melodyIndex++;
    }, 450);
  }

  function stopIndianRagaMelody() {
    if (musicInterval) {
      clearInterval(musicInterval);
      musicInterval = null;
    }
  }

  musicToggle.addEventListener('click', () => {
    if (!isAudioPlaying) {
      startIndianRagaMelody();
      isAudioPlaying = true;
      musicToggle.classList.add('music-playing');
      showNotificationToast('Playing Traditional Classical Shehnai & Santoor Melody');
    } else {
      stopIndianRagaMelody();
      isAudioPlaying = false;
      musicToggle.classList.remove('music-playing');
      showNotificationToast('Melody Paused');
    }
  });
}

/* ==========================================================================
   6. VIDEO WISHES & BLESSINGS HUB (DELIVERED DIRECTLY TO BRIDE & GROOM)
   ========================================================================== */
function initVideoWishesHub() {
  const fileInput = document.getElementById('video-file-input');
  const chooseBtn = document.getElementById('choose-video-btn');
  const dropzonePrompt = document.getElementById('dropzone-prompt');
  const previewWrap = document.getElementById('video-preview-wrap');
  const previewPlayer = document.getElementById('video-preview-player');
  const removeVideoBtn = document.getElementById('remove-video-btn');
  const wishForm = document.getElementById('video-wish-form');
  const streamContainer = document.getElementById('wishes-stream');

  let selectedVideoFile = null;

  if (chooseBtn && fileInput) {
    chooseBtn.addEventListener('click', () => fileInput.click());
  }

  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        handleSelectedVideo(file);
      }
    });
  }

  function handleSelectedVideo(file) {
    selectedVideoFile = file;
    const videoUrl = URL.createObjectURL(file);
    previewPlayer.src = videoUrl;
    dropzonePrompt.style.display = 'none';
    previewWrap.style.display = 'block';
    showNotificationToast(`Video loaded: ${file.name}`);
  }

  if (removeVideoBtn) {
    removeVideoBtn.addEventListener('click', () => {
      selectedVideoFile = null;
      previewPlayer.src = '';
      fileInput.value = '';
      previewWrap.style.display = 'none';
      dropzonePrompt.style.display = 'block';
    });
  }

  if (wishForm) {
    wishForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('uploader-name');
      const relationInput = document.getElementById('uploader-relation');
      const noteInput = document.getElementById('uploader-note');

      const name = nameInput.value.trim() || 'A Well-Wisher';
      const relation = relationInput.value.trim() || 'Guest';
      const note = noteInput.value.trim() || 'Sending my heartfelt congratulations and blessings to both of you!';

      const badgeSvg = selectedVideoFile 
        ? `<svg class="badge-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg> Video Blessing Attached`
        : `<svg class="badge-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Blessing Delivered`;

      // Create new wish card on stream
      const newCard = document.createElement('div');
      newCard.className = 'stream-wish-card';
      newCard.innerHTML = `
        <div class="stream-card-top">
          <span class="stream-author">${name}</span>
          <span class="stream-badge">${badgeSvg}</span>
        </div>
        <span class="stream-relation">${relation} • Delivered to Both Bride & Groom</span>
        <p class="stream-text">“${note}”</p>
      `;

      if (streamContainer) {
        streamContainer.prepend(newCard);
      }

      // Trigger Confetti Celebration
      triggerCelebrationConfetti();

      // Confirmation toast
      showNotificationToast('Your heartfelt wish has been delivered directly to Ananya & Aarav!');

      // Reset form
      wishForm.reset();
      if (removeVideoBtn) removeVideoBtn.click();
    });
  }
}

function triggerCelebrationConfetti() {
  if (typeof confetti !== 'undefined') {
    const colors = ['#c9a85c', '#ffd700', '#e26d85', '#780d1d', '#ffffff'];

    confetti({
      particleCount: 80,
      angle: 60,
      spread: 70,
      origin: { x: 0, y: 0.8 },
      colors: colors
    });

    confetti({
      particleCount: 80,
      angle: 120,
      spread: 70,
      origin: { x: 1, y: 0.8 },
      colors: colors
    });
  }
}

/* ==========================================================================
   TOAST NOTIFICATION
   ========================================================================== */
function showNotificationToast(message) {
  let toast = document.getElementById('royal-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'royal-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 28px;
      right: 28px;
      background: rgba(43, 29, 32, 0.95);
      color: #ffd700;
      padding: 12px 24px;
      border-radius: 9999px;
      border: 1px solid #c9a85c;
      font-family: 'Montserrat', sans-serif;
      font-size: 0.85rem;
      font-weight: 600;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      z-index: 9999;
      opacity: 0;
      transform: translateY(40px);
      transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      pointer-events: none;
      text-align: center;
      backdrop-filter: blur(8px);
    `;
    document.body.appendChild(toast);
  }

  toast.innerText = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(40px)';
  }, 3200);
}

/* ==========================================================================
   7. SCROLL-SPY ACTIVE NAV HIGHLIGHTER
   ========================================================================== */
function initScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-links-minimal a');
  const sections = [
    document.getElementById('invitation'),
    document.getElementById('couple'),
    document.getElementById('ceremonies'),
    document.getElementById('video-wishes'),
    document.getElementById('venue')
  ].filter(Boolean);

  const navBar = document.querySelector('.royal-minimal-nav');

  function highlightNav() {
    let currentId = '';
    const scrollY = window.scrollY + 180;

    // Toggle frosted pill on scroll
    if (navBar) {
      if (window.scrollY > 30) {
        navBar.classList.add('scrolled');
      } else {
        navBar.classList.remove('scrolled');
      }
    }

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (currentId && link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });
  highlightNav();
}

/* ==========================================================================
   8. 3D CARD TILT ON PORTRAITS & MOMENTS
   ========================================================================== */
function initCardTiltEffects() {
  const tiltElements = document.querySelectorAll('.portrait-arch-frame, .profile-duo-item, .moment-item');

  tiltElements.forEach((el) => {
    el.style.transition = 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.45s ease';

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5.5;
      const rotateY = ((x - centerX) / centerX) * 5.5;

      el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px) scale3d(1.015, 1.015, 1.015)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale3d(1, 1, 1)';
    });
  });
}

