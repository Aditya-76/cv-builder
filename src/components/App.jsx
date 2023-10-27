import { useState } from 'react'
import '../styles/App.css'
import Banner from './Banner.jsx'
import PersonalDetails from './PersonalDetails.jsx'
import Education from './Education.jsx'
import Options from './Options'
import Resume from './Resume'
import Experience from './Experience'

function App() {
  let personalDetailsObj = {
    name: 'Aditya Shekhar',
    email: 'aditya7682@gmail.com',
    phone: '+91 99984xxxxx',
    address: 'Noida, India'
  }
  let educationObj = [
    {
      id: 0,
      school: 'Indian Institute of Technology, Gandhinagar',
      degree: 'Bachelor of Technology',
      grade: '6.58',
      start: '2019',
      end: '2023',
    }
  ]
  let experienceObj = [
    {
      id: 0,
      company: 'Umbrella Inc.',
      position: 'Frontend Developer',
      start: '2022',
      end: 'current',
      location: 'Bengaluru, India',
      description: 'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android'
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
        <Experience data={experience} dataHandler={setExperience}/>
      </div>
      <div className="rightContainer">
        <Resume pd={personalDetails} ed={education} ex={experience}/>
      </div>
    </div>
  )
}

export default App
