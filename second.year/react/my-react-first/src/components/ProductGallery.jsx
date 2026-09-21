import React from 'react';
import './ProductGallery.css'; // تأكد تزيد هاد الفيشي ديال الستيل

const ProductGallery = ({ addToCart }) => {
  // هادو غدي تبدل الروابط ديالهم بالروابط ديال الصور د الانستغرام ديالك
  const products = [
    {
      id: 1,
      title: "Amazigh Silver Necklace",
      price: "350 MAD",
      image: "https://placehold.co/600x600/007FFF/FFF?text=IG+Post+1", // حط رابط صورتك هنا
      description: "Authentic Amazigh craftsmanship."
    },
    {
      id: 2,
      title: "Traditional Fibula (Tazerzitt)",
      price: "450 MAD",
      image: "https://placehold.co/600x600/FFB81C/000?text=IG+Post+2", // حط رابط صورتك هنا
      description: "Handcrafted silver fibula."
    },
    {
      id: 3,
      title: "Berber Carpet Pattern Tote",
      price: "200 MAD",
      image: "https://placehold.co/600x600/E8112D/FFF?text=IG+Post+3", // حط رابط صورتك هنا
      description: "Modern tote with traditional motifs."
    },
    {
      id: 4,
      title: "Agadir Sunrise Bracelet",
      price: "150 MAD",
      image: "https://placehold.co/600x600/009639/FFF?text=IG+Post+4", // حط رابط صورتك هنا
      description: "Vibrant colors inspired by Souss."
    }
  ];

  return (
    <section className="product-gallery">
      <div className="gallery-header">
        <h2>Latest from Instagram</h2>
        <p>Discover our exclusive Amazigh collection</p>
      </div>
      
      <div className="gallery-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img src={product.image} alt={product.title} />
              <div className="overlay">
                <button 
                  className="add-btn"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="product-info">
              <h3>{product.title}</h3>
              <p className="desc">{product.description}</p>
              <span className="price">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGallery;