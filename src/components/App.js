import htm from 'htm';
import React from 'react';
import AppState from './AppState';
import Sidebar from './Sidebar';
import Landing from './Landing';
const html = htm.bind(React.createElement);


export default class App extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = props.initialState;
	}

	render() {
		return html`
		<${ AppState.Provider } value=${ this.state }>
			<div className="drag-region" />

			<${ Sidebar } />

			<main className="MainView">
				<${ Landing } />

				<div className="WebViews" />
			</main>
		</${ AppState.Provider }>
		`;
	}
}