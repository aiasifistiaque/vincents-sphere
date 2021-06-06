import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flex: 5,
		alignItems: 'center',
		justifyContent: 'center',
		color: 'black',
		height: 30,
		'& > * + *': {
			marginLeft: theme.spacing(2),
		},
	},
}));

export default function SearchLoading() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<CircularProgress color='black' />
		</div>
	);
}
