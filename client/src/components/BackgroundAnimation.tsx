import { useMemo } from "react";

export default function BackgroundAnimation() {
  const leaves = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 25,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 7,
        size: 8 + Math.random() * 8,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="sketch-tree"
        viewBox="0 0 300 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round">
          <path d="M 150 550 Q 150 500, 150 450" />
          <path d="M 150 450 Q 148 400, 145 350" />
          <path d="M 145 350 Q 143 300, 140 250" />
          <path d="M 140 250 Q 138 200, 135 150" />
          <path d="M 135 150 Q 133 100, 130 50" />
          
          <path d="M 150 500 Q 180 480, 210 460" />
          <path d="M 210 460 Q 230 445, 250 430" />
          <path d="M 210 460 Q 215 435, 220 410" />
          
          <path d="M 148 450 Q 120 430, 90 410" />
          <path d="M 90 410 Q 70 395, 50 380" />
          <path d="M 90 410 Q 85 385, 80 360" />
          
          <path d="M 145 400 Q 170 370, 195 340" />
          <path d="M 195 340 Q 210 320, 225 300" />
          <path d="M 195 340 Q 200 315, 205 290" />
          <path d="M 225 300 Q 235 285, 245 270" />
          
          <path d="M 143 380 Q 115 360, 85 340" />
          <path d="M 85 340 Q 65 325, 45 310" />
          <path d="M 85 340 Q 80 315, 75 290" />
          
          <path d="M 140 300 Q 165 270, 190 240" />
          <path d="M 190 240 Q 205 220, 220 200" />
          <path d="M 190 240 Q 195 215, 200 190" />
          <path d="M 220 200 Q 230 180, 240 160" />
          <path d="M 200 190 Q 210 170, 220 150" />
          
          <path d="M 138 280 Q 110 260, 80 240" />
          <path d="M 80 240 Q 60 225, 40 210" />
          <path d="M 80 240 Q 75 215, 70 190" />
          <path d="M 70 190 Q 60 170, 50 150" />
          
          <path d="M 135 200 Q 160 170, 185 140" />
          <path d="M 185 140 Q 200 120, 215 100" />
          <path d="M 185 140 Q 190 115, 195 90" />
          <path d="M 215 100 Q 225 80, 235 60" />
          
          <path d="M 133 180 Q 105 160, 75 140" />
          <path d="M 75 140 Q 55 125, 35 110" />
          <path d="M 75 140 Q 70 115, 65 90" />
          
          <path d="M 130 100 Q 155 70, 180 40" />
          <path d="M 180 40 Q 190 25, 200 10" />
          <path d="M 155 70 Q 165 50, 175 30" />
          
          <path d="M 130 120 Q 105 100, 80 80" />
          <path d="M 80 80 Q 65 65, 50 50" />
          <path d="M 105 100 Q 95 80, 85 60" />
        </g>
      </svg>
      
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
