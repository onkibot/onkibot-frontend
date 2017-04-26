import React from 'react';
import { Card, CardActions, Divider } from 'material-ui';
import MediaQuery from 'react-responsive';

/** The index page, the websites landing page */
const Index = () => (
  <div>
    <div className="fp-video-wrap">
      <video height="500" poster="./images/video-thumbnail.png" controls>
        <source src="./video/Group079-Onkibot.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <Card>
      <div className="page-title-container">
        <h1>Who needs OnkiBot?</h1>
      </div>
      <Divider />
      <MediaQuery query="(orientation: landscape)">
        <CardActions>
          <div className="card-actions-wrap">
            <div className="section-box section-box-split float-left">
              <img src="./images/hallvard.jpg" alt="Hallvard Trætteberg" />
            </div>
            <div className="section-box section-box-split float-right">
              <h2>Hallvard Trætteberg</h2>
              <p>
                Hallvard has lectured in Object Oriented programming
                for over 10 years. He experiences many students who don’t know where to start when
                looking for contextual resources, so they end up e-mailing their lecturer.
                Students often end up beeing too dependent on the lecturer rather than getting used
                to using external resources.
              </p>
            </div>
            <div className="clearfix" />
          </div>
        </CardActions>
      </MediaQuery>
      <MediaQuery query="(orientation: portrait)">
        <CardActions>
          <div className="card-actions-wrap">
            <div className="section-box">
              <img src="./images/hallvard.jpg" alt="Hallvard Trætteberg" />
            </div>
            <div className="section-box">
              <h2>Hallvard Trætteberg</h2>
              <p>
                Hallvard has lectured in Object Oriented programming
                for over 10 years. He experiences many students who don’t know where to start when
                looking for contextual resources, so they end up e-mailing their lecturer.
                Students often end up beeing too dependent on the lecturer rather than getting
                used to using external resources.
              </p>
            </div>
            <div className="clearfix" />
          </div>
        </CardActions>
      </MediaQuery>
    </Card>
    <Card>
      <MediaQuery query="(orientation: landscape)">
        <CardActions>
          <div className="card-actions-wrap">
            <div className="section-box section-box-split float-left">
              <h2>Easy!</h2>
              <p>
                With {"Onkibot's"} easy interface, you can easily build your own online course.
                Just create a course of your choosing, add categories and make resources for the students to learn from!
              </p>
            </div>
            <div className="section-box section-box-split float-right">
              <img src="./images/fp-learn.png" alt="Book" className="img-rounded" />
            </div>
            <div className="clearfix" />
          </div>
        </CardActions>
      </MediaQuery>
      <MediaQuery query="(orientation: portrait)">
        <CardActions>
          <div className="card-actions-wrap">
            <div className="section-box">
              <img src="./images/fp-learn.png" alt="Book" />
            </div>
            <div className="section-box">
              <h2>Easy!</h2>
              <p>
                With {"Onkibot's"} easy interface, you can easily build your own online course.
                Just create a course of your choosing, add categories and make resources for the students to learn from!
              </p>
            </div>
            <div className="clearfix" />
          </div>
        </CardActions>
      </MediaQuery>
    </Card>
    <Card>
      <MediaQuery query="(orientation: landscape)">
        <CardActions>
          <div className="card-actions-wrap">
            <div className="section-box section-box-split float-left">
              <img src="./images/fp-what-is-a-resource.png" alt="Give Feedback" className="img-rounded" />
            </div>
            <div className="section-box section-box-split float-right">
              <h2>What is a resource?</h2>
              <p>
                A resouce can be a tasks, a learning topic, a wiki page or maybe a video.
                Its is what the students will learn from. The categories has a collection
                of resources which covers the category topic. Each of these resources can
                contain external resources to help you out with the resource!
              </p>
            </div>
            <div className="clearfix" />
          </div>
        </CardActions>
      </MediaQuery>
      <MediaQuery query="(orientation: portrait)">
        <CardActions>
          <div className="card-actions-wrap">
            <div className="section-box">
              <img src="./images/fp-what-is-a-resource.png" alt="Give Feedback" />
            </div>
            <div className="section-box">
              <h2>What is a resource?</h2>
              <p>
                A resouce can be a tasks, a learning topic, a wiki page or maybe a video.
                Its is what the students will learn from. The categories has a collection
                of resources which covers the category topic. Each of these resources can
                contain external resources to help you out with the resource!
              </p>
            </div>
            <div className="clearfix" />
          </div>
        </CardActions>
      </MediaQuery>
    </Card>
    <Card>
      <MediaQuery query="(orientation: landscape)">
        <CardActions>
          <div className="card-actions-wrap">
            <div className="section-box section-box-split float-left">
              <h2>Provide feedback</h2>
              <p>
                If you manage to complete a resource, why {"don't"} you help the rest of the
                community? Give the instructor a feedback on the resource! Was it difficult
                to understand? Rate it! Was it something that was not clear enough? Leave a
                helpful comment! Did the provided links help? Approve them so others know they
                are useful! Did you find a better link than what was already given? Suggest it!
              </p>
            </div>
            <div className="section-box section-box-split float-right">
              <img src="./images/fp-give-feedback.png" alt="Book" className="img-rounded" />
            </div>
            <div className="clearfix" />
          </div>
        </CardActions>
      </MediaQuery>
      <MediaQuery query="(orientation: portrait)">
        <CardActions>
          <div className="card-actions-wrap">
            <div className="section-box">
              <img src="./images/fp-give-feedback.png" alt="Book" />
            </div>
            <div className="section-box">
              <h2>Provide feedback</h2>
              <p>
                If you manage to complete a resource, why {"don't"} you help the rest of the
                community? Give the instructor a feedback on the resource! Was it difficult
                to understand? Rate it! Was it something that was not clear enough? Leave a
                helpful comment! Did the provided links help? Approve them so others know they
                are useful! Did you find a better link than what was already given? Suggest it!
              </p>
            </div>
            <div className="clearfix" />
          </div>
        </CardActions>
      </MediaQuery>
    </Card>
    <Card>
      <MediaQuery query="(orientation: landscape)">
        <CardActions>
          <div className="card-actions-wrap">
            <div className="section-box section-box-split float-left">
              <img src="./images/fp-improve.png" alt="Give Feedback" className="img-rounded" />
            </div>
            <div className="section-box section-box-split float-right">
              <h2>Improve OnkiBot</h2>
              <p>
                When you suggest other external resources that helped you more than the ones
                already listed, you help the rest of the community! Maybe your contribution
                is the best external resource? By approving and suggesting, you help instructors
                maintaining and optimizing their courses, and what is better than helping others?
              </p>
            </div>
            <div className="clearfix" />
          </div>
        </CardActions>
      </MediaQuery>
      <MediaQuery query="(orientation: portrait)">
        <CardActions>
          <div className="card-actions-wrap">
            <div className="section-box">
              <img src="./images/fp-improve.png" alt="Give Feedback" />
            </div>
            <div className="section-box">
              <h2>Improve OnkiBot</h2>
              <p>
                When you suggest other external resources that helped you more than the ones
                already listed, you help the rest of the community! Maybe your contribution
                is the best external resource? By approving and suggesting, you help instructors
                maintaining and optimizing their courses. And what is better than helping others?
              </p>
            </div>
            <div className="clearfix" />
          </div>
        </CardActions>
      </MediaQuery>
    </Card>
  </div>
);

export default Index;
