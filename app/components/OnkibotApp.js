import React from 'react';
import OnOffButton from '../containers/OnOffButton';
import { Card, CardHeader, CardActions, FlatButton } from 'material-ui';

const OnkibotApp = () => (
  <div className="container">
    <header>
      <span className="icn-logo">
        <img src="assets/onkiBot-logo.png"/>
      </span>
      <ul className="main-nav">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/teachers">Teachers</a></li>
        <li><a href="/courses">Courses</a></li>
      </ul>
    </header>
    <Card>
        <CardHeader title="Onkibot" subtitle="The button" />
        <CardActions>
            <OnOffButton />
        </CardActions>
    </Card>
  </div>

);

export default OnkibotApp;
