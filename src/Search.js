import { useState } from "react"
import { useDispatch } from "react-redux"
import { robotSliceActions } from "./RobotStore"

export const Search = () => {
    const [text, setText] = useState('')
    
    const dispatch = useDispatch()

    const onSearchChange = (e) => {
        
        dispatch(robotSliceActions.searchRobots(e.target.value))
        setText(e.target.value)


    }

    return(
        <div className="form">
            <form>
                <input placeholder="Search Field" value={text} onChange={onSearchChange}/>
            </form>
            
            
        </div>    

    )
}