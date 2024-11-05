import dbPool from '../database.js'
import USER_QUERIES from './user.queries.js'

export const findUserByDeviceId = async (deviceId) => {
    const [rows] = await dbPool.query(USER_QUERIES.findUserByDeviceId, [deviceId]);
    return rows[0];
};

export const createUser = async (deviceId) => {};

export const updateUserLogin = async (deviceId) => {};

export const updateUserLocation = async (x, y, deviceId) => {};
