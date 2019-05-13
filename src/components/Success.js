import React, { Fragment } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export default () => {
	return (
			<MuiThemeProvider>
				<Fragment>
					<AppBar title='Success'/>
					<h1>Thanks for your Submit</h1>
				</Fragment>
			</MuiThemeProvider>
	);
}