// In this lab, you will learn the basics of JSON Web Tokens (JWT). The tasks include installing
// necessary packages, creating a JWT, decoding the payload of the JWT, and verifying the JWT. 
// Keep in mind this lab uses a Node.js 14 environment, and the necessary packages should be 
// installed using yarn add command.

//Solution:-

// In your terminal, run the following command:
//yarn add jsonwebtoken
//yarn add node-fetch

import fs from 'fs'
import jwt from 'jsonwebtoken'
console.log('JWT Lab');

const payload = {username: 'poushali'};
const secretKey = '1234';

const token = jwt.sign(payload, secretKey);
console.log('Token:', token);

const decodedPayload = jwt.decode(token);
console.log('Decoded Payload:', decodedPayload);

const verified = jwt.verify(token, secretKey);
console.log('Verified:', verified);

export { token, decodedPayload, verified };