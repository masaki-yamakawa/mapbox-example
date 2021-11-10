import React, { useEffect, useState, useRef } from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibWFzYWtpLXlhbWFrYXdhIiwiYSI6ImNrcWE3NGRsdDA3ZmQydnFzazNodmQzcDkifQ.abGf5qHeNi1yU0hdU_xElQ'

const Mapbox = () => {
  const [mapInstance, setMapInstance] = useState<mapboxgl.Map>();
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [139.77044378, 35.67832667],
      zoom: 9
    });
    setMapInstance(map);

    return () => map.remove();
  }, []);

  return (
    <div>
      <div className='map-container' ref={mapContainer} />
    </div>
  );
};

export default Mapbox;