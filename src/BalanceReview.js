import TransactionForm from "./TransactionForm";
import {useState, useContext} from 'react';
import { BalanceContext } from "./BalanceContext";

const BalanceReview = ({currency}) => {
    const [modalOpen, setModalOpen] = useState("");
    const balancefromContext = useContext(BalanceContext);

    const onTransactionSubmit = (transactionAmount) => {
        let updatedBalance;
        switch(modalOpen){
            case "Deposit" :
                updatedBalance = balancefromContext.balance + parseInt(transactionAmount);
                break;
                case "Withdraw" :
                    updatedBalance = balancefromContext.balance - parseInt(transactionAmount);
                    break;
                default:
                    break;
        }
        balancefromContext.updatedBalance(updatedBalance);
        setModalOpen("");
    }
    return(
        <div className="balance-review-container light-grey">
            <div className="balance-info">
                <h1>Balance</h1>
                <p>{balancefromContext.balance} {currency}</p>
            </div>
            <div className="buttons-wrapper">
                {modalOpen !== "Deposit" && (<button className= "green" onClick={() => setModalOpen("Deposit")}>Deposit</button>)}
            {modalOpen !== "Withdraw" && (<button className="red"onClick={() => setModalOpen("Withdraw")}>Withdraw</button>)}
        </div>
        {modalOpen !== "" && <TransactionForm title={modalOpen} onSubmit= {onTransactionSubmit} />}
        </div>
    )
}

export default BalanceReview;