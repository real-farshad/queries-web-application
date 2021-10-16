import Joi from "joi";

const schema = Joi.object({
    image_url: Joi.string().min(3).max(256).required(),
    title: Joi.string().min(3).max(64).required(),
    category: Joi.string().min(3).max(32).required(),
});

export default schema;
