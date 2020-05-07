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

// Redux
import {
  setLoading
} from '../../modules/app'

import {
  listStudio,
  removeStudio
} from '../../modules/studio'

class StudiosListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemsPerRow:4
    };
  }

  componentDidMount(){
    this.props.setLoading(true)
    this.props.listStudio(this.props.token, ()=>{
      this.props.setLoading(false)
      this.isOneStudio()
    })
    this.props.setLoading(true)
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

  // Redireciona para primeiro studio, caso seja o unico
  isOneStudio(){
    if(this.props.studios.length==1){
      this.props.history.push(`/studio/${this.props.studios[0].id}/games`)
    }
  }

  render(){

    if(this.props.loading){
      return(
        <Segment placeholder basic>
          <Loader active size='large'/>
        </Segment>
      )
    }

    if(this.props.studios.length===0){
      return(

        <Container style={{marginTop:'1em'}} raised>

          <Header as='h3' 
            icon='setting'
            content={'Studios'}
            subheader='Manage your Studios'
          />
          <Divider clearing />

          <Segment placeholder basic>
            <Header icon>
              <Icon name='game' />
                You have no studio. Register a studio and start managing your games
            </Header>
            <Button color='violet' onClick={()=>{ this.go('/add') }} >
              <Icon name='add' /> Add Studio
            </Button>
          </Segment>
        </Container>
        )
    }
    return (
      <div>
        <Container style={{marginTop:'1em'}}>
          <Header as='h3' 
              //icon='gamepad'
              content={'Studios'}
              subheader='Manage your Studios'
              dividing
            />

            <Card.Group itemsPerRow={this.state.itemsPerRow} doubling stackable>

            <Card 
                style={{textAlign:'center', justifycontent:'middle'}}
                
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
                  key={`game_${index}`}
                  //to={`/studio/${studio.id}`} 
                  //color='violet'
                  raised
                  >
                  <Card.Content>
                    <Fragment>
                      <Card.Header as={Link} to={`/studio/${studio.id}/games`} >{studio.name}</Card.Header>
                      {/*<Card.Description>{studio.description}</Card.Description>*/}
                      {<Card.Meta>{studio.created_at}</Card.Meta>}
                      {<Card.Meta>{studio.owner}</Card.Meta>}
                    </Fragment>
                  </Card.Content>
                  <Card.Content extra >

                    <Button.Group basic size='medium' floated='right'>
                      <Popup trigger={ <Button color='red' icon='trash alternate' onClick={()=>{this.removeStudio(studio) } } />} content='Remove'/>
                      {/*<Popup trigger={ <Button icon='users' />} content='Users'/>*/}
                      <Popup trigger={ <Button icon='settings' as={Link} to={`/studio/${studio.id}/settings`} />}  content='Settings'/>
                      <Popup trigger={ <Button icon='game' as={Link} to={`/studio/${studio.id}/games`} />}  content='Games'/>
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

 const mapStateToProps = ({ app, user, studio }) => ({
  loading: app.loading,
  token: user.token,
  studios: studio.studios
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setLoading,
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
