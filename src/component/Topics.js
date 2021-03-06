import React from 'react'
import { Route, Link} from 'react-router-dom'

function Topics({ match }) {
    return (
      <div style={{width: '200px'}}>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
  
        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a topic.</h3>}
        />
      </div>
    );
  }
  function Topic(p) {
    return <h3>Requested Param: {p.match.params.topicId}</h3>;
  }
  export default Topics