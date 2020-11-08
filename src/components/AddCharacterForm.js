import React from "react";

class AddCharacterForm extends React.Component {
  state = {
    status: "",
    image: "",
    name: "",
  };

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    console.log("name", name);
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form
        onSubmit={(event) => this.props.addCharacterFunction(event, this.state)}
      >
        <div class="form-group">
          <label for="formGroupExampleInput">Status</label>
          <input
            className="form-control"
            name="status"
            type="text"
            placeholder="status"
            onChange={this.handleChange}
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">Image</label>
          <input
            className="form-control"
            name="image"
            type="text"
            placeholder="image"
            onChange={this.handleChange}
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">Name</label>
          <input
            className="form-control"
            name="name"
            type="text"
            placeholder="name"
            onChange={this.handleChange}
          />
        </div>
        <div className="text-center">
          <button className="btn btn-primary mt-3" type="submit">
            Add Character
          </button>
        </div>
      </form>
    );
  }
}

export default AddCharacterForm;
