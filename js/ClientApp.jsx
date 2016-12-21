var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')
var div = React.DOM.div


//stateless component
//why we remove the render function


var MyFirstComponent = () => (
	<div>
		<MyTitle title="Hello stateless component" color="rebeccapurple"/>
		<MyTitle title="returns the same thing everytime" color="rebeccapurple"/>
		<MyTitle title="your new boyfriend" color="rebeccapurple"/>
	</div>
)
	

ReactDOM.render(<MyFirstComponent/>, document.getElementById('app'))