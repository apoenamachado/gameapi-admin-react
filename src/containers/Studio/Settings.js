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
  updateStudio
} from '../../modules/studio'


class StudioSettingsView extends Component {

  constructor(props) {
    super(props);
    /*
    this.state = {
      loading:false, 
      message:false,
      error:false,

      id: null, 
      name: null, 
      slug: null, 
      description: null, 
      image: null
    };
    */
  }

  state = { 
    loading:false, 
    message:false,
    error:false,
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
    console.log('this.props:', this.props)
    this.setState(this.props.studio)
    console.log('this.state:', this.state)
  }

  componentDidUpdate( prevProps, prevState, snapshot){
    // Toda vez
    if(prevProps.location.pathname !== this.props.location.pathname){
      this.setState(this.props.studio)
    }
  }

  enviar(){

    console.log('this.state: ', this.state)
    this.setState({loading:true, message:false, error:false})
    this.props.updateStudio(this.state, this.props.token, 
      (data)=>{
        if(data){
          console.log('Sucesso: ', data)
          this.setState({message:true, loading:false})
          //this.go('/studio/list')
          //this.reset()
        }
      }, 
      (err)=>{
        err.json().then(function(data) {
          console.log('Erro: ', data.name)
        })
        this.setState({message:false, error:true, loading:false})
        //this.reset()
      })
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
              <Header as='h3' floated='left'
                icon='setting'
                content={'Settings: '+ this.props.studio.name}
                subheader='Manage your Studio'
              />
            </Segment>

            <Segment>

              {this.state.message? 
                <Message
                  success
                  header='Studio successfully saved!'
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


                {this.props.studio.image?
                  <p style={{padding:'1em'}}>
                    <a href={this.props.studio.image} target='_blank'>
                      <Image src={this.props.studio.image} size='medium' wrapped rounded />
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

 const mapStateToProps = ({ user, studio }) => ({
  token: user.token, 
  studio: studio.studio
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateStudio,
      changePage: () => push('/studio')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudioSettingsView)

