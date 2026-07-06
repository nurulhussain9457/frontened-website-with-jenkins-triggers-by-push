import React from "react";
import {
  FaMobileAlt,
  FaLaptop,
  FaHeadphones,
  FaClock,
  FaShoppingCart,
} from "react-icons/fa";

function App() {
  const products = [
    {
      id: 1,
      title: "Smart Phone",
      price: 15999,
      icon: <FaMobileAlt size={40} className="text-primary" />,
    },
    {
      id: 2,
      title: "Laptop",
      price: 45999,
      icon: <FaLaptop size={40} className="text-success" />,
    },
    {
      id: 3,
      title: "Headphones",
      price: 1999,
      icon: <FaHeadphones size={40} className="text-danger" />,
    },
    {
      id: 4,
      title: "Smart Watch",
      price: 2999,
      icon: <FaClock size={40} className="text-warning" />,
    },
  ];

  return (
    <div>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            MyShop
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar End */}

      {/* Hero Section */}
      <div className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="fw-bold">Welcome to MyShop</h1>
          <p className="text-muted">
            Simple React + Bootstrap frontend with dummy product cards
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Our Products</h2>

        <div className="row g-4">
          {products.map((item) => (
            <div className="col-md-3 col-sm-6" key={item.id}>
              <div className="card shadow-sm h-100 text-center p-3">
                <div className="mb-3">{item.icon}</div>
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text fs-5 fw-bold text-success">
                  ₹ {item.price}
                </p>
                <button className="btn btn-dark w-100">
                  <FaShoppingCart className="me-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">© 2026 MyShop. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
