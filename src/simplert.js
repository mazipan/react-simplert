import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

require('./simplert.scss')

class Simplert extends React.Component {

  constructor() {
    super()

    // Initial State
    this.state = {
      isShowPopup: false
    }
  }

  render(){

    let { closeSimplert, closeOverlaySimplert, confirmSimplert } = this
    let { showSimplert, title, message, type, 
          customIconUrl, customCloseBtnText, customConfirmBtnText,
          useConfirmBtn, hideAllButton } = this.props
    let { isShowPopup } = this.state

    let iconDOM = null
    if (type === 'info') {
      iconDOM = <div className="simplert__icon simplert__icon--info">
                  <div className="simplert__line simplert__line--info">
                  </div>
                  <div className="simplert__line simplert__line--info-2">
                  </div>
                </div>
              
    } else if (type === 'success') {
      iconDOM = <div className="simplert__icon simplert__icon--success">
                  <div className="simplert__line simplert__line--success">
                  </div>
                  <div className="simplert__line simplert__line--success-2">
                  </div>
                </div>
              
    } else if (type === 'warning') {
      iconDOM = <div className="simplert__icon simplert__icon--warning">
                  <div className="simplert__line simplert__line--warning">
                  </div>
                  <div className="simplert__line simplert__line--warning-2">
                  </div>
                </div>
    } else if (type === 'error') {
      iconDOM = <div className="simplert__icon simplert__icon--error">
                  <div className="simplert__line simplert__line--error">
                  </div>
                  <div className="simplert__line simplert__line--error-2">
                  </div>
                </div>
    } else if (customIconUrl) {
      iconDOM = <div className="simplert__icon">
                  <img src={ customIconUrl }/>
                </div>
    }

    return(

      <div role="modal" className={ this.classSimplert() }
           onClick={ closeOverlaySimplert.bind(this) }>
        <div className="simplert__content">
          <div className="simplert__header">
            <div>
              { iconDOM }
            </div>
            <b className="simplert__title">{ title }</b>
          </div>
          <div className="simplert__body">
            <div dangerouslySetInnerHTML={{__html: message}}></div>
          </div>
          <div className="simplert__footer">
            {useConfirmBtn && !hideAllButton ? (              
              <button 
                  className={ this.classBtnConfirm() }
                  onClick={ confirmSimplert.bind(this) } >
                { customConfirmBtnText }
              </button>
            ) : ''}

            {!hideAllButton ? ( 
              <button 
                  className={ this.classBtnClose() }
                  onClick={ closeSimplert.bind(this) } >
                { customCloseBtnText }
              </button>
            ) : ''}
          </div>
        </div>
      </div>
      
    )
  }

  componentWillReceiveProps(nextProps) {
    let { onOpen } = this.props
    this.setState({ isShowPopup: nextProps.showSimplert })
    if (nextProps.showSimplert && onOpen) onOpen()
  }

  // Calculate class
  classSimplert () {
    let { customClass } = this.props
    let { isShowPopup } = this.state
    let clasz = `simplert ${customClass}`
    if (isShowPopup) clasz += ' simplert--shown'
    return clasz
  }

  classBtnConfirm () {
    let { customConfirmBtnClass } = this.props
    let clasz = `simplert__confirm ${customConfirmBtnClass}`
    return clasz
  }
  
  classBtnClose () {
    let { customCloseBtnClass } = this.props
    let clasz = `simplert__close ${customCloseBtnClass}`
    return clasz    
  }

  createMessageHTML (message) {
    return {__html: message}
  }

  // Event
  closeSimplert (e) {
    let { onClose } = this.props
    e.preventDefault()
    this.setState({ isShowPopup: false })
    if (onClose) onClose()
  }

  confirmSimplert (e) {
    let { onConfirm } = this.props
    e.preventDefault()
    this.setState({ isShowPopup: true })
    if (onConfirm) onConfirm()
  }

  closeOverlaySimplert (e) {
    let { disableOverlayClick } = this.props
    if (e.target.className.indexOf('simplert--shown') > 0 && !disableOverlayClick) {
      this.setState({ isShowPopup: false })
    }    
  }

}

// The Props
Simplert.propTypes = {
  showSimplert: PropTypes.bool.isRequired,
  title: PropTypes.string,
  message: PropTypes.any,        
  type: PropTypes.string,
  customClass: PropTypes.string,
  customIconUrl: PropTypes.string,
  onOpen: PropTypes.func,
  customCloseBtnText: PropTypes.string,
  customCloseBtnClass: PropTypes.string,
  onClose: PropTypes.func,
  useConfirmBtn: PropTypes.bool,
  customConfirmBtnText: PropTypes.string,
  customConfirmBtnClass: PropTypes.string,
  onConfirm: PropTypes.func,
  disableOverlayClick: PropTypes.bool,
  hideAllButton: PropTypes.bool
}

const DEFAULT_TYPE = "info"
const DEFAULT_BTN_CLOSE_TEXT = "Close"
const DEFAULT_BTN_CONFIRM_TEXT = "Confirm"
const INVALID_TYPE = "INVALID_TYPE"

Simplert.defaultProps = {
  // hide/show alert
  showSimplert: false,
  // basic setup
  title: '',
  message: '',        
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

export default Simplert
