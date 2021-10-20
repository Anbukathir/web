const express = require('express');
const router = express.Router();
const authValidation = require('../validation/auth.validation');
const authController = require('../controller/auth.controller');
const validate = require('../middelware/validate');

router.route("/register").post(validate(authValidation.register), authController.register);
router.route("/login").post(validate(authValidation.login), authController.login);
module.exports = router;

/**
 * @swagger
 * tags:
 *   name: auth
 *   description: User management and retrieval
 */
/**
 * @swagger
 *  /auth/register:
 *    post:
 *      summary: register a user
 *      description: Only admins can create other users.
 *      tags: [auth]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - Name
 *                - email
 *                - password
 *              properties:
 *                Name:
 *                  type: string
 *                email:
 *                  type: string
 *                  format: email
 *                  description: must be unique
 *                password:
 *                  type: string
 *                  format: password
 *                  minLength: 8
 *                  description: At least one number and one letter
 *
 *              example:
 *                Name: praveen
 *                email: praveen@example.com
 *                password: password1
 *      responses:
 *        "201":
 *          description: Created
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  user:
 *                    $ref: '#/components/schemas/User'
 *        "400":
 *          $ref: '#/components/responses/DuplicateEmail'
 *        "401":
 *          $ref: '#/components/responses/Unauthorized'
 *        "403":
 *          $ref: '#/components/responses/Forbidden'
 *
 *  @swagger
 *  /auth/login:
 *    post:
 *      summary: Login a user
 *      description: Only admins can create other users.
 *      tags: [auth]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - email
 *                - password
 *              properties:
 *                email:
 *                  type: string
 *                  format: email
 *                  description: must be unique
 *                password:
 *                  type: string
 *                  format: password
 *                  minLength: 8
 *                  description: At least one number and one letter
 *
 *              example:
 *                email: praveen@example.com
 *                password: password1
 *      responses:
 *        "201":
 *          description: Created
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  user:
 *                    $ref: '#/components/schemas/User'
 *        "400":
 *          $ref: '#/components/responses/DuplicateEmail'
 *        "401":
 *          $ref: '#/components/responses/Unauthorized'
 *        "403":
 *          $ref: '#/components/responses/Forbidden'
 */

