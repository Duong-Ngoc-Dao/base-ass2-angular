import Product from "../models/products"
import { productSchema } from "../schema/products";

export const getAll = async (req, res) => {
    try {
const products = await Product.find()
return res.json(products)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const get = async (req, res) => {
   
    try {
        const product = await Product.findById(req.params.id)
        return res.json(product)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const create = async (req, res) => {
    try {
  const {error} = productSchema.validate(req.body,{abortEarly:false})
  if(error){
    return res.status(400).json({ message: error.details.map(err => err.message) })
  }
  const product = await Product.create(req.body)
  return res.json(product)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const update = async (req, res) => {
   
    try {
        const {error} = productSchema.validate(req.body,{abortEarly:false})
        if(error){
          return res.status(400).json({ message: error.details.map(err => err.message) })
        }
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{new: true})
        return res.json(product)

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const remove = async (req, res) => {
    try {
        const product = await Product.findByIdAndRemove(req.params.id)
        return res.json("Xóa thành công")
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}