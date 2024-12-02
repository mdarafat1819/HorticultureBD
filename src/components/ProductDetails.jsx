import React, { useState } from "react";
import "./ProductDetails.css";

function ProductDetails() {
  // State to manage selected image
  const [selectedImage, setSelectedImage] = useState(
    "https://raw.githubusercontent.com/mdarafat1819/Storage/main/amra-plant.jpg"
  );

  // Thumbnail images
  const images = [
    "https://raw.githubusercontent.com/mdarafat1819/Storage/main/amra-plant.jpg",
    "https://raw.githubusercontent.com/mdarafat1819/Storage/main/amra-plant.jpg",
    "https://raw.githubusercontent.com/mdarafat1819/Storage/main/amra-plant.jpg",
  ];

  return (
    <div className="product-details">
      {/* Product Images */}
      <div className="image-gallery">
        {/* Main Image */}
        <img src={selectedImage} alt="Selected Product" className="main-image" />
        {/* Thumbnail Images */}
        <div className="thumbnail-images">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={selectedImage === image ? "active-thumbnail" : ""}
              onClick={() => setSelectedImage(image)} // Update main image on click
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h1>আম গাছ (ড্রাফট - আটোপলি)</h1>
        <div className="rating-stock">
          <span className="rating">⭐⭐⭐⭐⭐ (100 Reviews)</span>
          <span className="stock-status">1 in stock</span>
        </div>
        <p className="price">৳৩৫০.০০</p>

        {/* Size Options */}
        <div className="size-options">
          <span className="size-label">Size:</span>
          <button className="size-btn">Small</button>
          <button className="size-btn active">Medium</button>
          <button className="size-btn">Large</button>
        </div>

        {/* Location */}
        <p className="location">ক্যাটাগরি: ঢাকা, মিরপুর শিওরাপাড়া ঢাকা</p>

        {/* Additional Info */}
        <div className="extra-info">
          <p>ইনডোর বা আউটডোর গাছ।...</p>
          <p>৩ দিনের মধ্যে ফেরতযোগ্য। বায়ার ১০০%...</p>
        </div>

        {/* Add to Cart */}
        <button className="add-to-cart">Add to Cart</button>

        {/* Delivery Info */}
        <div className="delivery-info">
          <p>🚚 Free Delivery</p>
          <p>↩️ Return Delivery</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
