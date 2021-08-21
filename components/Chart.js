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
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';
import { useState } from 'react';

const userSports = [
  {
    id: 1,
    sport: 'football',
    color: '#82ca9d',
  },
  {
    id: 2,
    sport: 'hockey',
    color: '#d42b4d',
  },
  {
    id: 3,
    sport: 'baseball',
    color: '#8884d8',
  },
  {
    id: 4,
    sport: 'basketball',
    color: '#F28118',
  },
];

const Chart = ({ title, data, dataKey, dataKeyX }) => {
  const [chartToggle, setChartToggle] = useState(false);
  const [toggleLegend, setToggleLegend] = useState(false);

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
          <Tooltip className={styles.toolTip} />

          {toggleLegend && <Legend />}

          <Line
            type='monotone'
            dataKey={dataKey}
            stroke='#2BD4B2'
            activeDot={{ r: 8 }}
          />

          {userSports.map((sport) => (
            <Line
              key={sport.id}
              type='monotone'
              dataKey={sport.sport}
              stroke={sport.color}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
      <div className={styles.toggleContainer}>
        <button
          className={chartToggle ? `${styles.btn2}` : `${styles.btn}`}
          onClick={() => setToggleLegend(!toggleLegend)}>
          <span className={styles.legendToggle}>Legend</span>
          {toggleLegend ? <BsToggleOn /> : <BsToggleOff />}
        </button>
      </div>
    </div>
  );
};

export default Chart;
