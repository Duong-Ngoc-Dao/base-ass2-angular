import joi from "joi";

export const productSchema = joi.object({
    name: joi.string().required(), 
    img: joi.string().required(),
    mess: joi.string().required(),
})