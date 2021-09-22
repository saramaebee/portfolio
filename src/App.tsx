import React from 'react';
import {
	createTheme, CssBaseline, ThemeProvider,
} from '@material-ui/core';

import './App.css';
import BlogPage from './pages/BlogPage';

function App() {
	const theme = React.useMemo(
		() =>
		createTheme({
			palette: {
				type: /*prefersDarkMode ? 'dark' : 'light'*/ 'dark',
				primary: {
					main: '#302b36',
				},
				secondary: {
					main: '#d0b01f',
				},
			},
			typography: {
				h1: {
					fontFamily: 'Kalam, Roboto',
					fontSize: '4em'
				}
			},
			spacing: 4,
		})
	,[])

	return (
		<ThemeProvider theme={theme}>
			<BlogPage />
			<CssBaseline /> 
		</ThemeProvider>
	);
}

export default App;
