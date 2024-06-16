import * as Joi from 'joi';

export const UserGetSchema: Joi.ObjectSchema = Joi.object({
    id: Joi.string().required()
}).options({
    abortEarly: false
});
