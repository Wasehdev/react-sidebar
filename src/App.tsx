
import { Home } from 'components/home';
import Sidebar from 'components/sidebar';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="container">
     <Sidebar/>
    <div>
      <Switch>
        <Route exact path="/" component={()=> <Home text ={'home'} /> }/>
        <Route path="/about" component={()=> <Home text ={'about'} /> }/>
        <Route path="/social" component={()=> <Home text ={'social'} /> }/>
        <Route path="/faq" component={()=> <Home text ={'faq'} /> }/>
        <Route path="/login" component={()=> <Home text ={'login'} /> }/>
        <Route path="/register" component={()=> <Home text ={'register'} /> }/>
        <Route path="/forgot-password" component={()=> <Home text ={'forgot password'} /> }/>
        <Route path="/reset-password" component={()=> <Home text ={'reset password'} /> }/>
        <Route path="/profile" component={()=> <Home text ={'profile'} /> }/>
        <Route path="/logout" component={()=> <Home text ={'logout'} /> }/>
        <Route path="/feed" component={()=> <Home text ={'feed'} /> }/>
        <Route path="/settings/account" component={()=> <Home text ={'account settings'} /> }/>
        <Route path="/settings/notifications" component={()=> <Home text ={'notifications settings'} /> }/>
        <Route path="/settings/billing/payment" component={()=> <Home text ={'payment settings'} /> }/>
        <Route path="/settings/billing/subscription" component={()=> <Home text ={'subscription settings'} /> }/>
      </Switch>
    </div>
    </div>
  );
}

export default App;
