import {useSelector,useDispatch} from 'react-redux'
import  {useEffect} from "react";
import {INCREMENT} from './action'

function App() {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(INCREMENT())

    },[dispatch])

    const renderPosts = () => {

        if(state.loading){

            return <div>Loading</div>
        }else{

            return (
                <div>{state.items.map((post) => (
                    <h3 key={post.id}>{post.title}</h3>
                ))}</div>
            )
        }
    }

      return (
        <div className="App">
            {renderPosts()}
        </div>
      );
}

export default App;
