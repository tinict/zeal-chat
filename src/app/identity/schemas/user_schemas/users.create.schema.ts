import * as Joi from 'joi';

export const UserCreateSchema: Joi.ObjectSchema = Joi.object({
    code: Joi.string().allow(''),
    description: Joi.string().allow(''),
    rec_status: Joi.number(),
    created_by: Joi.string().max(35),
    username: Joi.string().max(32),
}).options({
    abortEarly: false
});
