import { Container, createTheme, CssBaseline, Link } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Box } from '@mui/system';
import useStyles from '../utils/styles';
import NextLink from 'next/link';
import dynamic from 'next/dynamic';

function FormLayout({ children }) {
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
			<Container maxWidth="sm">
				<Box sx={{ minHeight: '90vh' }} className={classes.container}>
					{children}
				</Box>
				<footer className={classes.footer}>
					<div className={classes.loginLinks}>
						<NextLink href="#" passHref>
							<Link color="secondary">Sibylsoft.com</Link>
						</NextLink>
						<NextLink href="#" passHref>
							<Link color="secondary">Terms of Use</Link>
						</NextLink>
						<NextLink href="#" passHref>
							<Link color="secondary">Privacy Policy</Link>
						</NextLink>
					</div>
					<p>
						&#169; 2021{' '}
						<NextLink href="#" passHref>
							<Link>Sibylsoft</Link>
						</NextLink>
						. All rights reserved.
					</p>
				</footer>
			</Container>
		</ThemeProvider>
	);
}

export default dynamic(() => Promise.resolve(FormLayout), { ssr: false });
