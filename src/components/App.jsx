import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import '../styles/App.css'
import Banner from './Banner.jsx'

function App() {
  const personalDetails = {
    name: 'Aditya Shekhar',
    email: 'aditya7682@gmail.com',
    phone: '8827487684',
    address: 'Noida, India'
  }
  const education = [
    {
      school: 'Indian Institue of Technology, Gandhinagar',
      degree: 'B.Tech',
      grade: '6.58',
      start: '2019',
      end: '2023',
    }
  ]
  const experience = [
    {
      company: 'The Odin Project',
      position: 'Frontend Developer',
      start: '2022',
      end: 'current',
      location: 'Bengaluru',
      description: 'Built interctive web-apps using frontend technologies.'
    }
  ]

  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <Banner/>
      </div>
      <div className="centerContainer"></div>
      <div className="rightContainer"></div>
    </div>
  )
}

export default App
