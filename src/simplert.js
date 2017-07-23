import React from 'react';
import ReactDOM from 'react-dom';

require('./simplert.scss')

const DEFAULT_TYPE = "info"
const DEFAULT_BTN_CLOSE_TEXT = "Close"
const DEFAULT_BTN_CONFIRM_TEXT = "Confirm"
const INVALID_TYPE = "INVALID_TYPE"

class Simplert extends React.Component {

  constructor() {
    super()

    // Initial State
    this.state = {      
      // hide/show alert
      showSimplert: false,
      // basic setup
      title: "",
      message: "",        
      type: DEFAULT_TYPE, // info (default), success, warning, error
      customClass: '',
      customIconUrl: '',
      // open event
      onOpen: null,
      // close button
      customCloseBtnText: DEFAULT_BTN_CLOSE_TEXT,
      customCloseBtnClass: '',
      onClose: null,
      // confirm button
      useConfirmBtn: false,
      customConfirmBtnText: DEFAULT_BTN_CONFIRM_TEXT,
      customConfirmBtnClass: '',
      onConfirm: null,
      // disabled overlay
      disableOverlayClick: false,
      hideAllButton: false
    }
  }

  render(){
    let { showSimplert, title, message, type } = this.state

    return(

      <div className="simplert" role="modal" 
        className={ showSimplert ? 'simplert--shown' : ''}>
        <div className="simplert__content">
          <div className="simplert__header">
            <div v-if="useIcon">
              <div className="simplert__icon simplert__icon--info">
                <div className="simplert__line simplert__line--info">
                </div>
                <div className="simplert__line simplert__line--info-2">
                </div>
              </div>
              <div className="simplert__icon simplert__icon--success">
                <div className="simplert__line simplert__line--success">
                </div>
                <div className="simplert__line simplert__line--success-2">
                </div>
              </div>
              <div className="simplert__icon simplert__icon--warning">
                <div className="simplert__line simplert__line--warning">
                </div>
                <div className="simplert__line simplert__line--warning-2">
                </div>
              </div>
              <div className="simplert__icon simplert__icon--error">
                <div className="simplert__line simplert__line--error">
                </div>
                <div className="simplert__line simplert__line--error-2">
                </div>
              </div>
              <div className="simplert__icon">
                <img src="customIconUrl" />
              </div>
            </div>
            <b className="simplert__title">{ title }</b>
          </div>
          <div className="simplert__body">
            <div>{ message }</div>
          </div>
          <div className="simplert__footer">
            <button>
              customConfirmBtnText
            </button>
            <button>
              customCloseBtnText
            </button>
          </div>
        </div>
      </div>
      
    )
  }

  openSimplert () {
    this.setState({ showSimplert: true })
  }

  closeSimplert () {
    this.setState({ showSimplert: false })
  }

}



export default Simplert;
