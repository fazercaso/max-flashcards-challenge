const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Flashcards</title>
        <link rel="stylesheet" href="styles.css" />
        <script src="/js/client.js" defer />
      </head>
      <body>
        <header className="header">
          <div className="container">
            <h1 className="header__title">Flashcards</h1>
            <div className="header__list">
              <ul className="header__lists">
                <li className="header__lists-item"><a className="header__lists-links">Register</a></li>
                <li className="header__lists-item"><a className="header__lists-links">Login</a></li>
                <li className="header__lists-item"><a className="header__lists-links">Home</a></li>
              </ul>
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
};
