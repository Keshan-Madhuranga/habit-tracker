const express = require('express');

const userController = require('../controllers/user');
const validator = require('../middleware/validator');
const authenticator = require('../middleware/check-auth');

const router = express.Router();

router.post(
  '/signup',
  validator(userController.validationSchemas.signupSchema),
  userController.handlers.signup
);
router.post(
  '/login',
  validator(userController.validationSchemas.loginSchema),
  userController.handlers.login
);
router.patch(
  '/profile',
  validator(userController.validationSchemas.editUserProfileSchema),
  authenticator,
  userController.handlers.editUserProfile
);
router.post(
  '/profile/delete-request',
  authenticator,
  validator(userController.validationSchemas.sendAccountDeletionRequestSchema),
  userController.handlers.sendAccountDeletionRequest
);
router.get(
  '/profile/delete-requests',
  authenticator,
  userController.handlers.getAccountDeletionRequests
);
router.delete(
  '/profile/:user_id',
  authenticator,
  validator(userController.validationSchemas.deleteAccountSchema),
  userController.handlers.deleteAccount
);

module.exports = router;
