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
import GameFormView from './Form'

// Game Modules
import DlcView from '../Dlc'
//import LeaderboardView from './Leaderboard'

import {
  getGame,
  setCurrentGame
} from '../../modules/game'



// Fake Components
const TempHeader = (props)=> {
  return( 
    <div>
        <Container style={{marginTop:'1em'}} basic>
        <Header as='h3' floated='left'
            icon={props.icon}
            content={props.name}
            subheader={props.description}
            
          />
          <Divider clearing />
          <Segment>
            
          </Segment>
        </Container>
    </div>
  )
}

const LeaderBoardView = ()=> {
  return( <TempHeader name='LeaderBoard' description='Manage scores for your games' icon='trophy' />)
}
/*
const DlcView = ()=> {
  return( <TempHeader name='Dlc' description='Manage Contend Download your games' icon='cart arrow down'/>)
}
*/
const StorageView = ()=> {
  return( <TempHeader name='Storage' description='Manage data for your games' icon='database'/>)
}
const PlayersView = ()=> {
  return( <TempHeader name='Players' description='Players interacting with your game.' icon='users'/>)
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
    this.getGame()
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
              <Loader active size='large'>Loading Game...</Loader>
          </Segment>
        </Container>
      )
    }else{
      return (
        <div>
          <Container style={{marginTop:'1em'}}>
          <Grid columns={2}  stackable>

            <Grid.Column width={4}>

              <Menu vertical >
                <Image src={this.props.game.image} 
                  rounded
                  wrapped 
                  label={{
                    as: 'a',
                    onClick: ()=>{ this.go('/settings') },
                    color: 'black',
                    content: this.props.game.name,
                    //icon: 'game',
                    ribbon: 'true',
                }}
                />
              </Menu>

              <Menu vertical>

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
                    icon='cart arrow down'
                  />
                <Menu.Item
                    name='Leaderboard'
                    active={false}
                    onClick={()=>{ this.go('/leaderboard') }}
                    icon='trophy'
                  />
                <Menu.Item
                    name='Storage'
                    active={false}
                    onClick={()=>{ this.go('/storage') }}
                    icon='database'
                  />
                <Menu.Item
                    name='Players'
                    active={false}
                    onClick={()=>{ this.go('/players') }}
                    icon='users'
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
                  <Route  path="/game/:id/dlc" component={DlcView} />
                  <Route exact path="/game/:id/storage" component={StorageView} />
                  <Route exact path="/game/:id/settings" component={GameFormView} />
                  <Route exact path="/game/:id/players" component={PlayersView} />
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

