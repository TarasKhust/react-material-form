import React, { Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export default ({ nextStep, prevStep, values }) => {
	const styles = {
		button: {
			margin: 15,
		},
	};
	const {firstName, lastName, email, occupation, city, bio} = values;
	return (
			<MuiThemeProvider>
				<Fragment>
					<AppBar title='Confirm user Data'/>
					<List>
						<ListItem
								primaryText={'First Name'}
								secondaryText={firstName}
						/>
						<ListItem
								primaryText={'Last Name'}
								secondaryText={lastName}
						/>
						<ListItem
								primaryText={'Email'}
								secondaryText={email}
						/>
						<ListItem
								primaryText={'Occupation'}
								secondaryText={occupation}
						/>
						<ListItem
								primaryText={'City'}
								secondaryText={city}
						/>
						<ListItem
								primaryText={'Bio'}
								secondaryText={bio}
						/>
					</List>
					<br/>
					<RaisedButton label='Back'
					              primary={false}
					              style={styles.button}
					              onClick={prevStep}
					/>
					<RaisedButton label='Confirm & Continue'
					              primary={true}
					              style={styles.button}
					              onClick={nextStep}
					/>
				</Fragment>
			</MuiThemeProvider>
	);
}