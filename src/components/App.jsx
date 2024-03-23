import { useState } from 'react'
import '../styles/SideMenu.css'
import '../styles/App.css'
import '../styles/index.css'

function App() {
  const [info, setInfo] = useState({
    'First Name': "John",
    'Last Name': "Doe",
    'Email': "johndoe@notarealemail.com",
    'Phone': "078230599966",
  });

  const [education, setEducation] = useState({
      'School': "University of California",
      'Degree': "BA in Arts",
      'Date of Study': "05/2019 - 05/2022",
  })

  const [experience, setExperience] = useState({
      'Name of Company': "Hola Cider",
      'Title': "Operation Engineer",
      'Responsibilites': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis turpis ac est fermentum ultrices. Vestibulum rhoncus odio sagittis, faucibus erat id, consectetur metus. Sed ornare vitae eros fermentum dapibus. Cras aliquam urna ipsum, eu consequat diam pulvinar eget. Praesent et dolor viverra, finibus arcu ultricies, ultricies magna. Nunc erat sapien, tincidunt eu mauris et, pretium facilisis lectus.",
      'Date From': "05/2019",
      'Date To': "06/2022"
  })


  const updateInfo = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  const updateEducation = (event) => {
    setEducation({ ...education, [event.target.name]: event.target.value });
  }

  const updateExperience = (event) => {
    setExperience({ ...experience, [event.target.name]: event.target.value });
  }

  function generateSideInfo(object, onUpdate) {
    return (
      <div>
        {Object.entries(object).map(([key, value]) => (
          <>
            <label htmlFor={key}>{key}</label>
            <input type="text" id={key} name={key} value={value} onChange={(e) => onUpdate(e)}/>
          </>
        ))}
      </div>
    )
  }


  return (
    <div className='app'>
      <div className='sideMenu'>
              <div className='sideHeader'>
                  <h2>Edit details here.</h2>
              </div>

              <div className="sideInfo">
                <div className='personalInfo'>
                  <h2>Personal Info</h2>
                  {generateSideInfo(info, updateInfo)}
                </div>
                 
                <div className='education'>
                  <h2>Education</h2>
                  {generateSideInfo(education, updateEducation)}
                  
                  {/* <div className='buttons'>
                    <button onClick={}>Add</button>
                    <button>Delete</button>
                  </div> */}
                </div>

                <div className='experience'>
                  <h2>Experience</h2>
                  {generateSideInfo(experience, updateExperience)}

                  {/* <div className='buttons'>
                    <button>Add</button>
                    <button>Delete</button>
                  </div> */}
                </div>
              </div>

          </div>
      <div class="CV">
        <h2>Preview Resume</h2>
        <div class="CV-display">
          <div className='cvPersonal'>
            <h2>{info['First Name']} {info['Last Name']}</h2>
            <h3>{info['Email']} | {info['Phone']}</h3>
          </div>

          <div className='cvEducation'>
            <h2>Education</h2>
            <h4>{education['School']}</h4>
            <h5>{education['Degree']}</h5>
            <h5>{education['Date of Study']}</h5>
          </div>

          <div className='cvExperience'>
            <h2>Experience</h2>
            <h3>{experience['Name of Company']}</h3>
            <h4>{experience['Title']}</h4>
            <h5>From: {experience['Date From']} To: {experience['Date To']}</h5>
            <p>{experience['Responsibilites']}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
