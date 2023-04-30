import React from 'react'
import { Link } from 'react-router-dom'
function Dashboard() {
  return (
    <div>
         <section>
    <h1>Dashboard</h1>
    <p>This is the dashboard, WELCOME :D</p>
    <Link to="/users" className="button">Users</Link>
    <Link to="/analytics" className="button">Analytics </Link>
    </section>
    </div>
  )
}

export default Dashboard
