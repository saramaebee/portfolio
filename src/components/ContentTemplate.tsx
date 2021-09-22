import React from 'react';
import {Grid, makeStyles, useTheme, GridSize, Typography, } from '@material-ui/core';
import ContentCard from '../atoms/ContentCard';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: '80%',
		margin: 'auto',
		marginTop: 200
	},
	card: {
		maxWidth: '20em'
	}
}));

function compute(value:number) {
	return value as GridSize;
}

function ContentTemplate() {
	const theme = useTheme();
	const classes = useStyles(theme);

	return (
		<Grid
			container
			direction='row'
			justifyContent='space-evenly'
			alignItems='center'
			className={classes.root}
			spacing={1}
		>
			<Grid item xs={4} className={classes.card}>
				<ContentCard title={'Testing'} content={'String'}></ContentCard>
			</Grid>
			<Grid item xs={4} className={classes.card}>
				<ContentCard title={'Testing'} content={'String'}></ContentCard>
			</Grid>
			<Grid item xs={4} className={classes.card}>
				<ContentCard title={'Testing'} content={'String'}></ContentCard>
			</Grid>
		</Grid>
	)
}

export default ContentTemplate;