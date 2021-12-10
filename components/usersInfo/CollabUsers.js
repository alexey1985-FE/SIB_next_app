import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { employees } from '../../utils/employeesData';

export default function CollabUsers() {
	return (
		<Box sx={{ maxHeight: 300, overflow: 'auto' }}>
			{employees.map(item => (
				<Box key={item.id}>
					<Box>
						<Typography sx={{ color: '#C65D26', fontWeight: 700 }}>{item.name}</Typography>
						<Typography sx={{ marginBottom: 3 }}>{item.email}</Typography>
					</Box>
				</Box>
			))}
		</Box>
	);
}
