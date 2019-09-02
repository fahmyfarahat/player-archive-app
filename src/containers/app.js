import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPlayerData, fetchProfileData } from "../actions";
import { ERROR_MESSAGE } from "../constants";
import { 
  isNotEmpty,
  showErrorView, 
  showPlayerView 
} from "../utilities";
import { 
  SearchInputForm, 
  PlayerProfileView, 
  ErrorMessageView 
} from "../components";

export class App extends Component {

  handleOnSubmit = inputValue => {
    const { getPlayerData, getProfileData } = this.props;

    getPlayerData(inputValue)
      .then(() => {
        const { player } = this.props;
        if (isNotEmpty(player.data) && player.data.active) {
          getProfileData(player.data["profile-id"]);
        }
      });
  };

  render() {
    const { player, profile } = this.props;

    return (
      <div>
        <SearchInputForm
          onSubmit={this.handleOnSubmit}
          buttonText="go" 
          placeholder="Type Player's ID" 
          name="searchInput"
        />
        {showPlayerView({ player, profile }) && (<PlayerProfileView profile={profile.data} />)}
        {showErrorView({ player, profile }) && (<ErrorMessageView className="error-message" message={ERROR_MESSAGE} />)}
      </div>
    )
  }
}

const mapStateToProps = ({ player, profile }) => ({ 
  player,
  profile
 });

const mapDispatchToProps = dispatch => ({
  getPlayerData : id => dispatch(fetchPlayerData(id)),
  getProfileData : id => dispatch(fetchProfileData(id))
});

App.propTypes = {
  getPlayerData: PropTypes.func.isRequired,
  getProfileData: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  player: PropTypes.shape({
    data: PropTypes.object.isRequired,
    error: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired
  }),
};

export default connect(mapStateToProps, mapDispatchToProps)(App);