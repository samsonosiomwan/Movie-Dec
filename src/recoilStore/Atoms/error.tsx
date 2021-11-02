import { atom } from "recoil";

const errorState = atom({
  key: "errorState",
  default: {popularMovies:"",topRatedMovies:"", upComingMovies:""},
});

export default errorState;
