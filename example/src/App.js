import React from 'react';

import Calendar from '@sbmdkl/nepali-datepicker-reactjs';
import '@sbmdkl/nepali-datepicker-reactjs/dist/index.css';

class App extends React.Component {
	componentDidMount() {}
	state = {
		date: '',
	};
	onChange = ({ bsDate, adDate }) => {
		console.log(adDate);
		this.setState({ date: bsDate });
	};
	render() {
		return (
			<div style={{ marginLeft: 100, display: "flex", gap: "12px", marginTop: "10px"}}>
				{/* <div>
					<input type="date" name="en_date" />
				</div> */}
				<Calendar
					value={undefined}
					onChange={this.onChange}
					language='np'
					theme='default'
					dateFormat='DDDD, MMMM DD, YYYY'
					placeholder="mm/dd/yyyy"
					// minDate='2083-01-01'
					// maxDate='2077-12-30'
					defaultDate='2084-01-01'
				/>
			</div>
		);
	}
}

export default App;
