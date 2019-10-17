import React, {Component} from 'react';
import {
  Button,
  Container,
  Header,
  Grid,
  Image,
  Card,
  Icon,
  Feed,
  Menu,
  Segment,
  Divider,
  Form,
  Message
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  addGame,
  addGameAsync,
  removeGame,
  removeGameAsync
} from '../../modules/games'


// Apenas para adicionar randomicamente
const gamesTemp = [
  { name: "Game Name 1", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://www.mmotube.net/wp-content/uploads/2017/02/Preparing-For-Plays-SkySaga.png' },
  { name: "Game Name 2", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://i.ytimg.com/vi/Xdes4VYvmlI/maxresdefault.jpg'  },
  { name: "Game Name 3", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJ920hatZfWjxhbJ7BqV5TupEewz368J-4cQbJnyR1FvXY17j'  },
  { name: "Game Name 4", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://www.selectgame.com.br/wp-content/uploads/2012/12/The-Legend-of-Heroes-Trails-in-the-Sky-Wallpaper.jpg'  },
  { name: "Game Name 5", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://s2.glbimg.com/UDZ7zPZiiIgpNk4Frwq1OBNL33Y=/0x0:592x370/984x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2013/05/20/c5.jpg'  },
  { name: "Game Name 6", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/125670607/original/b9d2b7682aaf776d570f8396ecc463eb10b2ba96.jpg'  }
];

class LoginView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username:null,
      password:null,
      token: null
    };
  }

  setUser(value){
    console.log('setUser: ', value)
    this.setState({username:value})
  }

  setPassword(value){
    console.log('setPassword: ', value)
    this.setState({password:value})
  }

  go(url){
    this.props.history.push(url)
  }

  login(){

    console.log('Login', this.state.username, this.state.password)

    let that = this

    fetch('https://apoena.org/api-token-auth/', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        username:this.state.username,
        password:this.state.password
      })
    }).then(function(response) {
      console.log('Response: ', response)
      if(response.ok){
        return response.json();
      }
      return false;
    }).then(function(data) {
      console.log('Login token: ', data, data.token)
      if(data && data.token){
        that.go('/components/cards')
      }else{
        that.go('/')
      }
    }).catch(function (err) {
      console.log('Login error: ', err)
  })

  }

  render(){
    return (
      <div>
 <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo192.png' /> Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input 
            fluid icon='user' 
            iconPosition='left' 
            placeholder='E-mail address' 
            onChange={a => this.setUser(a.target.value)}/>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={e => this.setPassword(e.target.value)}
          />

          <Button color='teal' fluid size='large' type="submit" onClick={ ()=> { this.login() } }>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
      </div>
    );

  }
 }

 const mapStateToProps = ({ games }) => ({
  games: games.games,
  isAdd: games.isAdd,
  isRemove: games.isRemove
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addGame,
      addGameAsync,
      removeGame,
      removeGameAsync,
      changePage: () => push('/studio')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView)

