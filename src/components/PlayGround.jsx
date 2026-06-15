import { useEffect, useState } from 'react';

const PlayGround = () => {
    const [text, setText] = useState('a');

    useEffect(() => {
        const onTimeOut = () => {
            console.log('⏰ ' + text);
        };
        console.log('🔵 Schedule "' + text + '" log');

        const timeoutId = setTimeout(onTimeOut, 3000);

        return () => {
            console.log('🟡 Cancel "' + text + '" log');
            clearTimeout(timeoutId);
        };
    }, [text]);
    return (
        <div>
            <label htmlFor="">
                What to go: 
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                />
            </label>
            <h1>{text}</h1>
        </div>
    );
};

export default PlayGround;
