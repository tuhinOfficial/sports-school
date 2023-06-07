import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaFacebook , FaInstagram , FaTwitter , FaGithub} from 'react-icons/fa';


const LINKS = [
  {
    title: "Links",
    items: ["Home", "Instructors", "Classes", "Dashboard"],
  },
  {
    title: "Contacts",
    items: ["01834-245438", "01886-653454"],
  },
  {
    title: "Address",
    items: ["Near By Steel Meal Bazar", "Steel Meal", "Potenga", "Bangladesh"],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div>
      <footer className="relative w-full bg-black py-4">
        <div className="mx-auto w-full max-w-7xl px-8">
          <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
            <Typography variant="h3" className="mb-6 flex items-center">
            <Link to="/" className="text-light-blue-500 font-semibold">Sports School</Link>
            </Typography>
            <div className="grid grid-cols-3 justify-between gap-4">
              {LINKS.map(({ title, items }) => (
                <ul key={title}>
                  <Typography
                    variant="small"
                    color="white"
                    className="mb-3 font-medium"
                  >
                    {title}
                  </Typography>
                  {items.map((link) => (
                    <li key={link}>
                      <Typography
                        as="a"
                        href="#"
                        color="gray"
                        className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                      >
                        {link}
                      </Typography>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-white md:mb-0"
            >
              &copy; {currentYear}{" "}
              <Link to="/">Sports School </Link>
              All Rights Reserved.
            </Typography>
            <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
              <Typography
                as="a"
                href="#"
                className="text-2xl text-light-blue-500 hover:opacity-80"
              >
                <FaFacebook></FaFacebook>
              </Typography>
              <Typography
                as="a"
                href="#"
                className="text-2xl text-light-blue-500 hover:opacity-80"
              >
                <FaInstagram></FaInstagram>
              </Typography>
              <Typography
                as="a"
                href="#"
                className="text-2xl text-light-blue-500 hover:opacity-80"
              >
                <FaGithub></FaGithub>
              </Typography>
              <Typography
                as="a"
                href="#"
                className="text-2xl text-light-blue-500 hover:opacity-80"
              >
                <FaTwitter></FaTwitter>
              </Typography>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
