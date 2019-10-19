import React, {Component} from 'react';
import {
  Button,
  Container,
  Header,
  Grid,
  Form,
  Checkbox,
  Image,
  Card,
  Icon,
  Feed,
  Menu,
  Segment,
  Divider
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { Route } from 'react-router-dom'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  setGames,
  addGame,
  addGameAsync,
  removeGame,
  removeGameAsync
} from '../../modules/games'

// Apenas para adicionar randomicamente
const studiosTemp = [
  {id:1, name: "Studio 1", resume: 'Resumo estúdio 1', thumb:'https://gizblog.it/wp-content/uploads/2017/11/marvel_logo.jpg' },
  {id:2, name: "Studio 2", resume: 'Resumo estúdio 2', thumb:'https://gizblog.it/wp-content/uploads/2017/11/marvel_logo.jpg' },
  {id:3, name: "Studio 3", resume: 'Resumo estúdio 3', thumb:'https://gizblog.it/wp-content/uploads/2017/11/marvel_logo.jpg' }
];

class StudiosAddView extends Component {



  constructor(props) {
    super(props);
  }

  state = { 
    name: '', 
    resume: '', 
    thumb: '', 
    submittedName: '', 
    submittedResume: '' 
  }

  handleChange = (e, { name, value, thumb }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, resume, thumb } = this.state
    this.setState({ submittedName: name, submittedResume: resume })
  }

  componentDidMount(){
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentWillUpdate(){
    console.log('componentWillUpdate')
  }

  componentDidUpdate( prevProps, prevState, snapshot){
    // Toda vez
    if(prevProps.location.pathname !== this.props.location.pathname){
    }
  }

  go(url){
    this.props.history.push(url)
  }

  render(){
    const { 
      name, 
      resume, 
      submittedName, 
      submittedResume } = this.state
    return (
      <div>
       <Container>

      <Grid columns={1}  stackable>
        <Grid.Column stretched width={16}>
        
        <Segment >

          <Header as='h3' floated='left'>
            <Icon name='setting' />
            <Header.Content>
              Add Studio
            <Header.Subheader>Manage your Studio</Header.Subheader>
            </Header.Content>
          </Header>
          
          </Segment>



            <Form onSubmit={this.handleSubmit}>

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
          <Form.Button content='Submit' />

          </Form>
          <strong>onChange:</strong>
          <pre>{JSON.stringify({ name, resume }, null, 2)}</pre>
          <strong>onSubmit:</strong>
          <pre>{JSON.stringify({ submittedName, submittedResume }, null, 2)}</pre>

          </Grid.Column>
        </Grid>
        </Container>   


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
      setGames,
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
)(StudiosAddView)

