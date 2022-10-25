import nextConnect from 'next-connect'
import {
  emailValidation,
  handleValidationError,
} from '~/middleware/validation-middleware'

export const middleware = nextConnect()

middleware.use(emailValidation)
middleware.use(handleValidationError)
