import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  //Container,
  Dropdown,
  Image,
  Menu,
  Header,
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

  componentDidUpdate( prevProps, prevState, snapshot){
    if(prevProps.studio !== this.props.studio){
      //this.props.listStudio(this.props.token)  
      console.log('Atualiza AdminNavbar: ', this.props.studios, this.props.studio)
    }
  }

  render() {
    return (
      <>
        <Menu stackable >
            <Menu.Item header>
                <Link to="/studios/list" style={{color:'#000'}} >GAMEAPI</Link>
            </Menu.Item>

            {this.props.studio?
              <Dropdown item text={this.props.studio.name}>
                <Dropdown.Menu >
                    <Dropdown.Item to={'/studio/'+this.props.studio.id} as={Link} text="Dashboard" icon='line graph layout'/>
                    <Dropdown.Item to={'/studio/'+this.props.studio.id+ '/games'} as={Link} text="Games" icon='game layout'/>
                    <Dropdown.Item to={'/studio/'+this.props.studio.id+ '/settings'} as={Link} text="Settings" icon='setting layout'/>
                    <Dropdown.Divider />
                    <Dropdown.Item to={'/studio/'+this.props.studio.id+ '/game-add'} as={Link} text="Add New Game" icon='add'/>
                </Dropdown.Menu>
              </Dropdown> 
            :null}

            {this.props.game?  
            <Menu.Item>
                      <Header as='h3' 
                      //icon='game'
                      image={this.props.game.image}
                      content={this.props.game.name + ' Game'}
                      //subheader={this.props.game.resume}
                    />  
            </Menu.Item>
            :null}

            <Menu.Menu position='right'> 
            <Dropdown item text={this.trigger}
              //trigger={this.trigger}
              //options={this.options}
              //pointing='top left'
              >
                <Dropdown.Menu >
                  <Dropdown.Item to={'/studios/add'} as={Link} text="Add New Studio" icon='add'/>
                  <Dropdown.Divider />
                  <Dropdown.Item to={'/studios/add'} as={Link} text="Account" icon='user'/>
                  <Dropdown.Item to={'/studios/add'} as={Link} text="Settings" icon='settings'/>
                  <Dropdown.Divider />
                  <Dropdown.Item text="Sign Out" icon='sign out' 
                    onClick={ ()=>{
                      this.props.logout(()=>{})
                    }}/>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
        </Menu>
      </>
    );
  }
}

const mapStateToProps = ({ user, studio, game }) => ({ 
  token: user.token,
  studios: studio.studios,
  studio: studio.studio,
  game: game.game
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
