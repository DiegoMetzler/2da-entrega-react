import './App.css'
import Navbar from "./components/navbar/navbar"
import { useState } from 'react'
import ItemListContainer from './containers/itemListContainer/itemListContainer'

function App() {

  const [categoria, setCategoria] = useState('todos')
  return (
    <>
      <Navbar handleCategoria={setCategoria}/>
      <ItemListContainer categoria={categoria}/>
    </>
  )
}

export default App
