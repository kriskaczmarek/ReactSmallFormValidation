const ValidationMessage = props => {
	const { txt } = props
	return <p>{txt}</p>
}
const OrderForm = props => {
	const { submit, change, isConfirmed } = props
	return (
		<form onSubmit={submit}>
			<input type='checkbox' id='age' onChange={change} checked={isConfirmed} />
			<label htmlFor='age'>Mam co najmniej 16 lat</label>
			<br />
			<button>Kup bilet</button>
		</form>
	)
}
class CinemaTicket extends React.Component {
	state = {
		isConfirmed: false,
		isFormSubmited: false,
	}
	handleCheckBoxChange = () => {
		this.setState({
			isConfirmed: !this.state.isConfirmed,
			isFormSubmited: false,
		})
	}
	displayMessage = () => {
		if (this.state.isFormSubmited) {
			if (this.state.isConfirmed) {
				return <ValidationMessage txt='Możesz obejrzec film' />
			} else {
				return (
					<ValidationMessage txt='Nie możesz obejrzec filmu, nie masz 16 lat.' />
				)
			}
		} else {
			return null
		}
	}
	handleFormSubmit = e => {
		e.preventDefault()
		if (!this.state.isFormSubmited) {
			this.setState({
				isFormSubmited: true,
			})
		}
	}
	render() {
		const { isConfirmed, isFormSubmited } = this.state
		return (
			<>
				<h1>Kup bilet na komedie roku</h1>
				<OrderForm
					change={this.handleCheckBoxChange}
					submit={this.handleFormSubmit}
					checked={isConfirmed}
				/>
				{this.displayMessage()}
			</>
		)
	}
}
ReactDOM.render(<CinemaTicket />, document.getElementById("root"))
