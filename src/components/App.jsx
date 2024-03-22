import { useState } from 'react'
import '../styles/SideMenu.css'
import '../styles/App.css'
import '../styles/index.css'

function App() {
  const [info, setInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@notarealemail.com",
    phone: "078230599966",
    school: "University of California",
    degree: "BA in Arts",
    studyDate: "05/2019 - 05/2022",
    companyName: "Hola Cider",
    position: "Operation Engineer",
    responsibility: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis turpis ac est fermentum ultrices. Vestibulum rhoncus odio sagittis, faucibus erat id, consectetur metus. Sed ornare vitae eros fermentum dapibus. Cras aliquam urna ipsum, eu consequat diam pulvinar eget. Praesent et dolor viverra, finibus arcu ultricies, ultricies magna. Nunc erat sapien, tincidunt eu mauris et, pretium facilisis lectus.",
    dateFrom: "05/2019",
    dateTo: "06/2022"
  });

  const updateInfo = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  return (
    <div className='app'>
      <div className='sideMenu'>
              <div className='sideHeader'>
                  <h2>Edit details here.</h2>
              </div>

              <div className="sideInfo">
                  <div className='personalInfo'>
                  
                      <h3>Personal Info</h3>
                      <div>
                          <label htmlFor="firstName">First Name</label>
                          <input type="text" name='firstName' onChange={updateInfo} id='firstName' value={info.firstName}/>
                      </div>
                      <div>
                          <label htmlFor="lastName">Last Name</label>
                          <input type="text" id='lastName' name='lastName' onChange={updateInfo} value={info.lastName}/>
                      </div>
                      <div>
                          <label htmlFor="email">Email</label>
                          <input type="email" id='email' name='email' onChange={updateInfo} value={info.email}/>
                      </div>
                      <div>
                          <label htmlFor="number">Phone Number</label>
                          <input type="tel" id='number' name='phone' onChange={updateInfo} value={info.phone} pattern="\d*"/>
                      </div>
                  </div>
                  <div className='education'>
                      <h3>Education</h3>
                      <div>
                          <label htmlFor="school">School Name</label>
                          <input type="text" id='school' name='school' onChange={updateInfo} value={info.school} />
                      </div>
                      <div>
                          <label htmlFor="study">Title of Study</label>
                          <input type="text" id='study' name='degree' onChange={updateInfo} value={info.degree}/>
                      </div>
                      <div>
                          <label htmlFor="date">Date of Study</label>
                          <input type="text" id='date' name='studyDate' onChange={updateInfo} value={info.studyDate}/>
                      </div>
                  </div>
                  <div className='experience'>
                      <h3>Experience</h3>
                      <div>
                          <label htmlFor="company">Company Name</label>
                          <input type="text" id='company' name='companyName' onChange={updateInfo} value={info.companyName}/>
                      </div>
                      <div>
                          <label htmlFor="position">Position Title</label>
                          <input type="text" id='position' name='position' onChange={updateInfo} value={info.position} />
                      </div>
                      <div>
                          <label htmlFor="responsibility">Main Responsibilities</label>
                          <textarea id='responsibility' name='responsibility' onChange={updateInfo} value={info.responsibility}/>
                      </div>
                      <div>
                          <label htmlFor="dateFrom">Start Date</label>
                          <input type="text" id='dateFrom' name='dateFrom' onChange={updateInfo} value={info.dateFrom}/>
                      </div>
                      <div>
                          <label htmlFor="dateTo">End Date</label>
                          <input type="text" id='dateTo' name='dateTo' onChange={updateInfo} value={info.dateTo} />
                      </div>
                  </div>

                  <div className='buttons'>
                      <button className='editBtn'>Edit</button>
                      <button className='submitBtn'>Submit</button>
                  </div>
              </div>
          </div>
      <div class="CV">
        <h2>Preview Resume</h2>
        <div class="CV-display">
          <div className='cvPersonal'>
            <h2>{info.firstName} {info.lastName}</h2>
            <h3>{info.email} | {info.phone}</h3>
          </div>

          <div className='cvEducation'>
            <h2>Education</h2>
            <h4>{info.school}</h4>
            <h5>{info.degree}</h5>
            <h5>{info.studyDate}</h5>
          </div>

          <div className='cvExperience'>
            <h2>Experience</h2>
            <h3>{info.companyName}</h3>
            <h4>{info.position}</h4>
            <h5>From: {info.dateFrom} To: {info.dateTo}</h5>
            <p>{info.responsibility}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
