import { useState } from 'react'
import '../styles/SideMenu.css'

export default function SideMenu () {
    return (
        <div className='sideMenu'>
            <div className='sideHeader'>
                <h2>Edit details here.</h2>
            </div>

            <div className="sideInfo">
                <div className='personalInfo'>
                
                    <h3>Personal Info</h3>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id='firstName' />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id='lastName' />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' />
                    </div>
                    <div>
                        <label htmlFor="number">Phone Number</label>
                        <input type="tel" id='number' pattern="\d*"/>
                    </div>
                </div>
                <div className='education'>
                    <h3>Education</h3>
                    <div>
                        <label htmlFor="school">School Name</label>
                        <input type="text" id='school' />
                    </div>
                    <div>
                        <label htmlFor="study">Title of Study</label>
                        <input type="text" id='study' />
                    </div>
                    <div>
                        <label htmlFor="date">Date of Study</label>
                        <input type="text" id='date' />
                    </div>
                </div>
                <div className='experience'>
                    <h3>Experience</h3>
                    <div>
                        <label htmlFor="company">Company Name</label>
                        <input type="text" id='company' />
                    </div>
                    <div>
                        <label htmlFor="position">Position Title</label>
                        <input type="text" id='position' />
                    </div>
                    <div>
                        <label htmlFor="responsibility">Main Responsibilities</label>
                        <textarea id='responsibility' />
                    </div>
                    <div>
                        <label htmlFor="dateFrom">Start Date</label>
                        <input type="text" id='dateFrom' />
                    </div>
                    <div>
                        <label htmlFor="dateTo">End Date</label>
                        <input type="text" id='dateTo' />
                    </div>
                </div>

                <div className='buttons'>
                    <button className='editBtn'>Edit</button>
                    <button className='submitBtn'>Submit</button>
                </div>
            </div>
        </div>
    )
}