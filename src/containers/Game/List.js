import React, {Component} from 'react';
import {
  Button,
  Container,
  Header,
  Grid,
  Card,
  List,
  Item,
  Table,
  Segment,
  Loader,
  Popup,
  Icon,
  Divider,
  Image
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { Link, Route } from 'react-router-dom'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  setCurrentGame,
  listGame,
  addGame,
  removeGame
} from '../../modules/game'


const GRID = 1
const LIST = 2
const TABLE = 3

class GamesListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      layout:GRID,
      itemsPerRow:4,
      loading:false,
      loading2:false
    };
  }

  componentDidMount(){
    //this.props.setGames( gamesTemp[(Math.floor(Math.random() * gamesTemp.length))] )  
    this.setState({loading:true})
    this.props.listGame(this.props.token, this.props.studio, ()=>{
      this.setState({loading:false})
    })
    this.props.setCurrentGame(null)
  }

  componentDidUpdate( prevProps, prevState, snapshot){
    if(prevProps.location.pathname !== this.props.location.pathname){
      // Toda vez
    }
  }

  go(url){
    this.props.history.push(url)
  }

  removeGame(game){
    this.setState({loading2:true})
    setTimeout(() => {
      this.props.removeGame(game, this.props.token, ()=>{this.setState({loading2:false})})  
    }, 150);
  }

  setLayout(layout){
    this.setState({layout:layout})
  }

  renderlayout(){
    switch (this.state.layout) {
      case GRID:
        return this.renderGrid()
        break;
      case LIST:
        return this.renderList()
        break;
      case TABLE:
        return this.renderTable()
        break;
      default:
        return this.renderGrid()
        break;
    }
  }

  renderAction(game){
    return(
      <Button.Group basic size='large' floated='right'>
        <Popup trigger={ <Button color='red' icon='trash alternate' onClick={()=>{this.removeGame(game) } } />} content='Remove'/>
        <Popup trigger={ <Button icon='settings' as={Link} to={`/game/${game.id}/settings`} />}  content='Settings'/>
        <Popup trigger={ <Button icon='edit' as={Link} to={`/game/${game.id}`} />}  content='Edit'/>
      </Button.Group>
    )
  }

  renderGrid(){
    return(
      <Card.Group itemsPerRow={this.state.itemsPerRow} doubling stackable>
        <Card 
          style={{textAlign:'center', justifycontent:'middle', border:0}}
          key={`game-add`}
          as={'a'}
          onClick={()=>{ this.go(`/studio/${this.props.studio.id}/game-add`) }}
          color='blue'
          header={(
              <p style={{textAlign:'center', justifycontent:'middle'}}>
              <Icon name='add'/> 
              Add New Game
              </p>
            )}
          description='Add and start managing the resources of your games.'
        />

        {this.props.games.map((game, index) => (
          <Card
            key={'game_'+index}
            loading={this.state.loading2}
            //raised
             
            image={game.image}
            header={game.name}
            //meta='Friend'
            //description={game.resume}
            meta={game.resume}
            as={Link}
            to={`/game/${game.id}`}
            //extra={this.renderAction(game)}
          />
          )
        )}
      </Card.Group>
    )
  }

  renderList(){
    return(      
          <div>
          <Segment basic clearing>
            <Button 
                floated='right'
                color='violet'
                onClick={()=>{ this.go(`/studio/${this.props.studio.id}/game-add`) }}
                floated='right' icon labelPosition='left' size='small' >
                <Icon name='add' /> Add New Game
            </Button>
          </Segment>

          {this.props.games.map((game, index) => (
            <Table  celled unstackable selectable padded key={'game_'+index}>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell width='one'><Image src={game.image} rounded size='small' /></Table.Cell>
                    <Table.Cell width='seven'>
                        <Header as='h3'>
                          <Header.Content as={Link} to={`/game/${game.id}`}>
                            {game.name}
                            <Header.Subheader>{game.resume}</Header.Subheader>
                          </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell width='tree'>{game.genre}</Table.Cell>
                    <Table.Cell textAlign='right' width='one'>{this.renderAction(game)}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            )
          )}
          </div>
    )
  }

  renderTable(){
    return(   
      <Table  stackable selectable>
          <Table.Header>

            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Genre</Table.HeaderCell>
              <Table.HeaderCell colSpan='2'>
                <Button 
                  color='violet'
                  onClick={()=>{ this.go(`/studio/${this.props.studio.id}/game-add`) }}
                  floated='right' icon labelPosition='left'  size='small' >
                <Icon name='add' /> Add New Game
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {this.props.games.map((game, index) => (
            <Table.Row key={'game_'+index}>
              <Table.Cell >{game.id}</Table.Cell>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src={game.image} rounded size='medium' />
                  <Header.Content as={Link} to={`/game/${game.id}`}>
                    {game.name}
                    <Header.Subheader>{game.resume}</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
            <Table.Cell collapsing>{game.genre}</Table.Cell>
            <Table.Cell>
              {this.renderAction(game)}
            </Table.Cell>
            </Table.Row>
            )
          )}
          </Table.Body>
        </Table>
    )
  }

  render(){
    if(this.state.loading){
      return(
        <Segment placeholder basic>
          <Loader active size='large'/>
        </Segment>
      )
    }else{

      if(this.props.games.length===0){
        return(
          <Container style={{marginTop:'1em'}} raised>

            <Header as='h3' floated='left'
              icon='gamepad'
              content={'Games'}
              subheader='Manage your Games'
             />
            <Divider clearing />

            <Segment placeholder basic>
            <Header icon>
              <Icon name='game' />
                You have no game. Add and start managing the resources of your games.
            </Header>
            <Button primary onClick={()=>{ this.go(`/studio/${this.props.studio.id}/game-add`) }} >Add Game</Button>
          </Segment>
          </Container>
        )
      }else{
        return (
          <div>
              <Container style={{marginTop:'1em'}} basic>
                
                  <Header as='h3' 
                          floated='left'
                          icon='gamepad'
                          content={'Games'}
                          subheader='Manage your Games'
                  />

                  <Button.Group basic size='medium' floated='right'>
                    <Popup trigger={ <Button color='red' icon='grid layout' onClick={()=>{ this.setLayout(GRID) } } active={this.state.layout==GRID} />} content='Grid' />
                    <Popup trigger={ <Button color='red' icon='list layout' onClick={()=>{ this.setLayout(LIST) } } active={this.state.layout==LIST} />} content='List' />
                    <Popup trigger={ <Button color='red' icon='table'       onClick={()=>{ this.setLayout(TABLE) } } active={this.state.layout==TABLE} />} content='Table' />
                  </Button.Group>

                  <Divider clearing />

                   {this.renderlayout()}

                  </Container>
          </div>
        );
      }
    }
  }
 }

 const mapStateToProps = ({ user, studio, game }) => ({
  token: user.token,
  studio: studio.studio,
  games: game.games
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setCurrentGame,
      listGame,
      addGame,
      removeGame
      //changePage: () => push('/studio')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamesListView)

