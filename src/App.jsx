import { useState } from 'react'
import './App.css'
import Currency from './components/currency'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
      <h1 className='head' style={{marginBottom:"6px"}}>Currency App</h1>
        <Currency />
        
    </div>
  )
}

export default App
