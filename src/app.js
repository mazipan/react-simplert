import React from 'react'
import ReactDOM from 'react-dom'
import Simplert from './simplert.js'

require('./app.scss')

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      showAlert: false,
      typeAlert: 'success',
      titleAlert: 'This is Title',
      messageAlert: 'I am message alert'
    }
  }

  render () {
    let { showAlert, typeAlert, titleAlert, messageAlert } = this.state
    let { openAlert } = this

    return (
      <div className='grid__row content centered'>
        <h2>Example</h2>

        <Simplert
          showSimplert={showAlert}
          type={typeAlert}
          title={titleAlert}
          message={messageAlert}
        />

        <div className='grid__row content centered'>
          <div className='grid__row content__row'>
            <div className='grid__col-3 example__title'>Information Alert</div>
            <div className='grid__col-3'>
              <button
                className='button button--radius button--blue'
                onClick={openAlert.bind(
                  this,
                  'Title',
                  'Message with <b>HTML</b>',
                  'info'
                )}
              >
                Click Me!
              </button>
            </div>

            <div className='grid__col-3 example__title'>Success Alert</div>
            <div className='grid__col-3'>
              <button
                className='button button--radius button--green'
                onClick={openAlert.bind(
                  this,
                  'Title',
                  'Message with <b>HTML</b>',
                  'success'
                )}
              >
                Click Me!
              </button>
            </div>
          </div>

          <div className='grid__row content__row'>
            <div className='grid__col-3 example__title'>Warning Alert</div>
            <div className='grid__col-3'>
              <button
                className='button button--radius button--orange'
                onClick={openAlert.bind(
                  this,
                  'Title',
                  'Message with <b>HTML</b>',
                  'warning'
                )}
              >
                Click Me!
              </button>
            </div>

            <div className='grid__col-3 example__title'>Error Alert</div>
            <div className='grid__col-3'>
              <button
                className='button button--radius button--red'
                onClick={openAlert.bind(
                  this,
                  'Title',
                  'Message with <b>HTML</b>',
                  'error'
                )}
              >
                Click Me!
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Events
  openAlert (title, message, type) {
    this.setState({
      showAlert: true,
      titleAlert: title,
      messageAlert: message,
      typeAlert: type
    })
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
