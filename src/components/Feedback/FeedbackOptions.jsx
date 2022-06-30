import s from './Feedback.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.boxButton}>
      {options.map(x => (
        <li className={s.elements}>
          <button
            key={x}
            className={s.button}
            type="button"
            name={x}
            onClick={onLeaveFeedback}
          >
            {x}
          </button>
        </li>
      ))}
    </ul>
  );
}
