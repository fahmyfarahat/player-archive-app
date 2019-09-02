export const API_URL = "/api";
export const ERROR_MESSAGE = "Player is not available.";
export const HTTP_HEADER_OPTIONS = { accept: "application/json" };

export const FETCH_PLAYER_REQUEST = "FETCH_PLAYER_REQUEST";
export const FETCH_PLAYER_SUCCESS = "FETCH_PLAYER_SUCCESS";
export const FETCH_PLAYER_FAILURE = "FETCH_PLAYER_FAILURE";
export const FETCH_PROFILE_REQUEST = "FETCH_PROFILE_REQUEST";
export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
export const FETCH_PROFILE_FAILURE = "FETCH_PROFILE_FAILURE";

export const STATS_SCHEMA = {
  attack : ["minutesPerGoal", "goals", "assists", "shotsOnTarget", "totalShots"],
  defense: ["blocks", "totalTackles", "tacklesWon", "interceptions", "clearances"],
  passes : ["totalPasses", "totalCrosses", "passingAccuracy", "successfulCrosses"],
  cards : ["successfulCrosses", "yellowCards", "foulsConceded"],
};