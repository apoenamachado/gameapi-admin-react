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

class SiteHomeView extends Component {

  teste(){
    console.log('Apoena testando')
  }

  render(){
    const mobile = false
    return (
      <div>

        <Segment
          basic
          text
          size='huge'
          inverted
          color='violet'
          textAlign='center'
          style={{ minHeight: 600, padding: '1em 0em' }}
          vertical
        >
          {
          <Container>

        <Grid columns={2} stackable verticalAlign='middle' >
              <Grid.Column width={10} textAlign='left'>

                <Header
                  as='h1'
                  content='A backend platform'
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
                    fontWeight: 'normal',
                    marginTop: mobile ? '0.5em' : '0.5em',
                  }}
                />

                <p style={{ fontSize: '0.90em' }}>
                Use an API to manage game services and configure metadata to authorize and authenticate your game. Integrate popular features into your Mobile, Web and Desktop games using as our API.
                </p>



              <Button primary size='huge' to="/login"  as={Link} >
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

    <Container style={{ marginTop: '3em' , marginBottom:'3em'}}>

      {/* Cards */}

      <Card.Group itemsPerRow={3}>
        <Card  
          raised
          href='#card-example-link-card'
          header='USER ACCOUNTS'
          //meta='Friend'
          description='
          Every user is registered and has a profile for other users to find and become friends or join groups and chat.'
        />

        <Card
          raised
          href='#card-example-link-card'
          header='LEADERBOARDS'
          //meta='Friend'
          description='Leaderboards are a great way to add a social and competitive element to any game.'
        />

        <Card
          raised
          href='#card-example-link-card'
          header='DATA STORAGE'
          //meta='Friend'
          description='
          Save the game data to the cloud. The Storage service offers a simple way to save your players game data to the server.
          '
        />

        <Card
          raised
          href='#card-example-link-card'
          header='DATA STORAGE'
          //meta='Friend'
          description='
          Save the game data to the cloud. The Storage service offers a simple way to save your players game data to the server.
          '
        />

        <Card
          raised
          href='#card-example-link-card'
          header='DLC (DOWNLOAD DE CONTEÚDO)'
          //meta='Friend'
          description='
          Implement dynamic content in your game. Music, Levels, items, characters and even full games may be available for download.'
        />

        <Card
          raised
          href='#card-example-link-card'
          header='ESTÚDIOS (ORGANIZAÇÕES)'
          //meta='Friend'
          description='Crie estúdios (organização) e cadastre os jogos de forma independente.'
        />

      </Card.Group >

  
      </Container>
      </div>
    );

  }
 }

 export default SiteHomeView
