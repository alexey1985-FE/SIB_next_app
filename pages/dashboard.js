/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import StarIcon from '@mui/icons-material/Star';
import ListItemText from '@mui/material/ListItemText';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import { styled } from '@mui/material/styles';
import { colorTheme } from '../utils/colorTheme';
import { ThemeProvider } from '@emotion/react';
import { AccountCircle } from '@mui/icons-material';
import useStyles from '../utils/styles';
import NextLink from 'next/link';
import { Grid, Link, Menu, MenuItem, Paper } from '@mui/material';
import GaugeChart from '../charts/GaugeChart';
import CollabSelect from '../selects/CollabSelect';
import TrendsSelect from '../selects/TrendsSelect';
import LineChart from '../charts/LineChart';
import CollabUsers from '../components/usersInfo/CollabUsers';
import LeaderUsers from '../components/usersInfo/LeaderUsers';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';

const drawerWidth = 350;

const Main = styled('main', { $shouldForwardProp: prop => prop !== 'open' })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(4, 5),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
	width: theme.mixins.toolbar,
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(5, 4),
	borderRadius: 10,
	height: '100%',
	display: 'flex',
	flexWrap: 'wrap',
	flexDirection: 'column',
}));

function DashBoard() {
	const [open, setOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);

	const classes = useStyles();
	const theme = useTheme();
	const router = useRouter();
	const { state, dispatch } = useContext(Store);
	const { userInfo } = state;

	const largeScreen = useMediaQuery(theme.breakpoints.down('1750'));
	const tabletScreen = useMediaQuery(theme.breakpoints.down('1200'));
	const mobileScreen = useMediaQuery(theme.breakpoints.down('620'));

	useEffect(() => {
		if (!userInfo) {
			router.push('/');
		}
	}, []);

	const handleDrawerToggler = () => {
		setOpen(!open);
		setIsOpen(false);
	};

	const handleMenuToggler = () => {
		setIsOpen(!isOpen);
	};

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const logoutClickHandler = () => {
		dispatch({ type: 'USER_LOGOUT' });
		Cookies.remove('userInfo');
		router.push('/');
	};

	return (
		<Box sx={{ display: 'flex', paddingTop: '4rem' }}>
			<CssBaseline />
			<ThemeProvider theme={colorTheme}>
				<AppBar
					open={tabletScreen ? !open : open}
					position="fixed"
					elevation={5}
					sx={tabletScreen ? { width: '100%' } : undefined}
				>
					<Toolbar sx={{ justifyContent: 'space-between' }}>
						<IconButton
							color="secondary"
							aria-label="open drawer"
							onClick={handleDrawerToggler}
							edge="start"
						>
							<MenuIcon />
						</IconButton>

						<div
							style={
								mobileScreen
									? {
											display: 'flex',
											alignItems: 'center',
											padding: '0 50px',
											position: 'fixed',
                      right: 10
									}
									: undefined
							}
						>
							{userInfo ? userInfo.name : <p>Login</p>}
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="basic-menu"
								aria-haspopup="true"
								color="secondary"
								aria-expanded={open ? 'true' : undefined}
								onClick={handleClick}
								sx={
									mobileScreen
										? { position: 'fixed', right: 10 }
										: { position: 'relative' }
								}
							>
								<AccountCircle />
							</IconButton>
						</div>
						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={Boolean(anchorEl)}
							onClose={handleClose}
							MenuListProps={{
								'aria-labelledby': 'basic-button',
							}}
						>
							<Box className={classes.menuItems} onClick={handleClose}>
								<MenuItem className={classes.menuItem}>User Profile</MenuItem>
								<MenuItem className={classes.menuItem}>Notification Settings</MenuItem>
								<MenuItem className={classes.menuItem} onClick={logoutClickHandler}>
									Log Out
								</MenuItem>
							</Box>
						</Menu>
					</Toolbar>
				</AppBar>

				<Drawer
					sx={{
						width: drawerWidth,
						'& .MuiDrawer-paper': {
							width: drawerWidth,
							boxSizing: 'border-box',
						},
					}}
					variant={tabletScreen ? 'temporary' : 'persistent'}
					anchor="left"
					open={open}
					onClose={handleDrawerToggler}
				>
					<DrawerHeader className={classes.drawerHeader}>
						<NextLink href="/" passHref>
							<Link>
								<img
									width={'200'}
									src="https://cdn.sibylity.com/static/branding/sibylsoft/img/logo.svg"
									alt="logo"
								/>
							</Link>
						</NextLink>
					</DrawerHeader>

					<List>
						<ListItem
							className={classes.appBarListItems}
							sx={{ backgroundColor: '#FBEEE7' }}
						>
							<div className={classes.appBarListItemIcon}>
								<ListItemIcon>
									<PermMediaOutlinedIcon color="secondary" />
								</ListItemIcon>
								<ListItemText sx={{ color: '#C65D26' }} onClick={handleDrawerToggler}>
									Dashboard
								</ListItemText>
							</div>
						</ListItem>

						<ListItem className={classes.appBarListItems} onClick={handleMenuToggler}>
							<div className={classes.appBarListItemIcon}>
								<ListItemIcon>
									<WorkOutlinedIcon />
								</ListItemIcon>
								<ListItemText>Administrator</ListItemText>
								{isOpen ? (
									<KeyboardArrowDownIcon color="secondary" />
								) : (
									<ChevronLeftIcon color="secondary" />
								)}
							</div>
						</ListItem>
						{isOpen && (
							<div onClick={handleDrawerToggler}>
								<ListItem className={classes.subItems}>
									<ListItemText>Users</ListItemText>
								</ListItem>
								<ListItem className={classes.subItems}>
									<ListItemText>Groups</ListItemText>
								</ListItem>
								<ListItem className={classes.subItems}>
									<ListItemText>Settings</ListItemText>
								</ListItem>
							</div>
						)}
					</List>
				</Drawer>
			</ThemeProvider>

			<Main
				open={tabletScreen ? !open : open}
				sx={tabletScreen ? { marginLeft: 0 } : !{ marginLeft: '-350px' }}
			>
				<Grid
					container
					spacing={tabletScreen ? 0.8 : 5}
					sx={tabletScreen ? { width: '100%' } : undefined}
				>
					{open ? (
						<>
							<Grid
								item
								lg={largeScreen ? 12 : 8}
								mb={tabletScreen ? 5 : undefined}
								sx={{ width: '100%' }}
							>
								<Item sx={{ cursor: 'pointer' }}>
									<Typography className={classes.titleFontSize}>Overview</Typography>
									<Grid container spacing={1} justifyContent="space-around">
										<Grid item>
											<Box sx={{ maxWidth: '260px' }}>
												<GaugeChart count={50} />
												<Typography
													sx={{ textAlign: 'center', transform: 'translateY(-55px)' }}
												>
													Employees have Collaborated
												</Typography>
											</Box>
										</Grid>
										<Grid item>
											<Box sx={{ maxWidth: '260px' }}>
												<GaugeChart count={24} />
												<Typography
													sx={{ textAlign: 'center', transform: 'translateY(-55px)' }}
												>
													Identified Vulnerabilities Mitigated
												</Typography>
											</Box>
										</Grid>
										<Grid item>
											<Box sx={{ maxWidth: '260px' }}>
												<GaugeChart count={26} />
												<Typography
													sx={{ textAlign: 'center', transform: 'translateY(-55px)' }}
												>
													Activities Completed
												</Typography>
											</Box>
										</Grid>
									</Grid>
								</Item>
							</Grid>
							<Grid
								item
								xs={12}
								lg={largeScreen ? 6 : 4}
								mb={tabletScreen ? 5 : undefined}
							>
								<Item sx={{ cursor: 'pointer' }}>
									<Box sx={{ display: 'flex', flexDirection: 'column' }}>
										<Typography className={classes.titleFontSize}>
											Accomplishments
										</Typography>
										<Box className={classes.accomplishments}>
											<StarIcon sx={{ fontSize: '330px', color: '#E8F8CF' }}></StarIcon>
											<Typography sx={{ transform: 'translateY(-43px)' }}>
												Completed Activities
											</Typography>
											<Box
												sx={{
													fontSize: '50px',
													color: '#fff',
													position: 'absolute',
													top: '125px',
													fontWeight: '400',
												}}
											>
												53
											</Box>
										</Box>
										<NextLink href="#" passHref>
											<Link
												color="info.main"
												sx={{ textDecoration: 'none', alignSelf: 'flex-end' }}
											>
												View Workspace
											</Link>
										</NextLink>
									</Box>
								</Item>
							</Grid>
							<Grid
								item
								xs={12}
								lg={largeScreen ? 6 : 4}
								mb={tabletScreen ? 5 : undefined}
							>
								<Item sx={{ cursor: 'pointer' }}>
									<Typography className={classes.titleFontSize}>
										Collaborator Lookup
									</Typography>
									<Typography sx={{ marginBottom: '2px' }}>
										Want to get more help? These users can help.
									</Typography>
									<CollabSelect />
									<CollabUsers />
								</Item>
							</Grid>
							<Grid
								item
								xs={12}
								lg={largeScreen ? 6 : 4}
								mb={tabletScreen ? 5 : undefined}
							>
								<Item sx={{ cursor: 'pointer' }}>
									<Typography className={classes.titleFontSize}>Trends</Typography>
									<TrendsSelect />
									<LineChart />
								</Item>
							</Grid>
							<Grid
								item
								xs={12}
								lg={largeScreen ? 6 : 4}
								mb={tabletScreen ? 5 : undefined}
							>
								<Item sx={{ cursor: 'pointer' }}>
									<Typography className={classes.titleFontSize}>Leaderboard</Typography>
									<LeaderUsers />
								</Item>
							</Grid>
						</>
					) : (
						<>
							<Grid item md={12} lg={12} xl={8} mb={tabletScreen ? 5 : undefined}>
								<Item sx={{ cursor: 'pointer' }}>
									<Typography className={classes.titleFontSize}>Overview</Typography>
									<Grid container spacing={1} justifyContent="space-around">
										<Grid item>
											<Box sx={{ maxWidth: '260px' }}>
												<GaugeChart count={50} />
												<Typography
													sx={{ textAlign: 'center', transform: 'translateY(-55px)' }}
												>
													Employees have Collaborated
												</Typography>
											</Box>
										</Grid>
										<Grid item>
											<Box sx={{ maxWidth: '260px' }}>
												<GaugeChart count={24} />
												<Typography
													sx={{ textAlign: 'center', transform: 'translateY(-55px)' }}
												>
													Identified Vulnerabilities Mitigated
												</Typography>
											</Box>
										</Grid>
										<Grid item>
											<Box sx={{ maxWidth: '260px' }}>
												<GaugeChart count={26} />
												<Typography
													sx={{ textAlign: 'center', transform: 'translateY(-55px)' }}
												>
													Activities Completed
												</Typography>
											</Box>
										</Grid>
									</Grid>
								</Item>
							</Grid>
							<Grid
								item
								xs={12}
								lg={tabletScreen ? 12 : 6}
								xl={4}
								mb={tabletScreen ? 5 : undefined}
							>
								<Item sx={{ cursor: 'pointer' }}>
									<Box sx={{ display: 'flex', flexDirection: 'column' }}>
										<Typography className={classes.titleFontSize}>
											Accomplishments
										</Typography>
										<Box className={classes.accomplishments}>
											<StarIcon sx={{ fontSize: '330px', color: '#E8F8CF' }}></StarIcon>
											<Typography sx={{ transform: 'translateY(-43px)' }}>
												Completed Activities
											</Typography>
											<Box
												sx={{
													fontSize: '50px',
													color: '#fff',
													position: 'absolute',
													top: '125px',
													fontWeight: '400',
												}}
											>
												53
											</Box>
										</Box>
										<NextLink href="#" passHref>
											<Link
												color="info.main"
												sx={{ textDecoration: 'none', alignSelf: 'flex-end' }}
											>
												View Workspace
											</Link>
										</NextLink>
									</Box>
								</Item>
							</Grid>
							<Grid
								item
								xs={12}
								lg={tabletScreen ? 12 : 6}
								xl={4}
								mb={tabletScreen ? 5 : undefined}
							>
								<Item sx={{ cursor: 'pointer' }}>
									<Typography className={classes.titleFontSize}>
										Collaborator Lookup
									</Typography>
									<Typography sx={{ marginBottom: '2px' }}>
										Want to get more help? These users can help.
									</Typography>
									<CollabSelect />
									<CollabUsers />
								</Item>
							</Grid>
							<Grid
								item
								xs={12}
								lg={tabletScreen ? 12 : 6}
								xl={4}
								mb={tabletScreen ? 5 : undefined}
							>
								<Item sx={{ cursor: 'pointer' }}>
									<Typography className={classes.titleFontSize}>Trends</Typography>
									<TrendsSelect />
									<LineChart />
								</Item>
							</Grid>
							<Grid item xs={12} lg={tabletScreen ? 12 : 6} xl={4}>
								<Item sx={{ cursor: 'pointer' }}>
									<Typography className={classes.titleFontSize}>Leaderboard</Typography>
									<LeaderUsers />
								</Item>
							</Grid>
						</>
					)}
				</Grid>
			</Main>
		</Box>
	);
}

export default dynamic(() => Promise.resolve(DashBoard), { ssr: false });
