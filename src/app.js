require("./db/connection");
const yargs = require("yargs");
const {
  addMovie,
  deleteMovie,
  updateMovie,
  listMovie,
} = require("./movie/movie.functions");
const mongoose = require("mongoose");

const app = async (args) => {
  try {
    if (args.addMovie) {
      const movieObj = {
        title: args.title,
        actor: args.actor,
        ratings: args.rating,
      };
      await addMovie(movieObj);
      //run add movie functionality, passing movieObj
      
    } else if (args.deleteMovie) {
      const movieObj = {
        title: args.title
      };
      await deleteMovie(movieObj);
      //run delete movie functionality, passing movieObj

    } else if (args.listMovie) {
      await listMovie();
      //run list movie functionality, passing movieObj

    } else if (args.updateMovie) {
      await updateMovie(movieObj);
      //run update movie functionality, passing movieObj

    } else {
      console.log("incorrect command");
      mongoose.disconnect();
    }
  } catch (error) {
    console.log(error);
    mongoose.disconnect();
  }
};

app(yargs.argv);