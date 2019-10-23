import React, {Component} from 'react';
import {
  Button,
  Container,
  Header,
  Image,
  Card,
  Icon,
  Feed,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class CardsView extends Component {

  teste(){
    console.log('Apoena testando')
  }

  render(){
    return (
      <div>
      <Container style={{ marginTop: '3em' }}>

          {/* Cards */}
          <Header as='h1' icon textAlign='center'>
              Cards
            <Header.Subheader>
              Exemplo de Cards
            </Header.Subheader>
          </Header>

          <Card.Group itemsPerRow={4}>
            <Card
              raised  
              href='#card-example-link-card'
              header='Cartão Simples de Exemplo'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            />

            <Card
              href='#card-example-link-card'
              header='Cartão Simples de Exemplo'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            />

            <Card
              href='#card-example-link-card'
              header='Cartão Simples de Exemplo'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            />

            <Card
              href='#card-example-link-card'
              header='Cartão Simples de Exemplo'
              meta='Friend'
              description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            />

          </Card.Group >

          <Card.Group itemsPerRow={4}>
          <Card raised>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
                
              />
              <Card.Header>Steve Sanders</Card.Header>
              <Card.Meta>Friends of Elliot</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Approve
                </Button>
                <Button basic color='red'>
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src='https://react.semantic-ui.com/images/avatar/large/molly.png'
              />
              <Card.Header>Molly Thomas</Card.Header>
              <Card.Meta>New User</Card.Meta>
              <Card.Description>
                Molly wants to add you to the group <strong>musicians</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Approve
                </Button>
                <Button basic color='red'>
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
              />
              <Card.Header>Jenny Lawrence</Card.Header>
              <Card.Meta>New User</Card.Meta>
              <Card.Description>
                Jenny requested permission to view your contact details
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Approve
                </Button>
                <Button basic color='red'>
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
              />
              <Card.Header>Jenny Lawrence</Card.Header>
              <Card.Meta>New User</Card.Meta>
              <Card.Description>
                Jenny requested permission to view your contact details
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Approve
                </Button>
                <Button basic color='red'>
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
          
          </Card.Group>

      {/* Outros cards */}
          
      <Card.Group itemsPerRow={4}>
          <Card raised>
          <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Nome do Jogo</Card.Header>
            <Card.Meta>Cadastrado em 12/12/2018</Card.Meta>
            <Card.Description>
              Essa seria uma descrição do jogo
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='download' />
              10 Donwloads
            </a>
          </Card.Content>
        </Card>

        <Card>
          <Image src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Nome do Jogo</Card.Header>
            <Card.Meta>Cadastrado em 12/12/2018</Card.Meta>
            <Card.Description>
              Essa seria uma descrição do jogo
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='download' />
              10 Donwloads
            </a>
          </Card.Content>
        </Card>

        <Card>
          <Image src='https://react.semantic-ui.com/images/avatar/large/molly.png' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Nome do Jogo</Card.Header>
            <Card.Meta>Cadastrado em 12/12/2018</Card.Meta>
            <Card.Description>
              Essa seria uma descrição do jogo
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='download' />
              10 Donwloads
            </a>
          </Card.Content>
        </Card>

        <Card>
          <Image src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' wrapped ui={false} />
          <Card.Content>
            <Card.Header>Nome do Jogo</Card.Header>
            <Card.Meta>Cadastrado em 12/12/2018</Card.Meta>
            <Card.Description>
              Essa seria uma descrição do jogo
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='download' />
              10 Donwloads
            </a>
          </Card.Content>
        </Card>

        </Card.Group>


        <Card.Group itemsPerRow={3}>

        <Card raised>
          <Card.Content>
            <Card.Header>Outro Exemplo</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                <Feed.Content>
                  <Feed.Date content='1 day ago' />
                  <Feed.Summary>
                    You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
                <Feed.Content>
                  <Feed.Date content='3 days ago' />
                  <Feed.Summary>
                    You added <a>Molly Malone</a> as a friend.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                <Feed.Content>
                  <Feed.Date content='4 days ago' />
                  <Feed.Summary>
                    You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Content>
        </Card>


        <Card>
          <Card.Content>
            <Card.Header>Outro Exemplo</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                <Feed.Content>
                  <Feed.Date content='1 day ago' />
                  <Feed.Summary>
                    You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
                <Feed.Content>
                  <Feed.Date content='3 days ago' />
                  <Feed.Summary>
                    You added <a>Molly Malone</a> as a friend.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                <Feed.Content>
                  <Feed.Date content='4 days ago' />
                  <Feed.Summary>
                    You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Content>
        </Card>

        <Card>
          <Card.Content>
            <Card.Header>Outro Exemplo</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                <Feed.Content>
                  <Feed.Date content='1 day ago' />
                  <Feed.Summary>
                    You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
                <Feed.Content>
                  <Feed.Date content='3 days ago' />
                  <Feed.Summary>
                    You added <a>Molly Malone</a> as a friend.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                <Feed.Content>
                  <Feed.Date content='4 days ago' />
                  <Feed.Summary>
                    You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Card.Content>
        </Card>


        </Card.Group>  


      </Container>
      </div>
    );

  }
 }

 export default CardsView
