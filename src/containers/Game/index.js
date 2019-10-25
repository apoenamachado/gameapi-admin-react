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
import GameDashboardView from './Dashboard'
import GameSettingsView from './Settings'

// Game Modules
//import DlcView from './Dlc'
//import LeaderboardView from './Leaderboard'

import {
  getGame,
  setCurrentGame
} from '../../modules/game'



// Fake Components
const TempHeader = (props)=> {
  return( 
    <div>
    
      <Grid columns={1}  stackable>
        <Grid.Column stretched width={16}>
            <Segment>
              <Header as='h3' floated='left'
                  icon='chart line'
                  content={props.name}
                  subheader={props.description}
                />            
            </Segment>
          </Grid.Column>
        </Grid>
    
    </div>
  )
}

const LeaderBoardView = ()=> {
  return( <TempHeader name='LeaderBoard' description='Manage scores for your games'/>)
}
const DlcView = ()=> {
  return( <TempHeader name='Dlc' description='Manage Contend Download your games'/>)
}
const StorageView = ()=> {
  return( <TempHeader name='Storage' description='Manage data for your games'/>)
}

class GameView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading:true,
      itemsPerRow:3
    };
  }

  componentDidMount(){
    // Uma vez
    //this.props.setGames( gamesTemp[(this.props.match.params.id-1)] )  
    console.log('Game:Index: props: ', this.props)
    this.getGame()
  }

  componentDidUpdate( prevProps, prevState, snapshot){
    // Toda vez
    if(prevProps.location.pathname !== this.props.location.pathname){
      //this.getGame()
    }
  }

  getGame(){
    this.setState({loading:true})  

    this.props.getGame({id:this.props.match.params.id}, this.props.token, (dados)=>{
      this.props.setCurrentGame(dados)
    },
    (err)=>{
      console.log('GetGame CallbackError: ', err)
      this.props.history.goBack()
    })

    let game = this.props.games.filter(row => row.id == this.props.match.params.id)
    setTimeout(() => {
      
      this.props.setCurrentGame(game[0])
      this.setState({loading:false})  
    }, 10); // Tempo de loading fake
    
  }

  go(url){
    this.props.history.push('/game/'+ (this.props.match.params.id) + url)
  }

  render(){
    if(this.state.loading){
      return(
        <Container style={{ marginTop: '4em' }}>
          <Segment basic>
              <Loader active>Loading Game...</Loader>
          </Segment>
        </Container>
      )
    }else{
      return (
        <div>
        <Container style={{ marginTop: '1em' }}>
          <Grid columns={2}  stackable>
            <Grid.Column width={4}>
              <Menu pointing vertical>
                <Menu.Item
                    name='Dashboard'
                    active={false}
                    onClick={()=>{ this.go('') }}
                    icon='line graph layout'
                  />
                <Menu.Item
                    name='Dlc'
                    active={false}
                    onClick={()=>{ this.go('/dlc') }}
                    icon='caret square down'
                  />
                <Menu.Item
                    name='Leaderboard'
                    active={false}
                    onClick={()=>{ this.go('/leaderboard') }}
                    icon='numbered list'
                  />
                <Menu.Item
                    name='Storage'
                    active={false}
                    onClick={()=>{ this.go('/Storage') }}
                    icon='database'
                  />
                <Menu.Item
                    name='Settings'
                    active={false}
                    onClick={()=>{ this.go('/settings') }}
                    icon='setting layout'
                  />
              </Menu>
            </Grid.Column>
            <Grid.Column stretched width={12}>
                <Switch>
                  <Route exact path="/game/:id" component={GameDashboardView} />
                  <Route exact path="/game/:id/leaderboard" component={LeaderBoardView} />
                  <Route exact path="/game/:id/dlc" component={DlcView} />
                  <Route exact path="/game/:id/storage" component={StorageView} />
                  <Route exact path="/game/:id/settings" component={GameSettingsView} />
                </Switch>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
      )
    }
  }
 }

 const mapStateToProps = ({ user, studio, game }) => ({
  token: user.token,
  studio: studio.studio,
  games: game.games,
  game: game.game
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getGame,
      setCurrentGame,
      changePage: () => push('/game')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameView)

