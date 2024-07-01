import s from './Feedback.module.css'

const Feedback = ({ feedback }) => {
    return (
        <div className={s.feedback}>
            <p className={s.text}>Good: {feedback.good}</p>
            <p className={s.text}>Neutral: {feedback.neutral}</p>
            <p className={s.text}>Bad: {feedback.bad}</p>
            <p className={s.text}>Total:</p>
            <p className={s.text}>Positive:</p>
        </div>
    )
}

export default Feedback;