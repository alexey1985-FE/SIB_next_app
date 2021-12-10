import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { employees } from '../../utils/employeesData';
import StarIcon from '@mui/icons-material/Star';
import { Badge } from '@material-ui/core';

export default function LeaderUsers() {
	const StyledBadge = styled(Badge)(({ theme }) => ({
		'& .MuiBadge-badge': {
			right: 18,
			top: 13,
			border: `2px solid ${theme.palette.background}`,
			padding: '4px 4px',
			backgroundColor: '#C65D26',
			color: '#fff',
		},
	}));

	return (
		<Box sx={{ maxHeight: 430, overflow: 'auto' }}>
			{employees.map(item => (
				<Box key={item.id} sx={{ display: 'flex', marginTop: 1 }}>
					<StyledBadge badgeContent={item.count} sx={{ marginTop: 1 }}>
						<StarIcon sx={{ fontSize: '50px', color: '#CACACA' }} />
					</StyledBadge>

					<Box sx={{ marginLeft: 2 }}>
						<Typography>{item.name}</Typography>
						<Typography sx={{ marginBottom: 3 }}>{item.email}</Typography>
					</Box>
				</Box>
			))}
		</Box>
	);
}
