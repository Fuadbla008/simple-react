import React from 'react'

export default function BarChart({ data = [] }) {
  const max = Math.max(...data.map(d => d.value), 1)
  return (
    <div className="bar-chart">
      {data.map((d) => (
        <div key={d.name} className="bar-item">
          <div className="bar" style={{ height: `${(d.value / max) * 140}px` }} />
          <div className="bar-label">{d.name}</div>
        </div>
      ))}
    </div>
  )
}
