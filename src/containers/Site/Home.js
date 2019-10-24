import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Header,
  Image,
  Grid,
  Card,
  Icon,
  Feed,
  Segment
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


const features = [
  {name:'USER ACCOUNTS', description:'Every user is registered and has a profile for other users to find and become friends or join groups and chat.', color:'violet', url:null, image:null},
  {name:'LEADERBOARDS', description:'Leaderboards are a great way to add a social and competitive element to any game.', color:'violet', url:null, image:null},
  {name:'DATA STORAGE', description:'Save the game data to the cloud. The Storage service offers a simple way to save your players game data to the server.', color:'violet', url:null, image:null},
  {name:'DATA STORAGE', description:'Save the game data to the cloud. The Storage service offers a simple way to save your players game data to the server.', color:'violet', url:null, image:null},
  {name:'DLC (Download Content)', description:'Every user is registered and has a profile for other users to find and become friends or join groups and chat.', color:'violet', url:null, image:null},
  {name:'STÚDIOS (ORGANIZATIONS)', description:'Crie estúdios (organização) e cadastre os jogos de forma independente.', color:'violet', url:null, image:null}
]

class SiteHomeView extends Component {

  teste(){
    console.log('Apoena testando')
  }

  render(){
    const mobile = false
    return (
      <div>
        <Segment
          //basic
          //text
          size='huge'
          inverted
          color='violet'
          textAlign='center'
          style={{ minHeight: 650, padding: '0em 0em' }}
          vertical
        >
          {
          <Container >
            <Grid columns={2} stackable verticalAlign='top'>
                <Grid.Column width={10} textAlign='left' >

                  <Header
                    as='h1'
                    content='A light backend platform'
                    inverted
                    style={{
                      fontSize: mobile ? '2em' : '2.5em',
                      fontWeight: 'bold',
                      marginBottom: 0,
                      marginTop: mobile ? '1.5em' : '2em',
                    }}
                  />
                  <Header
                    as='h2'
                    content='for indie game developers'
                    inverted
                    style={{
                      fontSize: mobile ? '1.5em' : '1.7em',
                      //fontWeight: 'normal',
                      marginTop: mobile ? '0.5em' : '0.0em',
                    }}
                  />

                  <p style={{ fontSize: '0.85em' }}>
                  Use an API to manage game services and configure metadata to authorize and authenticate your game. Integrate popular features into your Mobile, Web and Desktop games using as our API.
                  </p>

                <Button primary size='huge' to="/login" as={Link} >
                  Get Started
                  <Icon name='right arrow' />
                </Button>

                </Grid.Column>
                <Grid.Column width={6}>
                  
                  {<Image src='https://devsquad.com/wp-content/uploads/2019/06/undraw_deliveries_131a_1.png' wrapped ui={false} />}
                  {/*<Image src='https://ph-files.imgix.net/c82e2d38-f5c6-449f-babd-cc61680a8e49?auto=format'/>*/}

                </Grid.Column>
              </Grid>

          </Container>
            }
        </Segment>

    <Segment basic raised color='violet'>
    <Container style={{ marginTop: '-5.5em' , marginBottom:'3em'}}>

      <Card.Group itemsPerRow={3}>

          {features.map((item, i)=>(
            <Card  
              raised
              href='#card-example-link-card'
              header={item.name}
              //meta='Friend'
              //color={item.color}
              description={item.description}
              style={{padding:'1em'}}
          />              
          ))}

      </Card.Group >
  
      </Container>
      </Segment>
      </div>
    );

  }
 }

 export default SiteHomeView
