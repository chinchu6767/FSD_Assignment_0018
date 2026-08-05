import './App.css';
import profile from './image/Snapchat-559257650.jpg';

function App() {
  return (
    <div className="container">

      {/* Hero Section */}
      <div className="hero">

        <img src={profile} alt="Profile" className="profile-img" />

        <h1>CHINCHANA K</h1>

        <h3>💻 Mobile App Developer | 🥽 AR/VR Enthusiast | 🎨 UI/UX Designer</h3>

        <p className="about">
          Passionate BCA (Hons) student at RV University with a strong interest
          in Mobile App Development, AR/VR, UI/UX Design and innovative
          technologies. I enjoy transforming creative ideas into impactful
          digital experiences.
        </p>

        {/* Creative Cards */}

        <div className="identity">

          <div className="identity-card">
            <div className="emoji">🎓</div>
            <h3>Education</h3>
            <p>BCA (Hons)<br />RV University</p>
          </div>

          <div className="identity-card">
            <div className="emoji">🚀</div>
            <h3>Passion</h3>
            <p>Building creative apps using React, Unity & AR/VR.</p>
          </div>

          <div className="identity-card">
            <div className="emoji">💡</div>
            <h3>Dream</h3>
            <p>To become an innovative Software Developer creating impactful solutions.</p>
          </div>

        </div>

      </div>

      {/* Skills */}

      <section className="section">
        <h2>🛠 Skills</h2>

        <div className="skills">
          <div className="card">📱 Mobile App Development</div>
          <div className="card">🥽 AR/VR</div>
          <div className="card">⚛ React</div>
          <div className="card">🐍 Python</div>
          <div className="card">🎮 Unity</div>
          <div className="card">🎨 Figma</div>
          <div className="card">📊 Data Analytics</div>
          <div className="card">💻 Java</div>
        </div>
      </section>

      {/* Projects */}

      <section className="section">
        <h2>🚀 Projects</h2>

        <div className="projects">

          <div className="project-card">
            <h3>📱 GrabNGo</h3>
            <p>
              Smart cafeteria ordering application developed using React Native
              to reduce waiting time.
            </p>
          </div>

          <div className="project-card">
            <h3>🍔 Chaotic Chef</h3>
            <p>
              Marker-Based AR cooking game built using Unity and Vuforia.
            </p>
          </div>

          <div className="project-card">
            <h3>🏆 Treasure Hunter</h3>
            <p>
              Interactive 3D Unity game featuring treasure collection,
              score tracking and timer.
            </p>
          </div>

        </div>
      </section>

      {/* Education */}

      <section className="section">
        <h2>🎓 Education</h2>

        <div className="edu">
          <h3>RV University</h3>
          <p>Bachelor of Computer Applications (Honours)</p>
        </div>
      </section>

      {/* Contact */}

      <section className="section">
        <h2>📞 Contact</h2>

        <div className="edu">
          <p>📧 chinchanak640@gmail.com</p>
          <p>📱 +91 9742001518</p>
          <p>🔗 linkedin.com/in/chinchana-k-2202ck</p>
        </div>

      </section>

    </div>
  );
}

export default App;
