import React from "react";


class AddCharacterForm extends React.Component {
    state = {
        status: '',
        image: '',
        name: ''
    }

    handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        console.log('name', name)
        this.setState({ [name]: value })
    }

    render () {
        return (
            <form onSubmit={(event) => this.props.addCharacterFunction(event, this.state)}>
                <input name="status" type="text" placeholder="status" onChange={this.handleChange}/>
                <input name="image" type="text" placeholder="image" onChange={this.handleChange}/>
                <input name="name" type="text" placeholder="name" onChange={this.handleChange}/>
                <button type="submit">Add Character</button>
            </form>
        )
    }
}

export default AddCharacterForm;