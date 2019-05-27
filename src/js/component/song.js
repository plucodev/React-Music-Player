import React from "react";

class Song extends React.Component {
	constructor() {
		super();
		this.state = {
			songs: [],
			currentIndex: 0
		};
		this.player = null;
	}

	componentDidMount() {
		this.pauseBtn.style.display = "none";
		fetch("https://assets.breatheco.de/apis/sound/songs")
			.then(resp => resp.json())
			.then(songs => this.setState({ songs }));
	}

	play(index) {
		const url = this.state.songs[index].url;
		if (url)
			this.player.src = "https://assets.breatheco.de/apis/sound/" + url;
		this.player.play();
		this.playBtn.style.display = "none";
		this.pauseBtn.style.display = "inline-block";
		this.setState({ currentIndex: index });
	}
	pause() {
		this.player.pause();
		this.pauseBtn.style.display = "none";
		this.playBtn.style.display = "inline-block";
	}

	render() {
		const songs = this.state.songs.map((song, i) => {
			return (
				<div
					key={i}
					className={`track ${
						this.state.currentIndex == i ? "active" : ""
					}`}
					onClick={() => {
						this.play(i);
					}}>
					<div className="track__number">{i + 1}</div>
					<div className="track__title featured">
						<span className="title">{song.name}</span>
					</div>
				</div>
			);
		});

		return (
			<div className="player">
				<section className="content">
					<div className="tracks">{songs}</div>
				</section>
				<section className="current-track">
					<div className="current-track__actions">
						<a
							href="#"
							className="skipbackward"
							onClick={() =>
								this.play(this.state.currentIndex - 1)
							}>
							<i className="fas fa-caret-square-left" />
						</a>
						<a
							href="#"
							ref={elm => (this.playBtn = elm)}
							onClick={() => this.play()}>
							<i className="fas fa-play" />
						</a>
						<a
							href="#"
							ref={elm => (this.pauseBtn = elm)}
							onClick={() => this.pause()}>
							<i className="fas fa-pause-circle" />
						</a>
						<a
							href="#"
							className="skipforward"
							onClick={() =>
								this.play(this.state.currentIndex + 1)
							}>
							<i className="fas fa-caret-square-right" />
						</a>
					</div>
				</section>
				<audio ref={t => (this.player = t)} controls />
			</div>
		);
	}
}

// 	constructor() {
// 		super();
// 		this.state = {
// 			songs: [], //your state properties here
// 			fx: []
// 		};
// 	}
// 	componentDidMount() {
// 		fetch("https://assets.breatheco.de/apis/sound/songs")
// 			.then(response => response.json())
// 			.then(songs => this.setState({ songs }));

// 		fetch("https://assets.breatheco.de/apis/sound/fx")
// 			.then(response => response.json())
// 			.then(fx => this.setState({ fx }));
// 	}

// 	render() {
// 		return this.state.songs.map((item, index) => {
// 			return (
// 				<div key={index}>
// 					{item.id}
// 					<span className="ml-4">{item.name}</span>
// 				</div>
// 			);
// 		});
// 	}
// }

export default Song;
