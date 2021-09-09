import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import HeyArnoldContainer from '../../containers/HeyArnoldContainer';
import CharacterList from '../characters/CharacterList';
import CharacterDetails from '../characters/CharacterDetails';


const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CharacterList} />
        <Route path="/details" exact component={CharacterDetails} />
      </Switch>
    </Router>
  );
};

export default function App() {
  return <HeyArnoldContainer> <AppRouter />
  </HeyArnoldContainer>;
}
