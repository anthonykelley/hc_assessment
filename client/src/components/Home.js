import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image, Table, } from 'semantic-ui-react';

class Home extends React.Component {
  state = { peopleList: [] }

  componentDidMount() {
    axios.get('/api/people')
    .then( res => {
      this.setState({ peopleList: res.data })
    })
  }

  tableView = () => {
    return this.state.peopleList.map( p => {
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

  render() {
    return (
      <Container style={styles.padding}>
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
