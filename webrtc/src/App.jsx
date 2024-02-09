import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { SocketProvider } from './providers/Socket'

function App() {

  return (
    <>
      <SocketProvider>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </SocketProvider>
    </>
  )
}

export default App
