import React from 'react';
import "../styles/wrap.css"

class Wrap extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.isOpen) {
      return (
        <div className="transparentBackground">
          {this.props.children}
        </div>
      )
    }

    return (

        <div className="modalBackground">
          {this.props.children}
        </div>

    );
  }
}

export default Wrap;