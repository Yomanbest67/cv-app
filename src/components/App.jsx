import { useState } from 'react'
import '../styles/SideMenu.css'
import '../styles/App.css'
import '../styles/index.css'

function App() {
  const [cvData, setCvData] = useState({
    info: {
      'First Name': "John",
      'Last Name': "Doe",
      'Email': "johndoe@notarealemail.com",
      'Phone': "078230599966",
    },
    education: [
      {
        'School': "University of California",
        'Degree': "BA in Arts",
        'Date of Study': "05/2019 - 05/2022",
      }
    ],
    experience: [
      {
        'Name of Company': "Hola Cider",
        'Title': "Operation Engineer",
        'Responsibilites': "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis turpis ac est fermentum ultrices. Vestibulum rhoncus odio sagittis, faucibus erat id, consectetur metus. Sed ornare vitae eros fermentum dapibus. Cras aliquam urna ipsum, eu consequat diam pulvinar eget. Praesent et dolor viverra, finibus arcu ultricies, ultricies magna. Nunc erat sapien, tincidunt eu mauris et, pretium facilisis lectus.",
        'Date From': "05/2019",
        'Date To': "06/2022"
      },
    ]
  });

  // Pass field name to updateCvData and update based on that.
  const updateCvData = (event) => {
    setCvData({ ...cvData, [event.target.name]: event.target.value });
  };


  function generateSideInfo(object, field) {
    return (
      <div>
        {Object.entries(object).map(([key, value]) => (
          <>
            <label htmlFor={key}>{key}</label>
            <input type="text" className={field} id={key} name={key} value={value} onChange={updateCvData}/>
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
                  {generateSideInfo(cvData['info'], 'info')}
                </div>
                 
                <div className='education'>
                  <h2>Education</h2>
                  {generateSideInfo(cvData['education'][0], 'education')}
                  <button>Add</button>
                  <button>Remove</button>
                </div>

                <div className='experience'>
                  <h2>Experience</h2>
                  {generateSideInfo(cvData['experience'][0], 'experience')}
                  <button>Add</button>
                  <button>Remove</button>
                </div>
              </div>

          </div>
      <div class="CV">
        <h2>Preview Resume</h2>
        <div class="CV-display">
          <div className='cvPersonal'>
            <h2>{cvData['info']['First Name']} {cvData['info']['Last Name']}</h2>
            <h3>{cvData['info']['Email']} | {cvData['info']['Phone']}</h3>
          </div>

          <div className='cvEducation'>
            <h2>Education</h2>
            {cvData.education.map((entry, index) => (
              <div key={index} className='education-entry'>
                <h3>{entry['School']}</h3>
                <h4>{entry['Degree']}</h4>
                <h5>{entry['Date of Study']}</h5>
              </div>
            ))}
          </div>

          <div className='cvExperience'>
            <h2>Experience</h2>
              {cvData.experience.map((entry, index) => (
                    <div key={index} className='work-entry'>
                      <h3>{entry['Name of Company']}</h3>
                      <h4>{entry['Title']}</h4>
                      <h5>From: {entry['Date From']} To: {entry['Date To']}</h5>
                      <p>{entry['Responsibilites']}</p>
                    </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
