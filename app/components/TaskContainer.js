import React, { Component } from 'react';
import { Link } from 'react-router';
import { Card, Divider, CardHeader, CardActions, List, ListItem } from 'material-ui';
import CodeCell from 'material-ui/svg-icons/action/code';
import ArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import ArrowBackward from 'material-ui/svg-icons/navigation/arrow-back';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { zenburn } from 'react-syntax-highlighter/dist/styles';

class TaskContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            taskName: 'For-loops',
            teachersLinks: [{
                url: 'http://stackoverflow.com/questions/52080/how-do-i-build-a-loop-in-javascript',
                comment: 'This is a page which describes how to build a basic for-loop.',
                title: 'How do I build a loop in JavaScript?'
            },
            {
                url: 'http://stackoverflow.com/questions/36413159/understanding-nested-for-loops-in-javascript',
                comment: 'This is a page which describes nested for-loops.',
                title: 'Understanding nested for loops in javascript'
            }],
            studentsLinks: [{
                url: 'http://stackoverflow.com/questions/52080/how-do-i-build-a-loop-in-javascript',
                comment: 'I like this page.',
                title: 'Building a for loop.'
            }]
        };
    }

    createListElements(list) {
        const listElements = list.map(element => (
          <a
            key={element.url}
            href={element.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ListItem
              leftIcon={<CodeCell />}
              primaryText={element.comment}
              secondaryText={element.title}
            />
          </a>
          ));
        return listElements;
    }

    render() {
        const teachersLinks = this.state.teachersLinks;
        const teachersLinkList = this.createListElements(teachersLinks);

        const studentsLinks = this.state.studentsLinks;
        const studentsLinkList = this.createListElements(studentsLinks);

        const iconStyle = {
            fontSize: '48px'
        };

        const codeString =
      `
      function createElement({ node, style, useInlineStyles, key }) {
        const { properties, type, tagName, value } = node;
        if (type === "text") {
          return value;
        } else if (tagName) {
          const TagName = tagName;
          const childrenCreator = createChildren(style, useInlineStyles);
          const props = (
            useInlineStyles
            ?
            { style: createStyleObject(properties.className, style) }
            :
            { className: createClassNameString(properties.className) }
          );
          const children = childrenCreator(node.children);
          return <TagName key={key} {...props}>{children}</TagName>;
        }
      }
      `;

        return (

          <div>
            {/* Task ex. 1 */}
            <Card>
              <div className="page-title-container">
                <h1>{this.state.taskName}</h1>
              </div>
              <Divider />
              <CardActions>
                <div className="cardActions-wrap">
                  <div className="taskView">
                    <img src="./images/for-loop.jpg" alt={this.state.taskName} />
                  </div>
                  <CardHeader title="Intructor's Links" />
                  <Divider inset={true} />
                  <List>
                    {teachersLinkList}
                  </List>
                  <CardHeader title="Student's Links" />
                  <Divider inset={true} />
                  <List>
                    {studentsLinkList}
                  </List>
                  <Divider />
                  <div className="task-navigation">

                    <Link to="/taskcontainer" className="float-left">
                      <ArrowBackward
                        style={iconStyle}
                        viewBox="0 0 20 20"
                      />
                      <span>Previous Task</span>
                    </Link>

                    <Link to="/taskcontainer" className="float-right">

                      <span>Next Task</span>
                      <ArrowForward
                        style={iconStyle}
                        viewBox="0 0 20 20"
                      />
                    </Link>

                    <div className="clearfix" />
                  </div>
                </div>
              </CardActions>
            </Card>

            {/* Task ex. 2 */}
            <Card>
              <div className="page-title-container">
                <h1>{this.state.taskName}</h1>
              </div>
              <Divider />
              <CardActions>
                <div className="cardActions-wrap">
                  <div className="taskView">
                    <SyntaxHighlighter
                      language="javascript"
                      style={zenburn}
                      showLineNumbers="true"
                      className="text-align-left"
                    >
                      {codeString}
                    </SyntaxHighlighter>
                  </div>
                  <CardHeader title="Teacher's Notes" />
                  <Divider inset={true} />
                  <List>
                    {teachersLinkList}
                  </List>
                  <CardHeader title="Student's Notes" />
                  <Divider inset={true} />
                  <List>
                    {studentsLinkList}
                  </List>
                  <Divider />
                  <div className="task-navigation">

                    <Link to="/taskcontainer" className="float-left">
                      <ArrowBackward
                        style={iconStyle}
                        viewBox="0 0 20 20"
                      />
                      <span>Previous Task</span>
                    </Link>

                    <Link to="/taskcontainer" className="float-right">

                      <span>Next Task</span>
                      <ArrowForward
                        style={iconStyle}
                        viewBox="0 0 20 20"
                      />
                    </Link>

                    <div className="clearfix" />
                  </div>
                </div>
              </CardActions>
            </Card>

          </div>

        );
    }

}

export default TaskContainer;
