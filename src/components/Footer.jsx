export default function Footer() {
  return (
    <div className="footer">
      <img
        className="social-icon"
        src={`${import.meta.env.BASE_URL}Twitter Icon.png`}
        alt="Twitter"
      />
      <img
        className="social-icon"
        src={`${import.meta.env.BASE_URL}Facebook Icon.png`}
        alt="Facebook"
      />
      <img
        className="social-icon"
        src={`${import.meta.env.BASE_URL}Instagram Icon.png`}
        alt="Instagram"
      />
      <img
        className="social-icon"
        src={`${import.meta.env.BASE_URL}Linkedin Icon.png`}
        alt="LinkedIn"
      />
      <img
        className="social-icon"
        src={`${import.meta.env.BASE_URL}GitHub Icon.png`}
        alt="GitHub"
      />
    </div>
  )
}
