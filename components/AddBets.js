import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Topbar from './Topbar';
import PendingBets from '../components/PendingBets';
import styles from '../styles/AddBets.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { API_URL } from '../config';

const AddBet = ({ data, title }) => {
  const [values, setValues] = useState({
    date: '',
    sport: '',
    wager_type: '',
    wager_info: '',
    wager_amt: '',
    odds: '',
    outcome: '',
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasEmptyFields = Object.values(values).some(
      (element) => element === ''
    );

    if (hasEmptyFields) {
      toast.error('Please fill in all fields');
    }

    const res = await fetch(`${API_URL}/bets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    if (!res.ok) {
      toast.error('Something Went Wrong');
    } else {
      const data = await res.json();
      router.push(`/addbets`);
      toast.success('🚀 Bet added successfully!');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className={styles.container}>
      <Topbar />
      <div className={styles.addBetWrapper}>
        <ToastContainer
          position='top-center'
          autoClose={2000}
          draggable
          pauseOnHover
        />
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1 className={styles.tableTitle}>{title}</h1>
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
            <input type='submit' value='Add Bet' />
          </div>
        </form>
      </div>
      <PendingBets betData={data} title='Pending bets' />
    </div>
  );
};

export default AddBet;
