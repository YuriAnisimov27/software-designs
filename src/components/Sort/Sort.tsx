import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import styles from './Sort.module.scss';
import { Row } from '..';

interface SortProps {
	store?: Row[];
	updateStore?: (val: Row[]) => void;
}

function compare(a: Row, b: Row, isAsc: boolean): number {
	if (a.lastPayments > b.lastPayments) {
		return isAsc ? 1 : -1;
	}
	if (a.lastPayments < b.lastPayments) {
		return isAsc ? -1 : 1;
	}
	return 0;
}

export function Sort({ store, updateStore }: SortProps) {
	const handleChange = (value: string): void => {
		const updatedStore = [...store].sort((a, b) =>
			compare(a, b, value === 'asc')
		);
		updateStore && updateStore(updatedStore);
	};

	return (
		<FormControl className={styles.control} component="fieldset">
			<FormLabel className={styles.label}>Sort by payments</FormLabel>
			<RadioGroup
				className={styles.group}
				aria-label="sorting"
				name="radio-buttons-group"
				onChange={(e) => handleChange(e.target.value)}
			>
				<FormControlLabel value="desc" control={<Radio />} label="desc" />
				<FormControlLabel value="asc" control={<Radio />} label="asc" />
			</RadioGroup>
		</FormControl>
	);
}
