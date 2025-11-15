import { useMemo } from "react";

export default function BackgroundAnimation() {
  const leaves = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 7,
        size: 8 + Math.random() * 8,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="pixel-tree" />
      
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="falling-leaf-container"
          style={{
            left: `${leaf.left}%`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
          }}
        >
          <div
            className="falling-leaf"
            style={{
              width: `${leaf.size}px`,
              height: `${leaf.size}px`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
