import '../style/Style.css';
const Footer = () => {
    return ( 
	<footer className="has-footer-widgets">
  <div className="top-footer row">
    <div className="container">
      <div className="row">
        <div className="col-md-8 left">
          Browse through our products library!
        </div>
        <div className="col-md-4">
          <form
            name="myform"
            method="GET"
            className="woocommerce-product-search menu-search"
            action=""
          >
            <input type="hidden" defaultValue="product" name="post_type" />
            <input
              type="text"
              name="s"
              className="search-field"
              maxLength={128}
              defaultValue=""
              placeholder="Search products..."
            />
            <button type="submit" className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true" />
            </button>
            <input type="hidden" name="post_type" defaultValue="product" />
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="footer footer-copyright">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p className="copyright">
            Copyright by OurTeam. All Rights Reserved.
          </p>
        </div>
        <div className="col-md-6 payment-methods">
          <p className="copyright">Helwan University.</p>
        </div>
      </div>
    </div>
  </div>
</footer>


    );
}
export default Footer;