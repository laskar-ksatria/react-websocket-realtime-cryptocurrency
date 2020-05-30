// import React from 'react';
// import MainPage from './views/MainPage';
// import { Route, Switch, withRouter  } from 'react-router-dom';
// import Auth from './Auth';
// import {ProtectedRoute} from './ProtectedRoute'

// //Pages
// import Login from './components/Login';
// import Register from './components/Register';

// class App extends React.Component {

//   componentDidMount() {
//     if (Auth.isAuthenticated()) {
//       this.props.history.push(this.props.location.pathname)
//     }else {
//       if (this.props.location.pathname === '/register' || this.props.location.pathname === '/dashboard') {
//         this.props.history.push(this.props.location.pathname)
//       }else {
//         this.props.history.push("/")
//       }
//     }
//   };

//   render() {
//     return (
//       <div className="App">
//         <Switch>
//           <Route path="/" exact><Login/></Route>
//           <Route path="/register"><Register/></Route>
//           <Route path="/dashboard" component={MainPage} />
//           <ProtectedRoute path="/test" component={MainPage}/>
//         </Switch>
//       </div>
//     );
//   }
// }

// export default withRouter(App);


import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './views/MainPage';


class App extends React.Component {


  render() {
    return (
      <React.Fragment>
        <Header />
        <MainPage />
      </React.Fragment>
    )
  }

};

export default withRouter(App);
