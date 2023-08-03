import React, { Component } from "react";
import Statistics from "./feedback/Statistics";
import FeedbackOptions from "./feedback/FeedbackOptions";
import Section from "./feedback/Section";
import Notification from "./feedback/Notification";
import "./feedback/feedback.css";

export class App extends Component {
      state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    addReview = (back) => {
        this.setState(prevState => ({
            ...prevState,
            [back]: prevState[back] + 1
        }));
    }

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage = () => {
        return Math.round(this.state.good * 100 / this.countTotalFeedback());
    }
    
    render() {

        return (
            <div className="main">
                <Section title="Please leave feedback">
                    <FeedbackOptions
                    options={["good", "neutral", "bad" ]}
                    onLeaveFeedback={this.addReview}
                    />
                </Section>
                    
                <Section title="Please leave feedback">
                    {this.countTotalFeedback() === 0 ? (
                        <Notification message="There is no feedback" />
                        ) : (
                        <Statistics
                            good={this.state.good}
                            neutral={this.state.neutral}
                            bad={this.state.bad}
                            total={this.countTotalFeedback()}
                            positivePercentage={this.countPositiveFeedbackPercentage()}
                        />
                    )}
                </Section>
            </div>
        );
    }
};