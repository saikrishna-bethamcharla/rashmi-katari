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
  { top: "8%", width: 320, dur: 160, delay: -60, opacity: 0.22 },
  { top: "16%", width: 220, dur: 200, delay: -140, opacity: 0.16 },
  { top: "5%", width: 180, dur: 185, delay: -20, opacity: 0.14 },
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
  <div className="absolute bottom-0 inset-x-0" data-testid="night-scene" aria-hidden="true">
    <img
      src="/art/night-lake-yogi-right.png?v=4"
      alt=""
      className="w-full h-[52vh] object-cover object-bottom opacity-90"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#101110] via-transparent to-transparent" />
    <div className="fire-glow" style={{ right: "26%", bottom: "8%", width: "190px", height: "190px" }} />
  </div>
);

const FireSmoke = () => (
  <div
    className="absolute pointer-events-none"
    style={{ right: "25%", bottom: "17%", width: "80px", height: "220px" }}
    data-testid="fire-smoke"
    aria-hidden="true"
  >
    <div className="smoke-puff" style={{ left: "28%", bottom: "40%", animationDuration: "5.5s" }} />
    <div className="smoke-puff" style={{ left: "42%", bottom: "46%", animationDuration: "7s", animationDelay: "-2.2s" }} />
    <div className="smoke-puff" style={{ left: "34%", bottom: "43%", animationDuration: "8s", animationDelay: "-4.5s" }} />
    <div className="smoke-puff" style={{ left: "38%", bottom: "44%", animationDuration: "6.2s", animationDelay: "-1.2s" }} />
  </div>
);

export default function Landscape() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" data-testid="landscape-background" aria-hidden="true">
      <Stars />
      {BIRDS.map((b, i) => (
        <Bird key={i} {...b} />
      ))}
      {CLOUDS.map((c, i) => (
        <Cloud key={i} {...c} />
      ))}
      <NightScene />
      <FireSmoke />
      <GrassLayer step={34} seed={7} baseH={100} varH={80} color="#4d5a46" width={3.5} opacity={0.4} blur />
      <GrassLayer step={24} seed={11} baseH={55} varH={85} color="#8CA183" width={2.2} opacity={0.55} flowers />
    </div>
  );
}
