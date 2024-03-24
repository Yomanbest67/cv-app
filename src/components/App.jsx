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
  const updateCvData = (event, field, key) => {

    if (field === 'info') {
      setCvData({ ...cvData, ['info'] : { ...cvData['info'], [event.target.name]: event.target.value } });
    } 

    else {
      if (!field || !key || !event || !event.target || !event.target.name) {
        throw new Error("updateCvData: Invalid input");
      }
      const updatedField = cvData[field]?.[key] || {};
      // const updatedData = { ...cvData, [field]:
      // [ ...cvData[field], [key]:
      // { ...updatedField, [event.target.name]: event.target.value } ] };
      updatedField[event.target.name] = event.target.value;
      setCvData({...cvData, updatedField});
    }
  }

  function generateSideInputs(object, field) {
    return (
      <div>
        {Object.entries(object).map(([key, value]) => (
          <>
            <label htmlFor={key}>{key}</label>
            <input type="text" className={field} id={key} name={key} 
            value={value} onChange={event => updateCvData(event, field)}/>

            {/* Event by itself is deprecated. Arrow function used to solve that. */}
          </>
        ))}
      </div>
    )
  }

  function createFields(object, field) {
    const inputs = [];
    
    Object.entries(object).forEach(([key, value]) => {

      for (const property in value) {
        inputs.push(<div>{property}: <input type="text" id={key} className={field} onChange={event => updateCvData(event, field, key)} name={property} value={value[property]}/></div>);
      }
    })
  
    return inputs;
  }

  function addMoreFields(field) {
    if (!field) {
      throw new Error("addMoreFields: Missing field");
    }

    const newData = cvData?.[field] ? { ...cvData } : {};

    if (!newData[field]) {
      newData[field] = [];
    }

    if (field === 'education') {
      newData[field].push({
        'School': '',
        'Degree': '',
        'Date of Study': '',
      });
    } else if (field === 'experience') {
      newData[field].push({
        'Name of Company': '',
        'Title': '',
        'Responsibilites': '',
        'Date From': '',
        'Date To': '',
      });
    }

    setCvData(newData);
  }

  function removeField(field) {
    if (!field) {
      throw new Error("removeField: Missing field");
    }

    const newData = cvData?.[field] ? { ...cvData } : null;

    if (!newData) {
      throw new Error("removeField: Field does not exist");
    }

    if (!newData[field]) {
      throw new Error("removeField: Field is not an array");
    }

    newData[field].splice(-1, 1);

    setCvData(newData);

    
    // setCvData({
    //   ...cvData,
    //   [field]: [...cvData[field]].splice(-1, 1), // Create a copy and splice
    // });

  }




  return (
    <div className='app'>
      <div className='sideMenu'>
              <div className='sideHeader'>
                  <h2>Edit details here.</h2>
              </div>

              <div className="sideInfo">
                <div className='personalInfo'>
                  {generateSideInputs(cvData['info'], 'info')}
                </div>
                 
                <div className='education'>
                  <h2>Education</h2>
                  {createFields(cvData['education'], 'education')}
                  <button onClick={() => addMoreFields('education')}>Add</button>
                  <button onClick={() => removeField('education')}>Remove</button>
                </div>

                <div className='experience'>
                  <h2>Experience</h2>
                  {createFields(cvData['experience'], 'experience')}
                  <button onClick={() => addMoreFields('experience')}>Add</button>
                  <button onClick={() => removeField('experience')}>Remove</button>
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
            {Object.entries(cvData['education']).map(([key, value]) => (
              <div key={key}>
                <h3>{value['School']}</h3>
                <h4>{value['Degree']}</h4>
                <h5>{value['Date of Study']}</h5>
              </div>
            ))}
          </div>

          <div className='cvExperience'>
            <h2>Experience</h2>
              {Object.entries(cvData['experience']).map(([key, value]) => (
                <div key={key}>
                  <h3>{value['Name of Company']}</h3>
                  <h4>{value['Title']}</h4>
                  <h5>{value['Date From']} - {value['Date To']}</h5>
                  <p>{value['Responsibilites']}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
