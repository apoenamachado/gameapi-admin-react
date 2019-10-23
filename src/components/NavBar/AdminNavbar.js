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

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  logout
} from '../../modules/user'

import {
  listStudio
} from '../../modules/studio'

class AdminNavbar extends React.Component {
    constructor(props) {
        super(props);
        console.log('NavBar:', this.props)
    }

  options = [
    { key: 'user', text: 'Account', icon: 'user' ,  onClick: ()=>{ console.log('Account')}},
    { key: 'settings', text: 'Settings', icon: 'settings',  onClick: ()=>{ console.log('Settings')}},
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out', onClick: ()=>{
      this.props.logout(()=>{ 
        console.log('callback logout: ')
        })
      } 
    }
  ]

  trigger = (
    <span>
      <Image avatar src='https://yt3.ggpht.com/a/AGF-l79zD-Uy3Xe772-Np3NlVGHWTTR1JN2EU7P8tA=s900-c-k-c0xffffffff-no-rj-mo' /> Apoena Machado
    </span>
  )

  componentDidMount(){
    this.props.listStudio(this.props.token)
  }

  render() {
    return (
      <>
        <Menu stackable >
            <Menu.Item header>
                <Link to="/" style={{color:'#000'}} >GAMEAPI</Link>
            </Menu.Item>

            <Dropdown item text='Studios'>
                <Dropdown.Menu >
                    <Dropdown.Item to="/studios/list" as={Link} text="Studios"/>
                    <Dropdown.Divider />
                    {this.props.studios.map((studio, index) => (
                      <Dropdown.Item 
                        to={'/studio/'+studio.id} as={Link} 
                        text={studio.name}
                        icon='game'
                      />
                    ))}
                </Dropdown.Menu>
            </Dropdown>   

            <Menu.Menu position='right'> 

            <Dropdown item
              trigger={this.trigger}
              options={this.options}
              pointing='top left'
              icon={null}
              />

            </Menu.Menu>
        </Menu>
      </>
    );
  }
}

const mapStateToProps = ({ user, studio }) => ({ 
  token: user.token,
  studios: studio.studios
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout,
      listStudio
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminNavbar)
