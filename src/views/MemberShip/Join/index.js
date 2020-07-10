import React from "react";
import "./style.scss";

const grids = [
  {
    title: "Baptism after Salvation",
    mid: "01",
    designed: true,
    desc:
      "After you have accepted Christ as your personal Saviour, you may follow God’s simple command of being baptized. Baptism is not necessary for salvation; it is simply a public testimony of your faith. As you follow Christ in baptism you will be added as a member of Gbagada Estate Baptist Church.",
  },
  {
    title: "",
    mid: "OR",
    designed: false,
    desc: "",
  },
  {
    title: "Statement of Faith or Transfer of Letter",
    mid: "01",
    designed: true,
    desc:
      "If you have already accepted Christ and have been baptized in a church whose doctrine is in agreement with Gbagada Estate Baptist Church, you may present your testimony of salvation and be voted into membership by your statement of faith or transfer of membership from another church.",
  },
  {
    title: "",
    mid: "OR",
    designed: false,
    desc: "",
  },
  {
    title: "Statement of Faith by Baptism",
    mid: "01",
    designed: true,
    desc:
      "If you have accepted Christ and have not been baptized in a church of like faith, you will be asked to publicly identify with Christ and the Faith Baptist Church by being baptized into our membership. This is also true if your mode of baptism was other than immersion, or if the doctrine was different in your previous church. Gbagada Estate Baptist Church is committed to maintaining a doctrinal unity in this day of confusion and doctrinal compromise. If you believe that God has led you to this church, and if you understand that baptism is simply a testimony of your faith, we invite you to identify with Christ and the Gbagada Estate Baptist Church by being baptized as the Lord leads you.",
  },
];

const Join = () => {
  return (
    <section className="join">
      <h2 className="hd txt-center">Three ways to joining GEBC Family</h2>
      <div className="grid-sec container">
        {grids.map((grid, i) => (
          <div className="grid reg_text" key={`grid_sec_${i}`}>
            <h2 className="right-man">{grid.title}</h2>
            <p className={`${grid.designed ? "designed" : "reg"} flex-row`}>
              {grid.mid}
            </p>
            <p className="desc">{grid.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Join;
