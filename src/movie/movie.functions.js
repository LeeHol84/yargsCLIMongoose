const Movie = require("./movie.model");
const mongoose = require("mongoose");

exports.addMovie = async (movieObj) => {
  try {
    const newMovie = new Movie(movieObj);
    await newMovie.save();
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};
exports.updateMovie = async (movieObj) => {
  try {
    const updateMovie = new Movie(movieObj);
    await updateMovie.findByIdAndUpdate({});
    await updateMovie.save();
    mongoose.disconnect()
  } catch (error) {
    console.log(error);
  }
};

exports.listMovie = async(movieObj) => {
  try {
    const listMovie = new Movie(movieObj);
    await listMovie.find({})
    await listMovie.save()
    mongoose.disconnect()
  } catch (error) {
    console.log(error);
  }
}

exports.deleteMovie = async(movieObj) => {
  try {
    const deleteMovie = new Movie(movieObj);
    await deleteMovie.findByIdAndRemove({})
    await deleteMovie.save()
    mongoose.disconnect()
  } catch (error) {
    console.log(error);
  }
}
