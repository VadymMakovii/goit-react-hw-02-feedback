import { ListStatistics, StatisticsData, ItemStatistic } from 'components/Statistics/Statistics.styled';


export const Statistics = ({ state: { good, neutral, bad }, total, positivePercentage }) => {
    return (<ListStatistics>
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
    </ListStatistics>);
    
};