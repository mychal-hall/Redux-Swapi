import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacter } from "../actions";

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.getCharacter();
    // call our action
  }

  render() {
    return (
      <>
        {this.props.fetching && <p>Loading...</p>}
        <CharacterList characters={this.props.characters} />
        {this.props.error && <p>{this.props.error}</p>}
      </>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  error: state.charsReducer.error,
  fetching: state.charsReducer.fetching
});

export default connect(
  mapStateToProps,
  { getCharacter }
)(CharacterListView);
