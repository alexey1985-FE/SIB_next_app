/* eslint-disable @next/next/no-img-element */
import { Button, List, ListItem, TextField, Typography } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import useStyles from '../../utils/styles';
import FormLayout from '../../components/FormLayout';

export default function PasswordReset() {
	const {
		control,
		formState: { errors },
	} = useForm();
	const classes = useStyles();

	return (
		<FormLayout>
			<form className={classes.form}>
				<div className={classes.logo}>
					<img
						width={'200'}
						src="https://cdn.sibylity.com/static/branding/sibylsoft/img/logo.svg"
						alt="logo"
					/>
				</div>
				<Typography className={classes.bold} align="center">
					New Password
				</Typography>
				<Typography align="center">
					Enter a new password for the account
					<br />
					associated with ... <i>(`dymanic email`)</i>
				</Typography>
				<List style={{ marginTop: 30 }}>
					<ListItem>
						<Controller
							name="password"
							control={control}
							defaultValue=""
							rules={{
								required: true,
								minLength: 6,
							}}
							render={({ field }) => (
								<TextField
									variant="outlined"
									fullWidth
									id="password"
									label="Password"
									inputProps={{ type: 'password' }}
									error={Boolean(errors.password)}
									helperText={
										errors.password
											? errors.password.type === 'minLength'
												? 'Password length is more than 5'
												: 'Password is required'
											: ''
									}
									{...field}
								></TextField>
							)}
						></Controller>
					</ListItem>
					<ListItem>
						<Controller
							name="confirmPassword"
							control={control}
							defaultValue=""
							rules={{
								required: true,
								minLength: 6,
							}}
							render={({ field }) => (
								<TextField
									variant="outlined"
									fullWidth
									id="confirmNewPassword"
									label="Confirm New Password"
									inputProps={{ type: 'password' }}
									error={Boolean(errors.confirmNewPassword)}
									helperText={
										errors.confirmPassword
											? errors.confirmPassword.type === 'minLength'
												? 'Confirm New Password length is more than 5'
												: 'Confirm New Password is required'
											: ''
									}
									{...field}
								></TextField>
							)}
						></Controller>
					</ListItem>
					<ListItem>
						<Button
							color="primary"
							className={classes.btn}
							variant="contained"
							fullWidth
							type="submit"
						>
							Update Password
						</Button>
					</ListItem>
				</List>
			</form>
		</FormLayout>
	);
}
