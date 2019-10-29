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
  login,
  logout
} from '../../modules/user'

class LoginView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loadingLogin:false,
      loadingSignup:false,
      username:'teste',
      email:'',
      password:'testeteste',
      token: null
    };

    console.log('API_URL', process.env.REACT_APP_API_URL)
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  go(url){
    this.props.history.push(url)
  }

  login(){
    let that = this
    this.setState({loadingLogin:true})

    this.props.login( this.state.username, this.state.password, (success)=>{
      this.setState({loadingLogin:false})
      if(success){
        this.go('/studios/list')
      }else{
        this.go('/')  
      }
    })
  }

  signUp(){
    let that = this
    this.setState({loadingSignup:true})
    setTimeout(() => {
      this.setState({loadingSignup:false})
    }, 300);

    /*
    this.props.login( this.state.username, this.state.password, (success)=>{
      this.setState({loading:false})
      if(success){
        this.go('/studios/list')
      }else{
        this.go('/')  
      }
    })
    */
  }

  render(){

    return (
      <div>
        <Segment
          //basic
          //text
          size='huge'
          inverted
          color='violet'
          textAlign='center'
          style={{ minHeight: 100, padding: '0em 0em' }}
          vertical          
        >
          <Container>
          </Container>
        </Segment>  
        
        <Container style={{ marginTop: '-5.5em' , marginBottom:'3em'}}>

              <Segment placeholder stackable style={{padding:'3em'}} raised>
              <Grid columns={2}  stackable>
                <Grid.Column>

                <Header as='h3' 
                  //primary
                  textAlign='center' 
                  content='Sign Up'
                  />

                <Form loading={this.state.loadingSignup}>

                    <Form.Input
                      icon='email'
                      iconPosition='left'
                      label='Email'
                      placeholder='Email'
                      name='email'
                      onChange={this.handleChange}
                      />

                    <Form.Input
                      icon='user'
                      iconPosition='left'
                      label='Username'
                      placeholder='Username'
                      name='username'
                      onChange={this.handleChange}
                      />

                    <Form.Input
                      icon='lock'
                      iconPosition='left'
                      label='Password'
                      placeholder='Password'
                      type='password'
                      name='password'
                      onChange={this.handleChange}
                    />
          
                    <Button content='Sign up' fluid size='large' type="submit" onClick={ ()=> { this.signUp() } } icon='signup' />
                  </Form>


                </Grid.Column>
                <Grid.Column>

                <Header as='h3' 
                  //color='violet'
                  textAlign='center' 
                  content='Log-in'
                  />

                  <Form loading={this.state.loadingLogin}>
                    <Form.Input
                      icon='user'
                      iconPosition='left'
                      label='Username'
                      placeholder='Username'
                      name='username'
                      onChange={this.handleChange}
                      />
                      
                    <Form.Input
                      icon='lock'
                      iconPosition='left'
                      label='Password'
                      placeholder='Password'
                      type='password'
                      name='password'
                      onChange={this.handleChange}
                    />
          
                    <Button content='Login' color='violet' fluid size='large' type="submit" onClick={ ()=> { this.login() } } />
                  </Form>
                </Grid.Column>
              </Grid>
          
              <Divider vertical>Or</Divider>
            </Segment>
          </Container>
      </div>
    );


    return(
      <div>
      <Container style={{ marginTop: '3em' }} >
      <Segment placeholder basic >
      <Grid columns={2}  stackable>
        <Grid.Column>


          <Form loading={this.state.loadingLogin}>
            <Form.Input
              icon='user'
              iconPosition='left'
              label='Username'
              placeholder='Username'
              name='username'
              onChange={this.handleChange}
              />
              
            <Form.Input
              icon='lock'
              iconPosition='left'
              label='Password'
              placeholder='Password'
              type='password'
              name='password'
              onChange={this.handleChange}
            />
  
            <Button content='Login' primary fluid size='large' type="submit" onClick={ ()=> { this.login() } } />
          </Form>
        </Grid.Column>
  
        <Grid.Column verticalAlign='middle'>
          <Button content='Sign up' icon='signup' size='big' />
        </Grid.Column>
      </Grid>
  
      <Divider vertical>Or</Divider>
    </Segment>
    </Container>  
    </div>
    )

    return (
      <div>
        <Container style={{ marginTop: '3em' }}>
          <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='blue' textAlign='center'>
                <Image src='/logo192.png' /> Log-in to your account {this.props.token}
              </Header>

              <Form loading={this.state.loadingLogin} size='large'>
                <Segment stacked>
                  <Form.Input 
                    fluid icon='user' 
                    iconPosition='left' 
                    placeholder='E-mail address' 
                    onChange={this.handleChange}
                    />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    onChange={this.handleChange}
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
          </Container>
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
      login,
      logout
      //changePage: () => push('/index')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView)

