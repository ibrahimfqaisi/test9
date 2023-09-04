import React from "react";
import { FaInstagram, FaLocationArrow, FaPhone, FaVoicemail } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  // Function to split text into rows of 8 words each
  const splitTextIntoRows = (text) => {
    const words = text.split(" ");
    const rows = [];
    for (let i = 0; i < words.length; i += 8) {
      rows.push(words.slice(i, i + 8).join(" "));
    }
    return rows;
  };

  // Sample text with an italic effect
  const italicText = `
    Welcome to our Technician Agent website, your hassle-free solution for household repairs and maintenance. 
    We understand that things can break unexpectedly, and that's where we come in. 
`;
	return (
		<>
			<div id="footer" style={{ backgroundColor: "#ae7d5b" }} className="flex flex-col items-start justify-around w-full p-20 h-1/2 md:flex-row">
				<div className="p-5 ">
					<ul>
						<p className="pb-6 text-3xl font-bold">
							<span className="text-white">TECH</span>
							<span className="text-orange-400">AGENT</span>
						</p>
						<div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>

				<div className="gap-4 p-5">
					<ul>
						<p className="pb-4 text-2xl font-bold text-white-600">Contact Us</p>
						<li className="pb-2 font-semibold text-white cursor-pointer text-md hover:text-yellow-600">
							<span className="flex items-center">
								<FontAwesomeIcon icon={faPhone} className="text-2xl cursor-pointer hover:text-yellow-600" />
								<span className="ml-2">+96278954321</span>
							</span>
						</li>
						<li className="pb-2 font-semibold text-white cursor-pointer text-md hover:text-yellow-600">
							<span className="flex items-center">
								<FontAwesomeIcon icon={faEnvelope} className="text-2xl cursor-pointer hover:text-yellow-600" />
								<span className="ml-2">techagent@gmail.com</span>
							</span>
						</li>
						<li className="pb-2 font-semibold text-white cursor-pointer text-md hover:text-yellow-600">
							<span className="flex items-center">
								<FontAwesomeIcon icon={faLocationArrow} className="text-2xl cursor-pointer hover:text-yellow-600" />
								<span className="ml-2">Jordan/Amman</span>
							</span>
						</li>

					</ul>
				</div>

				<div className="p-5">
				<ul>
            <p className="pb-4 text-2xl font-bold text-white-600">About Us</p>
            {splitTextIntoRows(italicText).map((row, index) => (
              <li
                key={index}
                className="pb-2 text-white cursor-pointer font-italic text-md hover:text-yellow-600"
              >
                {row}
              </li>
            ))}
          </ul>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center p-5 text-center bg-white-500">
				<h1 className="font-semibold text-white-800">
					© 2023 All rights reserved | Build with ❤ by{" "}
					<span className="font-semibold cursor-pointer hover:text-blue-600">
						TECH AGENT{" "}
					</span>
				</h1>
			</div>
		</>
	);
}

export default Footer;