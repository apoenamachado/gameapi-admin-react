import React, {Component, Fragment} from 'react';
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
  Popup
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { Route, Link } from 'react-router-dom'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  listStudio,
  removeStudio
} from '../../modules/studio'

class StudiosListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemsPerRow:3
    };
  }

  componentDidMount(){
    this.props.listStudio(this.props.token)
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
      // roda sempre que atualiza
    }
  }

  go(url){
    this.props.history.push('/studios'+ url)
  }

  removeStudio(studio){
    this.props.removeStudio(studio, this.props.token)
  }

  render(){
    return (
      <div>
       <Container>

        <Grid columns={1}  stackable>
          <Grid.Column stretched width={16}>
          
          <Segment >
            <Header floated='left'>
              <Icon name='gamepad' />
              <Header.Content>
                Studios
              <Header.Subheader>Manage your Studios</Header.Subheader>
              </Header.Content>
            </Header>

              <Button
                onClick={()=>{ this.go('/add') }}
                floated='right'
                color='blue'
                content='Add New'
                icon='add'
                labelPosition='left'
              />

            <Button.Group floated='right' >
              <Button onClick={()=>{this.setState({itemsPerRow:2})}}>2</Button>
              <Button.Or text='/' />
              <Button onClick={()=>{this.setState({itemsPerRow:3})}}>3</Button>
            </Button.Group>
            
          </Segment>

            <Card.Group itemsPerRow={this.state.itemsPerRow} doubling>

              {this.props.studios.map((studio, index) => (
                <Card 
                  key={`game-${index}`}
                  //to={`/studio/${studio.id}`} 
                  //as={Link}
                  raised 
                  color='blue'
                  >
                  
                  {/*<Image src={studio.image} wrapped ui={false} />*/}

                  <Card.Content>
                    <Fragment>
                      {/*<Image floated='right' size='tiny' src={studio.image} />*/}
                      <Card.Header>{studio.name}</Card.Header>
                      {/*<Card.Description>{studio.description}</Card.Description>*/}
                      {/*<Card.Meta>{studio.created_at}</Card.Meta>*/}
                    </Fragment>
                  </Card.Content>
                  <Card.Content extra >

                    <Button.Group basic size='medium' floated='right'>
                      <Popup trigger={ <Button color='red' icon='trash alternate' onClick={()=>{this.removeStudio(studio) } } />} content='Remove'/>
                      <Popup trigger={ <Button icon='users' />} content='Users'/>
                      <Popup trigger={ <Button icon='settings' as={Link} to={`/studio/${studio.id}/settings`} />}  content='Settings'/>
                      <Popup trigger={ <Button icon='game' as={Link} to={`/studio/${studio.id}/games`} />}  content='Games'/>
                      <Popup trigger={ <Button icon='edit' as={Link} to={`/studio/${studio.id}`} />}  content='Edit'/>
                    </Button.Group>

                  </Card.Content>
                </Card>
                ))}
            </Card.Group>

            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );

  }
 }

 const mapStateToProps = ({ user, studio }) => ({
  token: user.token,
  studios: studio.studios
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      listStudio,
      removeStudio,
      changePage: () => push('/studio')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudiosListView)

