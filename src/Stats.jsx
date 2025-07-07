import React from 'react';

export default function Stats() {
  return (
    <div className="container d-flex flex-wrap justify-content-center gap-4 mt-4">
      <div className="card bg-dark text-white text-center" style={{ width: '16rem' }}>
        <div className="card-body">
          <h5 className="card-title fs-3">300+</h5>
          <p className="card-text">Registered Students</p>
        </div>
      </div>

      <div className="card bg-dark text-white text-center" style={{ width: '16rem' }}>
        <div className="card-body">
          <h5 className="card-title fs-3">15+</h5>
          <p className="card-text">Events Conducted</p>
        </div>
      </div>

      <div className="card bg-dark text-white text-center" style={{ width: '16rem' }}>
        <div className="card-body">
          <h5 className="card-title fs-3">25+</h5>
          <p className="card-text">Projects Published</p>
        </div>
      </div>
    </div>
  );
}
