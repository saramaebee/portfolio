import React from 'react';
import marked, { MarkedOptions } from 'marked';
import hljs from 'highlight.js';
import {Card, CardContent, makeStyles, Typography, useTheme} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 275,
		minHeight: 150,
	},
	title: {},
	pos: {
		marginBottom: 12,
	},
}));

interface IContentCardProps {
	title: string;
	content: string;
}

function ContentCard(props: IContentCardProps) {
	const theme = useTheme();
	const classes = useStyles(theme);
	const options: MarkedOptions = {
		highlight: function (code: string, language: string) {
			const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
			return hljs.highlight(validLanguage, code).value;
		},
		gfm: true,
		breaks: true,
		pedantic: false,
		smartLists: true,
		smartypants: false
	}

	marked.setOptions(options)
	const md = marked(props.content.replace(/&gt;+/g, '>' || ''));

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography variant='h5' className={classes.title}>
					{props.title}
				</Typography>
				<div dangerouslySetInnerHTML={{__html: md}}/>
			</CardContent>
		</Card>
	)

}

export default ContentCard;