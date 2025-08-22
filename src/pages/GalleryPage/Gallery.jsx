import React, { useState } from 'react';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import './Gallery.css';

function Gallery() {

  const galleryItems = [
   
    {
      id: 1,
      title: "Kahala Beach Bliss",
      category: "Travel",
      image: "/Travel1.JPG",
      description: "Experience the tranquil shores of Kahala Beach in Oahu, Hawaii, USA, where crystal-clear waters and palm-lined sands create the perfect island escape."
    },
    {
      id: 2,
      title: "Brooklyn Bridge Views",
      category: "Travel",
      image: "/Travel2.JPG",
      description: "In Dumbo, Brooklyn, New York City, USA, I stood between cobblestone streets and the towering Manhattan Bridge, with the skyline peeking through like a postcard come to life."
    },
    {
      id: 3,
      title: "Volcano Trails",
      category: "Travel",
      image: "/Travel3.jpg",
      description: "Walking through Hawai’i Volcanoes National Park on the Big Island, Hawaii, USA, I could feel the heat from the earth and see where molten lava had shaped the land."
    },
    {
      id: 4,
      title: "Colorful Guanajuato",
      category: "Travel",
      image: "/Travel4.jpg",
      description: "In Guanajuato, Mexico, I wandered narrow streets painted every color imaginable, each turn revealing another slice of history and life buzzing with music and laughter."
    },

    
    {
      id: 5,
      title: "Sweet Pineapple Treat",
      category: "Food",
      image: "/Food1.JPG",
      description: "At the Dole Plantation in Oahu, Hawaii, USA, I held the biggest, juiciest pineapple I've ever seen — sweet, golden, and fresh from the island."
    },
    {
      id: 6,
      title: "Chelsea Market Oysters",
      category: "Food",
      image: "/Food2.JPG",
      description: "In New York City's Chelsea Market, USA, I enjoyed a platter of fresh oysters, squeezing lemon over each one while soaking in the lively market vibes."
    },
    {
      id: 7,
      title: "Elegant RH Brunch",
      category: "Food",
      image: "/Food3.JPG",
      description: "In Toronto, Canada, at RH's beautiful courtyard, I sat beneath olive trees, sipping coffee and savoring a perfectly plated brunch."
    },
    {
      id: 8,
      title: "Cozy Italian Dinner",
      category: "Food",
      image: "/Food4.JPG",
      description: "In Toronto, Canada, at a warm, intimate Italian restaurant, I twirled pasta and shared plates of rich, flavorful dishes that felt like a taste of Italy."
    }
  ];

  const categories = ["All", "Travel", "Food"];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handleCategoryChange = (event) => {
    setActiveCategory(event.target.value);
  };

  const handleKeyDown = (event) => {
    
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.target.focus();
    }
  };

  return (
    <div className="gallery">
      <div className="gallery-container">
        <h1 className="gallery-title">My Gallery</h1>
        <p className="gallery-description">
          Explore my personal photo collection capturing life's special moments.
        </p>

        
        <div className="category-dropdown-container">
          <label htmlFor="category-select" className="category-label">
            Filter by Category:
          </label>
          <select
            id="category-select"
            className="category-dropdown"
            value={activeCategory}
            onChange={handleCategoryChange}
            onKeyDown={handleKeyDown}
            aria-label="Select category to filter gallery"
            aria-describedby="category-description"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <div id="category-description" className="sr-only">
            Use arrow keys to navigate options, Enter to select, and Escape to close
          </div>
        </div>

        
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <GalleryCard
              key={item.id}
              title={item.title}
              category={item.category}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery; 