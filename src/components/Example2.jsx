import { useEffect, useState } from "react";

const Example2 = ({userId}) => {
    const [comment, setComment] = useState('');

    // useEffect(() => {
    //     setComment('');
    // }, [userId]);

  return (
    <div>
          <h2>Profile ID: {userId}</h2>
          <div>
              <input value={comment} onChange={e=> setComment(e.target.value)} />
          </div>
          <p style={{backgroundColor: "lightcyan"}}>{ comment }</p>
    </div>
  );
};

export default Example2;