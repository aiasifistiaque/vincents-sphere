import React from 'react';
import Page, { LoadingPage } from './Page';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		color: 'black',
		height: 30,
		'& > * + *': {
			marginLeft: theme.spacing(2),
		},
	},
}));

export default function Loading() {
	const classes = useStyles();
	return (
		<LoadingPage>
			<div
				style={{
					display: 'flex',
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<CircularProgress color='black' />
			</div>
		</LoadingPage>
	);
}
