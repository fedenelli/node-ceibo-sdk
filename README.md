# Ceibo NodeJS SDK #
Ceibo API Wrapper for NodeJS

### Usage ###
```
const Ceibo = require('node-ceibo-sdk'); // Import to project

const CeiboApi = new Ceibo('myuser', 'mykey'); // Initialize with user and key

CeiboApi.getOffer('some_dni' [, 'some_cuil']) // Get Offer for a DNI (optionally you can add a CUIL Number) 
```

### Methods ###

| Method      | Type                           | Params               |
|-------------|--------------------------------|----------------------|
| new Ceibo() | Constructor                    | user, key            |
| getOffer    | Promise                        | dni, cuit (optional) |

### How to Test ###
Test using `node test` and using the following parameters.

Params:

| -u     | User for API Authentication    |
| -k     | Key for API Authentication     |
| --dni  | DNI to check offer             |
| --cuil | (optional) CUIL to check offer |