/* eslint-disable @next/next/no-img-element */
import { Button, Container, List, ListItem, TextField, Typography } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import useStyles from '../../utils/styles';
import AccountLayout from '../../components/AccountLayout';

export default function TwoTenantsAccount() {
	const {
		control,
		formState: { errors },
	} = useForm();
	const classes = useStyles();

	return (
		<Container className={classes.wrapper}>
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
						<ListItem>
							<div
								style={{
									border: '2px solid #EDEDED',
									borderRadius: 5,
									width: '100%',
									padding: '20px 0',
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
								}}
							>
								<div className={classes.btn_wrapper} style={{ marginBottom: 30 }}>
									<img
										width={'30'}
										style={{ marginRight: 7 }}
										src="https://cdn.sibylity.com/static/branding/sibylsoft/img/thumbnail.svg"
										alt="logo"
									/>
									<Typography style={{ fontWeight: 500, color: '#8693C0' }}>
										SIB Auth, No SR Customer
									</Typography>
								</div>
								<Button
									color="primary"
									type="submit"
									style={{
										border: '2px solid',
										height: 60,
										borderRadius: 5,
										backgroundColor: 'transparent',
										padding: 25,
									}}
								>
									<div className={classes.btn_wrapper}>
										<img
											width={'30'}
											style={{ marginRight: 7 }}
											src="https://cdn.sibylity.com/static/branding/sibylsoft/img/thumbnail.svg"
											alt="logo"
										/>
										<Typography style={{ fontWeight: 500 }}>Sib-auth login</Typography>
									</div>
								</Button>
							</div>
						</ListItem>
						<ListItem>
							<div
								style={{
									border: '2px solid #EDEDED',
									borderRadius: 5,
									width: '100%',
									padding: '20px 0',
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
								}}
							>
								<div className={classes.btn_wrapper} style={{ marginBottom: 30 }}>
									<img
										width={'30'}
										style={{ marginRight: 7 }}
										src="https://cdn.sibylity.com/static/branding/sibylsoft/img/thumbnail.svg"
										alt="logo"
									/>
									<Typography style={{ fontWeight: 500, color: '#8693C0' }}>
										SIB Auth, No SR Customer
									</Typography>
								</div>

								<div>
									<Button
										color="primary"
										type="submit"
										style={{
											border: '2px solid',
											height: 60,
											borderRadius: 5,
											backgroundColor: 'transparent',
											padding: 25,
										}}
									>
										<div className={classes.btn_wrapper}>
											<img
												width={'30'}
												style={{ marginRight: 7 }}
												src="https://cdn.sibylity.com/static/branding/sibylsoft/img/thumbnail.svg"
												alt="logo"
											/>
											<Typography style={{ fontWeight: 500 }}>Sib-auth login</Typography>
										</div>
									</Button>
									<Button
										color="primary"
										type="submit"
										style={{
											border: '2px solid',
											height: 60,
											borderRadius: 5,
											backgroundColor: 'transparent',
											padding: 25,
										}}
									>
										<div className={classes.btn_wrapper}>
											<img
												width={'30'}
												style={{ marginRight: 7 }}
												src="https://cdn.sibylity.com/static/branding/sibylsoft/img/thumbnail.svg"
												alt="logo"
											/>
											<Typography style={{ fontWeight: 500 }}>SSO Login</Typography>
										</div>
									</Button>
								</div>
							</div>
						</ListItem>
					</List>
				</form>
			</AccountLayout>
		</Container>
	);
}
