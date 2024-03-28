import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <div className='bg-slate-500 w-screen h-screen'>
      <h1 className="text-3xl 
secondary-font  text-cyan-500">samsung</h1>
    </div>
    </>
  )
}

export default App
