var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Application = require('./Application'),
    Home = require('./Home'),
    Flow = require('./Flow');

// polyfill
if(!Object.assign)
	Object.assign = React.__spread;

// export routes
module.exports = (
	<Route name="app" path="/" handler={Application}>
        <Route name="flow" path="flow/:flowId" handler={Flow} />
        <DefaultRoute handler={Home} />
	</Route>
);
