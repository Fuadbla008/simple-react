import React, { use, useMemo, useState } from 'react'
import './App.css'


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
    { id: 'TXN-1001', user: 'Alice', amount: 600, status: 'Completed' },
    { id: 'TXN-1002', user: 'Bob', amount: 450, status: 'Pending' },
    { id: 'TXN-1003', user: 'Carlos', amount: 780, status: 'Completed' },
    { id: 'TXN-1004', user: 'Dana', amount: 60, status: 'Refunded' },
  ]

  const [newCount, setFucn] = useState(0);
  const incrementCount = () => {
    setFucn(newCount + 1);
  }

  return (
    <div className="dashboard">
      <h1>This is Counter Function</h1>
      <h3>Counter Number : {newCount}</h3>
      <button onClick={incrementCount}>incresse button</button>

      <ul>
        {categoryData.map(item => (
          <li key={item.id}>
            {item.name} - {item.value}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
