import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsTable } from './components/TransactionsTable';
import { GlobalStyle } from './styles/global';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {

	const [isNewTransitionModalOpen, setIsNewTransitionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransitionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransitionModalOpen(false);
    }

  	return (
		<TransactionsProvider>
			<Header 
				onOpenNewTransactionModal={handleOpenNewTransactionModal}
			/>
			<Dashboard />
			<TransactionsTable />

			<NewTransactionModal 
				isOpen={isNewTransitionModalOpen}
				onRequestClose={handleCloseNewTransactionModal}
			/>

			<GlobalStyle />
		</TransactionsProvider>
  	);
}