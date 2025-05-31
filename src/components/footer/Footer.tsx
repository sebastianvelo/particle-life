import contacts from "./common/contacts";
import FooterIcon from "./common/FooterIcon";

const Footer: React.FC = () => {
  return (
    <footer className="backdrop-blur-md hidden lg:block 2xl:sticky border-t border-secondary-500/20 bottom-0 bg-black/70 text-secondary-100 py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <a className="font-bold mb-4 md:mb-0 text-primary-100" href="https://sebastian-velo.web.app/">
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
