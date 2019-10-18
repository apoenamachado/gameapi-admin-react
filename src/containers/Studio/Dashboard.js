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


class StudioDashboardView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemsPerRow:3
    };
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
      //
    }
    //console.log('componentDidUpdate:', a)
  }

  go(url){
    this.props.history.push(url)
  }

  render(){
    return (
      <div>
       <Container>

      <Grid columns={1}  stackable>
        <Grid.Column stretched width={16}>
        
          <Segment size='mini'>

            <Header as='h1' floated='left'>
              <Icon name='gamepad' />
              <Header.Content>
                Dashboard {studiosTemp[this.props.match.params.id-1].name}
              <Header.Subheader>See statistics for your Studio</Header.Subheader>
              </Header.Content>
            </Header>
          
            </Segment>
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
)(StudioDashboardView)

