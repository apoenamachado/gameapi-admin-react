import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom'
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

// feito com esse modelo https://github.com/notrab/create-react-app-redux

class App extends Component {

  teste(){
    console.log('Apoena testando')
  }

  render(){
    return (
      <div>
         <Container style={{ marginTop: '1em' }}>

            <Menu size='large' stackable >

              <Menu.Item header>
              <Link to="/" style={{color:'#000'}} >Semantic-UI Admin</Link>
              </Menu.Item>

              <Menu.Item name='messages'>
                <Link to="/about-us">Sobre</Link>
              </Menu.Item>

              <Dropdown item text='Súdio 1'>
                <Dropdown.Menu>
                  <Dropdown.Item><Link to="/studio">Súdio 1</Link></Dropdown.Item>
                  <Dropdown.Item><Link to="/studio">Súdio 2</Link></Dropdown.Item>
                  <Dropdown.Item><Link to="/Studio">Súdio 3</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>   

              <Dropdown item text='Components'>
                <Dropdown.Menu>
                  <Dropdown.Item><Link to="/components/tables">Tables</Link></Dropdown.Item>
                  <Dropdown.Item><Link to="/components/cards">Cards</Link></Dropdown.Item>
                  <Dropdown.Item><Link to="/components/labels">Labels</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>              

              <Menu.Menu position='right'> 
                <Dropdown item text='Profile'>
                  <Dropdown.Menu>
                    <Dropdown.Item>Editar</Dropdown.Item>
                    <Dropdown.Item>Sair</Dropdown.Item>
                    <Dropdown.Item>Outra Coisa</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item>
                  <Button primary>Cadastro</Button>
                </Menu.Item>
              </Menu.Menu>
          </Menu>

            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/components/cards" component={CardsView} />
            <Route exact path="/components/tables" component={TablesView} />
            <Route exact path="/components/labels" component={LabelsView} />

            <Route exact path="/studio" component={StudioView} />
          
        </Container>
    </div>
    );
  }
 }

export default App
