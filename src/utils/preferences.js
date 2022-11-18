import AsyncStorage from '@react-native-community/async-storage';

export const KEYS = {
    ACCESS_TOKEN: 'ACCESS_TOKEN',

    LANGUAGE: 'language',
};

const clearAuthSession = () =>
    new Promise(async (resolve, reject) => {
        try {
            const $keys = [
                KEYS.ACCESS_TOKEN,
            ]
            await AsyncStorage.multiRemove($keys)
            resolve(true);
        } catch (error) {
            reject(error);
        }
    });

const checkAuthSession = () =>
    new Promise(async (resolve, reject) => {
        try {
            const token = await AsyncStorage.getItem(KEYS.ACCESS_TOKEN);

            if (typeof token === 'string') {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(error);
        }
    });

const getAuthSession = () =>
    new Promise(async (resolve, reject) => {
        try {
            const authSession = {};

            const accessToken = await AsyncStorage.getItem(KEYS.ACCESS_TOKEN);
            if (typeof accessToken === 'string') {
                authSession.accessToken = accessToken;
                resolve(authSession);
            } else {
                resolve(null);
            }
        } catch (error) {
            reject(error);
        }
    });

const setAuthSession = (authSession) =>
    new Promise(async (resolve, reject) => {
        try {
            await AsyncStorage.setItem(KEYS.ACCESS_TOKEN, authSession.accessToken);
            resolve(true);
        } catch (error) {
            reject(error);
        }
    });

const setLocalization = async (languageTag) => {
    try {
        await AsyncStorage.setItem(KEYS.LANGUAGE, languageTag);
    } catch (error) { }
};

const getLocalization = () =>
    new Promise(async (resolve) => {
        try {
            const languageTag = await AsyncStorage.getItem(KEYS.LANGUAGE);
            resolve(languageTag);
        } catch (error) {
            resolve(null);
        }
    });

/**
 * function that will set a value in async storage
 * @param {string} key 
 * @param {string} value 
 */
const _setItem = (key, value) =>
    new Promise(async (resolve, reject) => {
        await AsyncStorage.setItem(key, value)
            .then(() => {
                resolve(true);
            })
            .catch((err) => {
                reject(err);
            })
    })


const _getItem = (key) =>
    new Promise(async (resolve, reject) => {
        await AsyncStorage.getItem(key)
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            })
    })


export default {
    KEYS,
    clearAuthSession,
    checkAuthSession,
    setAuthSession,
    getAuthSession,
    setLocalization,
    getLocalization,
    _setItem,
    _getItem,
};
