import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import VideoPlayer from './pages/VideoPlayer';
import Upload from './pages/Upload';
import Profile from './pages/Profile';
import Search from './pages/Search';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/video' component={VideoPlayer} />
          <Route path='/upload' component={Upload} />
          <Route path='/profile' component={Profile} />
          <Route path='/search' component={Search} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;