import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './context/auth';
import * as serviceWorker from './serviceWorker'
import configureStore from './store/configureStore';
import Navigation from './components/Navigation'
import ProtectedRoute from './components/ProtectedRoute';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';



// Routes
import Home from './routes/Home.jsx'
import Auth from './routes/Auth'
import AddReference from './routes/AddReference2/index'
import MyReferences from './routes/MyReferences'
import ShareReferences from './routes/ShareReferences/index'
import ApproveReference from './routes/ApproveReference/index.jsx'
import Overview from './routes/Overview/index'

import './index.scss'
// import 'materialize-css'
// import 'materialize-css/dist/css/materialize.min.css'

library.add(fas)

const initialState = window.initialReduxState;
const store = configureStore(initialState);
const routing = (
  <AuthProvider>
    <Provider store={store}>
      <Router>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <ProtectedRoute exact path="/overview" component={Overview} />
        <Route path="/add-reference" component={AddReference} />
        <ProtectedRoute path="/my-reference" component={MyReferences} />
        <ProtectedRoute path="/share-references" component={ShareReferences} />
        <Route path="/approve-reference/:id" component={ApproveReference} />
      </Router>
    </Provider>
  </AuthProvider>
)

ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()