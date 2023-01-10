import React from "react";

const Header = () => {
  const logo = (
    <img
      src="https://www.scheer-group.com/typo3conf/ext/sitepackage/Resources/Public/Images/scheer-logo.svg"
      alt="logo"
    />
  );
  return (
    <div className="header">
      {logo}
      <h3>MaxNotes</h3>
    </div>
  );
};

export default Header;
