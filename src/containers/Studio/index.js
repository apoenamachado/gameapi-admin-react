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
import StudioDashboardView from './Dashboard'
import StudioGamesView from './Games'
import StudioSettingsView from './Settings'

import {
  setCurrentStudio
} from '../../modules/studio'

class StudioView extends Component {

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
    console.log('Studio:Index: props: ', this.props)
    this.getStudio()
  }

  componentDidUpdate( prevProps, prevState, snapshot){
    // Toda vez
    if(prevProps.location.pathname !== this.props.location.pathname){
      this.getStudio()
    }
  }

  getStudio(){
    this.setState({loading:true})  
    let studio = this.props.studios.filter(row => row.id == this.props.match.params.id)
    setTimeout(() => {
      this.props.setCurrentStudio(studio[0])
      this.setState({loading:false})  
    }, 500); // Tempo de loading fake
    
  }

  go(url){
    this.props.history.push('/studio/'+ (this.props.match.params.id) + url)
  }

  render(){
    if(this.state.loading){
      return(
        <Container style={{ marginTop: '4em' }}>
          <Segment basic>
              <Loader active>Loading Studio...</Loader>
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
                    name='Games'
                    active={false}
                    onClick={()=>{ this.go('/games') }}
                    icon='game layout'
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
                  <Route exact path="/studio/:id" component={StudioDashboardView} />
                  <Route exact path="/studio/:id/games" component={StudioGamesView} />
                  <Route exact path="/studio/:id/settings" component={StudioSettingsView} />
                </Switch>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
      )
    }
  }
 }

 const mapStateToProps = ({ user, studio }) => ({
  studios: studio.studios,
  token: user.token
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setCurrentStudio,
      changePage: () => push('/studio')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudioView)

