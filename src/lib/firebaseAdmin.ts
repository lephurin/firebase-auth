import admin from "firebase-admin";

let serviceAccount;
try {
  serviceAccount = require("../../file/fir-auth-ab97e-firebase-adminsdk-fbsvc-e189afe9cc.json")
} catch (error) {
  console.error('Error parsing Firebase service account:', error);
  serviceAccount = null;
}

if (!admin.apps.length) {
  if (!serviceAccount) {
    throw new Error('Firebase service account not properly configured');
  }
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const auth = admin.auth();
export default admin;
