import React from 'react'

export default function Sparkline({ data = [], width = 220, height = 48, color = '#8884d8' }) {
  if (!data || data.length === 0) return null

  const max = Math.max(...data)
  const min = Math.min(...data)
  const len = data.length
  const px = (i) => (i / (len - 1)) * width
  const py = (v) => {
    if (max === min) return height / 2
    return height - ((v - min) / (max - min)) * height
  }

  const points = data.map((v, i) => `${px(i)},${py(v)}`).join(' ')
  const areaPoints = `0,${height} ${points} ${width},${height}`

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height} className="sparkline">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill="url(#g)" />
      <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
