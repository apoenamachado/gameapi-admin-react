import React, {Component, createRef} from 'react';
import {
  Container,
  Header,
  Segment,
  Divider,
  Loader,
  Form,
  Label,
  Input,
  Message,
  Button
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { Route } from 'react-router-dom'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  updateGame,
  getGameToken
} from '../../modules/game'

const API_URL = process.env.REACT_APP_API_URL
const API_DOCS = API_URL+'/api-docs'

class ApiView extends Component {

  // TODO: remover esse loading, deixar somente na index
  constructor(props) {
    super(props);
    this.state = {
      token:null,
      loading:false,
      copy_color:'violet',
      copy_text:'Copy'
    };
  }

  apiKeyRef = createRef()

  componentDidMount(){
    this.getGameToken()
  }

  componentDidUpdate( prevProps, prevState, snapshot){
    /*
    if(prevProps.location.pathname !== this.props.location.pathname){
      this.getStudio()
    }
    */
  }

  getGameToken(){
    this.setState({loading:true})  

    this.props.getGameToken({id:this.props.game.id}, this.props.token, (dados)=>{
      this.setState({
        token:dados[0].key, // recebe uma lista com um token
        loading:false
      }
      )  
    },
    (err)=>{
      console.log('GetGame CallbackError: ', err)
      this.setState({loading:false})
      //this.props.history.goBack()
    }) 
  }

  copyToClipboard = (e) => {
    //navigator.clipboard.writeText(e.target.value)
    navigator.clipboard.writeText(this.state.token)

    this.apiKeyRef.current.focus()
    this.setState({
      copy_color:'green',
      copy_text:'Copied'
    })
    
    setTimeout(() => {
      this.setState({
        copy_color:'violet',
        copy_text:'Copy'
      })
    }, 500);
  };

  generateToken = ()=> {
    this.setState({loading:true})
    this.props.updateGame(this.props.game, this.props.token, 
      (data)=>{
        if(data){
          this.getGameToken()
        }
      }, 
      (err)=>{
        this.setState({loading:false})
      })
  }
  
  go(url){
    this.props.history.push(url)
  }

  render(){
    if(this.state.loading){
      return(
        <Segment placeholder basic>
          <Loader active />
        </Segment>
      )
    }else{
      return (
        <div>
        <Container style={{marginTop:'1em'}}>                
          <Header as='h3' floated='left'
              icon='boxes'
              content={'API Access'}
              subheader="Information about your game's API access"
            />
            <Divider clearing />

            <Message
              warning
              icon='key'
              header='API Key Warning.'
              content={
              <p>
                This game API key allows you to make requests to the <b><a href={API_URL} target="_blank">{API_URL}</a></b> to programmatically obtain information about your game. The key provides access to various parts of your account, so you should treat it as a password.
              </p>
            }
            />

          {this.state.token?
            <Segment>
              <Form>
                <Form.Field>
                  <Input
                    ref={this.apiKeyRef} 
                    label='API Key'
                    readOnly
                    action={{
                      color: this.state.copy_color,
                      labelPosition: 'right',
                      icon: 'copy',
                      content: this.state.copy_text,
                      onClick:this.copyToClipboard
                    }}
                    defaultValue={this.state.token}
                    onClick={this.copyToClipboard}
                    
                    />
                </Form.Field>

              </Form>
            </Segment>

            :
            <Segment>
              <Form>
                <Form.Field>
                  <Input
                    label='API Key'
                    readOnly
                    action={{
                      color: this.state.copy_color,
                      labelPosition: 'right',
                      icon: 'copy',
                      content: 'Create New Token',
                      onClick:this.generateToken
                    }}
                    defaultValue='No yoken'                    
                    />
                </Form.Field>
              </Form>
            </Segment>
            }
        
          </Container>   
        </div>
      )
    }
  }
 }

 const mapStateToProps = ({ user, studio, game }) => ({
  token: user.token,
  studio: studio.studio,
  game:game.game
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateGame,
      getGameToken,
      changePage: () => push('/game')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiView)




