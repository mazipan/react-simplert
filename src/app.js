
import React from 'react';
import ReactDOM from 'react-dom';

require('./app.scss')

import Simplert from './simplert.js';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      showAlert: false
    }
  }

  render(){

    let { showAlert } = this.state
    let { toggleAlert } = this

    return(
      <div>
        <Simplert />
          <div class="main">
          
          <h1>React</h1>
          
            <div class="button-container">
              <button type="button" 
                      onClick={ toggleAlert.bind(this) }>
                      Open Alert
              </button>
            </div>

          </div>
          <br/>
      </div>
    )
  }

  // Events
  toggleAlert(){
    let { showAlert } = this.state
    this.setState({ showAlert: !showAlert })
  }

}

ReactDOM.render(<App />, document.getElementById("app"))
