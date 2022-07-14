import FooterLogo from "../../img/ft-logo.png"
import "./footer.scss"

const Footer = () => {

  let devYear = 2022
  let currentYear = new Date().getFullYear()
  let output

  if (devYear < currentYear ) {
    output = `${devYear} - ${currentYear}`
  } else {
    output = currentYear
  }

  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <a href="https://archive.gov.ge/">
            <img src={FooterLogo} alt="National Archives of Georgia" className="ft-logo" />
          </a>
        </div>
        <div className="right">
            <p>&copy; {output} საქართველოს იუსტიციის სამინისტრო, საქართველოს ეროვნული არქივი</p>
            <p>კინოფოტოფონოდოკუმენტების ცენტრალური არქივი</p>
            <a href="mailto:dh@iliauni.edu.ge" className="devs">Developed @ ISU DH Lab</a>
            </div>
      </div>
    </div>
  );
};

export default Footer;
