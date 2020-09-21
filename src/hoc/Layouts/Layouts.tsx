import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "../../redux/store";

export const Layouts = (props: any) => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<>
					{props.children}
				</>
			</Provider>
		</BrowserRouter>
	)
};