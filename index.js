const axios = require('axios');
const createHash = require('./encoding');

const API_URL = 'https://api.ceibocreditos.com.ar/calificador';

module.exports = class Ceibo {
    constructor(user, key) {
      this.user = user;
      this.key = key;
    }

    async getOffer(dni, cuil) {
        const endpoint = '/offer/get-offer';

        if (!dni) {
            throw new Error('Missing DNI');
        }

        const time = Math.floor(new Date() / 1000);
        const nonce = Math.round(Math.random() * 999999);

        const toHash = `GET+${endpoint}+${time}+${nonce}`;

        const digest = createHash(toHash, this.key);

        let path = `${API_URL}${endpoint}/?dni=${dni}`;

        const options = {
            headers: {
                Authorization: `HMAC user=${this.user},nonce=${nonce},time=${time},digest=${digest}`
            }
        };

        if (cuil) {
            path += `&cuil=${cuil}`;
        }

        try {
            const response = await axios.get(path, options);
            return response.data;
        } catch (err) {
            throw err;
        }
    }
};