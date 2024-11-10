export default function HomeSection() {
    return (
      <section id="hero-section">
        <div>
          <p>Hi there!</p>
          <h1>
            I am <span>Aqsa Bhatti</span>
          </h1>
          <p>
            I am on a journey to bring creativity and technology together to create
            engaging <br /> web experiences. As I explore the world of web
            development AI and the Metaverse <br /> I am constantly learning
            building and evolving. Here you can check out my <br />
            ongoing projects and the skills I am developing along the way.
          </p>
  
          <div>
            <button id="hire-me">
              <a href="/contact">Hire Me</a>
            </button>
  
            <button id="download">
              <a
                href="https://hackathon-1-seven-ashen.vercel.app/"
                target="_blank"
              >
                {" "}
                Download CV
              </a>
            </button>
          </div>
        </div>
  
        <div>
          <img src="images/profile image.jpg" alt="landing-img" />
        </div>
      </section>
    );
  }