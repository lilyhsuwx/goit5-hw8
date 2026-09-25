import "./App.css";
import { Component } from "react";
import Statistics from "./Components/Statistics";
import FeedbackOption from "./Components/FeedbackOption";
import Section from "./Components/Section";
import Notification from "./Components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCounterFeedback = (type) => {
    this.setState((prev) => {
      return {
        [type]: prev[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positive = (good / this.countTotalFeedback()) * 100;
    return Math.floor(positive);
  };

  render() {
    const option = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <Statistics options={option} onLeaveFeedback={this.handleCounterFeedback}/>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? <FeedbackOption good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentag={this.countPositiveFeedbackPercentage()}/> : <Notification message="There is no feedback"/>}
        </Section>
      </> 
    );
  }
}

export default App;
