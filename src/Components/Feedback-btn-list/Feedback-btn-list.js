import React from "react";
import PropTypes from "prop-types";

import s from "./Feedback-btn-list.module.css";

const FeedbackBtnList = ({ onBtnLike, onBtnNeutral, onBtnBad }) => {
  return (
    <ul className={s.List}>
      <li className={s.ElemList}>
        <button className={s.BtnList} onClick={onBtnLike}>
          Good
        </button>
      </li>
      <li className={s.ElemList}>
        <button className={s.BtnList} onClick={onBtnNeutral}>
          Neutral
        </button>
      </li>
      <li className={s.ElemList}>
        <button className={s.BtnList} onClick={onBtnBad}>
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackBtnList.propTypes = {
  onClickLike: PropTypes.func.isRequired,
  onClickNeutral: PropTypes.func.isRequired,
  onClickBad: PropTypes.func.isRequired,
};

export default FeedbackBtnList;
