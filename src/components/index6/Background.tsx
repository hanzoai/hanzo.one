import { Box, MotionBox } from '@/gui'

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 50;
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        
        // Random purple/indigo hue
        const hue = Math.random() * 60 + 240; // 240-300 is purple/indigo range
        const saturation = Math.random() * 30 + 70; // 70-100%
        const lightness = Math.random() * 20 + 40; // 40-60%
        this.color = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.3)`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const createParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    
    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      ctx.strokeStyle = 'rgba(148, 93, 245, 0.05)';
      ctx.lineWidth = 0.3;
      
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
      
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      
      requestAnimationFrame(animateParticles);
    };
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    createParticles();
    animateParticles();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box position="fixed" top={0} right={0} bottom={0} left={0} zIndex={-10}>
      <Box display="inline-block" 
        ref={canvasRef} 
        render="canvas" position="absolute" top={0} right={0} bottom={0} left={0} width="100%" height="100%"
      />
      
      <Box position="absolute" top={0} right={0} bottom={0} left={0} backgroundImage="linear-gradient(to bottom, rgb(255 255 255 / 0.08), var(--pure-black))"></Box>
      
      {/* Animated grid overlay */}
      <MotionBox 
        position="absolute" top={0} right={0} bottom={0} left={0} 
        initial={{ opacity: 0.05 }}
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        style={{ 
          backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}
      />
      
      {/* Animated glow spots */}
      <MotionBox
        position="absolute" top="25%" left="25%" width={384} height={384} borderRadius="var(--radius-full)" filter="blur(100px)" backgroundColor="rgb(255 255 255 / 0.1)"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <MotionBox
        position="absolute" bottom="33.333333%" right="33.333333%" width={256} height={256} borderRadius="var(--radius-full)" filter="blur(100px)" backgroundColor="rgb(255 255 255 / 0.1)"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", delay: 2 }}
      />
    </Box>
  );
};

export default Background;
