import { useState } from 'react'
import '../styles/App.css'
import Banner from './Banner.jsx'
import PersonalDetails from './PersonalDetails.jsx'
import Education from './Education.jsx'
import Options from './Options'

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
        <Options 
          data1={personalDetails}
          data2={education}
          data3={experience}
          data1Handler={setPersonalDetails}
          data2Handler={setEducation}
          data3Handler={setExperience}
          pd={personalDetailsObj}
          ed={educationObj}
          ex={experienceObj}
        />
        <PersonalDetails data={personalDetails} dataHandler={setPersonalDetails}/>
        <Education data={education} dataHandler={setEducation}/>
      </div>
      <div className="rightContainer"></div>
    </div>
  )
}

export default App
