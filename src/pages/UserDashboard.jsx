import React from 'react'
import UserNav from '../components/ui/userNav'
import UserHeroSection from '../components/ui/UserHeroSection'
import DashboardCards from '../components/ui/DashobardCards'

const UserDashboard = () => {
  return (
    <div>
      <UserNav />
      <UserHeroSection/>
      <DashboardCards/>
    </div>
  )
}

export default UserDashboard
