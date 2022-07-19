import { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

import { Table, Filters, Sort, Search } from './components';
import { getImages, getUsers, getAccounts } from './mocks/api';

import styles from './App.module.scss';

import type { Row } from './components';
import type { Image, User, Account } from './types';

import rows from './mocks/rows.json';
import { dataConverter } from './utils/dataConverter';

// mockedData has to be replaced with parsed Promises’ data
const mockedData: Row[] = rows.data;

function App() {
	const [data, setData] = useState<Row[]>(mockedData);
	const initialStore = [...mockedData];

	useEffect(() => {
		// fetching data from API
		Promise.all([getImages(), getUsers(), getAccounts()]).then(
			([images, users, accounts]: [Image[], User[], Account[]]) => {
				const newData = dataConverter(images, users, accounts);
				setData(newData);
			}
		);
	}, []);

	return (
		<StyledEngineProvider injectFirst>
			<div className="App">
				<div className={styles.container}>
					<div className={styles.sortFilterContainer}>
						<Filters
							store={data}
							updateStore={setData}
							initialStore={initialStore}
						/>
						<Sort store={data} updateStore={setData} />
					</div>
					<Search
						store={data}
						updateStore={setData}
						initialStore={initialStore}
					/>
				</div>
				<Table rows={data} />
			</div>
		</StyledEngineProvider>
	);
}

export default App;
