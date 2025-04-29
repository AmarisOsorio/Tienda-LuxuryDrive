import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ iconName, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-icon">
        <img src={`/img/${iconName}`} alt={title} />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
};

export default ServiceCard;
