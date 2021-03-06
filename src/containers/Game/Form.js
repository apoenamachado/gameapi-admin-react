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
  Select,
  TextArea,
  Segment,
  Divider
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { Route } from 'react-router-dom'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import {
  addGame,
  updateGame
} from '../../modules/game'

// Campos
import campos from './fields.json'

// Exibe Imagem
const ImgCurrent = (props)=>{
    return(
      props.element.image?
        <p style={{padding:'1em'}}>
          <a href={props.element.image} target='_blank'>
            <Image src={props.element.image} size='medium' wrapped rounded />
          </a>
        </p>
      :null
    )
}   

class GameFormView extends Component {

  constructor(props) {
    super(props);
  }

  state = { 
    loading:false, 
    message:false,
    error:false,
    studio:'',
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
    this.state.id?this.update():this.add()
  }

  componentDidMount(){
    console.log('componentDidMount: ', this.props.match.params)
    this.setState({studio:this.props.studio.url})

    if(this.props.match.params.id){
      this.setState(this.props.game)
    }
  }

  componentDidUpdate( prevProps, prevState, snapshot){
    // Toda vez
    if(prevProps.location.pathname !== this.props.location.pathname){
      if(this.state.id){
        this.setState(this.props.game)
      }
    }
  }

  add(){
    this.setState({loading:true, message:false, error:false})
    this.props.addGame(this.state, this.props.token, 
      (data)=>{
        if(data){
          console.log(data)
          this.setState({message:true, loading:false})
          this.go(`/studio/${this.props.studio.id}/games`)
          //this.reset()
        }
      }, 
      (err)=>{
        this.setState({message:false, error:err, loading:false})
      })
  }

  update(){
    this.setState({loading:true, message:false, error:false})
    this.props.updateGame(this.state, this.props.token, 
      (data)=>{
        if(data){
          this.setState({message:true, loading:false})
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
            <Form.Field key={field.name} required={field.required}>
            <label>{field.label}</label>
            
            {field.max_length?
              <Form.Input
                error={this.errorItem(field.name)}
                placeholder={field.label}
                name={field.name}
                value={this.state[field.name]}
                onChange={this.handleChange}
              />
              :
              <Form.TextArea 
                error={this.errorItem(field.name)}
                placeholder={field.label}
                name={field.name}
                value={this.state[field.name]}
                onChange={this.handleChange}
              />
              }
            </Form.Field>
          )
          break;
        case 'choice': 
          return(
            <Form.Field key={field.name} required={field.required}>
            <label>{field.label}</label>
            <Select 
              error={this.errorItem(field.name)}
              placeholder={field.label} 
              name={field.name}
              options={this.choicesToSelect(field.choices)} 
              value={this.state[field.name]}
              onChange={this.handleChange}
              />
            </Form.Field>
          )
          break;
        case 'image upload':            
            return(
              <Form.Field 
                key={field.name} 
                error={this.errorItem(field.name)}
                required={field.required}>
                <label>{field.name}</label>
                <input type="file" name={field.name} onChange={this.handleChangeFile} />
                {this.state.id?<ImgCurrent element={this.props.game} />:null}
              </Form.Field>
            )
          break;
        default:
          break;
      }
    }
  }

  choicesToSelect(choices){
    let select = [];
    choices.map((item)=>{
      select.push(
        {
          key: item.value,
          value:item.value,
          text:item.display_name
        }
      )
    })
    return select
  }

  /*
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
  */

  errorItem(name){
    let obj = this.state.error
    if(!obj){
      return false
    }
    if(obj[name]){
      return { content: obj[name][0]}
    }
    return false
  }
  /**************************************************************
   * /Mover para arquivo centralizado
   **************************************************************/

  render(){
    return (
      <div>
       <Container style={{marginTop:'1em'}}>
       
            <Header as='h3' floated='left'
              icon='setting'
              content={'Game'}
              subheader='Manage your Game'
            />
            <Divider clearing />

            <Segment>
              {this.state.message? 
                <Message
                  success
                  header='Game successfully saved!'
                  content='Select game from the list to manage it.'/>
                :null}
              {this.state.error? 
              <Message
                error
                header='Error adding game!'
                content='Check the fields and try again.'
                //content={this.erros()}
                />
              :null
             }
              <Form onSubmit={this.handleSubmit} loading={this.state.loading}>
                <Form.Button content='Save' color='violet' floated='right' size='large' />
                {this.montaCampos()}  
                
              </Form>
              </Segment>
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
      addGame,
      updateGame,
      changePage: () => push('/studio')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameFormView)

