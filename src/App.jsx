import { useState } from 'react'
import './App.css'
import Categories from './components/Categories'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import TopNav from './components/TopNav'

function App() {
  const [currentCat, setCurrentCat] = useState(1)
  const catShow = catId => {
    setCurrentCat(catId);
  }
  return (
    <>
      <div className='container mx-auto flex gap-4 pt-8'>
        <Navbar></Navbar>
        <div className='w-full'>
          <TopNav></TopNav>
          <div className='flex pt-4 gap-8'>
            <Categories catShow={catShow}></Categories>
            <MainContent currentCat={currentCat}></MainContent>
            <Sidebar></Sidebar>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
