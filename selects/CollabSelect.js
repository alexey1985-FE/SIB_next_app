import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Box } from '@mui/system';
import { selectColorTheme } from '../utils/selectColorTheme';
import { ThemeProvider } from '@emotion/react';
import useStyles from '../utils/styles';

export default function CollabSelect() {
	const [value, setValue] = useState('');
	const classes = useStyles();

	const handleChange = event => {
		setValue(event.target.value);
	};

	return (
		<ThemeProvider theme={selectColorTheme}>
			<Box sx={{ minWidth: 120, marginBottom: 3 }}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Organization</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={value}
						label="Organization"
						onChange={handleChange}
						// sx={{
						// 	'&.MuiSelect-outlined:hover': {
						// 		backgroundColor: 'transparent',
						// 	},
						// }}
					>
						<MenuItem className={classes.selectItems} selected value="Sybilsoft">
							Sybilsoft
						</MenuItem>
						<MenuItem className={classes.selectItems} value="Sybilsoft2">
							Sybilsoft2
						</MenuItem>
						<MenuItem className={classes.selectItems} value="Sybilsoft3">
							Sybilsoft3
						</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</ThemeProvider>
	);
}
