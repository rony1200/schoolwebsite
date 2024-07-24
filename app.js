// src/App.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import About from './about';
import Admissions from './admissions';
import Faculty from './faculty';
import Students from './students';
import Gallery from './gallery';
import Contact from './contact';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/about" component={about} />
        <Route path="/admissions" component={admissions} />
        <Route path="/faculty" component={faculty} />
        <Route path="/students" component={students} />
        <Route path="/gallery" component={gallery} />
        <Route path="/contact" component={contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;