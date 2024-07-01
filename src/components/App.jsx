import { useState } from 'react';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';

const feedbackData = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
    const [feedback, setFeedback] = useState(feedbackData);

    const updateFeedback = (feedbackType) => {
        if (feedbackType === 'reset') {
            setFeedback(feedbackData);
        } else {
            setFeedback((prevFeedback) => ({
                ...prevFeedback,
                [feedbackType]: prevFeedback[feedbackType] + 1,
            }));
        }
    };

    return (
        <>
            <Description />
            <Options updateFeedback={updateFeedback} />
            <Feedback feedback={feedback} />
        </>
    );
};

export default App;
