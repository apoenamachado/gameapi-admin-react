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
  Message,
  Form,
  Segment,
  Divider
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { Route } from 'react-router-dom'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  updateGame
} from '../../modules/game'


class GameSettingsView extends Component {

  constructor(props) {
    super(props);
  }

  state = { 
    loading:false, 
    message:false,
    error:false,
    studio: '', 
    id: '', 
    name: '', 
    resume: '', 
    genre: '', 
    description: '', 
    image: ''
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleChangeFile = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = () => {
    this.enviar()
  }

  componentDidMount(){
    this.setState(this.props.game)
  }

  componentDidUpdate( prevProps, prevState, snapshot){
    // Toda vez
    if(prevProps.location.pathname !== this.props.location.pathname){
      this.setState(this.props.game)
    }
  }

  enviar(){
    this.setState({loading:true, message:false, error:false})
    this.props.updateGame(this.state, this.props.token, 
      (data)=>{
        if(data){
          console.log('Sucesso: ', data)
          this.setState({message:true, loading:false})
          //this.go('/studio/list')
          //this.reset()
        }
      }, 
      (err)=>{
        this.setState({message:false, error:true, loading:false})
      })
  }

  go(url){
    this.props.history.push(url)
  }

  render(){
    const { 
      id,
      name, 
      resume,
      genre,
      description, 
      image,
    } = this.state
    return (
      <div>
       <Container>
        <Grid columns={1}  stackable>
          <Grid.Column stretched width={16}>
            
              <Header as='h2' floated='left'
                icon='setting'
                content={'Settings: '+ this.props.game.name}
                subheader='Manage your Game'
              />
            

            <Segment>

              {this.state.message? 
                <Message
                  success
                  header='Game successfully saved!'
                  content='Select studio from the list to manage it.'/>
                :null}

              {this.state.error? 
                <Message
                  error
                  header='Error saving studio!'
                  content='Check the fields and try again.'/>
                :null}

              <Form onSubmit={this.handleSubmit} loading={this.state.loading}>

              <Form.Field>
                <label>Name</label>
                <Form.Input
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={this.handleChange}
                  />
              </Form.Field>

              <Form.Field>
                <label>Resume</label>
                <Form.Input
                    placeholder='Resume'
                    name='resume'
                    value={resume}
                    onChange={this.handleChange}
                  />
              </Form.Field>

              <Form.Field>
                <label>Genre</label>
                <Form.Input
                    placeholder='Genre'
                    name='genre'
                    value={genre}
                    onChange={this.handleChange}
                  />
              </Form.Field>

              <Form.Field>
                <label>Description</label>
                <Form.TextArea
                    placeholder='description'
                    name='description'
                    value={description}
                    onChange={this.handleChange}
                  />
              </Form.Field>

              <Form.Field fluid>
                <label>Image</label>
                <input type="file" name="image" onChange={this.handleChangeFile} />


                {this.props.game.image?
                  <p style={{padding:'1em'}}>
                    <a href={this.props.game.image} target='_blank'>
                      <Image src={this.props.game.image} size='medium' wrapped rounded />
                    </a>
                  </p>
                :null}
                
              </Form.Field>
              <Form.Button content='Save' primary floated='right' size='large' />

              </Form>

              </Segment>

            </Grid.Column>
          </Grid>
        </Container>   
      </div>
    );

  }
 }

 const mapStateToProps = ({ user, studio, game }) => ({
  token: user.token, 
  studio: studio.studio,
  game: game.game
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateGame,
      changePage: () => push('/studio')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameSettingsView)

