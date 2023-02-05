import React from 'react'

export default function DashboardHome() {
  return (
    <div className='px-10'>
      <h2 className='text-center text-3xl font-semibold mt-10'>Welcome to {'Employee'} Dashboard</h2>
      <div className='mt-12 grid grid-cols-3 gap-5'>
        <div className='bg-orange-300 stat-card'>
          <h3 className='stat-title'>15</h3>
          <p>Total Jobs</p>
        </div>
        {<div className='bg-sky-300 stat-card'>
          <h3 className='stat-title'>6</h3>
          <p>My Jobs</p>
        </div>}
        <div className='bg-red-300 stat-card'>
          <h3 className='stat-title'>150</h3>
          <p>Total Candidates</p>
        </div>
      </div>
    </div>
  )
}
