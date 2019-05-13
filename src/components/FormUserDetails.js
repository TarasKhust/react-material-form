import React, { Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default ({ nextStep, values, handleChange }) => {
	const styles = {
		button: {
			margin: 15,
		},
	};
	const {firstName, lastName, email} = values;
	return (
			<MuiThemeProvider>
				<Fragment>
					<AppBar title='Enter User Details'/>
					<TextField hintText='Enter Your First Name'
					           floatingLabelText='First Name'
					           onChange={handleChange('firstName')}
					           defaultValue={firstName}

					/>
					<br/>
					<TextField hintText='Enter Your last Name'
					           floatingLabelText='last Name'
					           onChange={handleChange('lastName')}
					           defaultValue={lastName}

					/>
					<br/>
					<TextField hintText='Enter Your Email Name'
					           floatingLabelText='Email Name'
					           onChange={handleChange('email')}
					           defaultValue={email}

					/>
					<br/>
					<RaisedButton label='Continue'
					              primary={true}
					              style={styles.button}
					              onClick={nextStep}
					/>
				</Fragment>
			</MuiThemeProvider>
	);
}