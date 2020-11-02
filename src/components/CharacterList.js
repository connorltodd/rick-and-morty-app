import React from "react";
import axios from "axios";
import Character from "./Character";

class CharacterList extends React.Component {
    state = {
        characters: []
    }

    getCharacters = () => {
        axios.get('https://rickandmortyapi.com/api/character/')
        .then(response => this.setState({ characters : response.data.results }))
    }
    render () {
        return (
            <div>
                <button onClick={this.getCharacters}>Click Me To see some characters</button>
                {this.state.characters.map(character => (
                    <Character  {...character}  key={character.id} />
                ))}
            </div>
        )
    }
}


export default CharacterList;