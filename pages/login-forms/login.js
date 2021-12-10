/* eslint-disable @next/next/no-img-element */
import { Button, List, ListItem, TextField, Typography } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import useStyles from '../../utils/styles';
import FormLayout from '../../components/FormLayout';

export default function Login() {
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
					Log In
				</Typography>
				<Typography align="center">to access the Sibylity Dashboard</Typography>
				<List style={{ marginTop: 30 }}>
					<ListItem>
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
						<Button
							color="primary"
							className={classes.btn}
							variant="contained"
							fullWidth
							type="submit"
						>
							Log In
						</Button>
					</ListItem>
				</List>
			</form>
		</FormLayout>
	);
}

