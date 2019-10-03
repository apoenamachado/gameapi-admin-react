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

const games = [
  { name: "Game Name 1", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://www.mmotube.net/wp-content/uploads/2017/02/Preparing-For-Plays-SkySaga.png' },
  { name: "Game Name 2", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://i.ytimg.com/vi/Xdes4VYvmlI/maxresdefault.jpg'  },
  { name: "Game Name 3", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJ920hatZfWjxhbJ7BqV5TupEewz368J-4cQbJnyR1FvXY17j'  },
  { name: "Game Name 4", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://www.selectgame.com.br/wp-content/uploads/2012/12/The-Legend-of-Heroes-Trails-in-the-Sky-Wallpaper.jpg'  },
  { name: "Game Name 5", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://s2.glbimg.com/UDZ7zPZiiIgpNk4Frwq1OBNL33Y=/0x0:592x370/984x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2013/05/20/c5.jpg'  },
  { name: "Game Name 6", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/125670607/original/b9d2b7682aaf776d570f8396ecc463eb10b2ba96.jpg'  },
  //{ name: "Game Name 7", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://www.mmotube.net/wp-content/uploads/2017/02/Preparing-For-Plays-SkySaga.png'  },
  //{ name: "Game Name 8", date:'12/12/2018', resume: 'Essa seria uma pequena descrição do jogo. Definida no campo Resume', downloads: "1.500", thumb:'https://www.mmotube.net/wp-content/uploads/2017/02/Preparing-For-Plays-SkySaga.png'  },
];

class StudioView extends Component {

  state = {
    itemsPerRow:3
  }

  teste(){
    console.log('Apoena testando')
  }

  render(){
    return (
      <div>
      <Container style={{ marginTop: '3em' }}>

      <Grid columns={2} divided stackable>

        <Grid.Column width={4}>

          <Menu pointing vertical >
            <Menu.Item
              name='Games'
              active={true}
              onClick={()=>{ this.teste() }}
              icon='game layout'
            />
            <Menu.Item
              name='Settings'
              active={false}
              onClick={()=>{ this.teste() }}
              icon='setting layout'
            />
            <Menu.Item
              name='Statistics'
              active={false}
              onClick={()=>{ this.teste() }}
              icon='line graph layout'
            />
          </Menu>
          
        </Grid.Column>
        <Grid.Column stretched width={12}>

        <Segment size='mini'>

          <Header as='h1' floated='left'>
            <Icon name='gamepad' />
            <Header.Content>
              Games 
            <Header.Subheader>Manage your Games</Header.Subheader>
            </Header.Content>
          </Header>

            <Button
              floated='right'
              size="large"
              color='blue'
              content='Add New Game'
              icon='add'
              labelPosition='left'
            />
          
          </Segment>

          <Card.Group itemsPerRow={this.state.itemsPerRow}>

            {games.map((game, index) => (
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

 export default StudioView
