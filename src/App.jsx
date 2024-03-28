import { useState } from 'react'
import './App.css'
import Login from './Login'
import Sidebar from './view/Sidebar'
import Navbar from './view/Navbar'
import Footer from './view/footer'
import SalesGraph from './view/SalesGraph'

function App() {
  const [count, setCount] = useState(0)

  const todaySales = [
    { date: '2024-02-14 08:00', sale: 100 },
    { date: '2024-02-14 10:00', sale: 150 },
    { date: '2024-02-14 12:00', sale: 200 },
    { date: '2024-02-14 14:00', sale: 180 },
    { date: '2024-02-14 16:00', sale: 220 },
    { date: '2024-02-14 18:00', sale: 250 },
    { date: '2024-02-14 20:00', sale: 300 },
    { date: '2024-02-14 22:00', sale: 280 },
  ];


  return (
    <>
      {/* <Login/> */}
      <Sidebar/>
      <SalesGraph salesData={todaySales} />
      {/* <Navbar/> */}
      <Footer/>
    </>
  )
}

export default App
