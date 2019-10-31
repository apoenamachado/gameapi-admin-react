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
  Popup,
  Loader
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
      loading:false,
      itemsPerRow:4
    };
  }

  componentDidMount(){
    this.setState({loading:true})
    this.props.listStudio(this.props.token, ()=>{
      this.setState({loading:false})
    })
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

    if(this.state.loading){
      return(
        <Segment placeholder basic>
          <Loader active />
        </Segment>
      )
    }

    if(this.props.studios.length===0){
      return(
          <Segment placeholder>
          <Header icon>
            <Icon name='game' />
              You have no studio. Register a studio and start managing your games
          </Header>
          <Button primary onClick={()=>{ this.go('/add') }} >Add Studio</Button>
        </Segment>
        )
    }
    return (
      <div>
        <Container style={{marginTop:'1em'}}>
          <Header as='h3' 
              icon='gamepad'
              content={'Studios'}
              subheader='Manage your Studios'
              dividing
            />

            <Card.Group itemsPerRow={this.state.itemsPerRow} doubling stackable>

            <Card 
                style={{textAlign:'center', justifycontent:'middle'}}
                raised
                key={`game-add`}
                as={Link}
                to={'/studios/add'}
                color='violet'
                
                header={(
                    <p style={{textAlign:'center', justifycontent:'middle'}}>
                    <Icon name='add'/> 
                    Add Studio
                    </p>
                  )}
                description='Studios are organizations or teams. Workgroups for your games.'
                /*
                description={(
                  <div style={{
                      textAlign:'center', 
                      justifycontent:'middle',
                      marginTop:'40%',
                      minHeight:150
                      }}>
                    <Icon name='add'/> 
                    Add Studio
                  </div>
                  )}
                  */
              />

              {this.props.studios.map((studio, index) => (
                <Card 
                  key={`game-${index}`}
                  //to={`/studio/${studio.id}`} 
                  raised
                  as={'a'}
                  //color='blue'
                  >
                  <Card.Content>
                    <Fragment>
                      <Card.Header>{studio.name}</Card.Header>
                      {/*<Card.Description>{studio.description}</Card.Description>*/}
                      {<Card.Meta>{studio.created_at}</Card.Meta>}
                    </Fragment>
                  </Card.Content>
                  <Card.Content extra >

                    <Button.Group basic size='medium' floated='right'>
                      <Popup trigger={ <Button color='red' icon='trash alternate' onClick={()=>{this.removeStudio(studio) } } />} content='Remove'/>
                      {/*<Popup trigger={ <Button icon='users' />} content='Users'/>*/}
                      <Popup trigger={ <Button icon='settings' as={Link} to={`/studio/${studio.id}/settings`} />}  content='Settings'/>
                      <Popup trigger={ <Button icon='game' as={Link} to={`/studio/${studio.id}/games`} />}  content='Games'/>
                      <Popup trigger={ <Button icon='edit' as={Link} to={`/studio/${studio.id}`} />}  content='Edit'/>
                    </Button.Group>

                  </Card.Content>
                </Card>
                ))}
            </Card.Group>
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

