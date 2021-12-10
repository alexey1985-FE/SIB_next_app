import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Doughnut } from 'react-chartjs-2';

export default function GaugeChart(props) {
	let value;

	const data = {
		labels: false,
		datasets: [
			{
				data: [props.count, value],
				backgroundColor: ['rgb(198, 93, 38)', 'rgb(251, 238, 231)'],
				circumference: 180,
				rotation: -90,
				cutout: 95,
			},
		],
		options: {
			plugins: {
				tooltip: {
					enabled: false,
				},
			},
		},
	};

	const resultValue = data.datasets[0].data[0];
	value = data.datasets[0].data[1] = 100 - resultValue;

	return (
		<Box
			style={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
				position: 'relative',
			}}
		>
			<Doughnut data={data} options={data.options} />
			{resultValue >= 100 ? (
				<Typography
					sx={{
						position: 'absolute',
						top: 125,
						left: 60,
						fontSize: 60,
						fontWeight: 700,
						color: '#C65D26',
					}}
				>
					{resultValue}%
				</Typography>
			) : resultValue < 10 ? (
				<Typography
					sx={{
						position: 'absolute',
						top: 125,
						left: 100,
						fontSize: 60,
						fontWeight: 700,
						color: '#C65D26',
					}}
				>
					{resultValue}%
				</Typography>
			) : (
				<Typography
					sx={{
						position: 'absolute',
						top: 125,
						left: 80,
						fontSize: 60,
						fontWeight: 700,
						color: '#C65D26',
					}}
				>
					{resultValue}%
				</Typography>
			)}
		</Box>
	);
}
