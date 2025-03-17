import admin from "firebase-admin";

let serviceAccount;
try {
  serviceAccount = process.env.NEXT_PUBLIC_FIREBASE_SERVICE_ACCOUNT_KEY 
    ? JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_SERVICE_ACCOUNT_KEY)
    : null;
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
