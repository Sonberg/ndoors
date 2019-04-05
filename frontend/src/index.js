import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './containers/Home.jsx'
import AddReference from './containers/AddReference'
import MyReferences from './containers/MyReferences'
import SharedReferences from './containers/SharedReferences'
import ApproveReference from './containers/ApproveReference'
import Overview from './containers/Overview/index'
import * as serviceWorker from './serviceWorker'

import './index.scss'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

const routing = (
    <Router>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/overview" component={Overview} />
        <Route path="/add-reference" component={AddReference} />
        <Route path="/my-reference" component={MyReferences} />
        <Route path="/shared-reference" component={SharedReferences} />
        <Route path="/approve-reference" component={ApproveReference} />
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
