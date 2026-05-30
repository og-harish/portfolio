import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeContext";

interface Particle {
  x: number;
  y: number;
  z: number;
  size: number;
  speedY: number;
  speedX: number;
  alpha: number;
  color: string;
  angle: number;
}

interface Nebula {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  radius: number;
  color: string;
  speedX: number;
  speedY: number;
  angle: number;
}

export default function ThreeDCanvasBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Dynamic scale adjustments based on viewport
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Retrieve peaceful colors matching the active theme
    const getThemeConfig = () => {
      switch (theme) {
        case "carex":
          return {
            auroraColors: ["rgba(2, 132, 199, 0.03)", "rgba(30, 58, 138, 0.02)", "rgba(13, 148, 136, 0.02)"],
            starColors: ["#0284c7", "#1e3a8a", "#0d9488"],
            waveColor: "rgba(2, 132, 199, 0.06)",
            waveColorAccent: "rgba(30, 58, 138, 0.04)",
            particleCount: 25,
            waveFrequency: 0.0006,
            ambientLight: "#f8fafc",
          };
        case "green":
          return {
            auroraColors: ["rgba(34, 197, 94, 0.05)", "rgba(16, 185, 129, 0.04)", "rgba(132, 204, 22, 0.03)"],
            starColors: ["#22c55e", "#10b981", "#84cc16"],
            waveColor: "rgba(34, 197, 94, 0.12)",
            waveColorAccent: "rgba(16, 185, 129, 0.08)",
            particleCount: 65,
            waveFrequency: 0.0015,
            ambientLight: "#050505",
          };
        case "violet":
        default: // Default Space/Clean Theme
          return {
            auroraColors: ["rgba(99, 102, 241, 0.06)", "rgba(168, 85, 247, 0.06)", "rgba(6, 182, 212, 0.04)"],
            starColors: ["#6366f1", "#a855f7", "#06b6d4"],
            waveColor: "rgba(168, 85, 247, 0.1)",
            waveColorAccent: "rgba(99, 102, 241, 0.06)",
            particleCount: 60,
            waveFrequency: 0.001,
            ambientLight: "#0a041a",
          };
      }
    };

    let config = getThemeConfig();

    // Generate peaceful floating stardust / Zen particles
    const particles: Particle[] = [];
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < config.particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 200, // 3D depth layer
          size: Math.random() * 1.8 + 0.5,
          speedY: -(Math.random() * 0.12 + 0.03), // very slow drift up
          speedX: (Math.random() - 0.5) * 0.08,  // gentle side sway
          alpha: Math.random() * 0.6 + 0.1,
          color: config.starColors[Math.floor(Math.random() * config.starColors.length)],
          angle: Math.random() * Math.PI * 2,
        });
      }
    };
    initParticles();

    // Generate floating nebulae (abstract color wash orbs)
    const nebulae: Nebula[] = [];
    const initNebulae = () => {
      nebulae.length = 0;
      const count = 3;
      for (let i = 0; i < count; i++) {
        nebulae.push({
          x: Math.random() * width,
          y: Math.random() * height,
          targetX: Math.random() * width,
          targetY: Math.random() * height,
          radius: Math.min(width, height) * (0.35 + Math.random() * 0.25),
          color: config.auroraColors[i % config.auroraColors.length],
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          angle: Math.random() * Math.PI * 2,
        });
      }
    };
    initNebulae();

    // Mouse tracking for localized fluid response
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Wave motion variables
    let waveOffsetGlobal = 0;

    // Render loop
    const render = () => {
      // Clear with very slight fade for smooth trailing if desired, but clean clear works best for native canvas performance
      ctx.clearRect(0, 0, width, height);

      // Damp mouse tracking
      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      // Ensure config aligns with any mid-session theme swaps
      config = getThemeConfig();

      // PART 1: Draw Cosmic Aurora Nebulae (ambient glowing lights)
      nebulae.forEach((neb, index) => {
        // Slow float
        neb.x += neb.speedX;
        neb.y += neb.speedY;
        neb.angle += 0.0002;

        // Subtle swelling
        const scaleMod = 1 + Math.sin(neb.angle) * 0.05;
        const currentRadius = neb.radius * scaleMod;

        // Push slightly away from mouse for a reactive, peaceful flow
        const dx = mouseX - neb.x;
        const dy = mouseY - neb.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 400) {
          const force = (400 - dist) * 0.015;
          neb.x -= (dx / dist) * force;
          neb.y -= (dy / dist) * force;
        }

        // Boundary safety
        if (neb.x < -currentRadius) neb.x = width + currentRadius;
        if (neb.x > width + currentRadius) neb.x = -currentRadius;
        if (neb.y < -currentRadius) neb.y = height + currentRadius;
        if (neb.y > height + currentRadius) neb.y = -currentRadius;

        // Render nebulous gradient
        const gradient = ctx.createRadialGradient(
          neb.x, neb.y, 0,
          neb.x, neb.y, currentRadius
        );
        gradient.addColorStop(0, neb.color);
        gradient.addColorStop(0.5, neb.color.replace(/[\d.]+\)$/, "0.03)"));
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(neb.x, neb.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // PART 2: Draw Flowing Silk Ribbon Waves (Peaceful undulating lines)
      // Draw 3 layers of smooth overlapping sine ribbons
      const drawRibbon = (offsetY: number, amplitude: number, speedMultiplier: number, strokeColor: string) => {
        ctx.beginPath();
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = theme === "carex" ? 1.0 : 1.5;

        for (let x = 0; x <= width; x += 15) {
          // Calculate three-dimensional waving motion
          const cycle1 = Math.sin(x * 0.002 + waveOffsetGlobal * speedMultiplier);
          const cycle2 = Math.cos(x * 0.004 - waveOffsetGlobal * speedMultiplier * 0.7);
          
          // Hover distortion near the horizontal coordinate
          const mDist = Math.abs(x - mouseX);
          let hoverAmplify = 0;
          if (mDist < 300) {
            hoverAmplify = (1 - mDist / 300) * 20 * Math.sin(waveOffsetGlobal * 0.002);
          }

          const y = offsetY + (cycle1 * amplitude * 0.6) + (cycle2 * amplitude * 0.4) + hoverAmplify;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      };

      // Draw bottom flowing ribbons
      const baseLineY = height * 0.85;
      drawRibbon(baseLineY, 50, 1.2, config.waveColor);
      drawRibbon(baseLineY + 25, 35, 0.8, config.waveColorAccent);
      drawRibbon(baseLineY - 15, 20, 1.5, config.waveColor.replace(/[\d.]+\)$/, "0.05)"));

      // Draw top subtle decorative ribbon for serene framing
      drawRibbon(height * 0.15, 15, 0.5, config.waveColor.replace(/[\d.]+\)$/, "0.03)"));

      // PART 3: Ambient 3D Depth Particles (Stardust)
      particles.forEach((p) => {
        // Particle update
        p.y += p.speedY;
        p.x += p.speedX;
        p.angle += 0.004;

        // Oscillate brightness gently so they twinkle peacefully
        const slowTwinkle = p.alpha * (0.6 + 0.4 * Math.sin(p.angle));

        // Reactive drift based on mouse proximity
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          const force = (180 - dist) * 0.0003;
          p.x += dx * force;
          p.y += dy * force;
        }

        // Depth perspective calculation (particles further in 3D are smaller and dimmer)
        const depthScale = (200 - p.z) / 200; // 0 to 1
        const renderedSize = Math.max(0.4, p.size * depthScale);

        // Render particle
        ctx.fillStyle = p.color;
        ctx.globalAlpha = slowTwinkle * depthScale;
        ctx.beginPath();
        ctx.arc(p.x, p.y, renderedSize, 0, Math.PI * 2);
        ctx.fill();

        // Subtle particle glow
        if (theme !== "carex" && renderedSize > 1.2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, renderedSize * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = slowTwinkle * depthScale * 0.15;
          ctx.fill();
        }

        // Out of bounds reset
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
          p.z = Math.random() * 200;
        }
        if (p.x < -10 || p.x > width + 10) {
          p.x = Math.random() * width;
        }
      });

      ctx.globalAlpha = 1.0;

      // Advance global timelines
      waveOffsetGlobal += 0.015;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-90 transition-all duration-1000"
    />
  );
}
