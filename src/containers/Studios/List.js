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
  Divider
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { Route, Link } from 'react-router-dom'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  getStudioList
} from '../../modules/studio'

// Apenas para adicionar randomicamente
const studiosTemp = [
  {id:1, name: "Studio 1", description: 'Resumo estúdio 1', image:'https://gizblog.it/wp-content/uploads/2017/11/marvel_logo.jpg' },
  {id:2, name: "Studio 2", description: 'Resumo estúdio 2', image:'https://gizblog.it/wp-content/uploads/2017/11/marvel_logo.jpg' },
  {id:3, name: "Studio 3", description: 'Resumo estúdio 3', image:'https://gizblog.it/wp-content/uploads/2017/11/marvel_logo.jpg' }
];


class StudiosListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemsPerRow:3
    };
  }

  componentDidMount(){
    // Uma vez
    //this.props.setGames( gamesTemp[(this.props.match.params.id-1)] )  
    this.props.getStudioList(this.props.token)
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
      this.props.getStudioList(this.props.token)
      //this.props.setGames( gamesTemp[(this.props.match.params.id-1)] )  
    }
    //let a = studiosTemp[this.props.match.params.id-1]
    //console.log('componentDidUpdate:', a)
  }

  go(url){
    this.props.history.push('/studios'+ url)
  }

  render(){
    return (
      <div>
       <Container>

      <Grid columns={1}  stackable>
        <Grid.Column stretched width={16}>
        
        <Segment >
          <Header floated='left'>
            <Icon name='gamepad' />
            <Header.Content>
              Studios
            <Header.Subheader>Manage your Studios</Header.Subheader>
            </Header.Content>
          </Header>

            <Button
              onClick={()=>{ this.go('/add') }}
              /*
              onClick={ ()=> {
                this.props.addGame( gamesTempAdd[(Math.floor(Math.random() * 5))] )}
              }
              */
              floated='right'
              //size="mini"
              color='blue'
              content='Add New'
              icon='add'
              labelPosition='left'
            />

          <Button.Group floated='right' >
            <Button onClick={()=>{this.setState({itemsPerRow:2})}}>2</Button>
            <Button.Or text='/' />
            <Button onClick={()=>{this.setState({itemsPerRow:3})}}>3</Button>
          </Button.Group>
          
        </Segment>

          <Card.Group itemsPerRow={this.state.itemsPerRow}>

            {this.props.studios.map((studio, index) => (
              <Card 
                key={`game-${index}`}
                to={`/studio/${studio.id}`} 
                as={Link}
                raised 
                >
                <Image src={studio.image} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{studio.name}</Card.Header>
                  {/*<Card.Meta>Cadastrado em {game.date}</Card.Meta>*/}
                  <Card.Description>
                  {studio.description}
                  </Card.Description>
                </Card.Content>
                {/*
                <Card.Content extra>
                  <Icon name='download' />10 Donwloads
                </Card.Content>
                */}
              </Card>
              ))}
          </Card.Group>


          
          </Grid.Column>
        </Grid>
        </Container>   


      </div>
    );

  }
 }

 const mapStateToProps = ({ user, studio }) => ({
  token: user.token,
  studios: studio.studios
  //isAdd: games.isAdd,
  //isRemove: games.isRemove
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getStudioList,
      //addGame,
      //addGameAsync,
      //removeGame,
      //removeGameAsync,
      changePage: () => push('/studio')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudiosListView)

