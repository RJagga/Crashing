import React from 'react'
import styled from 'styled-components';
import { useNavigate} from 'react-router-dom';

const Home = () => {
  const navigateTo = useNavigate();
  return (
    <>
    <Dabba>
        <div>
        <h1>Construction Planning <br/>and Management</h1>
        <p>planning, monitoring and controlling of all aspects of a <br />
        project to achieve the project objectives on time and to<br/>
        the specified  cost, quality and performance.</p>
        <button onClick={()=>{window.scrollTo(0,800)}}>Explore Now</button>
        <a href='/about'>Know More</a>
        </div>
        <img src="src\assets\landing_page.png" alt="" />
    </Dabba>
    <Project>
      <div>
        <h2>Crashing</h2>
        <p>
          Crashing, in the context of project management, refers to the strategy of reducing the total duration of a project 
          by allocating additional resources or effort to critical activities. 
          This is done with the aim of completing the project sooner than originally planned or meeting a deadline that has become more stringent.
        </p>
        <button onClick={()=>navigateTo('/crashinput')}>Get Started</button>
      </div>
      <img src="src\assets\landing_page_crashing.png" alt="CRASHING" />
    </Project>
    {/* <Project>
      <div>
        <h2>PN Diagram</h2>
        <p>
          A PN diagram, also known as a Program Network diagram, is a graphical representation used in project management 
          to visualize the sequence of activities and their dependencies within a project.
        </p>
        <button>Get Started</button>
      </div>
      <img src="src\assets\landing_page_pn.png" alt="CRASHING" />
    </Project> */}
    </>
  )
}

const Project = styled.div`
  display:flex;
  max-width:75%;
  margin:auto;
  text-align:left;
  background-color:white;
  padding:40px;
  border-radius:30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom:50px;
  button{
    border-radius: 58px;
    color:white;
    background-image: linear-gradient(to right, #239868,#78BFA3);
  }
`;
const Dabba = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-around;
    height:95vh;
    background-color:#239868;
    color: white;
    text-align:left;
    button{
      color: white;
      background-color:#F5BD38;
    }
    a{
      margin-left:20px;
      color: white;
    }
    margin-bottom:60px;
`;     


export default Home;