"use client"

import { motion } from "framer-motion"

const f = (n: number): string => n.toFixed(2)

// Petal shape: two quadratic beziers from base to tip and back
// rBase=0 means petals radiate from center (classic lotus)
function petalPath(angleDeg: number, rBase: number, rTip: number, halfWidthDeg: number): string {
  const a = (angleDeg * Math.PI) / 180
  const hw = (halfWidthDeg * Math.PI) / 180

  const bx1 = rBase * Math.sin(a - hw)
  const by1 = -rBase * Math.cos(a - hw)
  const bx2 = rBase * Math.sin(a + hw)
  const by2 = -rBase * Math.cos(a + hw)

  const tx = rTip * Math.sin(a)
  const ty = -rTip * Math.cos(a)

  const rCtrl = rBase + (rTip - rBase) * 0.65
  const cx1 = rCtrl * Math.sin(a - hw * 0.5)
  const cy1 = -rCtrl * Math.cos(a - hw * 0.5)
  const cx2 = rCtrl * Math.sin(a + hw * 0.5)
  const cy2 = -rCtrl * Math.cos(a + hw * 0.5)

  return `M ${f(bx1)} ${f(by1)} Q ${f(cx1)} ${f(cy1)} ${f(tx)} ${f(ty)} Q ${f(cx2)} ${f(cy2)} ${f(bx2)} ${f(by2)} Z`
}

function pt(angleDeg: number, r: number): [string, string] {
  const a = (angleDeg * Math.PI) / 180
  return [f(r * Math.sin(a)), f(-r * Math.cos(a))]
}

// Full ornate rangoli — viewBox centered at origin, ±200 units
// Render inside a positioned container; animate the wrapping div for rotation
export function RangoliFull({
  size = 700,
  opacity = 0.08,
  color = "#D4AF37",
}: {
  size?: number
  opacity?: number
  color?: string
}) {
  const a8  = Array.from({ length: 8 },  (_, i) => i * 45)
  const a16 = Array.from({ length: 16 }, (_, i) => i * 22.5)
  const a24 = Array.from({ length: 24 }, (_, i) => i * 15)

  return (
    <svg
      viewBox="-200 -200 400 400"
      width={size}
      height={size}
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" stroke={color} strokeLinecap="round">

        {/* ── Faint radial guide lines ── */}
        {a16.map((a, i) => {
          const [x1, y1] = pt(a, 8)
          const [x2, y2] = pt(a, 194)
          return (
            <line
              key={`rl-${i}`}
              x1={x1} y1={y1} x2={x2} y2={y2}
              strokeWidth="0.3" strokeOpacity="0.12" strokeDasharray="3,9"
            />
          )
        })}

        {/* ── Outer rim ── */}
        <circle r={194} strokeWidth="1.2" strokeOpacity="0.45" />
        <circle r={187} strokeWidth="0.5" strokeOpacity="0.3" />
        {/* 24 rim dots */}
        {a24.map((a, i) => {
          const [x, y] = pt(a, 190)
          return <circle key={`rd-${i}`} cx={x} cy={y} r={2.8} fill={color} strokeWidth="0" />
        })}

        {/* ── Outer 8 large petals ── */}
        {a8.map((a, i) => (
          <path
            key={`op-${i}`}
            d={petalPath(a, 118, 180, 14)}
            strokeWidth="1" fill={color} fillOpacity="0.05"
          />
        ))}
        {/* Outer 8 slim accent petals offset 22.5° */}
        {a8.map((a, i) => (
          <path
            key={`oa-${i}`}
            d={petalPath(a + 22.5, 110, 162, 6.5)}
            strokeWidth="0.5" strokeOpacity="0.55" fill="none"
          />
        ))}

        {/* ── Mid structural ring ── */}
        <circle r={126} strokeWidth="0.9" strokeOpacity="0.45" />
        <circle r={114} strokeWidth="0.4" strokeOpacity="0.3" />
        {/* 16 mid-ring dots */}
        {a16.map((a, i) => {
          const [x, y] = pt(a, 120)
          return <circle key={`md-${i}`} cx={x} cy={y} r={2.2} fill={color} strokeWidth="0" />
        })}

        {/* ── Middle 8 rounded petals ── */}
        {a8.map((a, i) => (
          <path
            key={`mp-${i}`}
            d={petalPath(a, 62, 110, 15)}
            strokeWidth="0.85" fill={color} fillOpacity="0.055"
          />
        ))}
        {/* 16 slim inner-ring petals */}
        {a16.map((a, i) => (
          <path
            key={`ms-${i}`}
            d={petalPath(a, 54, 92, 8)}
            strokeWidth="0.45" strokeOpacity="0.5" fill="none"
          />
        ))}

        {/* ── Inner ring ── */}
        <circle r={72} strokeWidth="0.75" strokeOpacity="0.45" />
        <circle r={58} strokeWidth="0.4" strokeOpacity="0.3" />
        {/* 8 inner ring accent dots */}
        {a8.map((a, i) => {
          const [x, y] = pt(a + 22.5, 65)
          return <circle key={`id-${i}`} cx={x} cy={y} r={2.5} fill={color} strokeWidth="0" />
        })}

        {/* ── Center lotus (8 petals from origin) ── */}
        {a8.map((a, i) => (
          <path
            key={`cl-${i}`}
            d={petalPath(a, 0, 54, 17)}
            strokeWidth="0.8" fill={color} fillOpacity="0.08"
          />
        ))}
        {/* Second lotus layer offset 22.5° */}
        {a8.map((a, i) => (
          <path
            key={`cl2-${i}`}
            d={petalPath(a + 22.5, 0, 35, 12)}
            strokeWidth="0.5" fill={color} fillOpacity="0.05"
          />
        ))}

        {/* ── Center detail ── */}
        <circle r={20} strokeWidth="0.7" strokeOpacity="0.5" />
        <circle r={11} strokeWidth="0.5" strokeOpacity="0.4" />
        {a8.map((a, i) => {
          const [x, y] = pt(a, 15.5)
          return <circle key={`csd-${i}`} cx={x} cy={y} r={1.6} fill={color} strokeWidth="0" />
        })}
        <circle r={5.5} fill={color} strokeWidth="0" />
      </g>
    </svg>
  )
}

// Small lotus glyph for decorating section headers
export function LotusIcon({
  size = 28,
  color = "#D4AF37",
  opacity = 0.7,
}: {
  size?: number
  color?: string
  opacity?: number
}) {
  const a8 = Array.from({ length: 8 }, (_, i) => i * 45)
  const r  = size / 2

  return (
    <svg
      viewBox={`-${r} -${r} ${size} ${size}`}
      width={size}
      height={size}
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={color} stroke={color} strokeLinecap="round">
        {/* Outer 8 petals */}
        {a8.map((a, i) => (
          <path
            key={`lp-${i}`}
            d={petalPath(a, 0, r * 0.88, 17)}
            strokeWidth={r * 0.04}
            fillOpacity="0.18"
          />
        ))}
        {/* Inner 8 petals offset */}
        {a8.map((a, i) => (
          <path
            key={`li-${i}`}
            d={petalPath(a + 22.5, 0, r * 0.52, 12)}
            strokeWidth={r * 0.035}
            fillOpacity="0.28"
          />
        ))}
        <circle r={r * 0.16} strokeWidth="0" fillOpacity="0.7" />
      </g>
    </svg>
  )
}

// Horizontal ornamental divider — diamonds, dots, connecting lines
export function SectionDivider({ color = "#D4AF37" }: { color?: string }) {
  const W = 1200
  const H = 52
  const cy = H / 2
  // 13 diamond positions evenly spaced; middle one is slightly larger
  const count = 13
  const positions = Array.from({ length: count }, (_, i) =>
    Math.round(((i + 0.5) / count) * W)
  )
  const center = Math.round(W / 2)

  function diamondPath(cx: number, cy: number, hw: number, hh: number): string {
    return `M${cx} ${cy - hh} L${cx + hw} ${cy} L${cx} ${cy + hh} L${cx - hw} ${cy} Z`
  }

  return (
    <div className="relative w-full overflow-hidden" aria-hidden="true" style={{ height: H }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
      >
        <g fill="none" stroke={color} strokeOpacity="0.32" strokeLinecap="round">
          {/* Base horizontal line */}
          <line x1={0} y1={cy} x2={W} y2={cy} strokeWidth="0.6" />

          {/* Diamond chain */}
          {positions.map((x, i) => {
            const isCenter = Math.abs(x - center) < 5
            const hw = isCenter ? 18 : 11
            const hh = isCenter ? 14 : 9
            return (
              <path
                key={i}
                d={diamondPath(x, cy, hw, hh)}
                strokeWidth={isCenter ? 1.4 : 0.9}
                fill={color}
                fillOpacity={isCenter ? 0.18 : 0.09}
              />
            )
          })}

          {/* Dot trio between each diamond pair */}
          {positions.slice(0, -1).map((x, i) => {
            const nx = positions[i + 1]
            return ([0.3, 0.5, 0.7] as number[]).map((t, j) => (
              <circle
                key={`${i}-${j}`}
                cx={x + (nx - x) * t}
                cy={cy}
                r={t === 0.5 ? 2.4 : 1.6}
                fill={color}
                strokeWidth="0"
                fillOpacity="0.45"
              />
            ))
          })}

          {/* Tiny tick marks above/below each diamond */}
          {positions.map((x, i) => (
            <g key={`tick-${i}`}>
              <line x1={x} y1={cy - 18} x2={x} y2={cy - 24} strokeWidth="0.6" strokeOpacity="0.2" />
              <line x1={x} y1={cy + 18} x2={x} y2={cy + 24} strokeWidth="0.6" strokeOpacity="0.2" />
            </g>
          ))}
        </g>
      </svg>
    </div>
  )
}

// Animated corner rangoli ornament (quarter fan)
export function CornerOrnament({
  size = 180,
  opacity = 0.07,
  color = "#D4AF37",
  flip = false,
}: {
  size?: number
  opacity?: number
  color?: string
  flip?: boolean
}) {
  // Quarter-circle fan: angles 0–90° (or mirrored)
  const angles = [0, 15, 30, 45, 60, 75, 90]

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      style={{ opacity, transform: flip ? "scaleX(-1)" : undefined }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        transform={`translate(0, ${size})`}
        fill="none"
        stroke={color}
        strokeLinecap="round"
      >
        {/* Concentric arcs */}
        {[0.95, 0.78, 0.6, 0.42].map((frac, fi) => {
          const r = size * frac
          return (
            <path
              key={fi}
              d={`M 0 0 A ${r} ${r} 0 0 1 ${r} ${-size}`}
              strokeWidth={fi === 0 ? 0.9 : 0.5}
              strokeOpacity={fi === 0 ? 0.5 : 0.35}
            />
          )
        })}

        {/* Radial spokes */}
        {angles.map((a, i) => {
          const rad = (a * Math.PI) / 180
          return (
            <line
              key={i}
              x1={0} y1={0}
              x2={size * 0.93 * Math.cos(rad)}
              y2={-size * 0.93 * Math.sin(rad)}
              strokeWidth="0.35"
              strokeOpacity="0.3"
              strokeDasharray="3,7"
            />
          )
        })}

        {/* Petal decorations along outer arc */}
        {[22.5, 45, 67.5].map((a, i) => {
          const rad = (a * Math.PI) / 180
          const tipX = size * 0.82 * Math.cos(rad)
          const tipY = -size * 0.82 * Math.sin(rad)
          const bRad0 = ((a - 10) * Math.PI) / 180
          const bRad1 = ((a + 10) * Math.PI) / 180
          const bx1 = size * 0.55 * Math.cos(bRad0)
          const by1 = -size * 0.55 * Math.sin(bRad0)
          const bx2 = size * 0.55 * Math.cos(bRad1)
          const by2 = -size * 0.55 * Math.sin(bRad1)
          const cx1 = size * 0.72 * Math.cos(bRad0)
          const cy1 = -size * 0.72 * Math.sin(bRad0)
          const cx2 = size * 0.72 * Math.cos(bRad1)
          const cy2 = -size * 0.72 * Math.sin(bRad1)
          return (
            <path
              key={i}
              d={`M ${f(bx1)} ${f(by1)} Q ${f(cx1)} ${f(cy1)} ${f(tipX)} ${f(tipY)} Q ${f(cx2)} ${f(cy2)} ${f(bx2)} ${f(by2)} Z`}
              strokeWidth="0.7"
              fill={color}
              fillOpacity="0.06"
            />
          )
        })}

        {/* Arc dots */}
        {angles.map((a, i) => {
          const rad = (a * Math.PI) / 180
          return (
            <circle
              key={i}
              cx={size * 0.93 * Math.cos(rad)}
              cy={-size * 0.93 * Math.sin(rad)}
              r={2.2}
              fill={color}
              strokeWidth="0"
            />
          )
        })}
      </g>
    </svg>
  )
}
