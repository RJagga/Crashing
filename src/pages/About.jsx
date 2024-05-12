import React from 'react'
import styled from 'styled-components';
import samadhiya from '../assets/Samadhiya_Sir.png';
import rishab from '../assets/rishab_pp.png';
import sahil from '../assets/sahil_pp.jpg';
import raushan from '../assets/raushan_pp.jpg';
import hardik from '../assets/hardik_pp.jpg';
const About = () => {
  return (
    <div>
        <AboutProf>
            <div>
                <div>
                    <h2>Narendra Kumar Samadhiya</h2>
                    <p>Professor, Indian Institute of Technology Roorkee</p>
                </div>
                <div>
                    <p>Specialization: Geotechnical Engineering<br/>Room no: 303-A,B<br/>narendra.samadhiya@ce.iitr.ac.in<br/>(O) 91-1332-285467 (R) 91-1332-285052</p>
                </div>
                <div>
                    <p>Areas of Interest: CPM</p>
                </div>
            </div>
            <img src={samadhiya} alt="image" />
        </AboutProf>

        <AboutStudents>
            <Student>
                <div>
                    <h3>Rishab Jagga</h3>
                    <p>
                        Bachelor of Technology<br/>
                        Civil Engineering<br/>
                        UG 3rd Year<br/>
                    </p>
                </div>
                <img src={rishab} alt="" />
            </Student>
            <Student>
                <div>
                    <h3>Sahil</h3>
                    <p>
                        Bachelor of Technology<br/>
                        Civil Engineering<br/>
                        UG 3rd Year<br/>
                    </p>
                </div>
                <img src={sahil} alt="" />
            </Student>
            <Student>
                <div>
                    <h3>Hardik Kumar Saini</h3>
                    <p>
                        Bachelor of Technology<br/>
                        Civil Engineering<br/>
                        UG 3rd Year<br/>
                    </p>
                </div>
                <img src={hardik} alt="" />
            </Student>
            <Student>
                <div>
                    <h3>Raushan Raj</h3>
                    <p>
                        Bachelor of Technology<br/>
                        Civil Engineering<br/>
                        UG 3rd Year<br/>
                    </p>
                </div>
                <img src={raushan} alt="" />
            </Student>
        </AboutStudents>
        <div>
            <p>
            The course revolves around the various activities encountered during the life  cycle of a civil engineering project. 
            It introduces the basic learning  requirements for the civil engineer project manager and makes the  appreciation for the qualitative nature of the construction project  management.
            The philosophy of the course is more on system approach contrary to majority of mechanics based subject. 
            Also, need for construction industry has  been emphasized. The art of construction has slowly developed into a science over the centuries.     
            Civil  engineers are involved from conception to physical realization of the project.
            <p/>Civil Engineer Project manager or construction manager has to interact with various field of specializations depending upon the type of the project. 
            A project manager involved in the construction of hospital has to interact with  medical professional.  
            Similarly, the construction of petroleum, refinery involves the complex interaction  with chemical engineer, mechanical engineer, electrical engineers.
            <p/>Economically building project accounts for around 60 to 70 percent of  construction project in a country. 
            But most of the constructions are  carried out in an unorganized way. In India, building construction  projects are very fragmented and majority of construction in rural and  semi urban area is carried out by non-engineering ways. 
            Building  construction in India is highly labour–intensive. 
            Most of the laborers  employed for building projects are semi-skilled and untrained. Uses  of heavy equipment are very rare. Building projects are governed by  many local as well as general laws, such as municipal laws, building  laws etc.
            </p>
        </div>
    </div>
  )
}


const Student = styled.div`
    display:flex;
    align-items:center;
    gap:50px;
    img{
        max-width: 150px;
        height: auto;
    }
`;

const AboutStudents = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content:space-around;
    text-align:left;
    max-width: 75%;
    margin:auto;
    padding:30px;
`;

const AboutProf = styled.div`
    display: flex;
    justify-content: space-around;
    align-items:center;
    text-align: left;
    background-color:rgba(120,191,163,0.25);
    border-radius: 16px;
    padding: 30px;
    max-width:75%;
    margin: 60px auto;
`;

export default About;