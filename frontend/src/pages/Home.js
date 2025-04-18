import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(null);
  const navigate = useNavigate();

  const features = [
    {
      title: "Machine Learning Powered",
      description: "Advanced algorithms to predict software defects with high accuracy",
      icon: "🤖",
      image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
    },
    {
      title: "Cross-Project Analysis",
      description: "Transfer knowledge from source projects to predict defects in target projects",
      icon: "🔄",
      image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
      
    },
    {
      title: "Data Visualization",
      description: "Interactive charts and graphs to understand prediction results",
      icon: "📊",
      image: (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="100" 
          height="100" 
          fill="#667eea" 
          viewBox="0 0 16 16"
          style={{ margin: '20px' }}
        >
          <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"/>
        </svg>
      )
    }
  ];

  const handleGetStarted = () => {
    navigate('/upload');
  };

  const backgroundStyle = {
    backgroundImage: `url('https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/python.svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right -100px top -100px',
    backgroundSize: '500px',
    opacity: 0.1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 0,
  };

  const whatIsCPDPStyle = {
    background: 'linear-gradient(120deg, #1a365d 0%, #2d3748 100%)',
    position: 'relative',
  };

  const howToUseStyle = {
    background: 'linear-gradient(120deg, #2d3748 0%, #1a365d 100%)',
    position: 'relative',
  };

  return (
    <div>
      <Navbar />
      
      {/* Hero Section with Animation */}
      <div className="hero-section">
        <div className="container mt-5 position-relative">
          <div style={backgroundStyle}></div>
          <h1 className="text-center animate-fade-in">
            Cross-Project Defect Prediction (CPDP)
          </h1>
          <p className="text-center lead animate-fade-in-delay">
            Enhance your software quality with AI-powered defect prediction
          </p>
          <div className="text-center mt-4">
            <button 
              className="btn btn-light btn-lg mx-2 animate-fade-in-delay"
              onClick={handleGetStarted}
            >
              Get Started
            </button>
            <button className="btn btn-outline-light btn-lg mx-2 animate-fade-in-delay">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Feature Cards */}
      <div className="features-section">
        <div className="container mt-5">
          <div className="row">
            {features.map((feature, index) => (
              <div 
                className="col-md-4 mb-4" 
                key={index}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className={`feature-card ${activeFeature === index ? 'active' : ''}`}>
                  <div className="feature-image">
                    {typeof feature.image === 'string' ? (
                      <img src={feature.image} alt={feature.title} />
                    ) : (
                      feature.image
                    )}
                  </div>
                  <h3 className="text-center">{feature.title}</h3>
                  <p className="text-center">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info Section with Guidelines */}
      <div className="container mt-5 mb-5">
        <div className="info-card hover-lift" style={whatIsCPDPStyle}>
          <div className="card-overlay"></div>
          <div className="card-body px-4 position-relative">
            <h2 className="card-title text-white">What is CPDP?</h2>
            <p className="card-text text-white">
              Cross-Project Defect Prediction (CPDP) is a machine learning-based approach to predict software defects in a target project using knowledge transferred from other source projects.
            </p>
            <button className="btn btn-light mt-3">Learn More</button>
          </div>
        </div>

        {/* New Guidelines Section */}
        <div className="info-card hover-lift mt-4" style={howToUseStyle}>
          <div className="card-overlay"></div>
          <div className="card-body px-4 position-relative">
            <h2 className="card-title text-white">How to Use CPDP</h2>
            
            <div className="guidelines-section">
              <h4 className="mt-3">Dataset Requirements</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item px-3">
                  <i className="bi bi-file-earmark-text me-2"></i>
                  <strong>File Format:</strong> CSV files only
                </li>
                <li className="list-group-item px-3">
                  <i className="bi bi-table me-2"></i>
                  <strong>Required Data:</strong> Source code metrics and defect labels
                </li>
                <li className="list-group-item px-3">
                  <i className="bi bi-check-circle me-2"></i>
                  <strong>Data Quality:</strong> No missing values
                </li>
              </ul>

              <h4 className="mt-4">Simple Steps</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item px-3">
                  <i className="bi bi-1-circle me-2"></i>
                  <strong>Upload Data:</strong> Select your source and target project files
                </li>
                <li className="list-group-item px-3">
                  <i className="bi bi-2-circle me-2"></i>
                  <strong>Get Results:</strong> View defect predictions for your target project
                </li>
                <li className="list-group-item px-3">
                  <i className="bi bi-3-circle me-2"></i>
                  <strong>Download:</strong> Export your prediction results
                </li>
              </ul>

              <h4 className="mt-4">Output Format</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item px-3">
                  <i className="bi bi-file-earmark-spreadsheet me-2"></i>
                  <strong>Results File:</strong> CSV with defect predictions
                </li>
                <li className="list-group-item px-3">
                  <i className="bi bi-graph-up me-2"></i>
                  <strong>Visualizations:</strong> Easy-to-understand charts
                </li>
                <li className="list-group-item px-3">
                  <i className="bi bi-download me-2"></i>
                  <strong>Export Options:</strong> Download results in multiple formats
                </li>
              </ul>
            </div>

            <div className="text-center mt-4">
              <button 
                className="btn btn-primary btn-lg"
                onClick={handleGetStarted}
              >
                Start Predicting Defects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}