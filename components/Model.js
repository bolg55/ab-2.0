import styles from '../styles/Model.module.css';
import Topbar from './Topbar';
import { GetApp, Create, Delete } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import { API_URL } from '../config';
import axios from 'axios';

const Model = () => {
  // sets Amount and Net Profit fields to $ amounts
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  // Formats the Date column to Mmm dd, yyyy
  const formatDateForInput = (date) => {
    let options = {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    };
    const formatted = new Date(date).toLocaleDateString('en-US', options);
    return formatted;
  };

  /*   function to calculate net profit of each wager   */
  const netProfit = (wager, odds, result) => {
    let profit = 0;
    if (result === 'lose') {
      profit = wager * -1;
    } else if (result === 'win') {
      profit = wager * odds - wager;
    } else {
      return profit;
    }
    return profit;
  };

  const [data, setData] = useState([]);
  const fetchBettingData = () => {
    fetch(`${API_URL}/bets?_sort=date:DESC`)
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    fetchBettingData();
  }, []);

  /* FROM THE TUTORIAL */

  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });

  const [betEditor, setBetEditor] = useState(null);

  const updateBet = ({ id, newBetOutcome }) => {
    fetch(`${API_URL}/bets/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ outcome: newBetOutcome }),
      headers: {
        'Content-type': 'application/json; charset-UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        onCancel();

        fetchBettingData();
      });
  };

  const onEdit = ({ id, currentBetOutcome }) => {
    setInEditMode({
      status: true,
      rowKey: id,
    });
    setBetEditor(currentBetOutcome);
  };

  const onSave = ({ id, newBetOutcome }) => {
    updateBet({ id, newBetOutcome });
  };

  const onCancel = () => {
    setInEditMode({
      status: false,
      rowKey: null,
    });
    setBetEditor(null);
  };

  return (
    <div className={styles.container}>
      <Topbar />
      <h2>Testing Table Thing</h2>
      <table>
        <thead>
          <tr>
            <th className={`${styles.allBetsTh} `}>League</th>
            <th className={styles.allBetsTh}>Bet Type</th>
            <th className={styles.allBetsTh}>Bet Info</th>
            <th className={styles.allBetsTh}>Amount</th>
            <th className={styles.allBetsTh}>Odds</th>
            <th className={styles.allBetsTh}>Result</th>
            <th className={`${styles.allBetsTh} ${styles.displayRight}`}>
              Net Profit
            </th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Save</th>
          </tr>
        </thead>
        <tbody>
          {data.map((sport, index) => (
            <tr key={sport.id} className={styles.allBetsTr}>
              <td>{formatDateForInput(`${sport.date}`)}</td>
              <td className={`${styles.displayCenter} ${styles.capitalize}`}>
                {sport.sport}
              </td>
              <td className={`${styles.displayCenter} ${styles.capitalize}`}>
                {sport.wager_type}
              </td>
              <td className={`${styles.displayCenter} ${styles.capitalize}`}>
                {sport.wager_info}
              </td>
              <td className={styles.displayCenter}>
                {formatter.format(`${sport.wager_amt}`)}
              </td>
              <td className={styles.displayCenter}>{sport.odds}</td>
              <td
                className={`${styles[`${sport.outcome}`]} ${styles.outcome} ${
                  styles.capitalize
                }`}>
                {sport.outcome}
              </td>
              <td className={styles.displayRight}>
                {formatter.format(
                  netProfit(sport.wager_amt, sport.odds, sport.outcome)
                )}
              </td>
              <td>
                {inEditMode.status && inEditMode.rowKey === sport.id ? (
                  <>
                    <button
                      onClick={() =>
                        onSave({ id: sport.id, newBetOutcome: betEditor })
                      }>
                      Save
                    </button>
                    <button
                      className={`${styles.displayCenter} ${styles.iconDel}`}
                      onClick={() => onCancel}>
                      <Delete />
                    </button>
                  </>
                ) : (
                  <button
                    className={`${styles.displayCenter} ${styles.iconEdit}`}
                    onClick={() =>
                      onEdit({
                        id: sport.id,
                        currentBetOutcome: sport.outcome,
                      })
                    }>
                    <Create />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Model;
