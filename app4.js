const Item = ({ content }) => (
	<div>
		<h3>Name: {content.name}</h3>
		<p>Info about user:</p>
		<p>
			Age: <strong>{content.age}</strong>
		</p>
		<p>Gender: {content.sex}</p>
	</div>
)
const data = {
	users: [
		{ id: 1, age: 35, name: "Kris", sex: "male" },
		{ id: 2, age: 22, name: "Ada", sex: "female" },
		{ id: 3, age: 12, name: "Aga", sex: "female" },
		{ id: 4, age: 37, name: "Damian", sex: "male" },
		{ id: 5, age: 42, name: "Dawid", sex: "male" },
	],
}
class ListItem extends React.Component {
	state = {
		select: "all",
	}
	handleUsersFilter(option) {
		this.setState({
			select: option,
		})
	}
	usersList = () => {
		let users = this.props.data.users
		switch (this.state.select) {
			case "all":
				return users.map(user => <Item key={user.id} content={user} />)
			case "female":
				users = users.filter(user => user.sex === "female")
				return users.map(user => <Item key={user.id} content={user} />)
			case "male":
				users = users.filter(user => user.sex === "male")
				return users.map(user => <Item key={user.id} content={user} />)
			default:
				return "Something went wrong."
		}
	}

	render() {
		return (
			<>
				<div>
					<button onClick={this.handleUsersFilter.bind(this, "all")}>
						Pokaż wszystkich
					</button>
					<button onClick={this.handleUsersFilter.bind(this, "female")}>
						Pokaż kobiety
					</button>
					<button onClick={this.handleUsersFilter.bind(this, "male")}>
						Pokaż mężczyzn
					</button>
					{this.usersList()} 
				</div>
			</>
		)
	}
}
ReactDOM.render(<ListItem data={data} />, document.getElementById("root"))
