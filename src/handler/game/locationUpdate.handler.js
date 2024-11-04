import { getGameSession } from '../../sessions/game.session.js';

export const locationUpdateHandler = ({ socket, userId, payload }) => {
  try {
    const { x, y } = payload;
    const gameSession = getGameSession();

    if (!gameSession) {
      console.error('Game session not found');
    }

    // console.log(gameSession);

    const user = gameSession.getUser(userId);
    if (!user) {
      console.error('User not found in the game session');
    }

    user.updatePosition(x, y);

    const locationData = gameSession.getAllLocation(userId);
    // 바이트로 직렬화가 필요

    socket.write(locationData);
  } catch (e) {
    console.error(e);
  }
};

export default locationUpdateHandler;
