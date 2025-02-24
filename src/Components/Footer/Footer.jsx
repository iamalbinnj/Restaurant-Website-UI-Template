import SocialMedia from "../SocialMedia/SocialMedia";
import FooterItems from "./FooterItems";

function Footer() {
  return (
    <>
      <footer className="container max-w-screen-2x1 mx-auto xl:px-24 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand Section */}
          <div className="flex flex-col items-start sm:items-center">
            <div className="text-3xl font-bold">
              <span className="bg-primary rounded px-2 text-white">F</span>
              <span className="text-dark"> OODI</span>
            </div>
            <p className="mt-2 text-sm">
              Savor the artistry where every dish is a culinary masterpiece
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-center md:text-left">
            <FooterItems />
          </div>
        </div>
        <div className="flex flex-row gap-80 items-center mt-10 mb-[-40px]">
          <div className="flex flex-row items-center justify-start gap-3">
            <SocialMedia />
          </div>
          <div className="">Copyright &copy; 2023 FOODI | All rights reserved</div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
