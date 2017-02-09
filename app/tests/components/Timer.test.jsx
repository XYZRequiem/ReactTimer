var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Timer = require('Timer');

describe('Timer', () => {
  it('Should exist', () => {
    expect(Timer).toExist();
  });

  describe('-handleStart', () => {
    it('should start timer on started status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSetCountdown(10);

      expect(timer.state.count).toBe(10);
      expect(timer.state.timerStatus).toBe('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(11);
        done();
      }, 1001);
    });

    it('should start timer on started status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSetCountdown(0);

      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        done();
      }, 1001);
    });
    it('should pause timer on paused status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSetCountdown(3);
      timer.handleStatusChange('paused');

      setTimeout(() => {
        expect(timer.state.count).toBe(3);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should stop timer on stopped status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleSetCountdown(100);
      timer.handleStatusChange('stopped');

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 1001);
    });

  });
});
