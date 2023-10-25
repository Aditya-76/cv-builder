import { useState } from 'react'
import '../styles/App.css'
import Banner from './Banner.jsx'
import PersonalDetails from './PersonalDetails.jsx'

function App() {
  let personalDetailsObj = {
    name: 'Aditya Shekhar',
    email: 'aditya7682@gmail.com',
    phone: '9998467839',
    address: 'Noida, India'
  }
  let educationObj = [
    {
      school: 'Indian Institue of Technology, Gandhinagar',
      degree: 'B.Tech',
      grade: '6.58',
      start: '2019',
      end: '2023',
    }
  ]
  let experienceObj = [
    {
      company: 'The Odin Project',
      position: 'Frontend Developer',
      start: '2022',
      end: 'current',
      location: 'Bengaluru',
      description: 'Built interctive web-apps using frontend technologies.'
    }
  ]

  const [personalDetails, setPersonalDetails] = useState(personalDetailsObj);
  const [education, setEducation] = useState(educationObj);
  const [experience, setExperience] = useState(experienceObj);


  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <Banner/>
      </div>
      <div className="centerContainer">
        <PersonalDetails data={personalDetails} dataHandler={setPersonalDetails}/>
      </div>
      <div className="rightContainer"></div>
    </div>
  )
}

export default App
