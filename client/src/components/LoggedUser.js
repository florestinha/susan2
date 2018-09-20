import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const QUERY = gql`
  {
    loggedUser {
      id
      name
    }
  }
`;

class LoggedUser extends Component {
  render() {
    return (
      <Query query={QUERY} fetchPolicy="network-only">
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>;
          if (error) return <div>Error</div>;

          const { loggedUser } = data;

          return (
            <div>
              {
                loggedUser
                  ? (
                    <div>
                      {loggedUser.id} {loggedUser.name}
                    </div>
                  )
                  : <div> Not logged in </div>
              }
            </div>
          );
        }}
      </Query>
    );
  }
}

export default LoggedUser;
