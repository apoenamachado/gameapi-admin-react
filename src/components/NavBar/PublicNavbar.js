import React from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Container,
    Segment,
    Dropdown,
    Menu,
    Image,
    Icon
  } from 'semantic-ui-react'
  import 'semantic-ui-css/semantic.min.css'

// Images
const logoInverted = require('../../assets/images/logo-inverted.png')

class PublicNavbar extends React.Component {
    constructor(props) {
        super(props);
        console.log('NavBar:', this.props)
    }

  render() {
    const fixed = true;
    return (
      <>
        <Segment inverted attached color='violet' style={{border:'0px'}}>
        <Container >
        <Menu 
          color='violet'
          stackable
          //fixed={fixed ? 'top' : null}
          inverted={fixed}
          //pointing={fixed}
          secondary={fixed}
          size='large'
          style={{padding:'0.5em'}}
         >
          <Menu.Item header>
              <Link to="/" style={{}} >
                <Image src={logoInverted} wrapped size='tiny' /> 
              </Link>
               _{process.env.REACT_APP_AMBIENTE}
          </Menu.Item>

          <Menu.Item name='about' as={Link}  text="About" to="/about-us" />

          <Dropdown item text='Components'>
              <Dropdown.Menu>
                  <Dropdown.Item to="/components/tables" as={Link} text="Tables"/>
                  <Dropdown.Item to="/components/cards" as={Link} text="Cards"/>
                  <Dropdown.Item to="/components/labels" as={Link} text="Labels"/>
              </Dropdown.Menu>
          </Dropdown>              

          <Menu.Menu position='right'> 
              {/*
              <Menu.Item>
                  <Link to="/login"  >Login</Link>
              </Menu.Item>
              */}
              <Menu.Item >
                  <Button to="/login"  as={Link} color='blue'>
                    <Icon name='sign-in'></Icon>
                    Login 
                  </Button>
              </Menu.Item>
              
          </Menu.Menu>
        </Menu>
        </Container>
        </Segment>
      </>
    );
  }
}
export default PublicNavbar;