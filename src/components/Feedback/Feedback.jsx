import s from './Feedback.module.css'

const Feedback = ({ feedback, totalFeedback }) => {
    return (
        <div className={s.feedback}>
            <p className={s.text}>Good: {feedback.good}</p>
            <p className={s.text}>Neutral: {feedback.neutral}</p>
            <p className={s.text}>Bad: {feedback.bad}</p>
            <p className={s.text}>Total: {totalFeedback}</p>
            {/* <p className={s.text}>Positive:</p> */}
        </div>
    )
}

export default Feedback;