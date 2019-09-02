import React from "react";
import PropTypes from "prop-types";

const PlayerStatsView = ({ title, stats, statsToShow }) => {
  return (
    <div className="player-stats">
      <div className="player-stats_head">
        <h3>{title}</h3>
      </div>
      <div className="player-stats_body">
        {statsToShow.map(state => (
          <div key={state} className="player-stats_row">
            <span className="text-capitalize">{state}</span>
            <span className="font-weight-bold">{stats[state]}</span>
          </div>
        ))}
      </div>
    </div>
  )
};

PlayerStatsView.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  statsToShow: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PlayerStatsView;