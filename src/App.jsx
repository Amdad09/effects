// import MyComponent from "./components/MyComponent"

import { useState } from "react";
import PlayGround from "./components/PlayGround";

// import Comments from './components/Comments';
// import Dialogue from './components/Dialogue';

// import Map from "./components/Map"

function App() {
    const [isShow, setIsShow] = useState(false);
    return (
        <div>
            {/* <MyComponent /> */}
            {/* <Map/> */}
        {/* <Dialogue /> */}
            {/* <Comments commentId={1} /> */}

            <button onClick={()=>setIsShow((pre)=>!pre)}>{isShow ? 'Unmount' : 'Mount'} the Component</button>
            {isShow && <hr />}
            {isShow && <PlayGround/>}
            
        </div>
    );
}

export default App;
