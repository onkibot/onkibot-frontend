import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'reactstrap';

class MyComponent extends React.Component {
	render() {
		return (
			<div>
				<Button color="danger">Danger!</Button>
			</div>
		);
	}
}

ReactDOM.render(<MyComponent />, document.querySelector('#root'));
