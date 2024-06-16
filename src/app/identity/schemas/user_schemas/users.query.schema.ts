import * as Joi from 'joi';

export const UserQuerySchema: Joi.ObjectSchema = Joi.object({
    username: Joi.string().allow('').max(50),
    id: Joi.string().allow('')
}).options({
    abortEarly: false
});
