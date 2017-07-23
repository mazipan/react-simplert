
import React from 'react';
import ReactDOM from 'react-dom';

require('./app.scss')

import Simplert from './simplert.js';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      showAlert: false,
      typeAlert: 'success',
      titleAlert: 'This is Title',
      messageAlert: 'I am message alert'
    }
  }

  render(){

    let { showAlert, typeAlert, titleAlert, messageAlert } = this.state
    let { openAlert } = this

    return(
      <div>
        <Simplert 
            showSimplert={ showAlert }
            type={ typeAlert }
            title={ titleAlert }
            message={ messageAlert }
        />
          <div class="main">
          
          <h1>React Simplert</h1>
          
            <div class="button-container">
              <button type="button" 
                      className="btn-demo"
                      onClick={ openAlert.bind(this, "Title", "Message", "info") }>
                      Open Info Alert
              </button>
              <button type="button" 
                      className="btn-demo"
                      onClick={ openAlert.bind(this, "Title", "Message <b>HTML</b>", "success") }>
                      Open Success Alert
              </button>
              <button type="button" 
                      className="btn-demo"
                      onClick={ openAlert.bind(this, "Title", "Message", "warning") }>
                      Open Warning Alert
              </button>
              <button type="button" 
                      className="btn-demo"
                      onClick={ openAlert.bind(this, "Title", "Message", "error") }>
                      Open Error Alert
              </button>
            </div>

          </div>
          <br/>
      </div>
    )
  }

  // Events
  openAlert(title, message, type){
    this.setState({ 
      showAlert: true, 
      titleAlert: title, 
      messageAlert: message, 
      typeAlert: type 
    })
  }

}

ReactDOM.render(<App />, document.getElementById("app"))
