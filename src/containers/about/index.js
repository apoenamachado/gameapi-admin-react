import React, {Component} from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

class About extends Component {

  teste(){
    console.log('Apoena testando')
  }

  render(){
    return (
      <div>
        <Container style={{ marginTop: '1em' }}>

          <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  We Help Companies and Companions
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  We can give your company superpowers to do things that they never thought possible.
                  Let us delight your customers and empower your needs... through pure data analytics.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  We Make Bananas That Can Dance
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                  bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image bordered rounded size='large' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiB2aWV3Qm94PSIwIDAgMzUyLjYgMjAzLjEiPgogIDxzdHlsZT4KICAgIC5zdDF7ZmlsbDojZjJmMmYyfS5zdDN7ZmlsbDpub25lO3N0cm9rZS13aWR0aDouNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2U6I2Q4ZGNkYztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmR9LnN0NHtmaWxsOiNmZmZ9LnN0N3tmaWxsOiNmM2MwMTh9LnN0OHtmaWxsOiMzM2JkYjF9LnN0OXtmaWxsOiNlMmU2ZTd9LnN0MTF7ZmlsbDojYmRiZWJkfS5zdDEye2ZpbGw6I2FhYX0uc3QxM3tmaWxsOiNiMjdiNjN9LnN0MTR7ZmlsbDojNGM0ZDRjfS5zdDE2LC5zdDIwe2ZpbGw6bm9uZTtzdHJva2Utd2lkdGg6LjY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZTojMWM4NDc4fS5zdDIwe3N0cm9rZTojNGM0ZDRjfQogIDwvc3R5bGU+CiAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDhkY2RjIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iLjYiIGQ9Ik0wIDE3Ny43aDM1Mi42Ii8+CiAgPHBhdGggZD0iTTI5Ni42IDEyOC4zbC0yMzguOCAxLjMtMS43LTUxLjMgMjQwLjUtLjV6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjJmMmYyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iLjYiIGQ9Ik01OC43IDE0NC4xYzIuOCAxLjIgMzcuNCAxIDQwLS40IDEtLjUgMi0xLjMgMy4yLTEuNC44LS4xIDEuNi4yIDIuMy40IDIuNS42IDUuMi42IDcuOC43aDU1LjNNNTkuNyAxNTJjNy40IDAgNDYuMS0uMiA1My40LS43IDMuNy0uMiA3LjQtLjYgMTEuMS0uNyA0LS4xIDguMS0uNSAxMi4xLjIgOC4yIDEuMiAyMS4xLjcgMzEuNyAxbS0xMDguMyA4LjNjOS40LS44IDUwLjEtLjggNTkuNS0uMSA1LjUuNCAxMS4yIDEuMSAxNi4zLS45IDEuNS0uNiAyLjktMS40IDQuNS0xLjMgMSAwIDIgLjQgMi45LjggNy40IDIuNyAxNS40IDIuMyAyMy4zIDEuOW0tMTA1LjkgOS4xYzMuNS0uMiAzOC4zLS40IDQxLjctLjUgMS41LS4xIDMtLjIgNC40LS43LjktLjQgMi0xIDIuOS0uNS40LjIuNy42IDEuMS45LjkuNyAyLjEuOCAzLjMuOCA2LjkuMiAxMy45LjQgMjAuOC41bTU1LjUtMjcuN2MzNC4xLS40IDY5LjYtMiAxMDMuNy0uOU0xOTAgMTUwLjljMTQuNi0uMiAyOS4yLS4zIDQzLjctLjUgNC40LS4xIDguOC0uMSAxMy4yLS4yIDMuNCAwIDYuNy0uMSAxMC4xLS4yIDIuNi0uMSA1LjEtLjMgNy43LS40IDIuOC0uMSA1LjcgMCA4LjUgMGwxOC44LjNtLTEwMy42IDguOWM2IC45IDEyLjIuNSAxOC0xLjIgMi4zLS43IDQuNy0xLjYgNy0xIDEuMi4zIDIuMiAxIDMuMyAxLjMgMS41LjUgMy4xLjUgNC42LjUgMjIuMi4xIDQ0LjQuMyA2Ni42LjRtLTEwMC42IDEwLjljNC4yLjUgOC41LTEuMiAxMi43LTEgMS43LjEgMy40LjUgNSAuNiAyLjkuMyA1LjkgMCA4LjgtLjIgMTItLjkgMjQuMi0xLjEgMzYuMi0uNCIvPgogIDxwYXRoIGQ9Ik0xNzYuNyAxMDguN2MtMy4xLTEtNi45IDEtNy44IDQuMi0uNiAyLjMuMyA0LjkgMiA2LjYgMS43IDEuNyA0LjEgMi42IDYuNiAyLjYiIGNsYXNzPSJzdDMiLz4KICA8cGF0aCBkPSJNMTkzLjUgMTI5LjJsLTE2LjcuMi0xLjktMzAuNWgyNC4ybC0zLjggOC40em0zNC41LS4zbC0yLjEtMTguMSAxNC42LTEuMS0xLjUgMTkuMXptMjQuMiAwbC0yLjEtMTguMSAxNC40LjctMS4zIDE3LjN6bS0xMzguOSAwbC0yLTE4LjEgMTQuNC43LTEuNCAxNy4zeiIgY2xhc3M9InN0NCIvPgogIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2FhYSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iLjYiIGQ9Ik0yMjUuNCA4OS42Yy0yLjIgMi41LTUuOSAzLjYtOS4xIDIuNy0xLjUtLjQtMi44LTEuMy00LjMtMS44LTMuNi0xLjQtNy44LTEuMS0xMS4xLjgtLjguNC0xLjUgMS0yLjQgMS0uOCAwLTEuNS0uNC0yLjItLjktMi4xLTEuNC0zLjktMy4yLTUuNC01LjMtLjMtLjUtLjctMS0xLjItMS4yLS45LS40LTIgLjItMi44LjgtMy44IDIuNi03LjcgNS0xMS43IDcuMS0yLjcgMS40LTUuNSAyLjctOC41IDMuMi0yLjEuMy00LjYuMS02LjEtMS40LTEuOC0xLjktMS42LTUuMS4xLTcuMS41LS42IDEuMi0xLjEgMS45LTEuMi44LS4xIDEuNi42IDEuNSAxLjQtLjEuNi0uNiAxLTEuMSAxLjMtNiAzLjctMTQgNC0yMC4zLjYtLjctLjQtMi4xLTEuMS0yLjktMS4zLS45LS4zLTIgLjEtMi44LjYtLjguNS0xLjYgMS4yLTIuNSAxLjYtMi4xIDEtNC42LjUtNi45LS4xLTIuMy0uNi00LjctMS4zLTYuOS0uNiIgb3BhY2l0eT0iLjIiLz4KICA8Y2lyY2xlIGN4PSIzOC4zIiBjeT0iMjUuNiIgcj0iNC40IiBmaWxsPSIjZTg2NjViIi8+CiAgPGNpcmNsZSBjeD0iNTIuOCIgY3k9IjI1LjYiIHI9IjQuNCIgY2xhc3M9InN0NyIvPgogIDxjaXJjbGUgY3g9IjY1LjciIGN5PSIyNS42IiByPSI0LjQiIGNsYXNzPSJzdDgiLz4KICA8cGF0aCBkPSJNMzEwLjggMzAuOEwxMzEgMzAuMmMtMi4xIDAtMy43LTEuOC0zLjYtMy44bC4zLTUuNWMuMS0xLjkgMS43LTMuNCAzLjYtMy40bDE3OS40LS41YzIgMCAzLjYgMS42IDMuNiAzLjVsLjIgNi41YzAgMi4xLTEuNiAzLjgtMy43IDMuOHoiIGNsYXNzPSJzdDMiLz4KICA8cGF0aCBkPSJNMzEuNiAxNzcuN2MtNC40IDAtOC0zLjYtOC04TDIyLjggMTRjMC0zLjkgMy4xLTcgNy03bDI5MS41IDEuN2MzLjggMCA2LjkgMy4xIDYuOSA3djE1NGMwIDQuNC0zLjYgOC04IDhIMzEuNnpNMjMgNDEuMWwzMDUuMy0yLjMiIGNsYXNzPSJzdDMiLz4KICA8cGF0aCBkPSJNOTMuOCAxNzRsLTQxLjQuOHYtN2g0MS40em02LjEtNDYuMWwtNDMuOC0uNnYtNi4yaDQzLjh6bS04LjkgNjdsLTM5LjQtLjF2LTYuMmwzOS40LS45em03LjItODkuMUg1Ni4xdi03LjJsNDIuMSAxem0tMi42IDQ2LjhoLTQ0di03LjFsNDQgLjl6bTQuMy03MGwtNDEuOC45di03LjFoNDEuOHptMC0yMi4ybC00MC41LjktLjctNy4xaDQxLjJ6IiBjbGFzcz0ic3Q5Ii8+CiAgPHBhdGggZD0iTTUxLjUgMjAyLjloLThMNTQuNyAzNi42bDYuNi45em00Ni4xIDBsLTcuMi4yIDkuOS0xNjYuMyA3LjgtLjJ6IiBjbGFzcz0ic3Q5Ii8+CiAgPHBhdGggZD0iTTE0Ny42IDMxaDIuMXY2LjFoLTIuMXoiIGNsYXNzPSJzdDExIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTcwLjE5NyAxNDguNjE1IDM0LjAzKSIvPgogIDxwYXRoIGQ9Ik0xNDguNiAyOS45bC0xLjMgNy44LTE0LTMuMSAxLjEtNi44LjQtLjFjNC43LTEuNCA5LjgtLjYgMTMuOCAyLjJ6IiBjbGFzcz0ic3QxMiIvPgogIDxwYXRoIGQ9Ik0xMzguMyAzNS43bC0yLjQgMTkgMy40LjggMy40LTE4Ljh6IiBjbGFzcz0ic3QxMSIvPgogIDxwYXRoIGQ9Ik0xNTEuMSAzOC41bC0yLjMtLjYgMS4zLTcuNyAyLjguOXoiIGNsYXNzPSJzdDEyIi8+CiAgPHBhdGggZD0iTTgyIDk1LjRjLTEuNCA1LjUtNC4xIDE2LjctNy4yIDIyLjYtNC4yIDYuMS0yMS44IDcuNC0yOS4xIDEwLjlsLTQuMi0yLjEgMS45LTMuNmMzLjctMi40IDguMy01LjIgMTItNy42IDIuOS0xLjggNi0zLjkgOC02LjcgMS40LTQuNiA1LjMtMTMuOCA2LjktMjguNiA5IDEuOSAxOC43LS42IDI3LjggMS4xIDEuMyA5LjIuNCAyMy41LTEuMSAzNy42LS43IDguNC02LjIgMTcuMi02LjYgMjUuNmwtMy4xIDEuOC0zLTEuNmMtLjEtLjgtMS45LTE1LjgtLjItMjYuNi0uMi4xLTIuOC0xNC40LTIuMS0yMi44eiIgY2xhc3M9InN0MTMiLz4KICA8cGF0aCBkPSJNOTYuOSAxMTkuMWMxLjctMTQuNCAyLjQtMjguNCAxLjEtMzcuNi05LTEuNy0xOS43LjktMjguNy0xLTMgMTQuMS00LjUgMjMuOS01LjkgMjguNGwxMS40IDguOWMzLjEtNS45IDUuNy0xNyA3LjEtMjIuNS0uNiA4LjQgMS45IDIyLjkgMS45IDIyLjlsMTMuMS45eiIgY2xhc3M9InN0OCIvPgogIDxwYXRoIGQ9Ik01MC4yIDUzLjFjMS4zIDYuOCA0LjEgMTYuMyAxMC43IDE4LjggNC43LTIuOSA5LjItNy4xIDExLjktMTEuOWwuNi04LTUuMS0uN2MtNC41IDMuOS01LjMgNi42LTcuNyAxMC4xLS4yLS4zLTMuNS00LjEtNC43LTguMy0uMi0uNi4yLTEuMy43LTEuNi4zLS4yLjUtLjMuNS0uOC0uMS0uOS0xLjMuNS0xLTEuOS4zLTEuOS0xLjgtMS42LTMuOS0xLjQtMy41LjMtMi4xIDUuMy0yIDUuN3ptNTQuMy0yMS42Yy00LjIgOS43LTIyLjQgOC4xLTI0LjEtOS41Qzc5IDcuNCA5Ny43IDEuOSAxMDMuNiAxMi43Yy43IDEuMy45IDIuNSAxIDQgLjEgMS40LjYgMi43IDEuMyAzLjkuNC42LjggMS4yIDEgMS45LjIuNy4yIDEuNS0uMyAyLS40LjQtLjkuNS0xLjIuOS0uMy40LS4zLjktLjQgMS4zLS4xIDEuNC4xIDMuNC0uNSA0Ljh6IiBjbGFzcz0ic3QxMyIvPgogIDxwYXRoIGQ9Ik04Ny40IDM0LjRsLS44IDguOWg4LjFsLS4xLTYuNnptNTQuOCA5LjhjLjUuMi43LjguNSAxLjItLjEuMi0uMi4zLS4zLjUtLjMuNS0uMSAxLjEgMCAxLjcuMS42LjIgMS4yLS4yIDEuNi0uMy4zLS43LjQtLjkuNy0uMi40LS4xLjktLjQgMS4zLS4yLjItLjYuMy0uOS4zLS41LjEtMS4yLjMtMS43LjMtMTMuMiAxNS45LTI1IDIxLjgtMzguNCA2LjRsOC43LTdjNS4yIDYuMyAxMi4xIDEwLjYgMjUuMi0zLjMuNC0uNS42LTEuMy42LTEuOSAwLS4zLS4xLS43LjEtMSAuMS0uMi4zLS40LjQtLjYuMi0uMy41LS41LjgtLjYuNSAwIDYuNS40IDYuNS40eiIgY2xhc3M9InN0MTMiLz4KICA8cGF0aCBkPSJNOTkuNyA2MGwxMS41LTkuNi00LjktNC41Yy0yLjYtMi40LTUuOS0zLjktOS40LTQuM2wtMTAtMS4yYy03LjUtLjktMTQuOCAyLjQtMTkgOC43bC0yLjQgMy42IDYuNSAyLjljLTEgNi4xLTEuOSAxOS40LTMuNSAyOC44IDEuNiAxLjUgMTcuNi0yIDI5LjguNUw5OS43IDYweiIgY2xhc3M9InN0NCIvPgogIDxwYXRoIGQ9Ik0xMDYuNSA1LjVjNSA1LjEtLjQgNS42LTEuMyA2LjMtLjUuNC0uOCAxLjEtMS4yIDEuNi0xLjggMi4xLTQuMSAwLTQuNiAyLjMtLjggMy42LTQgLjItNSAyLjMtMS4yIDIuNS42IDUtNC43IDQuOC0xLjUtLjEtMi41LTIuMi00LTEuOC00LjIgMS4zIDEuOCA5LjctMi4xIDExLjQtMS4zLjYtNS42LjYtNS43LTMuNy0uMS0zLjktLjItMy0xLjMtNi0xLjctNC43LjMtNy4xLjEtOS4yLS42LTYuOSA0LjItNi42IDYtNy41IDIuNC0xLjEgNS4yLTYuMiA4LjMtNC40IDEuNC44IDEgMS4xIDIuOC41IDMtMSA0LjUgMS41IDUuNSAxLjguOC4zIDQuNy0xIDcuMiAxLjZ6IiBjbGFzcz0ic3QxNCIvPgogIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2MxYmViZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iLjYiIGQ9Ik03MiA1Ni42Yy4xLTEuNC4xLTIuOC4yLTQuMm0yNi4xIDMxLjhjLjMtOC41LjYtMTIuNSAxLjUtMjAuOSIvPgogIDxwYXRoIGQ9Ik02MC45IDExMi4xbDEzLjIgNy44Yy4zLS44IDEuNi0yLjQgMi4yLTQuMUw2Mi44IDEwOGMtLjcgMS4yLTEuNyAzLjUtMS45IDQuMXoiIGNsYXNzPSJzdDgiLz4KICA8cGF0aCBkPSJNNjIuOCAxMDhsMTMuNSA3LjdtLTIuMiA0LjFsLTEzLjItNy43LjktMiIgY2xhc3M9InN0MTYiLz4KICA8cGF0aCBkPSJNOTcuOCAxMTcuNmwtMTQuNy0uNmMwIDEtLjIgMi0uMiA0LjVsMTQuOS40Yy4xLTEuNC4xLTMuNiAwLTQuM3oiIGNsYXNzPSJzdDgiLz4KICA8cGF0aCBkPSJNODIuOSAxMjEuNmwxNC45LjR2LTEuOG0wLTIuNmwtMTQuNy0uNW01LTIxLjNjLTEuMS0uOC0yLjItMS42LTMuMy0yLjUuMS0xLjEgMC0yLjEtLjItMy4yLS4yLTEtLjQtMi4xLS4yLTMuMSAyLjktLjEgNS45LS4yIDguOC0uMyAwIDEuNy4zIDMuNy4zIDUuNG0tMjQuOC01YzIuNC0uMSA0LjkuMiA3LjIuOS0uMSAyLjQgMCAzLjktLjUgNi40IiBjbGFzcz0ic3QxNiIvPgogIDxwYXRoIGQ9Ik00Ny4xIDEyOC4zYy0uMiAyLjYgMi4yIDUuMS0uMyA4LjgtLjcgMS0xLjkgMS0yLjcgMC0uMy0uMy0uNS0uNy0uNy0xLTEuOC0zLTIuMi02LjItMy40LTEwLjQtLjEtLjQuMS0uOC41LTEgMS4zLS42IDIuMy0uOCAzLjUtMS45LS4yIDIuNCAxIDQuMSAzLjEgNS41em00MyAxNS4zYzIuMi0uMiA1LjYgMS42IDYuMSAyLjYuMyAxLjMgMi4yIDQuMi0xMS44IDIuNy0uOC0uMS0xLjQtLjgtMS4zLTEuNi4yLTEgLjQtMi4zLjctMy42LjguOCAyLjYgMS4yIDMuNyAxIC43LS4xIDItLjYgMi42LTEuMXoiIGNsYXNzPSJzdDE0Ii8+CiAgPGc+CiAgICA8cGF0aCBkPSJNMjk2LjUgNDkuOGwtMTQyLjQtMS4xVjBsMTQyLjQgMS41eiIgY2xhc3M9InN0MSIvPgogICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYWFhIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIuNiIgZD0iTTE1NC45IDE0LjhsMTQwLjIgMS40bS0yLjIgNy41bC0xMzggLjdtLjcgNy44bDEzOS41IDFNMTU0LjYgNi43bDE0MC41IDFNMjkxIDQzLjFsLTEzNi4xLTIuM00xNzcuNyAxNVY3LjJtMjAuOCA4LjNsLjIgOC4ybTYxLjQtNy43bC0uMiA3LjltLTIyLjQuM2wuNiA4LjVtLTY0LTguM2wtLjMgNy44bTEyLjYuMmwuNCA4LjRtNjcuOS03LjlsLS40IDkuNU0yMzIuMSA3LjJ2OC4zbTMwLTguMWwtLjMtNW0tNTguOSA0LjNsLjUtNS4xbTE4IDQwLjhWNDhtNjYuNS01djUuOG0tMTIxLjItNy43bC0uNyA2LjUiIG9wYWNpdHk9Ii4zIi8+CiAgICA8cGF0aCBkPSJNMjM4LjcgMTkuMmMxLjgtMS4xIDIuMy0zLjUgMS4yLTUuMy0xLjEtMS44LTMuNS0yLjMtNS4zLTEuMi0uMSAwLS4xLjEtLjIuMS01LjEtMy41LTEyLjQtMy42LTE4LjQuMy02IDMuOC04LjkgMTAuNS03LjkgMTYuNi0uMSAwLS4xLjEtLjIuMS0xLjggMS4xLTIuMyAzLjUtMS4yIDUuMyAxLjEgMS44IDMuNSAyLjMgNS4zIDEuMi4xLS4xLjItLjEuMy0uMiA1LjEgMy4zIDEyLjIgMy4zIDE4LjEtLjUgNS45LTMuOCA4LjgtMTAuMyA4LTE2LjMuMSAwIC4yIDAgLjMtLjF6IiBjbGFzcz0ic3Q3Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9Ii42IiBkPSJNMjEyLjggMjUuM2MxLjMtNS45IDYuNC05LjQgMTMuNC05LjUiLz4KICAgIDxjaXJjbGUgY3g9IjE1Ny41IiBjeT0iMy42IiByPSIxLjIiIGNsYXNzPSJzdDE0Ii8+CiAgICA8Y2lyY2xlIGN4PSIyOTMuMiIgY3k9IjMuNiIgcj0iMS4yIiBjbGFzcz0ic3QxNCIvPgogICAgPGNpcmNsZSBjeD0iMjkyLjYiIGN5PSI0Ni41IiByPSIxLjEiIGNsYXNzPSJzdDE0Ii8+CiAgICA8cGF0aCBkPSJNMTU3LjMgMy42aDEuNCIgY2xhc3M9InN0MjAiLz4KICAgIDxjaXJjbGUgY3g9IjE1OC4xIiBjeT0iNDUuNiIgcj0iMS4zIiBjbGFzcz0ic3QxNCIvPgogICAgPHBhdGggZD0iTTE1OC4zIDQ1LjRsMi40LS43bTEzMS45IDEuOGwtMS42LS44bTIuMi00Mi4xbC0uOC45IiBjbGFzcz0ic3QyMCIvPgogIDwvZz4KICA8Zz4KICAgIDxwYXRoIGQ9Ik0xNjMuNiA0My42bDQuMS0yLjFtLTUuOS0uNGwxLjMtMy45bS42IDkuNWw0LjUgMS4ybS03LjEgMS4xbDEuMiAzLjhtLTMuOS0xMS40bC0xLjYtNC4zIiBjbGFzcz0ic3QyMCIvPgogIDwvZz4KPC9zdmc+Cg==' />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Button size='huge'>Check Them Out</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  "What a Company"
                </Header>
                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  "I shouldn't have gone with their competitor."
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image avatar src='https://react.semantic-ui.com/images/avatar/large/nan.jpg' />
                  <b>Nan</b> Chief Fun Officer Acme Toys
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

          <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned how to master the
          art of doing nothing by providing massive amounts of whitespace and generic content that
          can seem massive, monolithic and worth your attention.
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Case Studies</a>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
          it's really true. It took years of gene splicing and combinatory DNA research, but our
          bananas can really dance.
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>


        </Container>
      </div>
    );

  }
 }

 export default About
