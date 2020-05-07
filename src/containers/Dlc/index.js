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
  Divider,
  Loader,
  Dimmer
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { Link, BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Telas
import DlcFormView from './Form'
import DlcListView from './List'

import {
  listDlc
} from '../../modules/dlc'

class DlcView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading:false,
      itemsPerRow:3
    };
  }

  componentDidMount(){
    // Uma vez
    //this.props.setGames( gamesTemp[(this.props.match.params.id-1)] )  
    //this.getGame()
  }

  componentDidUpdate( prevProps, prevState, snapshot){
    if(prevProps.location.pathname !== this.props.location.pathname){
      //this.getGame()
    }
  }

  getGame(){
    this.setState({loading:true})  

    this.props.getGame({id:this.props.match.params.id}, this.props.token, (dados)=>{
      this.props.setCurrentGame(dados)
      this.setState({loading:false})  
    },
    (err)=>{
      console.log('GetGame CallbackError: ', err)
      this.setState({loading:false})  
      this.props.history.goBack()
    })

    /*
    let game = this.props.games.filter(row => row.id == this.props.match.params.id)
    setTimeout(() => {
      this.props.setCurrentGame(game[0])
      this.setState({loading:false})  
    }, 300); // Tempo de loading fake
    */
  }

  go(url){
    this.props.history.push(this.props.match.url + url)
  }

  render(){
    if(this.state.loading){
      return(
        <Container style={{ marginTop: '4em' }}>
          <Segment basic placeholder>
              <Loader active size='large'>Loading Dlc...</Loader>
          </Segment>
        </Container>
      )
    }else{
      return (
        <div>
          <Switch>            
            <Route exact path="/game/:gameId/dlc" component={DlcListView} />
            <Route exact path="/game/:gameId/dlc/list" component={DlcListView} />
            <Route exact path="/game/:gameId/dlc/edit/:dlcId" component={DlcFormView} />
            <Route exact path="/game/:gameId/dlc/add" component={DlcFormView} />
          </Switch>
        </div>
      )
    }
  }
 }

 const mapStateToProps = ({ user, studio, game, dlc }) => ({
  token: user.token,
  studio: studio.studio,
  games: game.games,
  game: game.game,
  dlc:dlc.dlc
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      listDlc,
      changePage: () => push('/game')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DlcView)

