class Counter extends React.Component {
	state = {
		counter: 0,
		result: 0,
	}
	handleMath = (type, number = 1) => {
		//debugger
		if (type === "add") {
			this.setState(prevState => ({
				counter: prevState.counter + 1,
				result: prevState.result + parseInt(number),
			}))
		} else if (type === "sub") {
			this.setState(prevState => ({
				counter: prevState.counter + 1,
				result: prevState.result - number,
			}))
		} else if (type === "reset") {
			this.setState(prevState => ({
				counter: prevState.counter + 1,
				result: 0,
			}))
		}
	}

	render() {
		return (
			<>
				<MathButton name='+1' type='add' number='1' click={this.handleMath} />
				<MathButton
					name='reset'
					type='reset'
					number='0'
					click={this.handleMath}
				/>
				<MathButton name='-1' type='sub' number='1' click={this.handleMath} />
				<ResultPanel counter={this.state.counter} result={this.state.result} />
			</>
		)
	}
}

const MathButton = props => {
	return (
		<button onClick={() => props.click(props.type, props.number)}>
			{props.name}
		</button>
	)
}
const ResultPanel = props => {
	return (
		<>
			<h3>
				{props.counter > 10 ? (
					<span className='red'>
						Za duzo klikasz! <br />
					</span>
				) : null}
				Liczba kliknięć: {props.counter}{" "}
			</h3>
			<h3>Wynik: {props.result}</h3>
		</>
	)
}

ReactDOM.render(<Counter />, document.getElementById("root"))
