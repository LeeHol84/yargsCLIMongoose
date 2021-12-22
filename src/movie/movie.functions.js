const Movie = require("./movie.model");
const mongoose = require("mongoose");

exports.addMovie = async (movieObj) => {
  try {
    const newMovie = new Movie(movieObj);
    await newMovie.save();
    console.log(`You have added ${movieObj.title} to the Movie database`)
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
    mongoose.disconnect();
  }
};
exports.updateMovie = async (movieObj) => {
  try {
    await Movie.updateOne(movieObj);
    console.log(`You have updated ${movieObj.title} in the Movie database`)
    mongoose.disconnect()
  } catch (error) {
    console.log(error);
    mongoose.disconnect();
  }
};

exports.listMovie = async() => {
  try {
    const list = await Movie.find({})
    console.log(list)
    mongoose.disconnect()
  } catch (error) {
    console.log(error);
    mongoose.disconnect();
  }
}

exports.deleteMovie = async(movieObj) => {
  try {
    
    await Movie.deleteOne(movieObj)
    console.log(`You have successfully deleted ${movieObj.title} from the Movie database`)
    mongoose.disconnect()
  } catch (error) {
    console.log(error);
    mongoose.disconnect();
  }
}
