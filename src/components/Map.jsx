import { useEffect, useRef } from 'react';
import map from '../assets/map.png';
const Map = () => {
    const ref = useRef(null);

    useEffect(() => {
        ref.current.zoomLevel(2.5);
    })

  return (
    <div>
      <img ref={ref} src={map} alt="bd-map" />
    </div>
  );
};

export default Map;