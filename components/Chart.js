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
import { FiSun, FiMoon } from 'react-icons/fi';
import { useState } from 'react';

const Chart = ({
  title,
  data,
  dataKey,
  dataKeyX,
  listKey1,
  listKey2,
  listKey3,
  listKey4,
}) => {
  const [chartToggle, setChartToggle] = useState(false);

  return (
    <div className={chartToggle ? `${styles.chart2}` : `${styles.chart}`}>
      <div className={styles.chartHeader}>
        <h3
          className={
            chartToggle ? `${styles.chartTitle2}` : `${styles.chartTitle}`
          }>
          {title}
        </h3>
        <button
          title={!chartToggle ? 'Switch to light mode' : 'Switch to dark mode'}
          className={chartToggle ? `${styles.btn2}` : `${styles.btn}`}
          onClick={() => setChartToggle(!chartToggle)}>
          {!chartToggle ? <FiSun /> : <FiMoon />}
        </button>
      </div>

      <ResponsiveContainer aspect={3 / 1}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 50,
            left: 0,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray='3 3' stroke='#555' />
          <XAxis dataKey={dataKeyX} stroke={chartToggle ? '#555' : '#fff'} />
          <YAxis stroke={chartToggle ? '#555' : '#fff'} />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey={dataKey}
            stroke='#2BD4B2'
            activeDot={{ r: 8 }}
          />
          <Line type='monotone' dataKey={listKey1} stroke='#82ca9d' />
          <Line type='monotone' dataKey={listKey2} stroke='#d42b4d' />
          <Line type='monotone' dataKey={listKey3} stroke='#8884d8' />
          <Line type='monotone' dataKey={listKey4} stroke='#2b88d4' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
