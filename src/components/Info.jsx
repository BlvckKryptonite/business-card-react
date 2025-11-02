export default function Info() {
  return (
    <div className="info-container">
      <img
        className="dp"
        src={`${import.meta.env.BASE_URL}dp2.jpg`}
        alt="Candidate's display picture"
      />
      <h1 className="name">Muma Kalobwe</h1>
      <h2 className="title">Front-End Developer</h2>
      <p className="website">
        <a
          className="link"
          href="https://muma-the-developer.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mumathedeveloper.com
        </a>
      </p>
      <button className="email-btn">
        <img src={`${import.meta.env.BASE_URL}Mail@2x.png`} alt="Email icon" />
        Email
      </button>
    </div>
  );
}
