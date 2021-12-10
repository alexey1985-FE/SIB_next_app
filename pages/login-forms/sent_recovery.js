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
					Recovery Code Sent
				</Typography>
				<Typography align="center">
					Please enter the code below.
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
									id="recoveryCode"
									label="Recovery Code"
									inputProps={{ type: 'password' }}
									error={Boolean(errors.recoveryCode)}
									helperText={
										errors.password
											? errors.password.type === 'minLength'
												? 'Recovery Code is more than 5'
												: 'Recovery Code is required'
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
							Submit Recovery Code
						</Button>
					</ListItem>
				</List>
			</form>
		</FormLayout>
	);
}

