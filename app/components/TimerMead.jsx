var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function () {
    return {
        count: 0,
        timerStatus: 'paused'
    };
  },
  handleStatusChange: function (newTimerStatus) {
    console.log(newTimerStatus);
  },
  render: function () {
    var {count, timerStatus} = this.state;
    var renderControlArea = () => {
          return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} calledBy={'timer'}/>
    };

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} calledBy={'timer'}/>
      </div>
    );
  }
});

module.exports = Timer;
