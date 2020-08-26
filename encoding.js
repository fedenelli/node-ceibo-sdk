const crypto = require('crypto');

const createHash = (str, key) => {
    const hmac = crypto.createHmac('sha256', key);
    hmac.update(str);
    const hash = hmac.digest('hex');
    return hash;
};

module.exports = createHash;