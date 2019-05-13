import React, { Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default ({ nextStep, prevStep, values, handleChange }) => {
	const styles = {
		button: {
			margin: 15,
		},
	};
	const {occupation, city, bio} = values;
	return (
			<MuiThemeProvider>
				<Fragment>
					<AppBar title='Enter User Details'/>
					<TextField hintText='Enter Your Occupation'
					           floatingLabelText='Occupation'
					           onChange={handleChange('occupation')}
					           defaultValue={occupation}

					/>
					<br/>
					<TextField hintText='Enter Your City'
					           floatingLabelText='City'
					           onChange={handleChange('city')}
					           defaultValue={city}

					/>
					<br/>
					<TextField hintText='Enter Your Bio'
					           floatingLabelText='Bio'
					           onChange={handleChange('bio')}
					           defaultValue={bio}

					/>
					<br/>
					<RaisedButton label='Back'
					              primary={false}
					              style={styles.button}
					              onClick={prevStep}
					/>
					<RaisedButton label='Continue'
					              primary={true}
					              style={styles.button}
					              onClick={nextStep}
					/>
				</Fragment>
			</MuiThemeProvider>
	);
}