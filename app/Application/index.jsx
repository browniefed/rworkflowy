var React = require("react");
var RouteHandler = require("react-router").RouteHandler;

require("./style.css");

var Application = React.createClass({
	
	render: function() {
		return (
            <div className="application">
                <RouteHandler />
            </div>
          )
	}
});
module.exports = Application;
