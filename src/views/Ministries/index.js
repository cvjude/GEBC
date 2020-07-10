import React from "react";
import Helmet from "react-helmet";
import Banner from "../../components/Banner";
import Image from "../../components/Image";
import large from "../../assets/ministries/bannerimg.png";
import medium from "../../assets/ministries/bannerimg-800.png";
import small from "../../assets/ministries/bannerimg-600.png";
import empty from "../../assets/ministries/empty.png";
import img1 from "../../assets/ministries/img1.png";
import img2 from "../../assets/ministries/img2.png";
import img3 from "../../assets/ministries/img3.png";
import "./style.scss";

const imgs = {
  large,
  medium,
  small,
};

const About = () => {
  return (
    <main className="min_st">
      <Helmet>
        <title>Ministries</title>
        <meta name="description" content="" />
      </Helmet>

      <Banner
        imgs={imgs}
        head="Ministries"
        sub="Here are the different arms that make up the church"
      />

      <div className="container">
        <div className="mnx_card">
          <div className="img-sec">
            <Image
              image={empty}
              alt="sunday school"
              lazyLoad={true}
              usePlaceHolder={true}
              imgClass="img contain"
            />
          </div>
          <div className="text-sec reg_text">
            <h2>Sunday School</h2>
            <p className="spaced">
              Our Sunday School consists of small group bible studies designed
              to foster close relationships, lead people to faith in Jesus
              Christ, and build Great Commission Christians through open group
              Bible study that engages people in evangelism, discipleship,
              fellowship, ministry and worship.
            </p>
            <p>
              Our Sunday School classes meet at 9:45 am on Sundays. We have
              classes for all ages and invite you to join us.
            </p>
          </div>
        </div>

        <div className="mnx_card">
          <div className="img-sec">
            <Image
              image={img1}
              alt="sunday school"
              lazyLoad={true}
              usePlaceHolder={true}
              imgClass="img contain"
            />
          </div>
          <div className="text-sec reg_text">
            <h2>Worship/Music</h2>
            <p className="spaced">
              “Let everything that has breath, Praise the Lord” Psalm 150:6
            </p>
            <p>
              Worship is our response to God’s revelation. He has wonderfully
              and beautifully revealed Himself to us through his Son and through
              his word. As we gaze upon His majesty, beauty, and holiness, our
              response to Him should be complete surrender. What a privilege and
              blessing it is that we have the opportunity to join to together
              with our brothers and sisters in Christ, with one voice, and
              proclaim that our God is worthy of our devotion, affection, and
              submission. We use the gift of music to honor Him and to hear from
              Him.
            </p>
          </div>
        </div>

        <div className="mnx_card">
          <div className="img-sec">
            <Image
              image={empty}
              alt="sunday school"
              lazyLoad={true}
              usePlaceHolder={true}
              imgClass="img contain"
            />
          </div>
          <div className="text-sec reg_text">
            <h2>Discipleship</h2>
            <p className="spaced">
              “But seek first the kingdom of God and His righteousness, and all
              these things will be added to you.” Matthew 6:33
            </p>
            <p>
              First Pursuit Discipleship courses meet on Sunday. We seek to
              provide a menu of courses ranging from doctrinal studies to
              courses on practical Christian living. Our First Pursuit classes
              meet for 12 week.
            </p>
          </div>
        </div>

        <div className="mnx_card">
          <div className="img-sec">
            <Image
              image={img2}
              alt="sunday school"
              lazyLoad={true}
              usePlaceHolder={true}
              imgClass="img contain"
            />
          </div>
          <div className="text-sec reg_text">
            <h2>Children</h2>
            <p className="theme-color spaced">Weekly Activities</p>
            <p className="spaced">
              <strong>Worship Care:</strong> Worship care is provided for
              children ages birth through Pre-K during all worship services.
              This includes the 8:30 am service, 11:00 am service and 6:00 pm
              service.
            </p>
            <p className="spaced">
              <strong>Sunday School:</strong> Sunday School classes are
              available at 9:45 am for children ages birth through 5th grade.
              Activities include age appropriate Bible lessons, scripture
              verses, crafts, games and music.
            </p>

            <p className="theme-color spaced">School Year Activities</p>
            <p className="spaced">
              Baptist Nursery and Primary School (Creche - 5th Grade) meets on
              Monday to Friday as a sessioned and registered school 7.30am to
              4pm.
            </p>

            <p className="theme-color spaced">Special Events</p>
            <p className="spaced">
              Vacation Bible School is a high energy week of worship, Bible
              study, scripture memorization, crafts, games and snacks. VBS is
              held in July each year.
            </p>
          </div>
        </div>

        <div className="mnx_card">
          <div className="img-sec">
            <Image
              image={empty}
              alt="sunday school"
              lazyLoad={true}
              usePlaceHolder={true}
              imgClass="img contain"
            />
          </div>
          <div className="text-sec reg_text">
            <h2>Youth</h2>
            <p className="spaced">
              “Therefore as you received Christ Jesus the Lord, so walk in Him,
              rooted and built up in Him and established in the faith, just as
              you were taught, abounding in thanksgiving.” Colossians 2:6-7
            </p>
            <p>
              The youth seeks to be “Rooted” in Christ Jesus. It is our desire
              to engage ages 17 - 40 in worship, Bible study and ministry.
            </p>
          </div>
        </div>

        <div className="mnx_card">
          <div className="img-sec">
            <Image
              image={empty}
              alt="sunday school"
              lazyLoad={true}
              usePlaceHolder={true}
              imgClass="img contain"
            />
          </div>
          <div className="text-sec reg_text">
            <h2>Womens's Ministry</h2>
            <p>
              Women By Design – Making Him Known through discipleship training
              and outreach ministries including:
              <ul>
                <li>Bible Study</li>
                <li>Prayer & Praise</li>
                <li>Missions and Outreach Support</li>
                <li>Women’s Conference</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="mnx_card">
          <div className="img-sec">
            <Image
              image={img3}
              alt="sunday school"
              lazyLoad={true}
              usePlaceHolder={true}
              imgClass="img contain"
            />
          </div>
          <div className="text-sec reg_text">
            <h2>Men's Ministry</h2>
            <p>
              The GEBC Men’s Ministry seeks to encourage men through fellowship
              and service opportunities. Various events are planned throughout
              the year to give men the opportunity to grow in their walks with
              Christ and with one another.
            </p>
          </div>
        </div>

        <div className="mnx_card">
          <div className="img-sec">
            <Image
              image={empty}
              alt="sunday school"
              lazyLoad={true}
              usePlaceHolder={true}
              imgClass="img contain"
            />
          </div>
          <div className="text-sec reg_text">
            <h2>Other Ministries</h2>

            <ul className="flex-row j-space spread">
              <li>Health Ministry</li>
              <li>Marriage Ministry</li>
              <li>Ministry Leaders</li>
              <li>Enployment Team</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
