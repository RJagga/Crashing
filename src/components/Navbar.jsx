import styled from "styled-components";

const Navbar = (props) =>{
  return(
    <Nav>
      <Logo>
        <img src="CPM Logo.svg" alt="CPM"/>
      </Logo>
      <NavMenu>
        <a href="/">Home</a>
        <a href="/theory">Theory</a>
        <a href="/about">About</a>
      </NavMenu>
    </Nav>
  )
};

const Nav = styled.nav`
  height: 5vh;
  // margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 36px;
  
`;

const Logo = styled.a`
  position: absolute;
  left: 50px;
  padding: 0;
  width: 80px;
  max-height: 50px;
  font-size: 0;
  display: inline-block;

  img{
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: no-wrap;
  a{
    display: inline-block;
    align-items: center;
    padding: 0 70px;
    color: black;
  }
`;
export default Navbar;