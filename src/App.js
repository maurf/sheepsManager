import React, { Suspense }  from 'react';
import Layout from './hoc/Layout/Layout';
import {withRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './containers/LoginForm/LoginForm';

const Sheeps = React.lazy(() => {
  return import("./containers/Sheeps/AllSheeps/AllSheeps")
});

const NewSheep = React.lazy(() => {
  return import("./containers/Sheeps/NewSheep/NewSheep")
});

const EditSheep = React.lazy(() => {
  return import("./containers/Sheeps/EditSheep/EditSheep")
});

//TODO: Fix scrollTop
const app = props => {  
  let routes = (
    <Switch>
      <Route path="/new" component={NewSheep}></Route>
      <Route path="/sheep/:id" component={EditSheep}></Route>
      <Route path="/" exact component={Sheeps}></Route>
      <Redirect to="/" />
    </Switch>
  );
  
  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>
          {routes}
        </Suspense>

      </Layout>
    </div>
  );
}

export default withRouter(app);
