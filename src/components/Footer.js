import { Link } from 'react-router-dom';
import footerLogo from '../assets/footer-logo.webp';

const links = [
  {
    title: 'About Us',
    items: [
      { to: '#', text: 'Our Company' },
      { to: '#', text: 'Suppliers' },
      { to: '#', text: 'Career' },
      { to: '#', text: 'Newsletter' },
      { to: '#', text: 'Customer Service' },
      { to: '#', text: 'Contact Us' },
    ],
  },
  {
    title: 'Contacts',
    items: [
      { to: 'tel:123-456-7890', text: '+1(123)456-7890' },
      { to: 'mailto:info@littlelemon.com', text: 'info@littlelemon.com' },
      { text: '123 Ford Blvd, Chicago, IL, 60618' },
    ],
  },
  {
    title: 'Availability',
    items: [
      { text: 'Tues-Thurs: 12pm-10pm' },
      { text: 'Fri-Sun: 12pm-10pm' },
      { text: 'Closed' },
    ],
  },
  {
    title: 'Socials',
    items: [
      { to: 'https://instagram.com', text: 'Instagram', external: true },
      { to: 'https://facebook.com', text: 'Facebook', external: true },
      { to: 'https://youtube.com', text: 'Youtube', external: true },
    ],
  },
];

function RenderFooterSections() {
  return (
    <>
      {links.map((category) => (
        <div key={category.title}>
          <h3>{category.title}</h3>
          <ul>
            {category.items.map((link) => (
              <li key={link.text}>
                {link.to ? (
                  <Link
                    to={link.to}
                    target={link.external ? '_blank' : '_self'}
                    aria-label={link.text}
                  >
                    {link.text}
                  </Link>
                ) : (
                  <>{link.text}</>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img src={footerLogo} alt="footer logo" height={150} width="auto" />
        </div>
        <div className="footer__details">
          <RenderFooterSections />
        </div>
      </div>
    </footer>
  );
}