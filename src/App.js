import './App.css';
import BalanceReview from './BalanceReview';
import './styles.css';
import { BalanceContext,amount } from './BalanceContext';
import { useState } from 'react';

function App() {
  const [balance, setBalance] = useState(amount);
  const updateBalance = (balance) =>{
    setBalance(balance);
  }
  return (
    <div className="App">
      <BalanceContext.Provider value = {{balance, updateBalance}}>
      <BalanceReview 
      currency="$"/>
      </BalanceContext.Provider>
    </div>
  );
}

export default App;
