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


class StudioGamesView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemsPerRow:3
    };
  }

  componentDidMount(){
    console.log('this.props.studio: ', this.props.studio)
    // Uma vez
    this.props.setGames( gamesTemp[(Math.floor(Math.random() * gamesTemp.length))] )  
  }

  componentDidUpdate( prevProps, prevState, snapshot){
    // Toda vez
    if(prevProps.location.pathname !== this.props.location.pathname){
      this.props.setGames( gamesTemp[(Math.floor(Math.random() * gamesTemp.length))] )  
    }
  }

  go(url){
    this.props.history.push(url)
  }

  render(){
    return (
      <div>
       <Container>
        <Grid columns={1}  stackable>
          <Grid.Column stretched width={16}>
            <Segment>
              <Header as='h3' floated='left'
                      icon='gamepad'
                      content={'Games: '+ this.props.studio.name}
                      subheader='Manage your Games'
              />

              <Button
                onClick={ ()=> {
                  this.props.addGame( gamesTempAdd[(Math.floor(Math.random() * 5))] )}
                }
                floated='right'
                //size="mini"
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
            <Card.Group itemsPerRow={this.state.itemsPerRow} doubling stackable>

                {/* GAME LIST */}
                {this.props.games.map((game, index) => (
                  <Card
                    raised 
                    image={game.thumb}
                    header={game.name}
                    //meta='Friend'
                    description={game.resume}
                    //extra={extra}
                  />
                ))}
                {/* GAME LIST */}

              </Card.Group>
            </Grid.Column>
          </Grid>
        </Container>   
      </div>
    );
  }
 }

 const mapStateToProps = ({ user, studio, games }) => ({
  studio: studio.studio,
  games: games.games
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setGames,
      addGame
      //changePage: () => push('/studio')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudioGamesView)

