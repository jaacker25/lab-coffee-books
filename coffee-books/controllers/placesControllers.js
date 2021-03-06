const Places = require("../models/places")

/*
exports.createPlaceView=(req,res,next)=>{
  res.render("folder/create")
}*/

exports.createPlaceView=(req,res,next)=>{
  const options=['coffee shop','bookstore']
  res.render("folder/create",{options})
}

exports.placePost = async (req, res) => {
  const { name, address, latitude, longitude, placeType } = req.body
  const newPlace = {
    name,
    location: {
      address,
      coordinates: [longitude, latitude]
    },
    placeType
  }
  const { _id } = await Places.create(newPlace)
  res.redirect(`/places`)
}

exports.placesView=async (req,res)=>{
  const places=await Places.find().sort({createdAt:-1})
  res.render("folder/places",{places})
}

/*
// R in CRUD
exports.getPlaces = async(req, res) =>{
  const places = await Places.find().populate("places")
  res.render("folder/places", { places })
}


exports.createPlace = async (req, res) =>{ 
  const {name, location} =req.body;
  await Places.create ({
    name,
    location
  })
  res.redirect("/")
}

exports.updatePlacesView = async (req, res) => {
  const Places = await Places.find.ById(req.params.placesid)
  res.render("update-places")
}*/