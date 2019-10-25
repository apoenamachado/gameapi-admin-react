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
  Divider,
  Message
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { Route } from 'react-router-dom'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  addStudio
} from '../../modules/studio'


import campos from './fields.json'

class StudiosAddView extends Component {

  constructor(props) {
    super(props);
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
    console.log('componentDidMount: ', this.props.match.params)
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidUpdate( prevProps, prevState, snapshot){
    if(prevProps.location.pathname !== this.props.location.pathname){
      // Toda vez
    }
  }

  reset(){
    this.setState({
      id:'',
      name:'',
      slug:'',
      description:'',
      image:'',
      loading:false
    })
  }

  enviar(){
    this.setState({loading:true, message:false, error:false})
    this.props.addStudio(this.state, this.props.token, 
      (data)=>{
        if(data){
          this.setState({message:true, loading:false})
          this.go('/studios/list')
          this.reset()
        }
      }, 
      (err)=>{
        this.setState({message:false, error:err, loading:false})
      })
  }

  go(url){
    this.props.history.push(url)
  }

  /**************************************************************
   * TODO:  Mover para arquivo centralizado
   **************************************************************/
  montaCampos(){
    let obj = campos.POST
    let _campos  = []
    let that = this
    Object.keys(obj).forEach(function(index){
      let temp = obj[index]
      temp.name = index
      _campos.push(temp)
    })
    return _campos.map( (field, index)=>{
      return that.campo(field)
    })
  }

  campo(field){
    if(!['uuid','id','url','created_at'].includes(field.name) ){
      switch (field.type) {
        case 'slug':
        case 'string':
            return(
              <Form.Field>
              <label>{field.label} Dinamico</label>
              <Form.Input
                  placeholder={field.label}
                  name={field.name}
                  value={this.state[field.name]}
                  onChange={this.handleChange}
                />
              </Form.Field>
            )
          break;
        case 'image upload':
            return(
              <Form.Field >
                <label>{field.name} Dinamico</label>
                <input type="file" name={field.name} onChange={this.handleChangeFile} />
              </Form.Field>
            )
          break;
        default:
          break;
      }
    }
  }

  erros(){
    let obj = this.state.error
    let _erros  = []
    Object.keys(obj).forEach(function(index){
      let temp = {name: index, msgs: obj[index][0]}
      _erros.push(temp)
    })
    return _erros.map( (item, index)=>(
      <p> - {item.name}: {item.msgs}</p>
    ))
  }
  /**************************************************************
   * /Mover para arquivo centralizado
   **************************************************************/

  render(){
    const fields = campos.POST;
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
                  Studio
                <Header.Subheader>Manage your Studio</Header.Subheader>
                </Header.Content>
              </Header>
            </Segment>

            <Segment >

              {
                this.state.message? 
                <Message
                  success
                  header='Studio successfully added!'
                  content='Select studio from the list to manage it.'/>
                :null
              }

              {
                this.state.error? 
                <Message
                  error
                  header='Error adding studio!'
                  //content='Check the fields and try again.'
                  content={this.erros()}
                  />
                :null
              }

              <Form onSubmit={this.handleSubmit} loading={this.state.loading}>

                {this.montaCampos()}

                {/*
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

                <Form.Field >
                  <label>Image</label>
                  <input type="file" name="image" onChange={this.handleChangeFile} />
                </Form.Field>
                */}

                <Form.Button content='Save' primary floated='right' size='large' />
                </Form>
              </Segment>

              {/*  
              <strong>onChange:</strong>
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

