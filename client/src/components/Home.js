import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image, Table, Input, } from 'semantic-ui-react';

class Home extends React.Component {
  state = { peopleList: [], search: '', }

  componentDidMount() {
    axios.get('/api/people')
    .then( res => {
      this.setState({ peopleList: res.data })
    })
  }

  tableView = () => {
    let people = this.state.peopleList.filter( (person) => {
      let full_name = `${person.first_name} ${person.last_name}`
      return person.first_name.toLowerCase().includes(this.state.search.toLowerCase()) || person.last_name.toLowerCase().includes(this.state.search.toLowerCase()) || full_name.toLowerCase().includes(this.state.search.toLowerCase())
    });
    return people.map( p => {
      return(
        <Table.Row key={p.id}>
          <Table.Cell>
            <Image src={`${p.picture}`} rounded size='tiny' />
          </Table.Cell>
          <Table.Cell>
            <Header.Content>
              <Link to={`/person_form/${p.id}/`} style={styles.linkColor}>
                {p.first_name} {p.last_name}
              </Link>
            </Header.Content>
          </Table.Cell>
          <Table.Cell>
              {p.address}
          </Table.Cell>
          <Table.Cell>
              {p.age}
          </Table.Cell>
          <Table.Cell>
              {p.hobby}
          </Table.Cell>
        </Table.Row>
      )
    })
  }

  updateSearch(e) {
    this.setState({ search: e.target.value.substr(0,20)})
  }

  render() {
    return (
      <Container style={styles.padding}>
        <Input
          placeholder='Search by name...'
          type='text'
          value={this.state.search}
          onChange={e => this.updateSearch(e)}
          fluid
        />
        <Table basic='very' celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Age</Table.HeaderCell>
              <Table.HeaderCell>Hobby</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.tableView()}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

const styles = {
  padding: { paddingTop: '50px', paddingBottom: '50px'},
  linkColor: { color: '#00b3b3' },
}

export default Home;
