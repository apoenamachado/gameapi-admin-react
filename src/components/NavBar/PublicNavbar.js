import React from "react";
import { Link } from "react-router-dom";
import {
    Button,
    //Container,
    Dropdown,
    Menu,
  } from 'semantic-ui-react'
  import 'semantic-ui-css/semantic.min.css'

class PublicNavbar extends React.Component {
    constructor(props) {
        super(props);

        console.log('NavBar:', this.props)
    }

  render() {
    return (
      <>
        <Menu stackable >

            <Menu.Item header>
                <Link to="/" style={{color:'#000'}} >GAMEAPI</Link>
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
                <Menu.Item>
                    <Link to="/login">Login</Link>
                </Menu.Item>
                <Menu.Item>
                    <Button primary>Cadastro</Button>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
      </>
    );
  }
}
export default PublicNavbar;