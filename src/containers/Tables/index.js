import React, {Component} from 'react';
import {
  Button,
  Container,
  Header,
  Image,
  Table,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class TablesView extends Component {

  teste(){
    console.log('Apoena testando')
  }

  render(){
    return (
      <div>
      <Container style={{ marginTop: '3em' }}>

        <Header as='h1' icon textAlign='center'>
            Tables
          <Header.Subheader>
            Tables examples
          </Header.Subheader>
        </Header>

        <Table collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Id</Table.HeaderCell>
              <Table.HeaderCell>Avatar</Table.HeaderCell>
              <Table.HeaderCell>Nome</Table.HeaderCell>
              <Table.HeaderCell>Descrição</Table.HeaderCell>
              <Table.HeaderCell>Gẽnero</Table.HeaderCell>
              <Table.HeaderCell>Ação</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>01</Table.Cell>
              <Table.Cell>

                <Header as='h4' image>
                  <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='big' />
                  <Header.Content>
                    Jogo 1
                    <Header.Subheader>Descrição jogo 1</Header.Subheader>
                  </Header.Content>
                </Header>

              </Table.Cell>
              <Table.Cell>Jogo 1</Table.Cell>
              <Table.Cell>Descrição</Table.Cell>
              <Table.Cell>Arcade</Table.Cell>
              <Table.Cell><Button basic>Editar</Button></Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell>01</Table.Cell>
              <Table.Cell>

                <Header as='h4' image>
                  <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded size='mini' />
                  <Header.Content>
                    Jogo 2
                    <Header.Subheader>Descrição do Jogo 2</Header.Subheader>
                  </Header.Content>
                </Header>
                
              </Table.Cell>
              <Table.Cell>Jogo 1</Table.Cell>
              <Table.Cell>Descrição</Table.Cell>
              <Table.Cell>RPG</Table.Cell>
              <Table.Cell><Button basic>Editar</Button></Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell>01</Table.Cell>
            <Table.Cell>

              <Header as='h4' image>
                <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
                <Header.Content>
                  Jogo 3
                  <Header.Subheader>Teste de Descrição</Header.Subheader>
                </Header.Content>
              </Header>

              </Table.Cell>
              <Table.Cell>Jogo 1</Table.Cell>
              <Table.Cell>Descrição</Table.Cell>
              <Table.Cell>Arcade</Table.Cell>
              <Table.Cell><Button basic>Editar</Button></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

      </Container>
      </div>
    );

  }
 }

 export default TablesView
