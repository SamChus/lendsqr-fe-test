import { Outlet } from 'react-router-dom'
import NavBar from '@/components/Navbar/NavBar'

const DashboardLayout = () => {
  return (
   <>
    <NavBar />
    <Outlet />
   </>
  )
}

export default DashboardLayout