import React from "react";
import vision from "../../../assets/vision.png";
import mission from "../../../assets/mission.png";
import "./style.scss";

const data = [
  {
    icon: vision,
    title: "Vision",
    desc:
      "To be a Christ-centered church that addresses the needs of the total person.",
  },
  {
    icon: mission,
    title: "Mission",
    desc: `Our mission, under the inspiration and guidance of the Holy Spirit, is to congregate as immersed believers to fulfil our assignment in "The Great Commission" of Jesus Christ - to share the Good News with every person. We do this through Christ-centred, Bible-based worship, evangelism, discipleship, ministry, missions, and fellowship.`,
  },
];

const Vison = () => {
  return (
    <section className="vs_ms">
      <div className="container flex-row j-space card">
        {data.map((mv, i) => (
          <div
            className="vs_con flex-col j-start al-start reg_text"
            key={`reg_sec_${mv.title}`}
          >
            <img src={mv.icon} alt={mv.title} />
            <h1>{mv.title}</h1>
            <p>{mv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vison;
