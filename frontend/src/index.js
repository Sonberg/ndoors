import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import Home from './containers/Home.jsx'
import AddReference from './containers/AddReference'
import * as serviceWorker from './serviceWorker'

const routing = (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/addReference" component={AddReference} />
        {/* <Route path="/contact" component={Contact} /> */}
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
