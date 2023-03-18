import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Tasks from './pages/tasks/Tasks'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='*' element={<Tasks />} />
          <Route path='/' element={<Tasks />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App
