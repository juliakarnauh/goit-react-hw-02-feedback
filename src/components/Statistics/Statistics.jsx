import PropTypes from 'prop-types';
import {
  StatisticsList,
  StatisticsItem,
  StatisticsCounter,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        <StatisticsCounter>Good: {good}</StatisticsCounter>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsCounter>Neutral: {neutral}</StatisticsCounter>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsCounter>Bad: {bad}</StatisticsCounter>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsCounter>Total: {total}</StatisticsCounter>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsCounter>Positive Feedback: {positivePercentage} %</StatisticsCounter>
      </StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};