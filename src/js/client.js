import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar"
import Cardholder from "./components/card/Card"
import styles from "./client.css"



class Index extends React.Component{
	render(){
		return(
			<Cardholder/>
			// <React.Fragment>
			// <Navbar/>
			// <h1>baby baby ohh </h1>
			// </React.Fragment>
			)
	}
}

ReactDOM.render(<Index/>,document.getElementById("index"));