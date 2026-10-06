import React, { useState } from 'react';
import { roomPresets, enrichedProducts } from '../data/ariscaData';
import { useCart } from '../context/CartContext';
import { Calculator, Sparkles, Plus, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LightingCalculator({ onNavigate }) {
  const { addToCart, openConsultModal } = useCart();

  const [selectedRoomId, setSelectedRoomId] = useState('living');
  const [areaSqFt, setAreaSqFt] = useState(250);
  const [ceilingHeight, setCeilingHeight] = useState('10'); // 9, 10, 12, 14

  const activePreset = roomPresets.find((r) => r.id === selectedRoomId) || roomPresets[0];

  // Calculation formula:
  // 1 sq ft = 0.0929 sq meters
  // Total Lumens = Area in sq m * Target Lux * (Ceiling height factor: 1.0 for <=10ft, 1.25 for 12ft, 1.5 for 14ft)
  const heightFactor = ceilingHeight === '14' ? 1.5 : ceilingHeight === '12' ? 1.25 : 1.0;
  const areaSqMeters = areaSqFt * 0.092903;
  const targetLux = activePreset.targetLux;
  const totalLumensNeeded = Math.round(areaSqMeters * targetLux * heightFactor);

  // Recommended fixture based on preset wattage (e.g., 7W = 665 lm, 12W = 1140 lm, 18W = 1710 lm)
  const lumenPerFixture = activePreset.recommendedWattage * 95;
  const fixturesCount = Math.max(2, Math.ceil(totalLumensNeeded / lumenPerFixture));

  // Find a matching product in our catalog
  const matchingProduct =
    enrichedProducts.find((p) => p.wattage === activePreset.recommendedWattage) ||
    enrichedProducts[0];

  const handleAddPackage = () => {
    addToCart(matchingProduct);
  };

  return (
    <div id="lux-calculator" className="lighting-calculator-card">
      <div className="calc-header">
        <div className="calc-title-group">
          <span className="section-badge">
            <Calculator size={14} /> Interactive Studio Tool
          </span>
          <h3>Room Lighting & Wattage Calculator</h3>
          <p>
            Estimate precise lumen requirements, recommended downlight count, and color temperature for your space.
          </p>
        </div>
      </div>

      <div className="calc-body-grid">
        {/* Controls Column */}
        <div className="calc-controls-col">
          {/* Room Type Selector */}
          <div className="calc-input-group">
            <label className="calc-label">Select Room Type:</label>
            <div className="room-pills-row">
              {roomPresets.map((room) => (
                <button
                  key={room.id}
                  className={`room-pill-btn ${room.id === selectedRoomId ? 'active' : ''}`}
                  onClick={() => setSelectedRoomId(room.id)}
                >
                  {room.name}
                </button>
              ))}
            </div>
          </div>

          {/* Area Slider */}
          <div className="calc-input-group">
            <div className="calc-slider-header">
              <label className="calc-label">Floor Area (Square Feet):</label>
              <span className="slider-value-display">{areaSqFt} sq. ft.</span>
            </div>
            <input
              type="range"
              min="100"
              max="1200"
              step="25"
              value={areaSqFt}
              onChange={(e) => setAreaSqFt(parseInt(e.target.value, 10))}
              className="calc-range-slider"
              aria-label="Floor area in square feet"
              aria-valuetext={`${areaSqFt} square feet`}
            />
            <div className="slider-ticks">
              <span>100 sq ft</span>
              <span>500 sq ft</span>
              <span>1,200 sq ft</span>
            </div>
          </div>

          {/* Ceiling Height */}
          <div className="calc-input-group">
            <label className="calc-label">Ceiling Height:</label>
            <div className="height-buttons-row">
              {[
                { val: '9', label: 'Standard (8–9 ft)' },
                { val: '10', label: 'Contemporary (10 ft)' },
                { val: '12', label: 'High Ceiling (11–12 ft)' },
                { val: '14', label: 'Grand Void (14+ ft)' }
              ].map((h) => (
                <button
                  key={h.val}
                  className={`height-btn ${ceilingHeight === h.val ? 'active' : ''}`}
                  onClick={() => setCeilingHeight(h.val)}
                >
                  {h.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="calc-results-col">
          <div className="results-box">
            <div className="results-top-metric">
              <span className="metric-tag">ENGINEERED ILLUMINATION</span>
              <div className="metric-primary-num">
                {fixturesCount} <span className="metric-unit">x LOFY {activePreset.recommendedWattage}W Fixtures</span>
              </div>
              <p className="metric-note">
                Delivers approx <strong>{totalLumensNeeded.toLocaleString()} total lumens</strong> at {targetLux} Lux standard.
              </p>
            </div>

            <div className="results-specs-list">
              <div className="result-spec-row">
                <span>Recommended CCT:</span>
                <strong>{activePreset.suggestedColorTemp}</strong>
              </div>
              <div className="result-spec-row">
                <span>Ideal Luminaire:</span>
                <strong>{matchingProduct.title}</strong>
              </div>
              <div className="result-spec-row">
                <span>Optical Glare Index:</span>
                <strong>UGR &lt; 19 (Deep Reflector)</strong>
              </div>
            </div>

            {/* Action buttons */}
            <div className="results-actions">
              <button
                className="btn btn-primary btn-block"
                onClick={handleAddPackage}
              >
                <Plus size={16} /> Add this light to your inquiry
              </button>

              <button
                className="btn btn-secondary btn-block"
                onClick={openConsultModal}
              >
                Schedule Laser Site Verification <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
