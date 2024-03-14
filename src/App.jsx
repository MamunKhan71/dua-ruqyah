import './App.css'
import Categories from './components/Categories'
import MainContent from './components/MainContent'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className='container mx-auto flex pt-8 gap-8'>
        <Navbar></Navbar>
        <Categories></Categories>
        <MainContent></MainContent>
      </div>
    </>
  )
}

export default App
