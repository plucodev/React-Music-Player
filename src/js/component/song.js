import React from "react";

class Song extends React.Component {
	constructor() {
		super();
		this.state = {
			songs: [], //your state properties here
			fx: []
		};
	}
	componentDidMount() {
		fetch("https://assets.breatheco.de/apis/sound/songs")
			.then(response => response.json())
			.then(songs => this.setState({ songs }));

		fetch("https://assets.breatheco.de/apis/sound/fx")
			.then(response => response.json())
			.then(fx => this.setState({ fx }));
	}

	render() {
		return this.state.songs.map((item, index) => {
			return (
				<div key={index}>
					{item.id}
					<span className="ml-4">{item.name}</span>
				</div>
			);
		});
	}
}

export default Song;
