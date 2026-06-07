import { useEffect, useRef } from "react";

export const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // 1. HARD GUARD: If it's a mobile viewport, skip canvas entirely to save processing power
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Fit canvas exactly to window sizing
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // 2. Generate star configurations in memory (No DOM elements created!)
    const numberOfStars = 120;
    const stars = Array.from({ length: numberOfStars }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.4 + 0.3,
    }));

    // 3. Clean GPU Paint Pass
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((star) => {
      ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.random() * 2 * Math.PI);
      ctx.fill();
    });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile gets a totally blank wrapper; desktop gets the hardware-accelerated canvas
  if (window.innerWidth < 768) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-transparent"
    />
  );
};