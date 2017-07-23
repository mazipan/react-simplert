# react-simplert
ReactJS Simple Alert Component (SweetAlert Inspired)

[![react-simplert](https://mazipan.github.io/react-simplert/images/react-simplert.png)](https://mazipan.github.io/react-simplert/)

## Demo
[https://mazipan.github.io/react-simplert/](https://mazipan.github.io/react-simplert/)

## Download
```
npm install react-simplert
OR
yarn add react-simplert
```

## How to Use

Import to your component : 
```javascript
import Simplert from 'react-simplert'
```

Create some template in `render()` :
```javascript
<Simplert 
    showSimplert={ this.state.showAlert }
    type={ this.state.typeAlert }
    title={ this.state.titleAlert }
    message={ this.state.messageAlert }
/>
```
Just set _the props_ with your custom state.

## Available Props

```javascript
{
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
```



**Hope will usefull for you all.**

Contact Me :

[![Email](https://img.shields.io/badge/mazipanneh-Email-yellow.svg?maxAge=3600)](mailto:mazipanneh@gmail.com) 
[![Website](https://img.shields.io/badge/mazipanneh-Blog-brightgreen.svg?maxAge=3600)](https://mazipanneh.com/blog/)
[![Facebook](https://img.shields.io/badge/mazipanneh-Facebook-blue.svg?maxAge=3600)](https://facebook.com/mazipanneh) 

[![Twitter](https://img.shields.io/badge/Maz_Ipan-Twitter-55acee.svg?maxAge=3600)](https://twitter.com/Maz_Ipan) 
[![Linkedin](https://img.shields.io/badge/irfanmaulanamazipan-Linkedin-0077b5.svg?maxAge=3600)](https://id.linkedin.com/in/irfanmaulanamazipan) 
[![Slideshare](https://img.shields.io/badge/IrfanMaulana21-Slideshare-0077b5.svg?maxAge=3600)](https://www.slideshare.net/IrfanMaulana21) 
