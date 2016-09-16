import React, { Component } from 'react'

import s from 'Footer/Footer.scss'

class Footer extends Component {
  render(){

    return(
      <footer id="footer">
        <a href="https://www.facebook.com/cornermobileapp/" target="_blank">
          <img
            className="fbicon"
            src="/assets/img/a9fbicon.png"
          />
        </a>
        <a href="https://www.instagram.com/cornerappofficial/" target="_blank">
          <img
            className="igicon"
            src="/assets/img/a9igicon.png"
          />
        </a>
      </footer>
    )
  }
}

export default Footer
