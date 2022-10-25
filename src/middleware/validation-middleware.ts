import { body } from 'express-validator'
import HttpStatus from 'http-status-codes'
import { NextApiRequest, NextApiResponse } from 'next'

export const emailValidation = body('email').isEmail()

export const handleValidationError = (
  _: NextApiRequest,
  res: NextApiResponse
) => {
  res.status(HttpStatus.BAD_REQUEST).json({ message: 'validation error' })
}
