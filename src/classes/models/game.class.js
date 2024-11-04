import { createLocationPacket } from '../../utils/notification/game.notification.js';

class Game {
  constructor(id) {
    this.id = id;
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  getUser(userId) {
    return this.users.find((user) => user.id === userId);
  }

  removeUser(socket) {
    const index = this.users.findIndex((user) => user.socket === socket);
    if (index != -1) {
      return this.users.splice(index, 1)[0];
    }
  }

  getAllLocation(userId) {
    const locationData = this.users
      .filter((user) => user.id !== userId) // 본인을 제외한 다른 유저들의 정보를 가져옴
      .map((user) => {
        // 가져온 정보로 객체를 생성
        return { id: user.id, playerId: user.playerId, x: user.x, y: user.y };
      });

    return createLocationPacket(locationData);
  }
}

export default Game;
