import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const numberOfStars = isMobile ? 40 : 120;

    const newStars = Array.from({ length: numberOfStars }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.4 + 0.3,
    }));

    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            position: "absolute",
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
      ))}
    </div>
  );
};