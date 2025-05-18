import './App.css';
import StickyNote from './components/StickyNote';
import BlogCard from './components/BlogCard';
import PolaroidCard from './components/PolaroidCard';
import SpotifyCard from './components/SpotifyCard';  // <-- import your SpotifyCard here
import blogPosts from './data/blogPosts';
import { useState } from 'react';

function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const polaroidImages = [
    {
      src: '/me.png',
      caption: 'Me'
    },
    {
      src: '/travel.png',
      caption: 'Travel'
    },
    {
      src: '/books.png',
      caption: 'Books'
    },
    {
      caption: 'Music',
      component: <SpotifyCard />
    }
  ];

  const handlePolaroidClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="background">
      <h1 className="title">Kritika's Scrapbook</h1>

      <div className="polaroid-container">
        {polaroidImages.map((item, index) => (
          <div
            key={index}
            className={`polaroid-wrapper ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handlePolaroidClick(index)}
          >
            {item.component ? (
              <PolaroidCard caption={item.caption}>{item.component}</PolaroidCard>
            ) : (
              <PolaroidCard image={item.src} caption={item.caption} />
            )}

          </div>
        ))}

      </div>
    </div>
  );
}

export default App;
