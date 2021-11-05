import {atom} from "recoil"

const favoriteMovieState = atom({
    key:"favoriteMovieState",
    default:[]
})

export default favoriteMovieState;