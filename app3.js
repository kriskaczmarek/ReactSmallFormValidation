class ShoppingCart extends React.Component {
	state = {
		onStock: 7,
		inCart: 0,
	}
	handleRemoveFromCart = () => {
		this.setState({
			inCart: this.state.inCart - 1,
		})
	}
	handleAddToCart = () => {
		this.setState({
			inCart: this.state.inCart + 1,
		})
	}
	handleBuyItems = () => {
		this.setState({
			onStock: this.state.onStock - this.state.inCart,
			inCart: 0,
		})
	}
	handleOnSubmit = event => {
		event.preventDefault()
	}

	render() {
		const style = this.state.onStock === 0 ? { opacity: 0.3 } : {}
		const { inCart, onStock } = this.state
		return (
			<>
				<form onSubmit={this.handleOnSubmit}>
					<button
						onClick={this.handleRemoveFromCart}
						disabled={inCart === 0 ? true : false}>
						-
					</button>
					<span className='kup' style={style}>
						{" "}
						{inCart}{" "}
					</span>
					<button
						onClick={this.handleAddToCart}
						disabled={onStock - inCart > 0 ? false : true}>
						+
					</button>
					{onStock > 0 && (
						<button className='kup' onClick={this.handleBuyItems}>
							Kup
						</button>
					)}
				</form>
			</>
		)
	}
}
ReactDOM.render(<ShoppingCart />, document.getElementById("root"))
