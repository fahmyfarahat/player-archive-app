export const isNotEmpty = element => {
  return Object.keys(element).length !== 0;
};

export const showPlayerView = ({ player, profile }) => {
  const playerHasNoError = !player.error;
  const playerIsActive = ("active" in player.data) && player.data.active;
  const checkPlayerAndProfileHasData = isNotEmpty(player.data) && isNotEmpty(profile.data);
  return checkPlayerAndProfileHasData && playerIsActive && playerHasNoError;
};

export const showErrorView = ({ player, profile }) => {
  const hasError = player.error || profile.error;
  const playerIsNotActive = ("active" in player.data) && !player.data.active;
  return playerIsNotActive || hasError;
};