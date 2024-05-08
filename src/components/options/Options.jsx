//import { useState } from 'react';
import css from "./Options.module.css";

function Options({ updateFeedback, resetUseState, totalFeedback }) {
  return (
    <>
      <button
        className={css.buttonOptions}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.buttonOptions}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={css.buttonOptions}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={css.buttonOptions}
          onClick={() => resetUseState("feedbackType")}
        >
          Reset
        </button>
      )}
    </>
  );
}

export default Options;
