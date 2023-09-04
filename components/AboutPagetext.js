import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../styles/about.module.css';
import cardStyles from '../styles/cardStyles.module.css';

const AboutPagetext = () => {
    const carddetail = [
        {
            name: 'electrician',
            major: 'An Electrician is a skilled professional who installs, maintains, and repairs electrical systems in buildings and structures. They execute wiring plans, install fixtures and equipment, and ensure safety compliance. Electricians have expertise in various electrical systems, tools, and safety regulations.',
            image: 'https://img.freepik.com/free-photo/man-electrical-technician-working-switchboard-with-fuses_169016-24805.jpg?w=996&t=st=1693757797~exp=1693758397~hmac=4f0fbcc6eb7514072c7c422f7fbc5339790dd5aba466ecae5018f1607898bf4d',
        },
        {
            name: 'mechanical',
            major: 'Designing and developing prototypes. Analyzing and testing prototypes and each revision of a device. Supervising the development of computer-aided design (CAD) project drawings from junior team members. Developing, initiating and managing all phases of projects.',
            image: 'https://img.freepik.com/free-photo/male-mechanic-working-auto-repair-shop-car_23-2150376988.jpg?w=996&t=st=1693756373~exp=1693756973~hmac=cd930d6a8ddaf04f9abaa81963d007b1c8d4cad74bb9f0afe09b96deae311093',
        },
        {
            name: 'plumber',
            major: 'Install, repair, and maintain pipes, valves, fittings, drainage systems, and fixtures in commercial and residential structures. Collaborate with general contractors, electricians, and other construction professionals. Follow building plans and blueprints.',
            image: 'https://img.freepik.com/free-photo/household-repair-middle-aged-man-inspecting-pipe-touching-hand-sink-stylish-modern-kitchen_259150-58265.jpg?w=996&t=st=1693756440~exp=1693757040~hmac=7bd3eb2ef52837b84ea47a1bdfacc97c14f9ca44bc39e353dd0937888c6618db',
        },
        {
            name: 'painter',
            major: 'A Painter is a professional who helps prepare surfaces, mix paints for different needs, and apply them with brushes or rollers to fill in cracks or apply color on walls and other objects around a home, such as furniture pieces or doors.',
            image: 'https://img.freepik.com/free-photo/young-builder-orange-work-clothes-yellow-hardhat-standing-ladder-with-measuring-tape-hand-thoughtfully-looking-ceiling-new-flat_574295-1317.jpg?w=996&t=st=1693756613~exp=1693757213~hmac=bd215fa901ba7e51bb1389407991ec99a87ed4151b695af1d5e016d13bbc9156',
        },
        {
            name: 'Construction workers',
            major: 'The role entails a wide range of tasks, from basic to difficult to hazardous. These may include clearing and preparing a site; building scaffolds, barricades, bracing, and other structures; and operating concrete mixers, jackhammers, saws, drills, and more.',
            image: 'https://img.freepik.com/free-photo/medium-shot-engineer-offering-handshake_23-2148233736.jpg?w=900&t=st=1693757955~exp=1693758555~hmac=bdd5a3731fd4a3b1b339c995041af7a24667894fac6808d01db8b44bd1e8dd83',
        },
        {
            name: 'Carpenters',
            major: "A carpenter (colloquially known as a 'chippy') is a tradesperson who works with timber, primarily wood, wallboard and plywood. Carpenters are hired for commercial, industrial or residential projects, where they build and install foundations, frames and walls as well as fixtures and hardware as required",
            image: 'https://img.freepik.com/free-photo/carpenter-working-house_329181-9435.jpg?w=996&t=st=1693756970~exp=1693757570~hmac=0f76cd88c6e15851f85928c5905f14fc059f3c90ec5f5764b37951bf60547668',
        },
        {
            name: 'Blacksmiths',
            major: 'A blacksmith is a metalsmith who creates objects primarily from wrought iron or steel, but sometimes from other metals, by forging the metal, using tools to hammer, bend, and cut (cf. tinsmith).',
            image: 'https://img.freepik.com/free-photo/team-glassblower-forming-shaping-molten-glass_107420-74280.jpg?w=996&t=st=1693757595~exp=1693758195~hmac=4707eba4894b945e04b703d5c78b051facb6ba2ae695b1ba1f9ebec5ef424d64',
        },
        // Add more card details here...
    ];
    const customImageStyle = {
        width: '100%',
        height: 'auto',
        // objectFit: 'cover',
    };
    const customCardStyle = {
        width: '100%', // Adjust the width as per your requirements
        height: '600px', // Adjust the height as per your requirements
    };

    return (
        <div className={`${styles.container} ${styles.blueBackground}`} id='service'>

            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}
                autoPlay={true}
                interval={4000}
                transitionTime={500}
            >
                {carddetail.map((card, index) => (
          <>
 
                    <div key={index} className={`${cardStyles.card} relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30`} style={customCardStyle}>
                    <h1 className={`text-6xl font-bold text-white p-3 `}>
                               OUR SERVICES
                  </h1>
                        <figure className="pic-hover hover-scale ">
                            <a className="image-popup" href={card.image}>
                                <i className="fa fa-image btn-action btn-action-hide"></i>
                            </a>
                            <span className="bg-overlay"></span>
                            <img
                                src={card.image}
                                className={`${styles.image} transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125`}
                                alt=""
                                style={customImageStyle}
                            />
                        </figure>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">                            <h1 className="text-6xl font-bold text-white font-dmserif">{card.name}</h1>
                            <p className="mb-3 text-2xl italic text-white transition-opacity duration-300">{card.major}</p>
                        </div>
                    </div>
          </>
                ))}
            </Carousel>
        </div>
    );
};

export default AboutPagetext;
