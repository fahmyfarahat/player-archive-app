import React from "react";
import PropTypes from "prop-types";
import {Container, Row, Col} from "react-bootstrap";
import PlayerStatsView from "./player-stats-view";
import { STATS_SCHEMA } from "../constants";

const PlayerProfileView = ({ profile }) => {
  return (
    <section className="player-sction">
      <Container>
        <Row>
          {Object.keys(STATS_SCHEMA).map(element => (
            <Col key={element} lg="3" md="6">    
              <PlayerStatsView 
                title={element}
                stats={profile.stats}
                statsToShow={STATS_SCHEMA[element]}
              />
            </Col>
          ))}
        </Row>
    </Container>
    </section>
  )
};

PlayerProfileView.propTypes = {
  profile: PropTypes.shape({
    stats: PropTypes.object.isRequired
  }).isRequired
};

export default PlayerProfileView;