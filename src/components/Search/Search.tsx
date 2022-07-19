import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import styles from './Search.module.scss';
import { Row } from '../Table';

interface SearchProps {
	store?: Row[];
	initialStore?: Row[];
	updateStore?: (val: Row[]) => void;
}

export function Search({ store, updateStore, initialStore }: SearchProps) {
	const [searchedValue, setSearchedValue] = useState<string>('');

	const onChange = (value) => {
		if (!value) {
			updateStore && updateStore(initialStore);
			setSearchedValue('');
			return;
		}

		setSearchedValue(value);

		const searchByCountry = (row: Row) =>
			row.country.toLowerCase().includes(value.toLowerCase());
		const searchByName = (row: Row) =>
			row.name.toLowerCase().includes(value.toLowerCase());
		const searchByUserName = (row: Row) =>
			row.username.toLowerCase().includes(value.toLowerCase());

		const updatedStore = [...store].filter(
			(row) =>
				searchByCountry(row) || searchByName(row) || searchByUserName(row)
		);

		updateStore && updateStore(updatedStore);
	};

	return (
		<OutlinedInput
			className={styles.input}
			placeholder="Search by country/name/username"
			value={searchedValue}
			type="search"
			onChange={(e) => onChange(e.target.value)}
			startAdornment={
				<InputAdornment position="start">
					<SearchIcon />
				</InputAdornment>
			}
		/>
	);
}
