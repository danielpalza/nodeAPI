import { hashSync } from 'bcrypt'

export default (req, res, next) => {
    req.body.password = hashSync(req.body.password, 10)
    return next()
}