import styles from '../styles/Chart.module.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Chart = ({ title, data }) => {
  return (
    <div className={styles.chart}>
      <h3 className={styles.chartTitle}>{title}</h3>
      <ResponsiveContainer width='100%' aspect={2 / 1}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='month' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey='overall'
            stroke='#8884d8'
            activeDot={{ r: 6 }}
          />
          <Line type='monotone' dataKey='football' stroke='#82ca9d' />
          <Line type='monotone' dataKey='basketball' stroke='#d42b4d' />
          <Line type='monotone' dataKey='baseball' stroke='#2BD4B2' />
          <Line type='monotone' dataKey='hockey' stroke='#2b88d4' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
