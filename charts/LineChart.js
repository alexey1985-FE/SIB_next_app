import { Line } from 'react-chartjs-2';

export default function LineChart() {
	const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
	const data = {
		labels: labels,
		datasets: [
			{
				label: 'Users',
				data: [0, 10, 20, 30, 40, 50],
				borderColor: '#3592DE',
				backgroundColor: '#3592DE',
			},
		],
		options: {
			plugins: {
				legend: {
					position: 'bottom',
					labels: {
						backgroundColor: '#3592DE',
						font: {
							size: 17,
						},
					},
				},
			},
		},
	};

	return <Line data={data} options={data.options} />;
}
