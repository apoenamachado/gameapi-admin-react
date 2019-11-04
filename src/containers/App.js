import React, {Component} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import {
  Container,
  Loader,
  Segment
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Paginas
//import Home from '../home'
import About from './about'
import CardsView from './Cards'
import TablesView from './Tables'
import LabelsView from './Labels'
import StudioView from './Studio'
import StudiosView from './Admin'
import GameView from './Game'
import LoginView from './Auth/index'

// Site
import SiteHomeView from './Site/Home'

//import Adminlayout from '../../layouts/AdminLayout'
import AdminNavbar from '../components/NavBar/AdminNavbar'
import PublicNavbar from '../components/NavBar/PublicNavbar'
import AdminFooter from '../components/Footer/AdminFooter'
import PublicFooter from '../components/Footer/PublicFooter'

//var isAuthenticated = false 
// feito com esse modelo https://github.com/notrab/create-react-app-redux

class App extends Component {
  constructor(props) {
    super(props);
  }

  privateRoute({ component, ...rest}) {
    return (
      <Route
        {...rest}
        render={props =>
          props.isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect to={{ pathname: "/login", state: {from: props.location, },}}/>
          )
        }
      />
    );
  }

  publicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          props.isAuthenticated ? (
            <Redirect to={{ pathname: "/",}}/>
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }

  render(){
    if (this.props.isAuthenticated){
      return (
        <div>
          {<AdminNavbar />}
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/studios"    component={StudiosView} />
            <Route path="/studio/:id" component={StudioView}  />
            <Route path="/game/:id"  component={GameView} />
          </Switch>
          {<AdminFooter />}
      </div>
      )
    }else{
      return (
        <div> 
              {<PublicNavbar />}    
              <Switch>
                <Route exact path="/home" component={SiteHomeView} />
                <Route exact path="/" >
                  <Redirect to='/home'/>
                </Route>
                {
                <Route exact path="/gameapi-admin-react" >
                  <Redirect to='/home' />
                </Route>
                }
                <Route path="/login" component={LoginView} />
                <Route path="/components/cards" component={CardsView} />
                <Route exact path="/components/tables" component={TablesView} />
                <Route exact path="/components/labels" component={LabelsView} />  
                <Route path="/about-us" component={About} />
                <Route component={SiteHomeView} />
              </Switch>
              {<PublicFooter />}
        </div>
      )

        /*
      return (
        <div>
           <Container style={{ marginTop: '1em' }}>
  
              {<PublicNavbar />}
  
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={LoginView} />
                <Route exact path="/components/cards" component={CardsView} />
                <Route exact path="/components/tables" component={TablesView} />
                <Route exact path="/components/labels" component={LabelsView} />  
                <Route path="/about-us" component={About} />
              </Switch>
          </Container>
      </div>
      )
      */
    }
  }
 }

 const mapStateToProps = ({ user }) => ({
  user: user,
  token: user.token,
  isAuthenticated:user.isAuthenticated
})

export default connect(
  mapStateToProps,
  //mapDispatchToProps
)(App)
