"use client";
import { useEffect, useRef } from "react";

export default function Stars(){
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;

        const stars = Array.from({ length: 120 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2,
        v: Math.random() * 0.3 + 0.05,
        }));

        const animate = () => {
            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = "white";

            stars.forEach(s => {
                s.y += s.v;
                if(s.y > h) s.y = 0;

                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        animate();
        window.onresize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };
    }, []);

    return (
        <canvas
        ref ={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none"
        />
    );
}