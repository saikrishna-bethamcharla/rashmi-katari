const bladePath = (x, h, lean) =>
  `M ${x} 230 Q ${x + lean * 0.4} ${230 - h * 0.55} ${x + lean} ${230 - h}`;

const Flower = ({ x, h, dur, delay }) => {
  const cx = x + 4;
  const cy = 230 - h - 6;
  const petals = [0, 72, 144, 216, 288].map((a) => ({
    px: cx + 6 * Math.cos((a * Math.PI) / 180),
    py: cy + 6 * Math.sin((a * Math.PI) / 180),
  }));
  return (
    <g className="sway" style={{ animationDuration: `${dur}s`, animationDelay: `${delay}s` }}>
      <path d={`M ${x} 230 Q ${x + 8} ${230 - h * 0.5} ${cx} ${230 - h}`} stroke="#8a9c7d" strokeWidth="2.5" fill="none" />
      {petals.map((p, i) => (
        <circle key={i} cx={p.px} cy={p.py} r="4" fill="#C9714F" opacity="0.9" />
      ))}
      <circle cx={cx} cy={cy} r="3" fill="#EAE4D8" />
    </g>
  );
};

const GrassLayer = ({ step, seed, baseH, varH, color, width, opacity, blur, flowers }) => {
  const blades = [];
  for (let x = 0; x <= 1440; x += step) {
    const h = baseH + ((x * seed) % varH);
    const lean = ((x * (seed + 6)) % 40) - 20;
    const dur = 4 + ((x * seed) % 30) / 10;
    const delay = -((x * seed) % 40) / 10;
    blades.push(
      <g key={x} className="sway" style={{ animationDuration: `${dur}s`, animationDelay: `${delay}s` }}>
        <path d={bladePath(x, h, lean)} stroke={color} strokeWidth={width} fill="none" strokeLinecap="round" />
      </g>
    );
  }
  return (
    <svg
      viewBox="0 0 1440 230"
      preserveAspectRatio="xMidYMax slice"
      className="absolute bottom-0 w-full h-[170px] md:h-[230px]"
      style={{ opacity, filter: blur ? "blur(1px)" : "none" }}
      aria-hidden="true"
    >
      {blades}
      {flowers && [140, 380, 640, 900, 1160, 1380].map((x, i) => (
        <Flower key={x} x={x} h={110 + (i % 3) * 20} dur={4.5 + i * 0.4} delay={-i * 0.8} />
      ))}
    </svg>
  );
};

const Bird = ({ top, size, dur, delay, opacity }) => (
  <div
    className="fly absolute left-0"
    style={{ top, animationDuration: `${dur}s`, animationDelay: `${delay}s`, opacity }}
    aria-hidden="true"
  >
    <svg width={size} height={size * 0.5} viewBox="0 0 24 12" fill="none" className="bird-bob" style={{ animationDuration: `${2 + (size % 3)}s` }}>
      <path className="wing wing-left" d="M12 8 Q6 1 1 5" stroke="#EAE4D8" strokeWidth="1.6" strokeLinecap="round" />
      <path className="wing wing-right" d="M12 8 Q18 1 23 5" stroke="#EAE4D8" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  </div>
);

const BIRDS = [
  { top: "12%", size: 26, dur: 55, delay: -12, opacity: 0.75 },
  { top: "18%", size: 18, dur: 70, delay: -40, opacity: 0.55 },
  { top: "22%", size: 22, dur: 62, delay: -25, opacity: 0.65 },
  { top: "15%", size: 15, dur: 80, delay: -58, opacity: 0.45 },
  { top: "27%", size: 20, dur: 66, delay: -5, opacity: 0.6 },
];

const Cloud = ({ top, width, dur, delay, opacity }) => (
  <div
    className="cloud absolute left-0"
    style={{ top, width, animationDuration: `${dur}s`, animationDelay: `${delay}s`, opacity }}
    aria-hidden="true"
  >
    <svg viewBox="0 0 200 60" width="100%" fill="#EAE4D8">
      <ellipse cx="60" cy="40" rx="55" ry="16" />
      <ellipse cx="110" cy="30" rx="45" ry="18" />
      <ellipse cx="150" cy="42" rx="40" ry="13" />
    </svg>
  </div>
);

const CLOUDS = [
  { top: "6%", width: 380, dur: 140, delay: -40, opacity: 0.38 },
  { top: "12%", width: 280, dur: 175, delay: -90, opacity: 0.32 },
  { top: "4%", width: 220, dur: 160, delay: -15, opacity: 0.28 },
  { top: "18%", width: 300, dur: 195, delay: -110, opacity: 0.26 },
  { top: "9%", width: 200, dur: 150, delay: -55, opacity: 0.3 },
];

const STARS = Array.from({ length: 45 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  top: (i * 53 + 7) % 42,
  s: 1.5 + ((i * 7) % 3),
  d: 2 + ((i * 13) % 30) / 10,
  delay: -((i * 17) % 40) / 10,
}));

const Stars = () => (
  <div className="absolute inset-x-0 top-0 h-[45%]" aria-hidden="true">
    {STARS.map((s, i) => (
      <span
        key={i}
        className="star"
        style={{
          left: `${s.left}%`,
          top: `${s.top}%`,
          width: `${s.s}px`,
          height: `${s.s}px`,
          animationDuration: `${s.d}s`,
          animationDelay: `${s.delay}s`,
        }}
      />
    ))}
  </div>
);

const NightScene = () => (
  <div className="absolute inset-0" data-testid="night-scene" aria-hidden="true">
    {/* Full scene: mountains, pond, sky, and yogi — not cropped to bottom strip */}
    <img
      src={`${process.env.PUBLIC_URL}/art/night-lake-yogi-right.png?v=4`}
      alt=""
      className="absolute inset-0 w-full h-full object-cover opacity-95"
      style={{ objectPosition: "center center" }}
    />
    {/* Soft readability fades only — keep pond & peaks visible */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "linear-gradient(to bottom, rgba(16,17,16,0.55) 0%, rgba(16,17,16,0.15) 28%, transparent 45%, transparent 75%, rgba(16,17,16,0.25) 100%)",
      }}
    />
    <div className="fire-glow" style={{ right: "20%", bottom: "16%", width: "160px", height: "160px" }} />
  </div>
);

const FireSmoke = () => (
  <div
    className="absolute pointer-events-none"
    style={{
      /* Sit directly above the painted campfire (left of the yogi) */
      right: "22%",
      bottom: "20%",
      width: "70px",
      height: "260px",
    }}
    data-testid="fire-smoke"
    aria-hidden="true"
  >
    <div className="smoke-puff" style={{ left: "18%", bottom: "8%", width: "36px", height: "28px", animationDuration: "5.2s" }} />
    <div className="smoke-puff" style={{ left: "32%", bottom: "10%", width: "40px", height: "30px", animationDuration: "6.4s", animationDelay: "-1.4s" }} />
    <div className="smoke-puff" style={{ left: "22%", bottom: "6%", width: "34px", height: "26px", animationDuration: "7.2s", animationDelay: "-2.8s" }} />
    <div className="smoke-puff" style={{ left: "40%", bottom: "12%", width: "38px", height: "28px", animationDuration: "5.8s", animationDelay: "-0.6s" }} />
    <div className="smoke-puff" style={{ left: "28%", bottom: "4%", width: "42px", height: "32px", animationDuration: "8s", animationDelay: "-4s" }} />
  </div>
);


const WaterAtmosphere = () => (
  <div className="absolute inset-0 pointer-events-none" data-testid="water-atmosphere" aria-hidden="true">
    {/* Soft moving shine across the lake */}
    <div
      className="water-shine absolute"
      style={{ left: "12%", top: "38%", width: "76%", height: "28%" }}
    />
    {/* Horizontal ripple lines */}
    {[
      { top: "46%", delay: "0s", dur: "7s", op: 0.55 },
      { top: "50%", delay: "-2s", dur: "9s", op: 0.4 },
      { top: "54%", delay: "-4s", dur: "8s", op: 0.35 },
      { top: "58%", delay: "-1s", dur: "11s", op: 0.25 },
    ].map((r, i) => (
      <div
        key={i}
        className="ripple-line absolute left-[14%] w-[72%] h-px"
        style={{
          top: r.top,
          opacity: r.op,
          animationDuration: r.dur,
          animationDelay: r.delay,
          background: "linear-gradient(90deg, transparent, rgba(200,220,235,0.35), transparent)",
        }}
      />
    ))}
  </div>
);

const Fireflies = () => {
  const bugs = Array.from({ length: 20 }, (_, i) => ({
    left: 4 + ((i * 17) % 90),
    bottom: 4 + ((i * 13) % 28),
    dur: 4.5 + (i % 6),
    delay: -(i * 0.65),
  }));
  return (
    <div className="absolute inset-x-0 bottom-0 h-[40%]" aria-hidden="true">
      {bugs.map((b, i) => (
        <span
          key={i}
          className="firefly"
          style={{
            left: `${b.left}%`,
            bottom: `${b.bottom}%`,
            animationDuration: `${b.dur}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const Aurora = () => (
  <div className="aurora" data-testid="aurora" aria-hidden="true" />
);

const FlameTips = () => (
  <div
    className="absolute pointer-events-none"
    style={{ right: "23%", bottom: "19%", width: "48px", height: "56px" }}
    data-testid="flame-tips"
    aria-hidden="true"
  >
    <div className="flame-tip" style={{ left: "10px", width: "14px", height: "34px", background: "linear-gradient(to top, #c9714f, #ffb347, transparent)", animationDuration: "0.7s" }} />
    <div className="flame-tip" style={{ left: "18px", width: "12px", height: "44px", background: "linear-gradient(to top, #ff6b2b, #ffe066, transparent)", animationDuration: "0.55s", animationDelay: "-0.2s" }} />
    <div className="flame-tip" style={{ left: "24px", width: "10px", height: "30px", background: "linear-gradient(to top, #c9714f, #ffcc66, transparent)", animationDuration: "0.85s", animationDelay: "-0.35s" }} />
  </div>
);

export default function Landscape() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" data-testid="landscape-background" aria-hidden="true">
      {/* Base full scene */}
      <NightScene />
      {/* Space / air */}
      <Aurora />
      <Stars />
      {BIRDS.map((b, i) => (
        <Bird key={i} {...b} />
      ))}
      {CLOUDS.map((c, i) => (
        <Cloud key={i} {...c} />
      ))}
      {/* Water */}
      <WaterAtmosphere />
      {/* Fire */}
      <FlameTips />
      <FireSmoke />
      {/* Earth */}
      <Fireflies />
      <GrassLayer step={34} seed={7} baseH={100} varH={80} color="#4d5a46" width={3.5} opacity={0.4} blur />
      <GrassLayer step={24} seed={11} baseH={55} varH={85} color="#8CA183" width={2.2} opacity={0.55} flowers />
    </div>
  );
}
