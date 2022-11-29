import PropTypes from 'prop-types';
import {
  ListStatistics,
  StatisticsData,
  ItemStatistic,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ListStatistics>
      <ItemStatistic>
        <StatisticsData>{`Good: ${good}`}</StatisticsData>
      </ItemStatistic>
      <ItemStatistic>
        <StatisticsData>{`Neutral: ${neutral}`}</StatisticsData>
      </ItemStatistic>
      <ItemStatistic>
        <StatisticsData>{`Bad: ${bad}`}</StatisticsData>
      </ItemStatistic>
      <ItemStatistic>
        <StatisticsData>{`Total: ${total}`}</StatisticsData>
      </ItemStatistic>
      <ItemStatistic>
        <StatisticsData>{`Positive feedback: ${positivePercentage}%`}</StatisticsData>
      </ItemStatistic>
    </ListStatistics>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
