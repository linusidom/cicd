import { Header } from './Header';
import {MyCard}  from './MyCard'

import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { robotSliceActions } from './RobotStore';


function App() {

  const robots = useSelector(state => state.robots.robots)
  
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(robotSliceActions.loadRobots())
  },[dispatch])


  return (
    
    <div className='main'>
      <Header/>
      
        
          {robots && robots.length > 0 ? 
            <div className="container row" >
              {robots.map(elem => {
                return(
                  <MyCard key={elem.id} id={elem.id} name={elem.name} email={elem.email}/>
                )
              })
              }
            </div>
            :
            <div className='robotError'>
              <h3 >No robots Match that description</h3>
            </div>
          }
        </div>
  );
}

export default App;
