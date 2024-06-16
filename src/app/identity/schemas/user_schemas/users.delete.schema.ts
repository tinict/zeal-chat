import * as Joi from 'joi';

export const UserDeleteSchema: Joi.ObjectSchema = Joi.object({
    id: Joi.string().required()
}).options({
    abortEarly: false
});
