import React, { use, useMemo, useState } from 'react'
import './App.css'
import Sparkline from './components/Sparkline'
import BarChart from './components/BarChart'

function App() {
  // sample timeseries and category data
  const salesSeries = [120, 200, 180, 240, 300, 280, 350, 420, 390, 450, 480, 520]
  const userSeries = [40, 60, 55, 80, 90, 85, 120, 140, 130, 150, 160, 170]
  const categoryData = [
    { name: 'Product A', value: 420 },
    { name: 'Product B', value: 280 },
    { name: 'Product C', value: 160 },
    { name: 'Product D', value: 90 },
  ]
  const recent = [
    { id: 'TXN-1001', user: 'Alice', amount: 1200, status: 'Completed' },
    { id: 'TXN-1002', user: 'Bob', amount: 450, status: 'Pending' },
    { id: 'TXN-1003', user: 'Carlos', amount: 780, status: 'Completed' },
    { id: 'TXN-1004', user: 'Dana', amount: 60, status: 'Refunded' },
  ]

  const [ctn, setCtn] = useState(0);
  const incrementCount = () => {
    setCtn(ctn + 1);
  }
  const decrementCount = () => {
    setCtn(ctn - 1);
  }

  // derived KPIs
  const totalSales = useMemo(() => salesSeries.reduce((a, b) => a + b, 0), [salesSeries])
  const activeUsers = useMemo(() => userSeries[userSeries.length - 1], [userSeries])
  const avgOrder = useMemo(() => Math.round(totalSales / recent.length), [totalSales, recent.length])
  const conversion = useMemo(() => Math.round((activeUsers / 500) * 100), [activeUsers]) 

  return (
    <div className="dashboard">
      <div>
        <h3>Count: {ctn}</h3>
        <button onClick={incrementCount}>Increment Count</button>
        <button onClick={decrementCount}>decresse Countt</button>
      </div>
    </div>
  )
}

export default App
