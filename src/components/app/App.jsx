import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HeyArnoldContainer from '../../containers/HeyArnoldContainer';
// eslint-disable-next-line max-len
import HeyArnoldDetailsContainer from '../../containers/HeyArnoldDetailContainer';



export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HeyArnoldContainer} />
        <Route path="/:id" exact component={HeyArnoldDetailsContainer} />
      </Switch>
    </Router>
  );
}
