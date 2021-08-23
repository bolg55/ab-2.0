import styles from '../styles/Bets.module.css';
import { useState } from 'react';
import { CSVLink } from 'react-csv';
import { GetApp, Create, Delete } from '@material-ui/icons';
import { useRouter } from 'next/router';
import { API_URL } from '../config';
import { toast, ToastContainer } from 'react-toastify';

const AllBets = ({ betData, title }) => {
  const router = useRouter();

  // useState for search box query w/ map and filter data
  const [searchTerm, setSearchTerm] = useState('');

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

  /*  Download bets as CSV functionality  */
  const headers = [
    { label: 'Date', key: 'date' },
    { label: 'League', key: 'sport' },
    { label: 'Bet Type', key: 'wager_type' },
    { label: 'Bet Info', key: 'wager_info' },
    { label: 'Amount', key: 'wager_amt' },
    { label: 'Odds', key: 'odds' },
    { label: 'Result', key: 'outcome' },
    { label: 'Net Profit', key: 'profit' },
  ];

  const csvReport = {
    filename: 'All Bets.csv',
    headers: headers,
    data: betData,
  };
  // ****************************** //

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

  const deleteBet = async (index) => {
    if (confirm('Are you sure?')) {
      const res = await fetch(`${API_URL}/bets/${betData[index].id}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        toast.success('🚀 Bet removed successfully.');
        router.push('/allbets');
      }
    }
  };

  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        draggable
        pauseOnHover
      />
      <h2 className={styles.tableTitle}>{title}</h2>
      <div className={styles.tableContainer}>
        <div className={styles.titleContainer}>
          <input
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            className={styles.search}
            id='myInput'
            type='text'
            placeholder='Search by League, Bet Type, Bet Info, or Result...'
          />
          <CSVLink className={styles.csvDL} {...csvReport}>
            Download as CSV <GetApp className={styles.icon} />
          </CSVLink>
        </div>
        <table className={styles.allBetsTable}>
          <tbody>
            <tr className={styles.allBetsRowHeader}>
              <th className={`${styles.allBetsTh} ${styles.displayLeft}`}>
                Date
              </th>
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
            </tr>

            {betData
              .filter((val) => {
                if (searchTerm === '') {
                  return val;
                } else if (
                  val.sport.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  val.wager_type
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  val.outcome
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  val.wager_info
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((sport, index) => (
                <tr key={sport.id} className={styles.allBetsTr}>
                  <td>{formatDateForInput(`${sport.date}`)}</td>
                  <td className={styles.displayCenter}>{sport.sport}</td>
                  <td className={styles.displayCenter}>{sport.wager_type}</td>
                  <td className={styles.displayCenter}>{sport.wager_info}</td>
                  <td className={styles.displayCenter}>
                    {formatter.format(`${sport.wager_amt}`)}
                  </td>
                  <td className={styles.displayCenter}>{sport.odds}</td>
                  <td
                    className={`${styles[`${sport.outcome}`]} ${
                      styles.outcome
                    }`}>
                    {sport.outcome}
                  </td>
                  <td className={styles.displayRight}>
                    {formatter.format(
                      netProfit(sport.wager_amt, sport.odds, sport.outcome)
                    )}
                  </td>
                  <td className={styles.displayCenter}>
                    <Create />
                  </td>
                  <td
                    className={styles.displayCenter}
                    onClick={() => deleteBet(index)}>
                    <Delete />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllBets;
