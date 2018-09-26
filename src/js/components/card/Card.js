import React from "react";
import ReactDOM from "react-dom";
import styles from "./Card.css"

	class Card extends React.Component{
		render(){
			
			
			return(
			<div className={styles.card}>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente in fugiat rem dolore debitis similique sint vitae nam id, ab officiis molestiae tenetur nisi quasi possimus nobis aspernatur ullam odit.</p>
			</div>

			)
		}
	}



	class Cardholder extends React.Component{

		render(){
			
			const cards = new Array(9).fill(null).map((e,i)=> <Card key={i}/>);

			return(
					<div className={styles.cardholder}>
					{cards}
					</div>
				)
		}
	}

	export default Cardholder;