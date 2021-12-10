import { Container, createTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Box } from '@mui/system';
import useStyles from '../utils/styles';
import dynamic from 'next/dynamic';

function AccountLayout({ children }) {
	const classes = useStyles();

	const theme = createTheme({
		palette: {
			primary: {
				main: '#C65D26',
			},
			secondary: {
				main: '#5E8CD9',
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container
				style={{
					maxWidth: 760,
				}}
			>
				<Box sx={{ minHeight: '90vh' }} className={classes.container}>
					{children}
				</Box>
			</Container>
		</ThemeProvider>
	);
}

export default dynamic(() => Promise.resolve(AccountLayout), { ssr: false });
