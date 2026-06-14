import { useEffect, useRef } from "react";

const VIdeoPlayer = ({ src, isPlaying }) => {
    const ref = useRef(null);

    useEffect(() => {
        console.log('rendering ...');
        if (isPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }, [isPlaying])

    return (
        <div>
            <video ref={ref} src={src} loop playsInline></video>
        </div>
    );
};

export default VIdeoPlayer;