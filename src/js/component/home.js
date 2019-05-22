import React from "react";
import Song from "./song.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<h1>Music Player</h1>
				</div>
				<div className="row">
					<div className="col-md-6">
						<h2>Song&apos;s List</h2>
						<Song />
					</div>
				</div>
			</div>
		);
	}
}
