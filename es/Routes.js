import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DataList from './DataList';

class Routes extends Component {
  render() {
    const { routes } = this.props;
    return (
      <Switch>
        {routes.map(
          (route) => (
            <Route {...route} />
          )
        )}
      </Switch>
    );
  }
}

export default Routes;