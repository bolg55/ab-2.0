import styles from '../styles/Chart.module.css';
import {
  AreaChart,
  Area,
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

const Chart = ({ title, data, dataKey, dataKeyX, userPrefs }) => {
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

      <ResponsiveContainer aspect={4 / 1}>
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 50,
            left: 0,
            bottom: 5,
          }}>
          <CartesianGrid
            strokeDasharray='3 3'
            stroke={chartToggle ? '#c1c1c1' : '#555'}
          />
          <XAxis dataKey={dataKeyX} stroke={chartToggle ? '#555' : '#fff'} />
          <YAxis stroke={chartToggle ? '#555' : '#fff'} />
          <Tooltip className={styles.toolTip} />

          {toggleLegend && <Legend />}

          {userPrefs.map((pref) => (
            <Area
              key={pref.id}
              stackId='1'
              type='monotone'
              dataKey={pref.sport}
              stroke={pref.color}
              fill={pref.color}
              activeDot={{ r: 6 }}
            />
          ))}
        </AreaChart>
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
