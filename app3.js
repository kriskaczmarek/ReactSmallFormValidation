class App extends React.Component {
	state = {
		availableProducts: 7,
		shoppingCart: 1,
	}
	handleRemoveFromCart = () => {
		this.setState({
			shoppingCart: this.state.shoppingCart - 1,
		})
	}
	handleAddToCart = () => {
		this.setState({
			shoppingCart: this.state.shoppingCart + 1,
		})
	}
	handleBuy = () => {
		this.setState({
			availableProducts: this.state.availableProducts - this.state.shoppingCart,
			shoppingCart: 0,
		})
	}
	render() {
        const {shoppingCart, availableProducts} = this.state
        const style = shoppingCart === 0 ? { opacity: 0.3 } : {}
		return (
			<>
				<button
					disabled={shoppingCart ? false : true}
					onClick={this.handleRemoveFromCart}>
					-
				</button>

				<span
					className='kup'
					style={style}>
					{shoppingCart}
				</span>

				<button
					disabled={
						availableProducts === shoppingCart
							? true
							: false
					}
					onClick={this.handleAddToCart}>
					+
				</button>
				{shoppingCart > 0 && (
					<button className='kup' onClick={this.handleBuy}>
						Kup
					</button>
				)}
			</>
		)
	}
}
ReactDOM.render(<App />, document.getElementById("root"))
