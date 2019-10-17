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
  Divider
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import { Route } from 'react-router-dom'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  setGames,
  addGame,
  addGameAsync,
  removeGame,
  removeGameAsync
} from '../../modules/games'

import TablesView from '../Tables'

// Apenas para adicionar randomicamente
const studiosTemp = [
  {id:1, name: "Studio 1", resume: 'Resumo estúdio 1', thumb:'https://gizblog.it/wp-content/uploads/2017/11/marvel_logo.jpg' },
  {id:2, name: "Studio 2", resume: 'Resumo estúdio 2', thumb:'https://gizblog.it/wp-content/uploads/2017/11/marvel_logo.jpg' },
  {id:3, name: "Studio 3", resume: 'Resumo estúdio 3', thumb:'https://gizblog.it/wp-content/uploads/2017/11/marvel_logo.jpg' }
];

const gamesTempAdd = [
  { name: "Game Name 1", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://www.mmotube.net/wp-content/uploads/2017/02/Preparing-For-Plays-SkySaga.png' },
  { name: "Game Name 2", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://i.ytimg.com/vi/Xdes4VYvmlI/maxresdefault.jpg'  },
  { name: "Game Name 3", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJ920hatZfWjxhbJ7BqV5TupEewz368J-4cQbJnyR1FvXY17j'  },
  { name: "Game Name 4", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://www.selectgame.com.br/wp-content/uploads/2012/12/The-Legend-of-Heroes-Trails-in-the-Sky-Wallpaper.jpg'  },
  { name: "Game Name 5", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://s2.glbimg.com/UDZ7zPZiiIgpNk4Frwq1OBNL33Y=/0x0:592x370/984x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2013/05/20/c5.jpg'  },
  { name: "Game Name 6", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/125670607/original/b9d2b7682aaf776d570f8396ecc463eb10b2ba96.jpg'  }
];


// GAMES do Studio
const gamesTemp = []

gamesTemp[0] = [
  { name: "Game Name 1", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://www.mmotube.net/wp-content/uploads/2017/02/Preparing-For-Plays-SkySaga.png' },
  { name: "Game Name 2", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://i.ytimg.com/vi/Xdes4VYvmlI/maxresdefault.jpg'  }
];

gamesTemp[1] = [
  { name: "Game Name 1", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://www.mmotube.net/wp-content/uploads/2017/02/Preparing-For-Plays-SkySaga.png' },
  { name: "Game Name 2", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJ920hatZfWjxhbJ7BqV5TupEewz368J-4cQbJnyR1FvXY17j'  },
  { name: "Game Name 3", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://www.selectgame.com.br/wp-content/uploads/2012/12/The-Legend-of-Heroes-Trails-in-the-Sky-Wallpaper.jpg'  },
  { name: "Game Name 4", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/125670607/original/b9d2b7682aaf776d570f8396ecc463eb10b2ba96.jpg'  }
];

gamesTemp[2] = [
  { name: "Game Name 1", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://www.mmotube.net/wp-content/uploads/2017/02/Preparing-For-Plays-SkySaga.png' },
  { name: "Game Name 2", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://i.ytimg.com/vi/Xdes4VYvmlI/maxresdefault.jpg'  },
  { name: "Game Name 3", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJ920hatZfWjxhbJ7BqV5TupEewz368J-4cQbJnyR1FvXY17j'  },
  { name: "Game Name 4", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://www.selectgame.com.br/wp-content/uploads/2012/12/The-Legend-of-Heroes-Trails-in-the-Sky-Wallpaper.jpg'  },
  { name: "Game Name 5", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://s2.glbimg.com/UDZ7zPZiiIgpNk4Frwq1OBNL33Y=/0x0:592x370/984x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2013/05/20/c5.jpg'  },
  { name: "Game Name 6", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/125670607/original/b9d2b7682aaf776d570f8396ecc463eb10b2ba96.jpg'  },
  { name: "Game Name 7", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://www.mmotube.net/wp-content/uploads/2017/02/Preparing-For-Plays-SkySaga.png' },
  { name: "Game Name 8", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://i.ytimg.com/vi/Xdes4VYvmlI/maxresdefault.jpg'  },
  { name: "Game Name 9", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJ920hatZfWjxhbJ7BqV5TupEewz368J-4cQbJnyR1FvXY17j'  },
  { name: "Game Name 10", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://s2.glbimg.com/UDZ7zPZiiIgpNk4Frwq1OBNL33Y=/0x0:592x370/984x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2013/05/20/c5.jpg'  }
];


class StudioView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemsPerRow:3
    };
  }

  componentDidMount(){
    // Uma vez
    this.props.setGames( gamesTemp[(this.props.match.params.id-1)] )  
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentWillUpdate(){
    console.log('componentWillUpdate')
  }

  componentDidUpdate(){
    // Toda vez
    let a = studiosTemp[this.props.match.params.id-1]
    console.log('componentDidUpdate:', a)

  }

  teste(){
    this.props.history.push("/login")
    console.log('Apoena testando')
  }

  go(url){
    this.props.history.push(url)
  }

  render(){
    return (
      <div>
      <Container style={{ marginTop: '3em' }}>

      <Grid columns={2}  stackable>

        <Grid.Column width={4}>

          <Menu pointing vertical >
            <Menu.Item
              name='Games'
              active={true}
              onClick={()=>{ this.go('/login') }}
              icon='game layout'
            />
            <Menu.Item
              name='Settings'
              active={false}
              onClick={()=>{ this.go('/components/cards') }}
              icon='setting layout'
            />
            <Menu.Item
              name='Statistics'
              active={false}
              onClick={()=>{ this.go('/studio/4') }}
              icon='line graph layout'
            />
          </Menu>
          
        </Grid.Column>
        <Grid.Column stretched width={12}>
        
        <Segment size='mini'>

          <Header as='h1' floated='left'>
            <Icon name='gamepad' />
            <Header.Content>
              Games {studiosTemp[this.props.match.params.id-1].name}
            <Header.Subheader>Manage your Games</Header.Subheader>
            </Header.Content>
          </Header>


            <Button
              onClick={ ()=> {
                this.props.addGame( gamesTempAdd[(Math.floor(Math.random() * 5))] )}
              }
              floated='right'
              size="large"
              color='blue'
              content='Add New Game'
              icon='add'
              labelPosition='left'
            />

          <Button.Group floated='right'>
            <Button onClick={()=>{this.setState({itemsPerRow:2})}}>2</Button>
            <Button.Or text='ou' />
            <Button onClick={()=>{this.setState({itemsPerRow:3})}}>3</Button>
          </Button.Group>
          
          </Segment>

          <Card.Group itemsPerRow={this.state.itemsPerRow}>

            {this.props.games.map((game, index) => (
              <Card 
                key={`game-${index}`}
                raised 
                href='#link'>
                <Image src={game.thumb} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{game.name}</Card.Header>
                  <Card.Meta>Cadastrado em {game.date}</Card.Meta>
                  <Card.Description>
                  {game.resume}
                  </Card.Description>
                </Card.Content>
                {/*
                <Card.Content extra>
                  <Icon name='download' />10 Donwloads
                </Card.Content>
                */}
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

 const mapStateToProps = ({ games }) => ({
  games: games.games,
  isAdd: games.isAdd,
  isRemove: games.isRemove
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setGames,
      addGame,
      addGameAsync,
      removeGame,
      removeGameAsync,
      changePage: () => push('/studio')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudioView)

