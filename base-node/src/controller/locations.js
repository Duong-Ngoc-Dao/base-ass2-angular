import mongoose from "mongoose";
import Locations from "../models/location";
import joi from "joi";
import Category from "../models/categories";
const validatelocation = joi.object({
  location: joi.string().required(), 
  img: joi.string().required(),
  mess: joi.string().required(),
  categoryId: joi.string().required()
})


export const getAll = async (req, res) => {
  const { _page = 1, _order = "asc", _limit = 9, _sort = "createAt", q = "" } = req.query
  const options = {
    page: _page,
    limit: _limit,
    sort: {
      [_sort]: _order == "desc" ? -1 : 1,
    },

  }
  const query = {};
  if (q !== "") {
    query.name = { $regex: q, $options: "i" };
  }
  try {   //find().populate('categoryId')

    const locations = await Locations.paginate(query, options)
    if (locations.length === 0) {
      return res.jon({
        message: "Ko có sản phẩm"
      })
    } else {
      return res.json(locations)
    }
  } catch (error) {
    return res.status(400).json({
      message: error
    })

  }
}

export const get = async (req, res) => {
  try {
    const locations = await Locations.findById(req.params.id).populate({ path: 'categoryId', populate: { path: 'name' } });

    if (!locations) {
      return res.jon({
        message: "Ko có sản phẩm"
      })
    } else {
      return res.json(locations)
    }
  } catch (error) {
    return res.status(400).json({
      message: error.message
    })

  }
}

export const create = async (req, res) => {
  try {
    const { error } = validatelocation.validate(req.body, { abortEarly: false })
    if (error) {
      return res.status(400).json({
        message: error.details[0].message
      })
    }
    const locations = await Locations.create(req.body)
    await Category.findByIdAndUpdate(locations.categoryId, {
      $addToSet: {
        locations: locations._id,
      },
    });
    return res.json({
      message: "Đã thêm",
      data: locations
    })

  } catch (error) {
    return res.status(400).json({
      message: error
    })

  }
}

export const update = async (req, res) => {
  try {
    const { categoryId } = req.body;
    const location = await Locations.findById(req.params.id);

    // Update new category
    await Category.findByIdAndUpdate(location.categoryId, {
      $pull: {
        locations: location._id,
      },
    });
    await Category.findByIdAndUpdate(categoryId, {

      $addToSet: {
        locations: location._id,
      },
    });


    // Remove location from old category



    const updatedLocation = await Locations.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    return res.json({
      message: "Đã update",
      data: updatedLocation,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    // Remove location from category
    const location = await Locations.findById(id);
    if (location.categoryId) {
      await Category.findByIdAndUpdate(location.categoryId, {
        $pull: {
          locations: location._id,
        },
      });
    }

    // Remove location data
    const deletedLocation = await Locations.findByIdAndDelete(id);

    return res.json({
      message: "Đã xóa",
      data: deletedLocation,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
