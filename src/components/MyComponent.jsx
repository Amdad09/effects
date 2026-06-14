import { useEffect, useState } from 'react';
import VIdeoPlayer from './VIdeoPlayer';

const MyComponent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);

    const handleClick = () => {
        setCount(count + 1);
        console.log(count); //always hold previous value
    };
    useEffect(() => {
        console.log('Rendering ...');
    }, []);

    return (
        <div>
            <h3>My component</h3>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
            />
            <button onClick={handleClick}>Render {count}</button>
            <br />
            <br />
            <button onClick={() => setIsPlaying((pre) => !pre)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <VIdeoPlayer isPlaying={isPlaying}
                src={
                    'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
                }
            />
        </div>
    );
};

export default MyComponent;
