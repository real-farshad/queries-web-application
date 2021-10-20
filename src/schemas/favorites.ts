import Joi from "joi";

const favoriteSchema = Joi.object({
    image_url: Joi.string().min(3).max(256).required(),
    title: Joi.string().min(3).max(64).required(),
    description: Joi.string().min(3).max(32).required(),
});

export default favoriteSchema;
