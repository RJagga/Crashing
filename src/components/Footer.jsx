import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <>
        <Dabba>
            <div>
                <p>
                    <strong>Samadhiya, Narendra Kumar</strong><br/>
                    Professor<br/>
                    Specialization: Geotechnical Engineering<br/>
                    Room No : 303-A,B<br/>
                    Indian Institute of Technology Roorkee,<br/>
                    Roorkee, Uttrarakhand, 247667
                    <a href="mailto:narendra.samadhiya@ce.iitr.ac.in">narendra.samadhiya@ce.iitr.ac.in</a>
                    <a href="tel:91-1332-285467">91-1332-285467</a>
                </p>
                
                
            </div>
            <img src="src\assets\footer_logo.png" alt="" />
        </Dabba>
    </>
  )
}

const Dabba = styled.div`
    color:white;
    background-color:black;
    display:flex;
    text-align:left;
    justify-content:space-around;
    align-items:center;
    padding:50px;
    a{
        display:block;
        color:white;
    }
`;
export default Footer;