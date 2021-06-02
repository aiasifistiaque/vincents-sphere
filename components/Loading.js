import React from 'react';
import Page from './Page';
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
		<Page>
			<div className={classes.root}>
				<CircularProgress color='black' />
			</div>
		</Page>
	);
}
