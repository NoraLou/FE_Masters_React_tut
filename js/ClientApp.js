var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')
var div = React.DOM.div



var MyTitleFactory = React.createFactory(MyTitle)


var MyFirstComponent = (
	div(null,
		React.createElement(MyTitle, {color: "rebeccapurple", title : "look here too"}),
		React.createElement(MyTitle, {color: "peru", title : "look over here"}),
		MyTitleFactory({color: "gainsboro", title: "Gainsboro was a 19th century english painter"})
	)
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))