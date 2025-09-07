import { useEffect, useRef } from 'react';

export default function Background({ theme = 'dark' }) {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true });
    let frame;
    const DPR = window.devicePixelRatio || 1;

    function resize() {
      canvas.width = window.innerWidth * DPR;
      canvas.height = window.innerHeight * DPR;
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      ctx.scale(DPR, DPR);
    }
    
    resize();
    window.addEventListener('resize', resize);

    const count = Math.min(140, Math.floor(window.innerWidth / 14));
    const isDark = theme === 'dark';

    // Initialize particles
    particles.current = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 2.2 + 0.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      // Adjust hue based on theme
      hue: isDark ? 165 + Math.random() * 30 : 200 + Math.random() * 20
    }));

    function step() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      // Draw gradient background based on theme
      const gradient = ctx.createRadialGradient(
        window.innerWidth / 2, window.innerHeight / 2, 0,
        window.innerWidth / 2, window.innerHeight / 2, Math.max(window.innerWidth, window.innerHeight) / 1.5
      );
      
      if (isDark) {
        gradient.addColorStop(0, '#041014');
        gradient.addColorStop(1, '#020608');
      } else {
        gradient.addColorStop(0, '#f8fafc');
        gradient.addColorStop(1, '#f1f5f9');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      
      ctx.save();
      
      // Set blending mode
      ctx.globalCompositeOperation = isDark ? 'lighter' : 'multiply';
      
      // Update and draw particles
      particles.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = window.innerWidth;
        if (p.x > window.innerWidth) p.x = 0;
        if (p.y < 0) p.y = window.innerHeight;
        if (p.y > window.innerHeight) p.y = 0;

        // Mouse repulsion
        if (mouse.current.active) {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist = Math.hypot(dx, dy);
          const influence = 140;
          
          if (dist < influence) {
            const force = (influence - dist) / influence;
            p.vx += (dx / dist) * force * 0.06;
            p.vy += (dy / dist) * force * 0.06;
          }
        }

        // Apply friction
        p.vx *= 0.995;
        p.vy *= 0.995;

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
        
        if (isDark) {
          // Bright teal/cyan particles for dark theme
          g.addColorStop(0, `hsla(${p.hue},100%,70%,0.95)`);
          g.addColorStop(1, `hsla(${p.hue},100%,55%,0)`);
        } else {
          // Dark blue particles for light theme
          g.addColorStop(0, `hsla(${p.hue},90%,25%,0.8)`);
          g.addColorStop(1, `hsla(${p.hue},90%,15%,0)`);
        }
        
        ctx.fillStyle = g;
        ctx.fill();
      });

      // Connect nearby particles with lines
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const a = particles.current[i];
          const b = particles.current[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = dx * dx + dy * dy;
          
          if (dist < 110 * 110) {
            const alpha = 1 - dist / (110 * 110);
            // Line color based on theme
            const lineColor = isDark 
              ? `rgba(0,200,216,${alpha * 0.35})` 
              : `rgba(0,40,80,${alpha * 0.2})`;
              
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = isDark ? 1.2 : 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      ctx.restore();
      frame = requestAnimationFrame(step);
    }
    
    step();

    // Handle mouse/touch interactions
    function onMove(e) {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.active = true;
    }
    
    function onLeave() {
      mouse.current.active = false;
    }
    
    // Add touch support for mobile
    function onTouch(e) {
      if (e.touches.length > 0) {
        mouse.current.x = e.touches[0].clientX;
        mouse.current.y = e.touches[0].clientY;
        mouse.current.active = true;
      }
    }
    
    // Add event listeners
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    window.addEventListener('touchstart', onTouch);
    window.addEventListener('touchmove', onTouch);
    window.addEventListener('touchend', onLeave);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('touchstart', onTouch);
      window.removeEventListener('touchmove', onTouch);
      window.removeEventListener('touchend', onLeave);
    };
  }, [theme]); // Re-run effect when theme changes

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden z-0">
      {/* Dynamic canvas background */}
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-screen h-screen"
        aria-hidden="true"
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
      />
      
      {/* Subtle noise overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-15 mix-blend-soft-light pointer-events-none"></div>
    </div>
  );
}