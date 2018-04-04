import React from 'react'
import Dashboard from './Dashboard'
import Home from './Home'
import { Link, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return(
      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>

        <Route exact_path='/' component={Home} />
        <Route path='/dashboard' component={Dashboard} />
      </div>
    )
  }
}

export default App