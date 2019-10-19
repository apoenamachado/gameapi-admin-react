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
  login
} from '../../modules/user'

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
    let that = this
    this.props.login( this.state.username, this.state.password, (success)=>{
      if(success){
        this.go('/studios/list')
      }else{
        this.go('/')  
      }
    })
  }

  render(){
    return (
      <div>
 <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='blue' textAlign='center'>
        <Image src='/logo192.png' /> Log-in to your account {this.props.token}
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

          <Button color='blue' fluid size='large' type="submit" onClick={ ()=> { this.login() } }>
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

 const mapStateToProps = ({ user }) => ({ 
  token: user.token
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login
      //changePage: () => push('/index')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView)

