/* eslint-disable @next/next/no-img-element */
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Link,
	List,
	ListItem,
	TextField,
	Typography,
} from '@material-ui/core';

import { Controller, useForm } from 'react-hook-form';
import useStyles from '../../utils/styles';
import FormLayout from '../../components/FormLayout';
import React, { useState } from 'react';
import NextLink from 'next/link';

export default function LoginModal() {
	const [open, setOpen] = useState(false);

	const handleClickOpen = e => {
		e.preventDefault();
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

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
							onClick={handleClickOpen}
						>
							Log In
						</Button>
						<Dialog
							open={open}
							// onClose={handleClose}
							aria-labelledby="alert-dialog-title"
							aria-describedby="alert-dialog-description"
							maxWidth="lg"
							sx={{ padding: 20 }}
						>
							<div className={classes.modal}>
								<DialogTitle id="alert-dialog-title">
									{'Multiple Login Providers found'}
								</DialogTitle>
								<DialogContent>
									<DialogContentText id="alert-dialog-description">
										The account associated with ...<i>(dynamic email)</i> can be authenticated
										<br />
										using more than one single sign-on login provider. Please select from the list
										<br />
										below which login provider you wish to use.
									</DialogContentText>
									<List>
										<ListItem>
											<NextLink href="#" passHref>
												<Link color="secondary">University of Pawnee</Link>
											</NextLink>
										</ListItem>
										<ListItem>
											<NextLink href="#" passHref>
												<Link color="secondary">Pawnee District Municipal Utilities</Link>
											</NextLink>
										</ListItem>
									</List>
								</DialogContent>
								<DialogActions>
									<Button color="primary" variant="contained" onClick={handleClose}>
										Close
									</Button>
								</DialogActions>
							</div>
						</Dialog>
					</ListItem>
				</List>
			</form>
		</FormLayout>
	);
}
