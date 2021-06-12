import React from 'react';
import Page from './Page';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import AdminPage from './AdminPage';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		color: 'black',
		height: 60,
		'& > * + *': {
			marginLeft: theme.spacing(2),
		},
	},
}));

export default function PageLoading() {
	const classes = useStyles();
	return (
		<Page>
			<div
				style={{
					display: 'flex',
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<CircularProgress color='black' />
			</div>
		</Page>
	);
}

export function AdminPageLoading() {
	const classes = useStyles();
	return (
		<AdminPage>
			<div
				style={{
					display: 'flex',
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<CircularProgress color='black' />
			</div>
		</AdminPage>
	);
}
