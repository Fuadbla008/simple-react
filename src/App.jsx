import React, { useMemo } from 'react'
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

  // derived KPIs
  const totalSales = useMemo(() => salesSeries.reduce((a, b) => a + b, 0), [salesSeries])
  const activeUsers = useMemo(() => userSeries[userSeries.length - 1], [userSeries])
  const avgOrder = useMemo(() => Math.round(totalSales / recent.length), [totalSales, recent.length])
  const conversion = useMemo(() => Math.round((activeUsers / 500) * 100), [activeUsers]) 

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1>Analytics Dashboard</h1>
          <p className="muted">Overview · Live sample data</p>
        </div>
        <div className="header-actions">
          <button className="btn">Export</button>
          <button className="btn primary">Create Report</button>
        </div>
      </header>

      <section className="kpis">
        <div className="card kpi">
          <div className="kpi-title">Total Sales</div>
          <div className="kpi-value">${totalSales}</div>
          <div className="kpi-spark">
            <Sparkline data={salesSeries} color="#7c3aed" />
          </div>
        </div>

        <div className="card kpi">
          <div className="kpi-title">Active Users</div>
          <div className="kpi-value">{activeUsers}</div>
          <div className="kpi-spark">
            <Sparkline data={userSeries} color="#06b6d4" />
          </div>
        </div>

        <div className="card kpi">
          <div className="kpi-title">Avg Order</div>
          <div className="kpi-value">${avgOrder}</div>
          <div className="kpi-foot">Conversion {conversion}%</div>
        </div>

        <div className="card kpi">
          <div className="kpi-title">Top Category</div>
          <div className="kpi-value">{categoryData[0].name}</div>
          <div className="kpi-foot">{categoryData[0].value} sales</div>
        </div>
      </section>

      <section className="grid">
        <div className="card">
          <h3>Sales Overview</h3>
          <div className="chart big">
            <Sparkline data={salesSeries} color="#4f46e5" height={120} />
          </div>
        </div>

        <div className="card">
          <h3>Category Breakdown</h3>
          <div className="chart">
            <BarChart data={categoryData} />
          </div>
        </div>

        <div className="card full">
          <h3>Recent Transactions</h3>
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recent.map(r => (
                  <tr key={r.id}>
                    <td>{r.id}</td>
                    <td>{r.user}</td>
                    <td>${r.amount}</td>
                    <td>
                      <span className={`status ${r.status.toLowerCase()}`}>{r.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
