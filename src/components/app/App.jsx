import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HeyArnoldContainer from '../../containers/HeyArnoldContainer';
import HeyArnoldDetailsContainer from '../../containers/HeyArnoldDetailContainer';



const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HeyArnoldContainer} />
        <Route path="/details" exact component={HeyArnoldDetailsContainer} />
      </Switch>
    </Router>
  );
};

export default function App() {
  return <>
    <HeyArnoldContainer> <AppRouter />
    </HeyArnoldContainer>
    <HeyArnoldDetailsContainer> <AppRouter />
    </HeyArnoldDetailsContainer>
  </>;
}
