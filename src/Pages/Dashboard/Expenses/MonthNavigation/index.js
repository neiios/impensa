import React from "react";
import PropTypes from "prop-types";
import {
  MonthSwitcher,
  MonthContainer,
  ArrowWestIcon,
  ArrowEastIcon,
} from "../Expenses.style";

const MonthNavigation = ({ month, year, onPrevious, onNext }) => (
  <MonthSwitcher>
    <ArrowWestIcon className="fas fa-chevron-left fa-1x" onClick={onPrevious} />
    <MonthContainer>{`${month} ${year}`}</MonthContainer>
    <ArrowEastIcon className="fas fa-chevron-right fa-1x" onClick={onNext} />
  </MonthSwitcher>
);

MonthNavigation.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default MonthNavigation;
