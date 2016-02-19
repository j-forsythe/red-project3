import React from 'react';

import Questions from './questions.jsx';
// import Welcome from 'welcome.jsx';


var Timer = React.createClass({


  getInitialState: function() {
    // var seconds = this.getSeconds();

    return {
      secondsElapsed: 60,
      // minutesElapsed: 1
    }
  },

  getSeconds: function() {
    if (this.props.startTime >= 1) {
      return this.props.startTime * 60;
    }
    else {
      return 60;
    }
  },

  secondsLeft: function () {
    return Math.floor(this.state.secondsElapsed % 60)
  },

  minutesLeft: function () {
    return Math.floor(this.state.secondsElapsed / 60)
  },


  tick: function(){
    this.setState({secondsElapsed: this.state.secondsElapsed - 1})
    if (this.state.secondsElapsed === 0){
      clearInterval(this.interval)
    }

  },

  componentDidMount: function(){
     this.interval = setInterval(this.tick, 1000);
    },

  componentWillReceiveProps: function(props) {
    if(props.start === true){
      this.componentDidMount();
    }
  },

  clearTimer: function() {
    clearInterval(this.interval);
  },

  showHideTimer: function() {
    return this.props.start ? "timer" : "timer hidden"
  },

  render: function() {
    var seconds = this.secondsLeft();
    return (
      <div className={this.showHideTimer()}>
        {this.minutesLeft()}:{seconds < 10 ? '0' + seconds : seconds}
      </div>
    )
  }

});


module.exports = Timer;
