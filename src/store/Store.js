import {createStore} from "redux"
import Reducers from "../Reducer/Reducers"
import { applyMiddleware } from "redux"
import {thunk} from "redux-thunk"

const store=createStore(Reducers,applyMiddleware(thunk))

export default store