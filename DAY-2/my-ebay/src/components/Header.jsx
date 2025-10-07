function Header(props) {
  return (
    <>
      <section className="row">
        <section className="col-12 d-flex align-items-center px-5 py-2 border-bottom border-2 border-secondary">
          <span className="h3 w-10">{props.brandName}</span>
          <nav className="d-flex justify-content-between w-90 align-items-center">
            <ul className="list-unstyled d-flex mb-0 gap-3">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <ul className="d-flex list-unstyled mb-0 gap-3">
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Create Account</a>
              </li>
            </ul>
          </nav>
        </section>
      </section>
    </>
  );
}

export default Header;
