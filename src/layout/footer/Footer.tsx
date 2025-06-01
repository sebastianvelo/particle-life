import contacts from "./common/contacts";
import FooterIcon from "./common/FooterIcon";

const Footer: React.FC = () => {
  return (
    <footer className="w-full fixed border-t border-secondary-500/20 bottom-0 bg-black/80 backdrop-blur-xl text-secondary-100 py-4 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-center">
          <a className="font-bold text-primary-100 text-xs" href="https://sebastian-velo.web.app/">
            Made with 🧉, ☕️, and ❤️
          </a>
          <div className="flex space-x-6 items-center">
            {contacts.map((link) => (<FooterIcon key={link.name} {...link} />))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
