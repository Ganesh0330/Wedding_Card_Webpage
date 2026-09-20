import React, { useEffect, useRef } from 'react';

export default function PetalCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const petals = [];
    const sparkles = [];
    const petalCount = 26;
    const sparkleCount = 30;

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

    let animationId;
    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (const p of petals) {
        p.update();
        p.draw();
      }
      for (const s of sparkles) {
        s.update();
        s.draw();
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} id="animation-canvas" aria-hidden="true" />;
}
