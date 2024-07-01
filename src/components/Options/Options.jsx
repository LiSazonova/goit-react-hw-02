import s from './Options.module.css';

const Options = () => {
    return (
        <div className={s.wrapper}>
            <button className={`${s.btn} ${s.btnGood}`}>Good</button>
            <button className={`${s.btn} ${s.btnNeutral}`}>Neutral</button>
            <button className={`${s.btn} ${s.btnBad}`}>Bad</button>
            <button className={`${s.btn} ${s.btnReset}`}>Reset</button>
        </div>
    )
}

export default Options;