import React from 'react';
import classes from './App.module.css';
import {Layouts} from "./hoc/Layouts/Layouts";
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import { Switch, Route, Redirect } from 'react-router-dom';
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Users} from "./components/Users/Users";

export const App = () => {
	return (
		<div className={classes.App}>

			<Layouts>
				<Header/>

				<div className={classes.Content}>
					<Sidebar/>

					<Switch>
						<Route
							path={'/profile'}
							render={() => <Profile/>}
						/>
						<Route
							path={'/dialogs'}
							render={() => <Dialogs/>}
						/>
						<Route
							path={'/users'}
							render={() => <Users/>}
						/>
						<Route path={'/'} render={() => <Redirect to={'/profile'}/>} />
					</Switch>
				</div>

			</Layouts>

		</div>
	);
};