import React, {Component} from 'react';
import {
  Button,
  Container,
  Header,
  Grid,
  Card,
  List,
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

const gamesTempAdd = [
  { name: "Game Name 1", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", image:'https://www.mmotube.net/wp-content/uploads/2017/02/Preparing-For-Plays-SkySaga.png' },
  { name: "Game Name 2", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", image:'https://i.ytimg.com/vi/Xdes4VYvmlI/maxresdefault.jpg'  },
  { name: "Game Name 3", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJ920hatZfWjxhbJ7BqV5TupEewz368J-4cQbJnyR1FvXY17j'  },
  { name: "Game Name 4", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", image:'https://www.selectgame.com.br/wp-content/uploads/2012/12/The-Legend-of-Heroes-Trails-in-the-Sky-Wallpaper.jpg'  },
  { name: "Game Name 5", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", image:'https://s2.glbimg.com/UDZ7zPZiiIgpNk4Frwq1OBNL33Y=/0x0:592x370/984x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2013/05/20/c5.jpg'  },
  { name: "Game Name 6", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", image:'https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/125670607/original/b9d2b7682aaf776d570f8396ecc463eb10b2ba96.jpg'  }
];

class GamesListView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      layoutGrid:true,
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

  toggleLayout(grid){
    this.setState({layoutGrid:grid})

    if(this.state.layoutGrid){
      //this.setState({itemsPerRow:1})
    }else{
      //this.setState({itemsPerRow:3})
    }
  }


  renderGrid(){
    return(
      this.props.games.map((game, index) => (                      
        <Card
          loading={this.state.loading2}
          raised 
          image={game.image}
          header={game.name}
          //meta='Friend'
          //description={game.resume}
          meta={game.resume}
          as={Link}
          //to={`/game/${game.id}`}
          extra={(
            <Button.Group basic size='medium' floated='right'>
              <Popup trigger={ <Button color='red' icon='trash alternate' onClick={()=>{this.removeGame(game) } } />} content='Remove'/>
              <Popup trigger={ <Button icon='settings' as={Link} to={`/game/${game.id}/settings`} />}  content='Settings'/>
              <Popup trigger={ <Button icon='edit' as={Link} to={`/game/${game.id}`} />}  content='Edit'/>
            </Button.Group>
          )}
        />
        )
      )
    )
  }

  renderList(){
    return(      
      <Segment raised>

<List divided verticalAlign='middle'>
      <List.Item>
        <List.Content floated='right'>
          <Button>Add</Button>
        </List.Content>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
        <List.Content>Lena</List.Content>
      </List.Item>
      <List.Item>
        <List.Content floated='right'>
          <Button>Add</Button>
        </List.Content>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
        <List.Content>Lindsay</List.Content>
      </List.Item>
      <List.Item>
        <List.Content floated='right'>
          <Button>Add</Button>
        </List.Content>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/mark.png' />
        <List.Content>Mark</List.Content>
      </List.Item>
      <List.Item>
        <List.Content floated='right'>
          <Button>Add</Button>
        </List.Content>
        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/molly.png' />
        <List.Content>Molly</List.Content>
      </List.Item>
    </List>


      </Segment>
      
    )
  }

  render(){
    if(this.state.loading){
      return(
        <Segment placeholder basic>
          <Loader active />
        </Segment>
      )
    }else{

      
      if(this.props.games.length===0){
        return(
          <Container style={{marginTop:'1em'}}>
            <Segment placeholder>
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
                  <Header as='h3' floated='left'
                          icon='gamepad'
                          content={'Games'}
                          subheader='Manage your Games'
                  />

                  <Button.Group basic size='medium' floated='right'>
                    <Popup trigger={ <Button color='red' icon='grid layout' onClick={()=>{ this.toggleLayout(true) } } active={this.state.layoutGrid} />} content='Grid' />
                    <Popup trigger={ <Button color='red' icon='list layout' onClick={()=>{ this.toggleLayout(false) } } active={!this.state.layoutGrid} />} content='List' />
                  </Button.Group>

                  <Divider clearing />

                {/*
                  <Button
                    onClick={ ()=> {
                      let tempGame = gamesTempAdd[(Math.floor(Math.random() * 5))]
  
                      tempGame.id = null
                      tempGame.studio = this.props.studio.url
                      tempGame.genre = 'ARCADE'
                      tempGame.Image = null
  
                      this.props.addGame( tempGame, this.props.token, ()=>{ console.log('Game Adicionado')}, ()=>{console.log('Erro ao Adicionar Game ')} )}
                    }
                    floated='right'
                    //size="mini"
                    color='blue'
                    content='Add New MOc'
                    icon='add'
                    labelPosition='left'
                  />

                    <Button
                    onClick={()=>{ this.go(`/studio/${this.props.studio.id}/game-add`) }}
                    floated='right'
                    //size="mini"
                    color='green'
                    content='Add New'
                    icon='add'
                    labelPosition='left'
                    />

                  <Button.Group floated='right' >
                    <Button onClick={()=>{this.setState({itemsPerRow:2})}}>2</Button>
                    <Button.Or text='/' />
                    <Button onClick={()=>{this.setState({itemsPerRow:3})}}>3</Button>
                  </Button.Group>
                  */}
  
                <Card.Group itemsPerRow={this.state.itemsPerRow} doubling stackable>


                  <Card 
                    style={{textAlign:'center', justifycontent:'middle'}}
                    raised
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

                   {this.state.layoutGrid?
                    this.renderGrid():
                    this.renderList()
                   }   

                  </Card.Group>

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

