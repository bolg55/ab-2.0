import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Topbar from './Topbar';
import styles from '../styles/Bets.module.css';
import { netProfit, formatDateForInput, formatter } from '../utils/utils';
import { useState } from 'react';
import { CSVLink } from 'react-csv';
import { GetApp, Create, Delete, Close } from '@material-ui/icons';
import { useRouter } from 'next/router';
import { API_URL } from '../config';

const AllBets = ({ betData, title }) => {
  // ****************************** //
  //         USESTATE HOOKS         //
  // ****************************** //
  const [values, setValues] = useState({
    date: '',
    sport: '',
    wager_type: '',
    wager_info: '',
    wager_amt: '',
    odds: '',
    outcome: '',
  });

  // useState for search box query w/ map and filter data //
  const [searchTerm, setSearchTerm] = useState('');

  // useState to set edit mode on bet add / edit form //
  const [editMode, setEditMode] = useState(false);

  //  useState to toggle add / edit form on/off   //
  const [showForm, setShowForm] = useState(false);

  // NEXT ROUTER //
  const router = useRouter();

  //  Download bets as CSV functionality  //
  const headers = [
    { label: 'Date', key: 'date' },
    { label: 'League', key: 'sport' },
    { label: 'Bet Type', key: 'wager_type' },
    { label: 'Bet Info', key: 'wager_info' },
    { label: 'Amount', key: 'wager_amt' },
    { label: 'Odds', key: 'odds' },
    { label: 'Result', key: 'outcome' },
  ];
  const csvReport = {
    filename: 'All Bets.csv',
    headers: headers,
    data: betData,
  };
  // ****************************** //

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
  // ****************************** //
  //         EVENT HANDLERS         //
  // ****************************** //

  // Resets the form fields after edit/add change or submit
  const clearValues = () => {
    setValues({
      date: '',
      sport: '',
      wager_type: '',
      wager_info: '',
      wager_amt: '',
      odds: '',
      outcome: '',
    });
  };

  // Handles edit bet functionality

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

  // Handles form submit functionality
  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasEmptyFields = Object.values(values).some(
      (element) => element === ''
    );

    if (hasEmptyFields) {
      toast.error('Please fill in all fields');
    }

    const res = await fetch(
      `${API_URL}/bets/${editMode ? `${values.id}` : ''}`,
      {
        method: `${editMode ? 'PUT' : 'POST'}`,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }
    );

    if (!res.ok) {
      toast.error('Something Went Wrong');
    } else {
      // const data = await res.json();
      clearValues();
      router.push(`/allbets`);
      toast.success('🚀 Bet updated successfully!');
    }
  };

  // Updates form fields on edit
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const deleteBet = async (index) => {
    if (confirm('Are you sure? ')) {
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

  // onClick Edit / Add / Form Dropdown Handler //

  const handleEditClick = () => {
    clearValues();
    setShowForm(true);
    setEditMode(true);
  };

  const handleAddClick = () => {
    setEditMode(false);
    clearValues();
    if (!showForm) {
      setShowForm(true);
    }
  };

  const handleFormClose = () => {
    clearValues();
    setShowForm(false);
    setEditMode(false);
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
      <div className={styles.topContainer}>
        <h3>
          Total profit:
          <span className={styles.totalProfitNum}>{netProfitCalc()}</span>
        </h3>
        <div className={styles.addEditContainer}>
          <div onClick={() => handleEditClick()}>
            <Create className={styles.btnIcon} /> Edit Bets
          </div>
          <div className={styles.btn} onClick={() => handleAddClick()}>
            Add Bets
          </div>
        </div>
      </div>

      {showForm ? (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.closeFormContainer}>
            <span
              className={styles.closeForm}
              onClick={() => handleFormClose()}>
              Close &#10060;
            </span>
          </div>

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

            <input
              type='submit'
              value={editMode ? 'Update Bet' : 'Add New Bet'}
            />
          </div>
        </form>
      ) : (
        ''
      )}

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
              {editMode ? <th>Edit</th> : null}

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
              .map((sport, index) => {
                const profit = netProfit(
                  sport.wager_amt,
                  sport.odds,
                  sport.outcome
                );

                return (
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
                      {formatter.format(profit)}
                    </td>
                    {editMode ? (
                      <td
                        className={`${styles.displayCenter} ${styles.iconEdit}`}
                        onClick={() => handleEdit(index)}>
                        <Create />
                      </td>
                    ) : null}

                    <td
                      className={`${styles.displayCenter} ${styles.iconDel}`}
                      onClick={() => deleteBet(index)}>
                      <Delete />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBets;
