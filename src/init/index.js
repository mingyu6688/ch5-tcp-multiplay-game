import { loadProtos } from './loadProto.js';

const initServer = async () => {
  console.log('initServer called');
  await loadProtos();
};

export default initServer;
