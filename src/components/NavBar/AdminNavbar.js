import React from "react";
import { Link } from "react-router-dom";
import {
    Button,
    //Container,
    Dropdown,
    Image,
    Menu,
  } from 'semantic-ui-react'
  import 'semantic-ui-css/semantic.min.css'

const options = [
  { key: 'user', text: 'Account', icon: 'user' },
  { key: 'settings', text: 'Settings', icon: 'settings' },
  { key: 'sign-out', text: 'Sign Out', icon: 'sign out' }
]

const trigger = (
  <span>
    <Image avatar src='https://react.semantic-ui.com/images/avatar/large/molly.png' /> Apoena Machado
  </span>
)

class AdminNavbar extends React.Component {
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

            <Dropdown item text='Studios'>
                <Dropdown.Menu>
                    <Dropdown.Item to="/studios/list" as={Link} text="Studios"/>
                    <Dropdown.Item to="/studio/1" as={Link} text="Súdio 1"/>
                    <Dropdown.Item to="/studio/2" as={Link} text="Súdio 2"/>
                    <Dropdown.Item to="/studio/3" as={Link} text="Súdio 3"/>
                </Dropdown.Menu>
            </Dropdown>   

            <Menu.Menu position='right'> 

            <Dropdown item
              trigger={trigger}
              options={options}
              pointing='top left'
              icon={null}
              />

            </Menu.Menu>
        </Menu>
      </>
    );
  }
}
export default AdminNavbar;