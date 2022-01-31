import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	form: {
		width: '100%',
		backgroundColor: '#fff',
		borderRadius: '10px',
		boxShadow: '0px 0px 25px 5px #f2f2f2',
		padding: '0 30px 30px 30px',
	},
	logo: {
		display: 'flex',
		justifyContent: 'center',
		paddingTop: 60,
		marginBottom: 30,
	},
	bold: {
		fontWeight: 700,
		marginBottom: 15,
	},
	btn: {
		textTransform: 'capitalize',
		height: 60,
		borderRadius: 7,
		fontWeight: 700,
		'&:hover': {
			backgroundColor: '#99471c',
		},
	},
	btn_wrapper: {
		maxWidth: 500,
		display: 'flex',
		alignItems: 'center',
	},
	btn_account: {
		border: '2px solid',
		height: 60,
		borderRadius: 5,
		backgroundColor: 'transparent',
	},
	container: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	footer: {
		textAlign: 'center',
		'& p a': {
			color: 'inherit',
		},
		'& a:hover': {
			textDecoration: 'underline',
		},
	},
	loginLinks: {
		display: 'flex',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
	},
	modal: {
		padding: '20px',
	},
	wrapper: {
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	appBarListItems: {
		// padding: '15px 15px 15px 50px',
		display: 'flex',
		alignItems: 'flex-start',
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: '#FEFAF8',
		},
	},
	appBarListItemIcon: {
		display: 'flex',
		alignItems: 'center',
		flex: '1 1 auto',
	},
	subItems: {
		paddingLeft: 106,
		cursor: 'pointer',
		'&:hover': {
			backgroundColor: '#FEFAF8',
		},
	},
	menuItems: {
		width: '16em',
	},
	menuItem: {
		'&:hover': {
			backgroundColor: '#FEFAF8',
		},
	},
	accomplishments: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		position: 'relative',
	},
	selectItems: {
		backgroundColor: 'none',
		'&:hover': {
			backgroundColor: '#FEFAF8',
		},
	},
});

export default useStyles;
