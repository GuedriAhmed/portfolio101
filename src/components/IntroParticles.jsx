import React, { useEffect, useRef } from "react";

export default function IntroParticles({
  particleCount = 60,
  linkDistance = 80,
  mouseRadius = 150,
  className = "",
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    const mouse = { x: -9999, y: -9999, active: false };
    let burst = null;

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0007,
      vy: (Math.random() - 0.5) * 0.0007,
      radius: 1 + Math.random() * 1.8,
    }));

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (mouse.active) {
          const px = particle.x * width;
          const py = particle.y * height;
          const dx = px - mouse.x;
          const dy = py - mouse.y;
          const distance = Math.hypot(dx, dy);

          if (distance < mouseRadius && distance > 0) {
            const force = (mouseRadius - distance) / mouseRadius;
            particle.vx += (dx / width) * force * 0.00006;
            particle.vy += (dy / height) * force * 0.00006;
          }
        }

        if (particle.x <= 0 || particle.x >= 1) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= 1) particle.vy *= -1;

        particle.vx *= 0.995;
        particle.vy *= 0.995;
      });

      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i];
        const ax = a.x * width;
        const ay = a.y * height;

        context.beginPath();
        context.fillStyle = "rgba(103, 232, 249, 0.85)";
        context.arc(ax, ay, a.radius, 0, Math.PI * 2);
        context.fill();

        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j];
          const bx = b.x * width;
          const by = b.y * height;
          const dx = ax - bx;
          const dy = ay - by;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < linkDistance) {
            context.beginPath();
            context.strokeStyle = `rgba(34, 211, 238, ${0.18 - distance / (linkDistance * 7.5)})`;
            context.lineWidth = 1;
            context.moveTo(ax, ay);
            context.lineTo(bx, by);
            context.stroke();
          }
        }

        const mouseDistance = Math.hypot(mouse.x - ax, mouse.y - ay);
        if (mouse.active && mouseDistance < mouseRadius) {
          context.beginPath();
          context.strokeStyle = `rgba(34, 211, 238, ${0.2 - mouseDistance / (mouseRadius * 4.7)})`;
          context.moveTo(ax, ay);
          context.lineTo(mouse.x, mouse.y);
          context.stroke();
        }
      }

      if (burst) {
        burst.radius += 2.6;
        burst.opacity *= 0.94;
        context.beginPath();
        context.strokeStyle = `rgba(34, 211, 238, ${burst.opacity})`;
        context.lineWidth = 1.25;
        context.arc(burst.x, burst.y, burst.radius, 0, Math.PI * 2);
        context.stroke();

        if (burst.opacity < 0.03) burst = null;
      }

      animationFrame = requestAnimationFrame(draw);
    };

    const handleMouseMove = (event) => {
      const bounds = canvas.getBoundingClientRect();
      mouse.x = event.clientX - bounds.left;
      mouse.y = event.clientY - bounds.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
      mouse.active = false;
    };

    const handleClick = (event) => {
      const bounds = canvas.getBoundingClientRect();
      burst = {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
        radius: 6,
        opacity: 0.45,
      };
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("click", handleClick);
    };
  }, [linkDistance, mouseRadius, particleCount]);

  return <canvas ref={canvasRef} className={`absolute inset-0 h-full w-full ${className}`} />;
}
