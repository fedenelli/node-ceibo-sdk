const Ceibo = require('./index');

const test = async () =>{
    const myArgs = process.argv.slice(2);

    let user, key, dni, cuil;

    if (myArgs.length === 0) {
        console.log('Usage: node test -u $USER -k $KEY --dni $DNI [--cuil $CUIL]');
        return -1;
    }

    myArgs.forEach((item, i) => {
        switch (item) {
            case '--dni':
                dni = myArgs[i + 1];
                break;
            case '-u':
                user = myArgs[i + 1];
                break;
            case '-k':
                key = myArgs[i + 1];
                break;
            case '--cuil':
                cuil = myArgs[i + 1];
                break;
            default:
                break;
        }
    })

    if (!dni || !user || !key) {
        console.log('Usage: node test -u $USER -k $KEY --dni $DNI [--cuil $CUIL]');
        return -1;
    }

    console.log('Making Request - Please wait...');

    const ApiCeibo = new Ceibo(user, key);
    try {
        const response = await ApiCeibo.getOffer(dni, cuil);
        console.log('--- SERVER RESPONSE ---');
        console.log(response);
        console.log('--- PROCESS ENDED ---');
        return 1;
    } catch (err) {
        console.log('--- REQUEST ERROR ---');
        console.log(err);
        console.log('--- PROCESS ENDED ---');
        return -1;
    }
};

test();