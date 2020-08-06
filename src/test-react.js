var React = require("react");
var ReactDOM = require("react-dom");

var Hello = React.createClass( {
  render: function() {
    return (
      <div>hello world</div>
    );
  }
});

ReactDOM.render(
  document.getElementById("react-container");
);
