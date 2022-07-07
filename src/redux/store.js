import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "@redux-saga/core"
import logger from "redux-logger"

import rootReducer from "./root-reducer"
import { todos } from "./app.saga"

//root reducer
//saga file

const sagaMiddleware = createSagaMiddleware()
const middlewares = [logger, sagaMiddleware]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(todos)
export default store
