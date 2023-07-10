// Данный файл определяет маршруты /users/me для получения и изменения данных
// текущего пользователя, применяет валидацию данных с помощью промежуточных
// обработчиков и вызывает соответствующие контроллеры для обработки запросов.

const userRouter = require('express').Router();

const {
  fetchCurrentUser, modifyUserProfile,
} = require('../controllers/users');

const { fetchCurrentUserValidator, modifyUserProfileValidator } = require('../middlewares/validation');

userRouter.get('/users/me', fetchCurrentUserValidator, fetchCurrentUser);
userRouter.patch('/users/me', modifyUserProfileValidator, modifyUserProfile);

module.exports = userRouter;
