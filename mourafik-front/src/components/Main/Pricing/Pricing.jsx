import "./Pricing.css";

export default function () {
  return (
    <div className="pricing-container">
      <h1>pricing</h1>
      <p>Choose the perfect plan for your business needs</p>
      <div className="pricing-cards">
        <div className="pricing-card">
          <h2>Free</h2>
          <p>Best for personal use</p>
          <div className="pricing">
            <span className="price">$0</span>
            <span className="month">/Month</span>
          </div>
          <div className="characteristics">
            <h2>What you get:</h2>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
              <li>item 5</li>
            </ul>
          </div>
        </div>
        <div className="pricing-card">
          <h2>Free</h2>
          <p>Best for personal use</p>
          <div className="pricing">
            <span className="price">$0</span>
            <span className="month">/Month</span>
          </div>
          <div className="characteristics">
            <h2>What you get:</h2>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
              <li>item 5</li>
            </ul>
          </div>
        </div>
        <div className="pricing-card">
          <h2>Free</h2>
          <p>Best for personal use</p>
          <div className="pricing">
            <span className="price">$0</span>
            <span className="month">/Month</span>
          </div>
          <div className="characteristics">
            <h2>What you get:</h2>
            <ul>
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
              <li>item 4</li>
              <li>item 5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
