import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Topbar from './Topbar';
import styles from '../styles/Bets.module.css';
import { netProfit } from '../utils/utils';
import { useState } from 'react';
import { CSVLink } from 'react-csv';
import { GetApp, Create, Delete } from '@material-ui/icons';
import { useRouter } from 'next/router';
import { API_URL } from '../config';

const AllBets = ({ betData, title }) => {
  const [values, setValues] = useState({
    id: '',
    date: '',
    sport: '',
    wager_type: '',
    wager_info: '',
    wager_amt: '',
    odds: '',
    outcome: '',
  });

  const handleEdit = async (index) => {
    const res = await fetch(`${API_URL}/bets/${betData[index].id}`);

    const data = await res.json();
    setValues({
      id: data.id,
      date: formatDateForInput(data.date),
      sport: data.sport,
      wager_type: data.wager_type,
      wager_info: data.wager_info,
      wager_amt: data.wager_amt,
      odds: data.odds,
      outcome: data.outcome,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasEmptyFields = Object.values(values).some(
      (element) => element === ''
    );

    if (hasEmptyFields) {
      toast.error('Please fill in all fields');
    }

    const res = await fetch(`${API_URL}/bets/${values.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      toast.error('Something Went Wrong');
    } else {
      // const data = await res.json();
      router.push(`/allbets`);
      toast.success('🚀 Bet updated successfully!');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

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
    const formatted = new Date(date).toISOString('en-US', options).slice(0, 10);
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

  // CALCULATES NET PROFIT OF ALL BETS VERY IMPORTANT //
  const netProfitCalc = () => {
    let total = [];
    for (let i = 0; i < betData.length; i++) {
      total.push(
        netProfit(betData[i].wager_amt, betData[i].odds, betData[i].outcome)
      );
    }
    const netP = formatter.format(total.reduce((a, b) => a + b, 0));
    return netP;
  };

  return (
    <div className={styles.container}>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        draggable
        pauseOnHover
      />
      <Topbar />
      <h3 className={styles.totalProfit}>
        Total profit:
        <span className={styles.totalProfitNum}>{netProfitCalc()}</span>
      </h3>

      <div className={styles.tableContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.tableTitle}>{title}</h2>
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
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.grid}>
            <div>
              <label htmlFor='date'>Date</label>
              <input
                type='date'
                name='date'
                id='date'
                value={values.date}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor='sport'>League</label>
              <input
                type='text'
                id='sport'
                name='sport'
                value={values.sport}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor='wager_type'>Bet Type</label>
              <input
                type='text'
                id='wager_type'
                name='wager_type'
                value={values.wager_type}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor='wager_info'>Bet Info</label>
              <input
                type='text'
                id='wager_info'
                name='wager_info'
                value={values.wager_info}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor='wager_amt'>Amount</label>
              <input
                type='number'
                id='wager_amt'
                name='wager_amt'
                value={values.wager_amt}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor='odds'>Odds</label>
              <input
                type='number'
                id='odds'
                name='odds'
                value={values.odds}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor='outcome'>Result</label>
              <select
                id='outcome'
                name='outcome'
                value={values.outcome}
                onChange={handleInputChange}>
                <option defaultValue>-- Select an Option --</option>
                <option>pending</option>
                <option>win</option>
                <option>lose</option>
                <option>push</option>
              </select>
            </div>
            <input type='submit' value='Edit Bet' />
          </div>
        </form>

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
                  <td
                    className={`${styles.displayCenter} ${styles.capitalize}`}>
                    {sport.sport}
                  </td>
                  <td
                    className={`${styles.displayCenter} ${styles.capitalize}`}>
                    {sport.wager_type}
                  </td>
                  <td
                    className={`${styles.displayCenter} ${styles.capitalize}`}>
                    {sport.wager_info}
                  </td>
                  <td className={styles.displayCenter}>
                    {formatter.format(`${sport.wager_amt}`)}
                  </td>
                  <td className={styles.displayCenter}>{sport.odds}</td>
                  <td
                    className={`${styles[`${sport.outcome}`]} ${
                      styles.outcome
                    } ${styles.capitalize}`}>
                    {sport.outcome}
                  </td>
                  <td className={styles.displayRight}>
                    {formatter.format(
                      netProfit(sport.wager_amt, sport.odds, sport.outcome)
                    )}
                  </td>
                  <td
                    className={`${styles.displayCenter} ${styles.iconEdit}`}
                    onClick={() => handleEdit(index)}>
                    <Create />
                  </td>
                  <td
                    className={`${styles.displayCenter} ${styles.iconDel}`}
                    onClick={() => deleteBet(index)}>
                    <Delete />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBets;
