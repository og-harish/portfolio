import React, { useState, useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "motion/react";

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number; // Maximum rotation in degrees
  scale?: number; // Scale on hover
  id?: string;
}

export default function ThreeDCard({
  children,
  className = "",
  maxRotation = 12,
  scale = 1.03,
  id
}: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for smooth fluid animations
  const rotateX = useSpring(useMotionValue(0), { damping: 25, stiffness: 150 });
  const rotateY = useSpring(useMotionValue(0), { damping: 25, stiffness: 150 });
  const scaleValue = useSpring(useMotionValue(1), { damping: 25, stiffness: 200 });
  
  // Keep track of cursor coordinates for the 3D glare effect
  const [glarePos, setGlarePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates (-0.5 to 0.5)
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;
    
    // Calculate 3D rotations (inverting X for natural tilt)
    rotateX.set(-normalizedY * maxRotation);
    rotateY.set(normalizedX * maxRotation);
    
    // Update glare position
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    scaleValue.set(scale);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    scaleValue.set(1);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      style={{ perspective: "1000px" }}
      className="w-full h-full"
    >
      <motion.div
        ref={cardRef}
        id={id}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale: scaleValue,
          transformStyle: "preserve-3d"
        }}
        className={`relative w-full h-full transition-shadow duration-300 ${
          isHovered ? "shadow-[0_20px_50px_rgba(0,0,0,0.3)]" : "shadow-md"
        } ${className}`}
      >
        {/* Dynamic 3D Glare Element */}
        <div
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-30 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.45 : 0,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)`,
          }}
        />
        
        {/* Border Glow for immersive tech style */}
        <div 
          className="absolute inset-0 rounded-[inherit] pointer-events-none z-20 border border-white/5 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0.4,
            borderColor: isHovered ? "var(--color-brand-blue)" : "var(--color-card-border)"
          }}
        />

        {/* Inner Content preserving 3D space */}
        <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }} className="w-full h-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
