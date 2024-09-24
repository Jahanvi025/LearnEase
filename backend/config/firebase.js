import admin from 'firebase-admin';

import serviceAccout from './olms-9f450-firebase-adminsdk-b3gvs-8b9640d480.json' assert {type: "json"};


admin.initializeApp({
    credential: admin.credential.cert(serviceAccout),
    storageBucket: "gs://olms-9f450.appspot.com"
})

const bucket = admin.storage().bucket();
export default bucket;