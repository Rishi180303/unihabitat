const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.deleteNonEduUsers = functions.auth.user.onCreate((userRecord) => {
  const email = userRecord.email;
  if (email && !email.toLowerCase().endsWith('.edu')) {
    return admin.auth().deleteUser(userRecord.uid)
      .then(() => {
        console.log(`Deleted non-.edu user: ${userRecord.uid} (${email})`);
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  }
  return null;
});
