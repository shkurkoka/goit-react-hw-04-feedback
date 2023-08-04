import React, { useState } from "react";
import Statistics from "./feedback/Statistics";
import FeedbackOptions from "./feedback/FeedbackOptions";
import Section from "./feedback/Section";
import Notification from "./feedback/Notification";
import "./feedback/feedback.css";

export const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const countTotalFeedback = () => {
        return good + neutral + bad;
    }

    const countPositiveFeedbackPercentage = () => {
        return Math.round(good * 100 / countTotalFeedback());
    }

    return (
        <div className="main">
            <Section title="Please leave feedback">
                <FeedbackOptions
                options={["good", "neutral", "bad" ]}
                LeaveFeedbacks={[setGood, setNeutral, setBad]}
                />
            </Section>
                
            <Section title="Please leave feedback">
                {countTotalFeedback() === 0 ? (
                    <Notification message="There is no feedback" />
                    ) : (
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback()}
                        positivePercentage={countPositiveFeedbackPercentage()}
                    />
                )}
            </Section>
        </div>
    );
};