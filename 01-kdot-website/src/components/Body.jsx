import React from 'react'

const Body = () => {
  return (
    <>
       <section className="hero">
      {/* Left Side */}
      <div className="hero-left">
        <span className="vertical-text">Rapper / Music Producer.</span>

        <div className="stats">
          <div>
            <h3>+70</h3>
            <p>Singles released</p>
          </div>
          <div>
            <h3>+6</h3>
            <p>Albums released</p>
          </div>
        </div>

        <h1>K.Dot</h1>
        <p className="subtitle">— It's Kendrick Lamar aka K.Dot</p>

      </div>

      {/* Right Side */}
      <div className="hero-right">
        <img src="/images/kendrick-hero-img.jpg" alt="Portrait" />
      </div>
    </section>
    <p className="playground-link">
  <i class="ri-play-large-fill"></i> Enter the <span>K.Dot Playground</span>
</p>

    </>
  )
}

export default Body