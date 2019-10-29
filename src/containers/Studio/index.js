import React, {Component} from 'react';
import {
  Container,
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
//import StudioSettingsView from './Settings'
import StudioFormView from './Form'
import GameListView from '../Game/List'
import GameFormView from '../Game/Form'

import {
  getStudio,
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
    this.getStudio()
  }

  componentDidUpdate( prevProps, prevState, snapshot){
    // Toda vez
    if(prevProps.location.pathname !== this.props.location.pathname){
      //this.getStudio()
    }
  }

  getStudio(){
    this.setState({loading:true})  
    this.props.getStudio({id:this.props.match.params.id}, this.props.token, (dados)=>{
      this.props.setCurrentStudio(dados)
      this.setState({loading:false})  
    },
    (err)=>{
      console.log('GetStudio CallbackError: ', err)
      this.setState({loading:false})  
      this.props.history.goBack()
    })

    /*
    this.setState({loading:true})  
    let studio = this.props.studios.filter(row => row.id == this.props.match.params.id)
    setTimeout(() => {
      this.props.setCurrentStudio(studio[0])
      this.setState({loading:false})  
    }, 300); // Tempo de loading fake
    */
  }

  go(url){
    this.props.history.push('/studio/'+ (this.props.match.params.id) + url)
  }

  render(){
    if(this.state.loading){
      return(
        <Container style={{ marginTop: '4em' }}>
          <Segment basic placeholder>
              <Loader active>Loading Studio...</Loader>
          </Segment>
        </Container>
      )
    }else{
      return (
        <div>
          <Switch>
            <Route exact path="/studio/:id" component={StudioDashboardView} />
            <Route exact path="/studio/:id/games" component={GameListView} />
            <Route exact path="/studio/:id/settings" component={StudioFormView} />
            <Route exact path="/studio/:id/game-add" component={GameFormView} />
          </Switch>
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
      getStudio,
      setCurrentStudio,
      changePage: () => push('/studio')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudioView)

