import React, {Component} from 'react';
/*
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
  Breadcrumb
} from 'semantic-ui-react'
*/
import 'semantic-ui-css/semantic.min.css'

import { Link, BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Telas
import StudioListView from '../Studio/List'
import StudioFormView from '../Studio/Form'

import {
  setCurrentStudio
} from '../../modules/studio'

import {
  setCurrentGame
} from '../../modules/game'

class StudiosView extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    // Reseta current studio
    this.props.setCurrentStudio(null)
    this.props.setCurrentGame(null)
  }

  go(url){
    this.props.history.push('/studios'+ url)
  }

  render(){
    return (
      <div>
      <Switch>
        <Route exact path="/studios/list" component={StudioListView} />
        <Route exact path="/studios/add" component={StudioFormView} />
      </Switch>
      </div>
    );
  }
 }

 const mapStateToProps = ({ user }) => ({

  token: user.token,
  isAuthenticated:user.isAuthenticated
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setCurrentGame,
      setCurrentStudio,
      changePage: () => push('/studio')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudiosView)
