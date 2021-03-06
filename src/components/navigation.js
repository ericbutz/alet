import React from 'react';
import {useState} from "react";

/*
class ContextMenu extends React.Component {
  constructor(props) {
    super(props)
  }
  
  handleMenuClicked = (event) => {
    event.preventDefault()
    this.props.onMenuClicked()
  }
  
  render() {
    const {isMenuOpened} = this.props
    return(
      <>
          <nav className={isMenuOpened ? 'menu' :'hideMenu'}>
            <div>
            <a href="#features">FEATURES</a>
            <a href="#about">ABOUT</a>
            <a href="#services">SERVICES</a>
            <a href="#portfolio">PORTFOLIO</a>
            <a href="#testimonials">TESTIMONIALS</a>
            <a href="#team">TEAM</a>
            <a href="#contact">CONTACT</a>
            </div>
          </nav>
         
        <div onClick={this.handleMenuClicked} className='contextMenu' />


      </>
    )
  }
}
*/

/*
export class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpened: false
    }
  }

  onMenuClicked = () => {
    this.setState({
      isMenuOpened: !this.state.isMenuOpened
    })
  }

  render() {
    const {isMenuOpened} = this.state
    return (
      //<div className='scrollingContainer'>
      //  <div className='section' id='1'>SECTION 1</div>
      //  <div className='section' id='2'>SECTION 2</div>
      //  <div className='section' id='3'>SECTION 3</div>
      //  <div className='section' id='4'>SECTION 4</div>
      //  <div className='floating'>
          <ContextMenu isMenuOpened={isMenuOpened} onMenuClicked={this.onMenuClicked}/>
      //  </div>
      //</div>
    )
  }
}
*/
/*
export const Navigation = (props) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
      <nav className='hamburger'>
        <div>
          <a href="#features">FEATURES</a>
          <a href="#about">ABOUT</a>
          <a href="#services">SERVICES</a>
          <a href="#portfolio">PORTFOLIO</a>
          <a href="#testimonials">TESTIMONIALS</a>
          <a href="#team">TEAM</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>


  )
}
//       <div onClick={() => setIsMenuOpened(!isMenuOpened)} className='contextMenu' />
//<nav onClick={() => setIsMenuOpened(!isMenuOpened)} className={isMenuOpened ? 'menu' :'hideMenu'}>

*/

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            React Landing Page
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Features
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


export default Navigation;