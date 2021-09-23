import React from 'react'
import Manga from '../Manga'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Login from './Login';


function Navbar() {
    return (
        <Router>
            <ul className='navbar'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Manga'>Manga</Link></li>
                <li><Link to='/Login'>Login</Link></li>
            </ul>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/Manga' component={Manga} />
            <Route path='/Login' component={Login} />
        </Switch>
    </Router>

    )
}

export default Navbar
