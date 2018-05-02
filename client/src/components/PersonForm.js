import React from 'react'
import axios from 'axios';
import { Form, Button, Container, Segment, } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class PersonForm extends React.Component {
  state = { first_name: '', last_name: '', address: '', age: '', hobby: '', picture: '', show: false }

  componentDidMount() {
    const personID = this.props.match.params.id

    if(personID)
      axios.get(`/api/people/${personID}`)
        .then(res => {
          this.setState({
            first_name: res.data.first_name,
            last_name: res.data.last_name,
            address: res.data.address,
            age: res.data.age,
            hobby: res.data.hobby,
            picture: res.data.picture
          })
        })
  }

  deleteButton = () => {
    if(this.props.match.params.id) {
      return(
        <div>
          {!this.state.show?
          <Button type='button' onClick={ () => this.toggleDelete()}>
            Delete
          </Button>
          :
          <Button type='button' color='red' onClick={ () => this.deleteTimecard()}>
            Confirm
          </Button>
          }
        </div>
      )
    }
  }

  toggleDelete = () => {
    this.setState({ show: true })
  }

  deleteTimecard = () => {
    axios.delete(`/api/people/${this.props.match.params.id}`)
      .then( res => {
        this.props.history.push('/')
      })
      .catch( err => {
        console.log(err)
      })
  }

  handleChange = (e, { name, value  }) => {
    this.setState({ [name]: value  })
  }

  postForm = (e) => {
    e.preventDefault();

    let baseUrl = '/api/people';
    const id = this.props.match.params.id
    const { first_name, last_name, address, age, hobby, picture } = this.state;

    baseUrl = id ? `${baseUrl}/${id}` : baseUrl;
    let params = { first_name, last_name, address, age, hobby, picture }
    if(id)
      axios.put(baseUrl, params)
      .then( res => {
        this.props.history.push('/')
      })
      .catch( err => {
        console.log(err)
      })
    else
      axios.post('/api/people', params)
      .then( res => {
        this.props.history.push('/')
      })
      .catch( err => {
        console.log(err)
      })
  }

  showHeader = () => {
    if(this.props.match.params.id)
      return(<h1>Edit Person</h1>)
    else
      return(<h1>Add New Person</h1>)
  }

  render() {
    const { first_name, last_name, address, age, hobby, picture } = this.state;
    return(
      <Container style={{paddingTop: '30px'}}>
        {this.showHeader()}
        <Form onSubmit={this.postForm}>
          <Form.Input
            name='first_name'
            value={first_name}
            label='First Name'
            placeholder='First Name'
            onChange={this.handleChange}
          />
          <Form.Input
            name='last_name'
            value={last_name}
            label='Last Name'
            placeholder='Last Name'
            onChange={this.handleChange}
          />
          <Form.Input
            name='address'
            value={address}
            label='Address (Street Address, Zip Code)'
            placeholder='Address'
            onChange={this.handleChange}
          />
          <Form.Input
            name='age'
            value={age}
            label='Age'
            placeholder='Age'
            onChange={this.handleChange}
          />
          <Form.Input
            name='hobby'
            value={hobby}
            label='Hobby'
            placeholder='Hobby'
            onChange={this.handleChange}
          />
          <Form.Input
            name='picture'
            value={picture}
            label='Picture URL'
            placeholder='Picture URL'
            onChange={this.handleChange}
          />
          <Segment basic floated='right' style={styles.flex}>
            <Button
              color='teal'
              type='submit'
            >
              Submit
            </Button>
            {this.deleteButton()}
            <Button
              as={Link}
              to={'/'}>
              Cancel
            </Button>
          </Segment>
        </Form>
      </Container>
    )
  }
}

const styles = {
  flex: { display: 'flex', justifyContent: 'flex-end' },
}

export default PersonForm;