import React, {Component} from 'react'

class DelayedButton extends Component{

  handleOnClick = (event) => {
    // this.props.onDelayedClick(setTimeout(this.props.delay))
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render() {
    return(
      <button onClick={this.handleOnClick}>Delay Button</button>
    )
  }

}

export default DelayedButton
