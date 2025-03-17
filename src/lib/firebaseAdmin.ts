import admin from "firebase-admin";

var serviceAccount = require("../../file/fir-auth-ab97e-firebase-adminsdk-fbsvc-e189afe9cc.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const auth = admin.auth();
export default admin;
