import { useEffect, useRef } from "react";

/**
 * Hero backdrop: a faint grid where a few packets travel along orthogonal
 * routes, like traffic moving through a routed network. Static grid only when
 * the visitor prefers reduced motion; paused while off-screen.
 */
const GAP = 32;
const PACKETS = 9;

type Packet = { x: number; y: number; dx: number; dy: number; left: number; trail: { x: number; y: number }[]; speed: number };

const NetworkBackdrop = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, cols = 0, rows = 0, raf = 0, visible = true;
    const packets: Packet[] = [];

    const rnd = (n: number) => Math.floor(Math.random() * n);
    const spawn = (): Packet => {
      const horizontal = Math.random() < 0.5;
      const dir = Math.random() < 0.5 ? 1 : -1;
      return {
        x: rnd(cols) * GAP, y: rnd(rows) * GAP,
        dx: horizontal ? dir : 0, dy: horizontal ? 0 : dir,
        left: (2 + rnd(6)) * GAP, trail: [], speed: 0.6 + Math.random() * 0.7,
      };
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / GAP) + 1; rows = Math.ceil(h / GAP) + 1;
      packets.length = 0;
      for (let i = 0; i < PACKETS; i++) packets.push(spawn());
    };

    const grid = () => {
      ctx.fillStyle = "rgba(233,236,238,0.07)";
      for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) ctx.fillRect(i * GAP - 1, j * GAP - 1, 2, 2);
    };

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      grid();
      for (const p of packets) {
        p.x += p.dx * p.speed; p.y += p.dy * p.speed; p.left -= p.speed;
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 70) p.trail.shift();
        if (p.left <= 0) {
          // snap to the grid node and turn 90°, like a hop between routers
          p.x = Math.round(p.x / GAP) * GAP; p.y = Math.round(p.y / GAP) * GAP;
          const turn = Math.random() < 0.5 ? 1 : -1;
          [p.dx, p.dy] = p.dx !== 0 ? [0, turn] : [turn, 0];
          p.left = (2 + rnd(6)) * GAP;
        }
        if (p.x < -GAP || p.y < -GAP || p.x > w + GAP || p.y > h + GAP) Object.assign(p, spawn());
        for (let i = 1; i < p.trail.length; i++) {
          ctx.strokeStyle = `rgba(46,196,198,${(i / p.trail.length) * 0.45})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath(); ctx.moveTo(p.trail[i - 1].x, p.trail[i - 1].y); ctx.lineTo(p.trail[i].x, p.trail[i].y); ctx.stroke();
        }
        ctx.fillStyle = "#2EC4C6";
        ctx.beginPath(); ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2); ctx.fill();
      }
      if (visible) raf = requestAnimationFrame(frame);
    };

    resize();
    if (reduce) { grid(); } else { raf = requestAnimationFrame(frame); }
    const ro = new ResizeObserver(() => { resize(); if (reduce) grid(); });
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible && !reduce) { cancelAnimationFrame(raf); raf = requestAnimationFrame(frame); }
    });
    io.observe(canvas);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom,black_40%,transparent)]"
    />
  );
};

export default NetworkBackdrop;
