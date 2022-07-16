import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({

	models: {
		transaction: Model,
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: 'Transaction 1',
					type: 'deposit',
					category: 'Pagamento',
					amount: 1000,
					createdAt: new Date('2022-07-01 08:30:00')
				},
				{
					id: 2,
					title: 'Transaction 2',
					type: 'withdraw',
					category: 'Contas',
					amount: 100,
					createdAt: new Date('2022-07-02 08:30:00')
				}
			]
		})
	},

	routes() {
		this.namespace = 'api';

		this.get('/transactions', () => {
			// return [
			// 	{
			// 		id: 1,
			// 		title: 'Transaction 1',
			// 		amount: 400,
			// 		type: 'deposit',
			// 		category: 'food',
			// 		createdAt: new Date()
			// 	}
			// ]

			return this.schema.all('transaction'); 
		})

		this.post('/transactions', (schema, request) => {
			const data = JSON.parse(request.requestBody);

			return schema.create('transaction', data);
		})
	}
})

const root = ReactDOM.createRoot(
  	document.getElementById('root') as HTMLElement
);
root.render(
  	<React.StrictMode>
    	<App />
  	</React.StrictMode>
);