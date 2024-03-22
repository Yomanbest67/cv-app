import { useState } from 'react'
import '../styles/App.css'

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

  return (
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
  )
}

export default App
