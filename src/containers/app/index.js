import React, {Component} from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {
  Button,
  Container,
  Dropdown,
  Menu,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

// Paginas
import Home from '../home'
import About from '../about'
import CardsView from '../Cards'
import TablesView from '../Tables'
import LabelsView from '../Labels'
import StudioView from '../Studio'
import LoginView from '../Auth/index'

//import Adminlayout from '../../layouts/AdminLayout'
import AdminNavbar from '../../components/NavBar/AdminNavbar'


// feito com esse modelo https://github.com/notrab/create-react-app-redux

class App extends Component {
  constructor(props) {
    super(props);
  }

  teste(){
    console.log('Apoena testando')
  }

  render(){
    return (
      <div>
         <Container style={{ marginTop: '1em' }}>

            {<AdminNavbar />}

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about-us" component={About} />
              <Route exact path="/components/cards" component={CardsView} />
              <Route exact path="/components/tables" component={TablesView} />
              <Route exact path="/components/labels" component={LabelsView} />
              <Route exact path="/studio/:id" component={StudioView} />
              <Route exact path="/login" component={LoginView} />
            </Switch>
          
        </Container>
    </div>
    );
  }
 }

export default App
