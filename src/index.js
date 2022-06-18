
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();


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
            <a href="#4">Jump to 4</a>
            <a href="#3">Jump to 3</a>
            <a href="#2">Jump to 2</a>
          </nav>
         
        <div onClick={this.handleMenuClicked} className='contextMenu'/>
      </>
    )
  }
}

class App extends React.Component {
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
      <div className='scrollingContainer'>
        <div className='section' id='1'>SECTION 1</div>
        <div className='section' id='2'>SECTION 2</div>
        <div className='section' id='3'>SECTION 3</div>
        <div className='section' id='4'>SECTION 4</div>
        <div className='floating'>
          <ContextMenu isMenuOpened={isMenuOpened} onMenuClicked={this.onMenuClicked}/>
        </div>
      </div>
    )
  }
}
*/
//ReactDOM.render(<App/>, document.getElementById('app'))

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);