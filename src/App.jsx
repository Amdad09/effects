// import MyComponent from "./components/MyComponent"

import { useState } from "react";
import Example2 from "./components/Example2";

// import Fullname from "./components/Fullname";

// import { useState } from "react";
// import PlayGround from "./components/PlayGround";

// import Comments from './components/Comments';
// import Dialogue from './components/Dialogue';

// import Map from "./components/Map"

function App() {
    // const [isShow, setIsShow] = useState(false);
    const [userId, setUserId] = useState(1);
    return (
        <div>
            {/* <MyComponent /> */}
            {/* <Map/> */}
        {/* <Dialogue /> */}
            {/* <Comments commentId={1} /> */}

            {/* <button onClick={()=>setIsShow((pre)=>!pre)}>{isShow ? 'Unmount' : 'Mount'} the Component</button>
            {isShow && <hr />}
            {isShow && <PlayGround/>} */}
            {/* <Fullname/> */}

            <div>
                <button onClick={() => setUserId(userId === 1 ? 2 : 1)}>Switch to profile no {userId === 1 ? 2 : 1}</button>
                <Example2 key={userId} userId={userId}/>
            </div>
            
        </div>
    );
}

export default App;
