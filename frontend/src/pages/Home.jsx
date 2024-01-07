import { Flex } from "../components/Styles/style-flex-component/Flex";
import HeroImage from "../assets/img/book.svg";
import { Button } from "../components/Styles/style-button-component/Button";
import {
  HomeContainer,
  CardContainer,
  StudentContainer,
  SectionHeading,
  StudentItem,
  PointContainer,
  GalleryContainer,
} from "./StyleComponent/Home.styled";

import education1 from "../assets/img/7495.jpg";
import education2 from "../assets/img/20544.jpg";
import education3 from "../assets/img/6342501.jpg";
import education4 from "../assets/img/2002.i203.022.online education distant learning cartoon.jpg";
import education5 from "../assets/img/6763.jpg";
import education6 from "../assets/img/2995663.jpg";
import educationStudentVector from "../assets/img/learning.svg";
import svgDesign from "../assets/img/bg2.svg";
import gallery1 from "../assets/img/gallery1.jpg";
import gallery2 from "../assets/img/gallery2.jpg";
import gallery3 from "../assets/img/gallery3.jpg";
import Footer from "../components/Layout/Footer";

const Home = () => {
  const cardData = [
    {
      heading: "Microsoft Office Suite",
      paragraph: ` Courses on Microsoft Word, Excel, PowerPoint, and other Office applications can be found on platforms like Microsoft's official training website, LinkedIn Learning, Udemy, or Coursera.`,
      color: "a",
    },
    {
      heading: "Web Development",
      paragraph: `Learn HTML, CSS, and JavaScript for front-end development or explore back-end technologies like Node.js or PHP. Check out platforms like Udemy, Coursera, and The Odin Project.`,
      color: "b",
    },
    {
      heading: "Data Analysis",
      paragraph: `Learn data analysis and visualization tools like Excel, Tableau, or Python libraries like Pandas and Matplotlib through courses on Coursera, Udacity, or DataCamp.`,
      color: "c",
    },
    {
      heading: "Graphic Design",
      paragraph: `Learn graphic design skills using tools like Adobe Photoshop, Illustrator, or InDesign through courses on Udemy, Skillshare, or Adobe's official tutorials.`,
      color: "d",
    },
    {
      heading: "Cloud Computing",
      paragraph: `Explore cloud platforms like Amazon Web Services (AWS), Microsoft Azure, or Google Cloud through their official training resources or platforms like Udemy and Coursera.`,
      color: "e",
    },
    {
      heading: "Data Science",
      paragraph: ` Learn data science concepts, machine learning, and data analysis using Python or R on platforms like Coursera, Udacity, or DataCamp.`,
      color: "f",
    },
  ];

  const studentData = [
    {
      heading: "welcome to pk",
      paragraph: `Diverse methods, curiosity, persistence, and reflection accelerate growth. Embrace challenges and learn from failures.`,
      image: education1,
    },
    {
      heading: "welcome to pk",
      paragraph: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro
    dolore tempore quo voluptatem neque atque molestiae quasi at
    sequi!`,
      image: education2,
    },
    {
      heading: "welcome to pk",
      paragraph: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro
    dolore tempore quo voluptatem neque atque molestiae quasi at
    sequi!`,
      image: education3,
    },
    {
      heading: "welcome to pk",
      paragraph: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro
    dolore tempore quo voluptatem neque atque molestiae quasi at
    sequi!`,
      image: education4,
    },
    {
      heading: "welcome to pk",
      paragraph: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro
    dolore tempore quo voluptatem neque atque molestiae quasi at
    sequi!`,
      image: education5,
    },
    {
      heading: "welcome to pk",
      paragraph: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro
    dolore tempore quo voluptatem neque atque molestiae quasi at
    sequi!`,
      image: education6,
    },
  ];

  const galleryData = [
    {
      heading: "Enjoyment",
      paragraph: `Coding enjoyment is a precious thrill of creative problem-solving, seeing code in action, and the endless possibilities it offers for growth.`,
      image: gallery1,
    },
    {
      heading: "Creative",
      paragraph: `The joy of coding lies in the creative exploration, problem-solving, and witnessing code transform into functional wonders, making it truly precious.`,
      image: gallery2,
    },
    {
      heading: "welcome pk",
      paragraph: `Coding enjoyment is a precious blend of creativity and problem-solving, where seeing code transform into functional solutions brings satisfaction and inspiration.`,
      image: gallery3,
    },
  ];

  return (
    <Flex>
      {/* Hero Section */}
      <HomeContainer>
        <div className="leftSide">
          <h3>Welcome to</h3>
          <h1>Harvard University</h1>
          <p>
            The concept of the best school can be subjective and depends on
            various factors such as individual needs, preferences, and goals.
            What may be considered the best school for one person might not
            necessarily be the best for another. However, I can outline some
            characteristics that are often associated with top-performing and
            highly-regarded schools:
          </p>
          <Button>Learn more</Button>
        </div>
        <div className="rightSide">
          <img src={HeroImage} />
        </div>
      </HomeContainer>

      {/* Card Section */}
      <CardContainer>
        {cardData.map((item, index) => {
          return (
            <div key={index} className={`item ${item.color}`}>
              <h1>{item.heading}</h1>
              <div className="line"></div>
              <p>{item.paragraph}</p>
            </div>
          );
        })}
      </CardContainer>

      {/* Student Education Section */}
      <StudentContainer>
        <SectionHeading>
          <h1>Our Education </h1>
        </SectionHeading>

        {studentData.map((item, index) => {
          return (
            <StudentItem
              key={index}
              className="item"
              id={index % 2 === 0 ? "row" : "row-reverse"}
              textalign={index % 2 === 0 ? "flex-start" : "flex-end"}
              boxshadow={index % 2 === 0 ? "-50px" : "50px"}
            >
              <div className="leftSide">
                <img src={item.image} />
              </div>
              <div className="rightSide">
                <h1>{item.heading}</h1>
                <p>{item.paragraph}</p>
                <Button>Learn more</Button>
              </div>
            </StudentItem>
          );
        })}
      </StudentContainer>

      {/* Point Section */}
      <PointContainer>
        <div>
          <SectionHeading>
            <h1>Our Rules </h1>
          </SectionHeading>
        </div>

        <div className="galleryContoller">
          <div className="leftSide">
            <div className="imgBox">
              <img src={educationStudentVector} />
            </div>
          </div>

          <div className="rightSide">
            <div className="item">
              <h1>Challenges</h1>
              <p>
                Diverse methods, curiosity, persistence, and reflection
                accelerate growth. Embrace challenges and learn from failures.
              </p>
            </div>
            <div className="item">
              <h1>Improvement</h1>
              <p>
                Active participation, engaging activities, expert guidance, and
                reflective assessments can improve learning experiences.
              </p>
            </div>
            <div className="item">
              <h1>Libraries</h1>
              <p>
                Libraries for programming offer coding resources, books, online
                tutorials, and a collaborative space for programmers to learn
                and grow together.
              </p>
            </div>
          </div>
        </div>
      </PointContainer>

      {/* Gallery Section */}
      <GalleryContainer>
        <div>
          <SectionHeading>
            <h1>Our Environment </h1>
          </SectionHeading>
        </div>

        <div className="galleryBox">
          <img src={svgDesign} />

          <div className="galleryContent">
            <div className="content">
              {galleryData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="item"
                    style={{
                      flexDirection:
                        index % 2 === 0 ? "column" : "column-reverse",
                    }}
                  >
                    <div className="img">
                      <img src={item.image} />
                    </div>

                    <div className="detail">
                      <h1>{item.heading}</h1>
                      <p>{item.paragraph}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </GalleryContainer>

      {/* Footer Section */}
      <Footer />
    </Flex>
  );
};

export default Home;
