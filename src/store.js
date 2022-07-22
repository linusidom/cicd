import {configureStore} from '@reduxjs/toolkit'
import robotReducer from './RobotStore'


export const store = configureStore({
    reducer: {
        robots: robotReducer
    }}
)

