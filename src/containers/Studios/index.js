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

import { Link, BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Telas
import StudiosListView from './List'
import StudiosAddView from './Add'


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

class StudiosView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemsPerRow:3
    };
  }

  componentDidMount(){
    // Uma vez
    //this.props.setGames( gamesTemp[(this.props.match.params.id-1)] )  
    //this.props.setGames( gamesTemp[(this.props.match.params.id-1)] )  
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

      <Container style={{ marginTop: '3em' }}>

      <Grid columns={2}  stackable>

        <Grid.Column width={4}>

          <Menu pointing vertical>
            <Menu.Item
              name='List'
              active={false}
              onClick={()=>{ this.go('/list') }}
              icon='list layout'
            />
            <Menu.Item
              name='Add'
              active={false}
              onClick={()=>{ this.go('/add') }}
              icon='add'
            />
          </Menu>
          
        </Grid.Column>
        <Grid.Column stretched width={12}>

            <Switch>
              <Route exact path="/studios/list" component={StudiosListView} />
              <Route exact path="/studios/add" component={StudiosAddView} />
              <Route exact path="/studios/:id/edit" component={StudiosListView} />
            </Switch>
          
          </Grid.Column>
        </Grid>

      </Container>
      </div>
    );

  }
 }

 const mapStateToProps = ({ games, user }) => ({
  games: games.games,
  isAdd: games.isAdd,
  isRemove: games.isRemove,
  token: user.token,
  isAuthenticated:user.isAuthenticated
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
)(StudiosView)

