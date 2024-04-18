import React, { useState } from 'react';
import './Wallpaper.css'; // Import your CSS file

const WallpaperGallery = () => {
  // Define your image URLs here
  const images = [
    'https://th.bing.com/th/id/OIP.qhvCstOg_q8JXKoDSsQ1PAHaEK?w=306&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
    'https://th.bing.com/th/id/OIP.oHODrGl7CstgvXFmM6ujowHaEK?w=290&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
    'https://th.bing.com/th/id/OIP.TF9I4y061Q5ox34_JGhkmgHaEo?w=283&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
    'https://th.bing.com/th/id/OIP.uAhRuQFGmVmP3kNUvIFViAHaEK?w=314&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
    'https://th.bing.com/th/id/OIP.izjuJL0Er8NWjSMBdyJCOQHaEK?w=290&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
    'https://th.bing.com/th/id/OIP.2bkjl0cLOTUrD-o7Ap1dVwHaEK?w=283&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
    'https://th.bing.com/th/id/OIP.IMtratQpG10a7IXrzaoAVgHaEK?w=265&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
    'https://th.bing.com/th/id/OIP.K8ViZYp0KkOrSL8eFxEWEgHaEK?w=254&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
    'https://th.bing.com/th/id/OIP.00raGXLx_QV0BGk7sqOouAHaEK?w=271&h=180&c=7&r=0&o=5&dpr=2&pid=1.7',
    // Add more image URLs as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="wallpaper-gallery">
      <div className="grid-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Wallpaper ${index + 1}`}
            className={index === currentImageIndex ? 'wallpaper active' : 'wallpaper'}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default WallpaperGallery;
