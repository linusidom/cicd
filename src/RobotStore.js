import { createSlice } from "@reduxjs/toolkit";
import {robots} from './robots'

const robotSlice = createSlice({
    name: 'robotSlice',
    initialState: {
        robots,
        filtered: robots},
    reducers:{
        loadRobots(state, action){
            return {
                ...state,
                robots: state.robots,
                filtered: state.robots
            }
        },
        searchRobots(state, action){
            const filteredRobot = robots.filter(robot => {
                return robot.name.toLowerCase().includes(action.payload.toLowerCase())
            })
            return{
                ...state,
                robots: filteredRobot,

            }


        }
    }
})

export const robotSliceActions = robotSlice.actions
export default robotSlice.reducer