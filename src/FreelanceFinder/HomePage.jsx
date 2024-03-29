import { Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";
import React from "react";
//import backgroundVideo from "./vedio/vediofile.mp4";
// import ReactPlayer from "react-player";
const HomePage = () => {
  return (
    <div>
      {/* ReactPlayer as background video */}
      {/* <ReactPlayer
        url="https://youtu.be/9uRvv6CA6sQ?si=MVewNaua5OOEaCEj"
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      /> */}
      {/*<video autoPlay loop muted id="vedo">
        <source
          src="https://youtu.be/9uRvv6CA6sQ?si=MVewNaua5OOEaCEj "
          type="video/mp4"
        ></source>
    </video>*/}
      <Typography variant="h2" style={{ color: indigo[500] }}>
        <center>Home</center>
      </Typography>

      <div className="paragraph">
        <center>
          <p>What is Freelancer?</p>
          <p>
            A freelancer is a self-employed individual who offers their services
            to clients on a project basis, rather than being permanently
            employed by a single company. Freelancers are often skilled
            professionals in various fields, such as writing, design,
            programming, or marketing. They have the flexibility to choose their
            projects, set their own schedules, and work from any location.
            Freelancing allows individuals to pursue a diverse range of
            projects, collaborate with different clients, and build a portfolio
            of work. It offers autonomy and the opportunity to balance work and
            lifestyle, making it a popular choice for those seeking flexibility
            and independence in their careers.
          </p>
        </center>
        <br></br>
        <center>
          <img
            src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/03/best-freelance-websites-1.webp"
            alt=""
          ></img>
        </center>
        <br></br>
      </div>
      <div className="paragraph">
        <center>
          <p>
            Welcome to [Your Freelance Finder Platform] - Where Talent Meets
            Opportunity!
          </p>
          <br></br>
          <p>
            Embark on a journey of limitless possibilities with [Your Freelance
            Finder Platform], your gateway to a world of unparalleled talent and
            opportunity. Unleash the power of collaboration as you navigate
            through a curated network of skilled freelancers and visionary
            clients. Our platform is more than just a marketplace; it's a
            vibrant community where innovation thrives, and dreams are turned
            into reality.
          </p>
          <br></br>
          <p>
            <center>
              <img
                style={{ width: "900px", height: "500px" }}
                src="https://media.licdn.com/dms/image/D5612AQF-kIuqrCOJKw/article-cover_image-shrink_720_1280/0/1679072915989?e=2147483647&v=beta&t=h0etWTxeXusU8LdEMHRTf6_7_M1pANqrlJjdYIWiU5U"
                alt=""
              ></img>
            </center>
          </p>
          <p>
            Discover a seamless and intuitive interface designed to simplify
            your freelance experience. Whether you're a talented professional
            searching for exciting projects or a business seeking top-tier
            expertise, [Your Freelance Finder Platform] is your compass in the
            ever-expanding landscape of freelance opportunities. With a diverse
            pool of freelancers spanning across industries, finding the perfect
            match for your project has never been this effortless.
          </p>
          <br></br>
          <p>
            At [Your Freelance Finder Platform], we prioritize transparency,
            security, and excellence. Our robust screening process ensures that
            only the best talents make it to our platform, giving you the
            confidence to build your projects with the utmost skill and
            proficiency. From graphic designers and writers to developers and
            marketing experts, our talent pool is as diverse as your project
            demands.
          </p>
          <p>
            <img
              style={{ width: "900px", height: "500px" }}
              src="https://www.investopedia.com/thmb/MSwQ4mUpjDu1BJDBSzzbx4uwobY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/freelancer.aspfinal-735c7be9a7d642eabcafa5a0117e4823.jpg"
              alt=""
            ></img>
          </p>
        </center>
      </div>
    </div>
  );
};
export default HomePage;
