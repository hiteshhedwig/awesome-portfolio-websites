AOS.init();



//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");


const addCVButton = () => {
  const cvButton = `
      <div style="text-align:center; margin-bottom:20px;">
          <a href="assets/CV_HITESH_KUMAR.pdf" target="_blank" rel="noopener noreferrer">
              <button style="
                  padding:10px 20px;
                  font-size:16px;
                  cursor:pointer;
                  background-color: #bb86fc; 
                  border: none;
                  border-radius: 4px;
                  color: white;
                  text-transform: uppercase; /* Makes text UPPERCASE */
                  letter-spacing: 1px; /* Spreads out letters slightly */
                  transition: 0.3s; /* Transition for hover effects */
                  box-shadow: 0 4px 6px rgba(0,0,0,0.1); /* Slight shadow */
              &:hover {
                  background-color: #45a049; /* Darker green on hover */
                  box-shadow: 0 6px 8px rgba(0,0,0,0.2); /* Slight shadow on hover */
              }
              &:active {
                  transform: scale(0.98); /* Slightly reduces size when active (clicked) */
              }">Here's my CV</button>
          </a>
      </div>
  `;
  experiencecards.insertAdjacentHTML('beforebegin', cvButton);
}


// Call the function to add the CV button to your webpage
// addCVButton();

const exp = [
  {
    title: "Deep Learning Engineer - Autonomous R&D",
    cardImage: "assets/images/experience-page/euler_motors.jpeg",
    place: "Euler Motors",
    time: "(August, 2022 - present)",
    desp: "<li>Key contributor in building real-time ADAS (Advanced Driver Assistance Systems) using pure C++; optimized for Nvidia Jetson Nano and Quectel SC600 infotainment system. Implemented forward collision warning with over 80% precision normally and over 85% precision at high speeds for commercial electric vehicles.</li><li>Built an ultralight (600kb) classification model using combined center loss and cross-entropy loss, achieving over 95% accuracy for traffic lights in the wild.</li><li>Trained and optimized lightweight object detection with mixed precision training and segmentation models; achieved over 60% and 50% model size reduction, enhancing low-latency performance.</li><li>Collaborated in building NVA (Night Vision Assist) system using low light 850 band IR camera assisted with IR booster for forward collision algorithm; improved visibility and safety on foggy nights.</li>",
  },
  {
    title: "Deep Learning Engineer - R&D",
    cardImage: "assets/images/experience-page/synergylabs_full.jpeg",
    place: "SynergyLabs",
    time: "(July, 2021 - Aug, 2022)",
    desp: "<li>Trained and customized classification & object detection models with data augmentation; achieved 14% increase in performance on IoT device.</li><li>Designed and implemented automatic number plate detection pipeline in Python to flag overspeeding vehicles for safe urban traffic monitoring.</li><li>Developed Vehicle Detection System deployed on highways; attained less than 6% speed error in detection.</li>",
  },
  {
    title: "Deep Learning Research Intern",
    cardImage: "assets/images/experience-page/synergylabs_full.jpeg",
    place: "SynergyLabs",
    time: "(Feb, 2021 - July, 2021)",
    desp: "<li>Collaborated with the founder in developing 'Automatic Traffic Counter System (ATCS)'; deployed across 300+ locations.</li><li>Curated dataset for MobilenetV2 fine-tuning; reduced model size to 2MB, achieving 30% reduction.</li><li>Developed ATCS product configuration UI with PyQT; reduced manual effort by 3x.</li>",
  },
  {
    title: "Software Head",
    cardImage: "assets/images/experience-page/inferno_dtu.jpeg",
    place: "Inferno DTU: Mars Rover Team",
    time: "(2017 - 2019)",
    desp: "<li>Led a multidisciplinary team for developing rovers for Mars Rover competitions globally. Achievements include 6th Rank in IRC (Indian Rover Challenge).</li>",
  },
];


const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
// document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
    href: "https://uplift.girlscript.tech/",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
    href: "https://ulhacks.com/",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
    href: "https://wafflehacks.org/",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
    href: "https://elevatetech.codes/",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
    href: "https://www.linkedin.com/company/pitchteen/about/",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
    href: "https://hackasolution.devpost.com/",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
    href: "https://uniglobe-hacks.devpost.com/",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
    href: "https://atlashacks2.devpost.com/",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
    href: "https://neohacks.org/",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
    href: "https://www.missioninspired.org/hackathon",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
    href: "https://hack3.co/",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
    href: "https://jithack.netlify.app/",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
    href: "https://recesshacks.com/",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
    href: "https://citro.tech/",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
    href: "https://nhacks-vi.devpost.com/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
// document.addEventListener("DOMContentLoaded", showCards3);
