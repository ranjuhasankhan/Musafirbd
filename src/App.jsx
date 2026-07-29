const cities = [
  'Dhaka',
  'Chittagong',
  'Khulna',
  'Rajshahi',
  'Sylhet',
  'Barisal',
  'Rangpur',
  'Mymensingh'
];

const programs = [
  {
    title: 'Islamic Lectures',
    description: 'Engaging talks on faith, morality, and contemporary social issues for all ages.'
  },
  {
    title: 'Community Ijtema',
    description: 'Large gatherings and study circles held across districts to strengthen community bonds.'
  },
  {
    title: 'Youth Outreach',
    description: 'Interactive programs for young people focused on leadership, Quran study, and service.'
  },
  {
    title: 'Charity & Relief',
    description: 'Ramadan iftar drives, winter support, and local relief efforts in every region.'
  }
];

function App() {
  return (
    <div className="app-shell">
      <header className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Musafir Islamic Program</span>
          <h1>Connecting hearts with Islam all over Bangladesh.</h1>
          <p>
            Join Musafir to experience community events, educational sessions, and
            spiritual support across every city and village.
          </p>
          <div className="hero-actions">
            <a href="#programs" className="button primary">Explore Programs</a>
            <a href="#contact" className="button secondary">Get Involved</a>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-card-inner">
            <p className="tag">Nationwide Reach</p>
            <h2>All eight divisions, one mission.</h2>
            <p>
              We serve Bangladesh with lectures, youth mentorship, and charity
              initiatives that respect local culture and Islamic values.
            </p>
          </div>
        </div>
      </header>

      <main>
        <section className="overview-section" id="programs">
          <div className="section-heading">
            <p className="eyebrow">Our Programs</p>
            <h2>Programs designed for every community.</h2>
          </div>
          <div className="cards-grid">
            {programs.map((item) => (
              <article key={item.title} className="program-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="locations-section">
          <div>
            <p className="eyebrow">Bangladesh Coverage</p>
            <h2>Serving communities from Dhaka to Sylhet.</h2>
            <p>
              Musafir travels across divisions to bring reliable religious education,
              outreach, and support to families, students, and neighbors.
            </p>
          </div>
          <div className="city-list">
            {cities.map((city) => (
              <span key={city} className="city-pill">{city}</span>
            ))}
          </div>
        </section>

        <section className="values-section">
          <div className="section-heading">
            <p className="eyebrow">Why Musafir?</p>
            <h2>Faith, unity, and service guided by knowledge.</h2>
          </div>
          <div className="values-grid">
            <article>
              <h3>Trusted Teachers</h3>
              <p>Experienced scholars and community leaders deliver meaningful lectures.</p>
            </article>
            <article>
              <h3>Family Friendly</h3>
              <p>Programs are suitable for children, youth, and elders in every location.</p>
            </article>
            <article>
              <h3>Local Support</h3>
              <p>We partner with mosques, madrassas, and community centers across the country.</p>
            </article>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div>
            <h2>Ready to host a Musafir event?</h2>
            <p>
              Contact us to bring the next Islamic lecture, youth gathering, or charity
              program to your community.
            </p>
            <p className="contact-info">
              WhatsApp: <a href="https://wa.me/8801317770255" target="_blank" rel="noreferrer">+880 131 777 0255</a>
            </p>
          </div>
          <div className="cta-actions">
            <a href="mailto:info@musafirbangladesh.org" className="button primary">Email Us</a>
            <a href="https://wa.me/8801317770255" target="_blank" rel="noreferrer" className="button secondary">Message on WhatsApp</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Musafir Islamic Program. Serving all over Bangladesh.</p>
      </footer>
    </div>
  );
}

export default App;
