"use client";

import { useEffect, useRef, useState } from "react";
import { getImageKitUrl } from "../utils/imagekit";
// using a plain <img> from /public to avoid image optimization issues during dev

export default function CursorFollower(): JSX.Element {
  const handRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const starRef = useRef<HTMLDivElement | null>(null);

  // target mouse coords and current coords for interpolation
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  // sunflower follows slower than the hand
  const sunflower = useRef({ x: 80, y: 60, angle: 0 });
  const rafRef = useRef<number | null>(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    let mounted = true;

    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

    const handleMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const update = () => {
      if (!mounted) return;
      // hand follows quickly
      current.current.x = lerp(current.current.x, target.current.x, 0.16);
      current.current.y = lerp(current.current.y, target.current.y, 0.16);

      // sunflower follows slowly
      sunflower.current.x = lerp(sunflower.current.x, target.current.x, 0.055);
      sunflower.current.y = lerp(sunflower.current.y, target.current.y, 0.055);

      // compute sunflower angle towards cursor
      const dx = target.current.x - sunflower.current.x;
      const dy = target.current.y - sunflower.current.y;
      const targetAngle = (Math.atan2(dy, dx) * 180) / Math.PI;
      sunflower.current.angle = lerp(sunflower.current.angle, targetAngle, 0.08);

      const hand = handRef.current;
      const svg = svgRef.current;
      const star = starRef.current;

      if (hand) {
        hand.style.transform = `translate3d(${current.current.x - 18}px, ${current.current.y - 18}px, 0)`;
      }

      if (star) {
        // position sunflower (star) with transform for smooth movement and rotation
        star.style.transform = `translate3d(${sunflower.current.x - 24}px, ${sunflower.current.y - 24}px, 0) rotate(${sunflower.current.angle}deg)`;
      }

      if (svg && star) {
        const rect = svg.getBoundingClientRect();
        const srect = star.getBoundingClientRect();
        const x1 = srect.left + srect.width / 2 - rect.left;
        const y1 = srect.top + srect.height / 2 - rect.top;
        const x2 = current.current.x - rect.left;
        const y2 = current.current.y - rect.top;

        const line = svg.querySelector("line");
        if (line) {
          line.setAttribute("x1", String(x1));
          line.setAttribute("y1", String(y1));
          line.setAttribute("x2", String(x2));
          line.setAttribute("y2", String(y2));
        }
      }

      rafRef.current = requestAnimationFrame(update);
    };

    const start = () => {
      window.addEventListener("mousemove", handleMove);
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(update);
    };

    const stop = () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };

    if (active) start();
    else stop();

    window.addEventListener("blur", stop);
    window.addEventListener("focus", () => { if (active) start(); });

    return () => {
      mounted = false;
      stop();
      window.removeEventListener("blur", stop);
      window.removeEventListener("focus", () => { if (active) start(); });
    };
  }, [active]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
      {active && (
        <svg ref={svgRef} className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="0" y2="0" stroke="rgba(255,200,120,0.9)" strokeWidth="3" strokeDasharray="8 8" strokeLinecap="round" />
        </svg>
      )}

      {/* Star anchor (left side) - clickable */}
      <div
        ref={starRef}
        style={{ left: 80, top: 60 }}
        role="button"
        aria-pressed={!active}
        onClick={() => setActive((v) => !v)}
        className={`absolute w-12 h-12 rounded-full flex items-center justify-center shadow-lg pointer-events-auto transition-all cursor-pointer ${active ? "ring-6 ring-orange-400 bg-transparent" : "bg-gray-300"}`}
        title={active ? "Click to turn off follower" : "Click to turn on follower"}
      >
        <img src={getImageKitUrl("web-porto/sunflower.png")} alt="sunflower" className={`w-8 h-8 object-contain transition-opacity ${active ? "opacity-100" : "opacity-60"}`} />
      </div>

      {/* Hand follower */}
      {active && (
        <div
          ref={handRef}
          className="absolute w-9 h-9 rounded-full flex items-center justify-center text-sm shadow-lg pointer-events-none"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          <span style={{ transform: "translateY(-1px)" }}>👆</span>
        </div>
      )}
    </div>
  );
}
