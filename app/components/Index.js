import React from 'react';
import { Link } from 'react-router';
import { Menu, MenuItem, Card, CardActions, Divider } from 'material-ui';
import OnOffButton from '../containers/OnOffButton';
import MediaQuery from 'react-responsive';
import SignupForm from '../forms/SignupForm';

const Index = () => (
    <div className="main-content main-content-index">
      <Card>
          <div className="page-title-container">
            <h1>Who needs OnkiBot?</h1>
          </div>
          <Divider/>
          <MediaQuery query='(orientation: landscape)'>
            <CardActions>
                <div className="cardActions-wrap">
                  <div className="section-box section-box-split float-left">
                    <img src="./images/hallvard.jpg" alt="Hallvard Trætteberg"/>
                  </div>
                  <div className="section-box section-box-split float-right">
                    <h2>Hallvard Trætteberg</h2>
                    <p>
                      Hallvard has lectured in Object Oriented programming
                      for over 10 years. He experiences many students who don’t know where to start when
                      looking for contextual resources. Students often end up beeing too dependent on the
                      lecturer rather than getting used to using external resources.
                    </p>
                  </div>
                  <div className="clearfix"/>
                </div>
            </CardActions>
          </MediaQuery>
          <MediaQuery query='(orientation: portrait)'>
            <CardActions>
                <div className="cardActions-wrap">
                  <div className="section-box">
                    <img src="./images/hallvard.jpg" alt="Hallvard Trætteberg"/>
                  </div>
                  <div className="section-box">
                    <h2>Hallvard Trætteberg</h2>
                    <p>
                      Hallvard has lectured in Object Oriented programming
                      for over 10 years. He experiences many students who don’t know where to start when
                      looking for contextual resources. Students often end up beeing too dependent on the
                      lecturer rather than getting used to using external resources.
                    </p>
                  </div>
                  <div className="clearfix"/>
                </div>
            </CardActions>
          </MediaQuery>
      </Card>
      <Card>
          <MediaQuery query='(orientation: landscape)'>
            <CardActions>
                <div className="cardActions-wrap">
                  <div className="section-box section-box-split float-left">
                    <h2>Learn</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="section-box section-box-split float-right">
                    <img src="./images/fp-learn.png" alt="Book" className="img-rounded"/>
                  </div>
                  <div className="clearfix"/>
                </div>
            </CardActions>
          </MediaQuery>
          <MediaQuery query='(orientation: portrait)'>
            <CardActions>
                <div className="cardActions-wrap">
                  <div className="section-box">
                    <img src="./images/fp-learn.png" alt="Book"/>
                  </div>
                  <div className="section-box">
                    <h2>Learn</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="clearfix"/>
                </div>
            </CardActions>
          </MediaQuery>
      </Card>
      <Card>
          <MediaQuery query='(orientation: landscape)'>
            <CardActions>
                <div className="cardActions-wrap">
                  <div className="section-box section-box-split float-left">
                    <img src="./images/fp-give-feedback.png" alt="Give Feedback" className="img-rounded"/>
                  </div>
                  <div className="section-box section-box-split float-right">
                    <h2>Give feedback</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="clearfix"/>
                </div>
            </CardActions>
          </MediaQuery>
          <MediaQuery query='(orientation: portrait)'>
            <CardActions>
                <div className="cardActions-wrap">
                  <div className="section-box">
                    <img src="./images/fp-give-feedback.png" alt="Give Feedback"/>
                  </div>
                  <div className="section-box">
                    <h2>Give feedback</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="clearfix"/>
                </div>
            </CardActions>
          </MediaQuery>
      </Card>
      <Card>
          <MediaQuery query='(orientation: landscape)'>
            <CardActions>
                <div className="cardActions-wrap">
                  <div className="section-box section-box-split float-left">
                    <h2>Improve OnkiBot</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="section-box section-box-split float-right">
                    <img src="./images/fp-improve.png" alt="Book" className="img-rounded"/>
                  </div>
                  <div className="clearfix"/>
                </div>
            </CardActions>
          </MediaQuery>
          <MediaQuery query='(orientation: portrait)'>
            <CardActions>
                <div className="cardActions-wrap">
                  <div className="section-box">
                    <img src="./images/fp-improve.png" alt="Book"/>
                  </div>
                  <div className="section-box">
                    <h2>Improve OnkiBot</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="clearfix"/>
                </div>
            </CardActions>
          </MediaQuery>
      </Card>
    </div>
);

export default Index;
