import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {

  render() {
    
    return (
      <div className="container">
        <header>
          <h1>it works</h1>
           {this.props.children}
        </header>
      </div>
    );
  }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;