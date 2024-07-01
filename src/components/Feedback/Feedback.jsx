import s from './Feedback.module.css'

const Feedback = () => {
    return (
        <div className={s.feedback}>
            <p className={s.text}>Good:</p>
            <p className={s.text}>Neutral:</p>
            <p className={s.text}>Bad:</p>
            <p className={s.text}>Total:</p>
            <p className={s.text}>Positive:</p>
        </div>
    )
}

export default Feedback;