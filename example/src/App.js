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
			<div style={{ marginLeft: 100 }}>
				<Calendar
					value={undefined}
					onChange={this.onChange}
					language='en'
					theme='default'
					dateFormat='DDDD, MMMM DD, YYYY'
					placeholder="mm/dd/yyyy"
					// minDate='2082-01-01'
					// maxDate='2077-12-30'
					// defaultDate='2082-01-01'
				/>
			</div>
		);
	}
}

export default App;
