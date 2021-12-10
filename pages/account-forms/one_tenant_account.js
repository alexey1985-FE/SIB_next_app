/* eslint-disable @next/next/no-img-element */
import { Button, Container, Link, List, ListItem, TextField, Typography } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import useStyles from '../../utils/styles';
import AccountLayout from '../../components/AccountLayout';
import NextLink from 'next/link';

export default function OneTenantAccount() {
	const {
		control,
		formState: { errors },
	} = useForm();
	const classes = useStyles();

	return (
		<>
			<AccountLayout>
				<form className={classes.form} style={{ padding: '0 50px 50px 50px' }}>
					<div className={classes.logo}>
						<img
							width={'250'}
							style={{ marginBottom: 30 }}
							src="https://cdn.sibylity.com/static/branding/sibylsoft/img/logo.svg"
							alt="logo"
						/>
					</div>
					<Typography className={classes.bold} align="center">
						Log In
					</Typography>
					<List>
						<ListItem style={{ marginBottom: 40 }}>
							<Controller
								name="email"
								control={control}
								defaultValue=""
								rules={{
									required: true,
									pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
								}}
								render={({ field }) => (
									<TextField
										variant="outlined"
										fullWidth
										id="email"
										label="Email"
										inputProps={{ type: 'email' }}
										error={Boolean(errors.email)}
										helperText={
											errors.email
												? errors.email.type === 'pattern'
													? 'Email is not valid'
													: 'Email is required'
												: ''
										}
										{...field}
									></TextField>
								)}
							></Controller>
						</ListItem>
						<ListItem>
							<Typography style={{ marginBottom: 10 }}>Access an existing account:</Typography>
						</ListItem>
						<ListItem style={{ marginBottom: 40 }}>
							<Button color="primary" fullWidth type="submit" className={classes.btn_account}>
								<div className={classes.btn_wrapper}>
									<img
										width={'30'}
										style={{ marginRight: 7 }}
										src="https://cdn.sibylity.com/static/branding/sibylsoft/img/thumbnail.svg"
										alt="logo"
									/>
									<Typography style={{ fontWeight: 500 }}>Sib auth, no sr customer</Typography>
								</div>
							</Button>
						</ListItem>
						<ListItem>
							<Typography style={{ marginBottom: 10 }}>Create a new account:</Typography>
						</ListItem>
						<ListItem>
							<Button color="primary" fullWidth type="submit" className={classes.btn_account}>
								<div className={classes.btn_wrapper}>
									<img
										width={'30'}
										style={{ marginRight: 7 }}
										src="https://cdn.sibylity.com/static/branding/sibylsoft/img/thumbnail.svg"
										alt="logo"
									/>
									<Typography style={{ fontWeight: 500 }}>Custom auth, sr customer</Typography>
								</div>
							</Button>
						</ListItem>
					</List>
				</form>
			</AccountLayout>
			<Container style={{ maxWidth: 860 }}>
				<footer className={classes.footer}>
					<div className={classes.loginLinks}>
						<NextLink href="#" passHref>
							<Link color="secondary">Sibylsoft.com</Link>
						</NextLink>
						<NextLink href="#" passHref>
							<Link color="secondary">Terms of Use</Link>
						</NextLink>
						<NextLink href="#" passHref>
							<Link color="secondary">Privacy Statement</Link>
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
		</>
	);
}
