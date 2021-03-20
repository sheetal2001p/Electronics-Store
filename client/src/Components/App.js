import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.css';
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import Userpage from "./Userpage"
import Mywishlist from "./Mywishlist"
import Adminpage from "./Adminpage"
import scroll from "./scroll"
import {Route,Switch,Link} from "react-router-dom"
function App(){
    return (
   <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/userpage" component={Userpage} />
        <Route exact path="/mywishlist" component={Mywishlist} />
        <Route exact path="/admin" component={Adminpage} />
      </Switch>
    </div>
    );
}
export default App;