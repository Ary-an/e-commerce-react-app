import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div>
        <p className={classes.footerHeading}>Online Store</p>
        <a href="/" className={classes.footerLink}>
          Men Clothing
        </a>
        <a href="/" className={classes.footerLink}>
          Women Clothing
        </a>
        <a href="/" className={classes.footerLink}>
          Men Accessories
        </a>
        <a href="/" className={classes.footerLink}>
          Women Accessories
        </a>
      </div>

      <div>
        <p className={classes.footerHeading}>Helpful Links</p>
        <a href="/" className={classes.footerLink}>
          Home
        </a>
        <a href="/" className={classes.footerLink}>
          About
        </a>
        <a href="/" className={classes.footerLink}>
          Contact
        </a>
      </div>

      <div>
        <p className={classes.footerHeading}>Partners</p>
        <a href="/" className={classes.footerLink}>
          Zara
        </a>
        <a href="/" className={classes.footerLink}>
          Pantaloons
        </a>
        <a href="/" className={classes.footerLink}>
          Levis
        </a>
        <a href="/" className={classes.footerLink}>
          UCB
        </a>
        <a href="/" className={classes.footerLink}>
          + Many More
        </a>
      </div>

      <div>
        <p className={classes.footerHeading}>Address</p>
        <p href="/" className={classes.footerLink}>
          Building 101
        </p>
        <p href="/" className={classes.footerLink}>
          Central Avenue
        </p>
        <p href="/" className={classes.footerLink}>
          LA - 902722
        </p>
        <p href="/" className={classes.footerLink}>
          United States
        </p>
      </div>
    </div>
  );
};

export default Footer;
