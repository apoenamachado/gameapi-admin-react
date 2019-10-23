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
  Breadcrumb
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { Link, BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// Telas
import StudiosListView from './List'
import StudiosAddView from './Add'

/*
import {
  setGames,
  addGame,
  addGameAsync,
  removeGame,
  removeGameAsync
} from '../../modules/games'
*/
// Teste
const sections = [
  { key: 'home', content: 'Home', link: true },
  { key: 'studios', content: 'Studios', link: true },
  { key: 'list', content: 'List', active: true },
]


class StudiosView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemsPerRow:3
    };
  }

  componentDidMount(){
    // Uma vez
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
      //
    }
  }

  go(url){
    this.props.history.push('/studios'+ url)
  }

  render(){
    return (
      <div>

      {/*<Breadcrumb divider='/' sections={sections} />  */}

      <Container style={{ marginTop: '1em' }}>

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

 const mapStateToProps = ({ user }) => ({

  token: user.token,
  isAuthenticated:user.isAuthenticated
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: () => push('/studio')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudiosView)

