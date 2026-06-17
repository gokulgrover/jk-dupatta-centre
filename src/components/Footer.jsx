import {
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-white">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          {/* Company */}
          <div>

            <h2 className="text-2xl md:text-3xl font-serif">
              JK Dupatta Centre
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Discover premium quality dupattas crafted
              with elegance, tradition and modern style.
            </p>

            <div className="flex gap-4 mt-6">

              <a href="#">
                <FiFacebook size={22} />
              </a>

              <a href="#">
                <FiInstagram size={22} />
              </a>

              <a href="#">
                <FiYoutube size={22} />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-medium mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Home</li>
              <li>Shop</li>
              <li>New Arrivals</li>
              <li>Collections</li>
              <li>Track Order</li>
              <li>Contact Us</li>

            </ul>

          </div>

          {/* Categories */}
          <div>

            <h3 className="text-xl font-medium mb-5">
              Categories
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Cotton Dupatta</li>
              <li>Chiffon Dupatta</li>
              <li>Silk Dupatta</li>
              <li>Georgette Dupatta</li>
              <li>Bandhani Dupatta</li>
              <li>Printed Dupatta</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-medium mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3">
                <FiPhone className="mt-1" />
                <span>+91 98765 43210</span>
              </div>

              <div className="flex gap-3">
                <FiMail className="mt-1" />
                <span>info@jkdupatta.com</span>
              </div>

              <div className="flex gap-3">
                <FiMapPin className="mt-1" />
                <span>
                  Your Store Address,
                  Punjab, India
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Newsletter */}
      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <div>
              <h3 className="text-lg md:text-xl">
                Subscribe Our Newsletter
              </h3>

              <p className="text-gray-400 mt-2">
                Get updates about new collections and offers.
              </p>
            </div>

            <div className="flex w-full md:w-auto">

              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 text-white w-full md:w-80 rounded-l-lg outline-none min-w-0"
              />

              <button className="bg-[#6e4352] px-6 rounded-r-lg">
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
            © 2026 JK Dupatta Centre. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-gray-400">

            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
            <span>Refund Policy</span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;