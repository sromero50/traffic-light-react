import React, { useState, useEffect } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	const interval = setInterval(function() {
		if (color === "red") {
			setColor("yellow");
		} else if (color === "yellow") {
			setColor("green");
		} else if (color === "green") {
			setColor("red");
		}
	}, 3000);

	useEffect(() => {
		return () => {
			clearInterval(interval);
		};
	});

	return (
		<div className="container-fluid">
			<div className="line"></div>
			<div className="traffic">
				<div
					className={"red light" + (color === "red" ? " redOn" : "")}
					onClick={() => setColor("red")}></div>
				<div
					className={
						"yellow light" + (color === "yellow" ? " yellowOn" : "")
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						"green light" + (color === "green" ? " greenOn" : "")
					}
					onClick={() => setColor("green")}></div>
			</div>
		</div>
	);

	// Metodo viejo
	// const lightsOn = () => {
	// 	document.querySelector(".red").addEventListener("click", e => {
	// 		setColor("red");
	// 		console.log(color);
	// 	});
	// 	document.querySelector(".yellow").addEventListener("click", e => {
	// 		setColor("yellow");
	// 		console.log(color);
	// 	});
	// 	document.querySelector(".green").addEventListener("click", e => {
	// 		setColor("green");
	// 		console.log(color);
	// 	});

	// 	if (color === "red") {
	// 		document.querySelector(".red").classList.add("redOn");
	// 		document.querySelector(".yellow").classList.remove("yellowOn");
	// 		document.querySelector(".green").classList.remove("greenOn");
	// 	} else if (color === "yellow") {
	// 		document.querySelector(".yellow").classList.add("yellowOn");
	// 		document.querySelector(".red").classList.remove("redOn");
	// 		document.querySelector(".green").classList.remove("greenOn");
	// 	} else if (color === "green") {
	// 		document.querySelector(".green").classList.add("greenOn");
	// 		document.querySelector(".red").classList.remove("redOn");
	// 		document.querySelector(".yellow").classList.remove("yellowOn");
	// 	}
	// };

	// const interval = setInterval(function() {
	// 	if (color === "red") {
	// 		setColor("yellow");
	// 		document.querySelector(".yellow").classList.add("yellowOn");
	// 		document.querySelector(".red").classList.remove("redOn");
	// 		document.querySelector(".green").classList.remove("greenOn");
	// 	} else if (color === "yellow") {
	// 		setColor("green");
	// 		document.querySelector(".green").classList.add("greenOn");
	// 		document.querySelector(".red").classList.remove("redOn");
	// 		document.querySelector(".yellow").classList.remove("yellowOn");
	// 	} else if (color === "green") {
	// 		setColor("red");
	// 		document.querySelector(".red").classList.add("redOn");
	// 		document.querySelector(".yellow").classList.remove("yellowOn");
	// 		document.querySelector(".green").classList.remove("greenOn");
	// 	}
	// }, 3000);

	// return (
	// 	<div className="container-fluid">
	// 		<div className="line"></div>
	// 		<div className="traffic">
	// 			<div className="red light" onClick={lightsOn}></div>
	// 			<div className="yellow light" onClick={lightsOn}></div>
	// 			<div className="green light" onClick={lightsOn}></div>
	// 		</div>
	// 	</div>
	// );
};

export default Home;
