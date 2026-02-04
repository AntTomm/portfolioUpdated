"use client";

import { useEffect, useRef } from "react";

type props = {
    src: string;
    size?: number; // px
    speed?: number; // px/frame 
    className?: string;
};

export default function Bounce({
    src,
    size = 80,
    speed = 1.0,
    className = "",
}: props) {
    const elRef = useRef<HTMLImageElement | null>(null);

    const pos = useRef({ x: 80, y: 80 });
    const vel = useRef({ vx: speed, vy: speed });
    const raf = useRef<number | null>(null);

    useEffect(() => {
        const el = elRef.current;
        if (!el) return;
    
        const tick = () => {
          const { innerWidth: W, innerHeight: H } = window;
    
          // Measure actual element size (in case gif isn't square)
          const rect = el.getBoundingClientRect();
          const w = rect.width || size;
          const h = rect.height || size;
    
          let { x, y } = pos.current;
          let { vx, vy } = vel.current;
    
          x += vx;
          y += vy;
    
          // Bounce on edges
          if (x <= 0) {
            x = 0;
            vx = Math.abs(vx);
          } else if (x + w >= W) {
            x = W - w;
            vx = -Math.abs(vx);
          }
    
          if (y <= 0) {
            y = 0;
            vy = Math.abs(vy);
          } else if (y + h >= H) {
            y = H - h;
            vy = -Math.abs(vy);
          }
    
          pos.current = { x, y };
          vel.current = { vx, vy };
    
          // Apply transform (no React re-renders)
          el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    
          raf.current = requestAnimationFrame(tick);
        };
    
        raf.current = requestAnimationFrame(tick);
    
        return () => {
          if (raf.current) cancelAnimationFrame(raf.current);
        };
      }, [size, speed]);
    
      return (
        <img
          ref={elRef}
          src={src}
          alt=""
          width={size}
          height={size}
          draggable={false}
          className={[
            "fixed left-0 top-0 z-0 select-none opacity-80 pointer-events-none",
            className,
          ].join(" ")}
          style={{ willChange: "transform" }}
        />
      );
    }