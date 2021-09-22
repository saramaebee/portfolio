import React from 'react';
import {
	useTheme,
	Typography,
	Grid,
	Toolbar,
	AppBar as MUIAppBar,
	makeStyles,
	IconButton,

} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
	appbar: {
		paddingTop: theme.spacing(1),
		// paddingBottom: theme.spacing(1),
		maxWidth: '100vw',
		spacing: theme.spacing(1),
	}
}));

interface IAppBarProps {
	name: string;
}

function AppBar(props: IAppBarProps) {
	// attributes
	const theme = useTheme();
	const classes = useStyles(theme);

	// functions

	// render
	return (
		<MUIAppBar className={classes.appbar}>
			<Toolbar>
				<IconButton style={{marginTop: '-1vh', marginRight: '1vw'}}>
					<MenuIcon />
				</IconButton>
				<Typography variant='h1'>{props?.name}</Typography>
			</Toolbar>
		</MUIAppBar>
	);
}

export default AppBar;