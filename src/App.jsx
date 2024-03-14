import './App.css'
import Categories from './components/Categories'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <div className='container mx-auto flex pt-8 gap-8'>
        <Navbar></Navbar>
        <Categories></Categories>
        <MainContent></MainContent>
        <Sidebar></Sidebar>
      </div>
    </>
  )
}

export default App
