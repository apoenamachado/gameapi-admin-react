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
  addStudio
} from '../../modules/studio'

class StudiosAddView extends Component {

  constructor(props) {
    super(props);
  }

  state = { 
    id: '', 
    name: '', 
    slug: '', 
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
    console.log('componentDidMount')
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidUpdate( prevProps, prevState, snapshot){
    // Toda vez
    if(prevProps.location.pathname !== this.props.location.pathname){
    }
  }

  enviar(){
    this.props.addStudio(this.state, this.props.token)
  }

  go(url){
    this.props.history.push(url)
  }

  render(){
    const { 
      id,
      name, 
      slug, 
      description, 
      image,
    } = this.state
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

            <Segment >
              <Form onSubmit={this.handleSubmit} loading={false}>

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
                <label>Slug</label>
                <Form.Input
                    placeholder='Slug'
                    name='slug'
                    value={slug}
                    onChange={this.handleChange}
                  />
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                <Form.Input
                    placeholder='description'
                    name='description'
                    value={description}
                    onChange={this.handleChange}
                  />
              </Form.Field>

              <Form.Field >
                <label>Image</label>
                <input type="file" name="image" onChange={this.handleChangeFile} />
                
              </Form.Field>
              <Form.Button content='Submit' />

              </Form>

              </Segment>

            {/*
            <strong>onChange:</strong>
            <pre>{JSON.stringify({ name, slug, description, image }, null, 2)}</pre>
            <strong>onSubmit:</strong>
            <pre>{JSON.stringify(this.state)}</pre>
            */}

            </Grid.Column>
          </Grid>
        </Container>   

      </div>
    );

  }
 }

 const mapStateToProps = ({ user }) => ({
  //games: games.games,
  token: user.token,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addStudio,
      changePage: () => push('/studio')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudiosAddView)

