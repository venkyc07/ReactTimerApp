var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Nav/>
//         <h2>Main Component</h2>
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <Nav/>
          <p> Main.jsx Render</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
