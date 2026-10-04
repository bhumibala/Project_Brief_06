const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-brand">Event Management System</p>
          <p className="footer-tagline">Plan moments that matter.</p>
        </div>
        <p className="footer-copyright">
          © {CURRENT_YEAR} Event Management System
        </p>
      </div>
    </footer>
  );
}

export default Footer;