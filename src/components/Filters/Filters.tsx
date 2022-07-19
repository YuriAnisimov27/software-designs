import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

import styles from './Filters.module.scss';
import { Row } from '../Table';

interface FiltersProps {
	store?: Row[];
	initialStore?: Row[];
	updateStore?: (val: Row[]) => void;
}

const OPTIONS = [
	{
		title: 'Without posts',
	},
	{
		title: 'More than 100 posts',
	},
];

export function Filters({ store, updateStore, initialStore }: FiltersProps) {
	const [selectedFilter, setSelectedFilter] = useState<string[]>([]);

	const onChange = ({ title }) => {
		let updatedFilters;
		if (selectedFilter.find((filter) => filter === title)) {
			updatedFilters = selectedFilter.filter((filter) => filter !== title);
		} else {
			updatedFilters = [...selectedFilter, title];
		}

		setSelectedFilter(updatedFilters);

		let updatedStore = [];

		if (updatedFilters.includes('Without posts')) {
			updatedStore = [...initialStore].filter((row) => row.posts === 0);
		}

		if (updatedFilters.includes('More than 100 posts')) {
			updatedStore = [
				...updatedStore,
				...initialStore.filter((row) => row.posts > 100),
			];
		}

		if (!updatedFilters.length) {
			updatedStore = [...initialStore];
		}

		updateStore && updateStore(updatedStore);
	};

	return (
		<div className={styles.group}>
			<div className={styles.title}>Filter by posts</div>
			<ul className={styles.list}>
				{OPTIONS.map((option) => (
					<li
						value={option.title}
						onClick={() => onChange(option)}
						key={option.title}
					>
						<Checkbox
							checked={
								!!selectedFilter.find((filter) => filter === option.title)
							}
							value={option.title}
							onChange={() => onChange(option)}
							size="small"
							color="primary"
						/>{' '}
						{option.title}
					</li>
				))}
			</ul>
		</div>
	);
}
