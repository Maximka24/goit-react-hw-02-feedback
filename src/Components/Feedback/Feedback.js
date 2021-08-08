import React from "react";
// import PropTypes from 'prop-types';

import s from "./Feedback.module.css";

const Feedback = ({ onClickLike, onClickNeutral, onClickBad }) => {
  return (
    <div className={s.Container}>
      <h2 className={s.Title}>Please leave feedback</h2>
      <ul className={s.List}>
        <li className={s.ElemList}>
          <button className={s.BtnList} onClick={onClickLike}>
            Good
          </button>
        </li>
        <li className={s.ElemList}>
          <button className={s.BtnList} onClick={onClickNeutral}>
            Neutral
          </button>
        </li>
        <li className={s.ElemList}>
          <button className={s.BtnList} onClick={onClickBad}>
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
