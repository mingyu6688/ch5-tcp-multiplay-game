import { HANDLER_IDS } from '../constants/handlerIds.js';

const handlers = {
  [HANDLER_IDS.INITIAL]: {
    protoType: 'initial.InitialPayload',
  },
};

export const getProtoTypeNameByHandlerId = (handlerId) => {
  if (!handlers[handlerId]) {
    throw Error();
  }

  return handlers[handlerId].protoType;
};
