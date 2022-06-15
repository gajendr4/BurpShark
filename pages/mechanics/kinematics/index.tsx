import PanelHeading from "../../../components/Panel/PanelHeading";
import TabGroup from "../../../components/Panel/TabGroup";
import Layout from "../../../components/Layout";
import { Key, ReactElement, useState } from "react";
import { MathpixMarkdown, MathpixLoader } from "mathpix-markdown-it";

const HeadLine = "KINEMATICS!";
var NameTabs = [
  {
    urlpath: "/mechanics/kinematics",
    tabname: "Theory",
  },
  {
    urlpath: "/mechanics/kinematics/questions",
    tabname: "Practice",
  },
];

function Theory() {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1ojIGsf8wccw_zOX7zPrgDttjTvOD4PqE/preview"
  );
  return (
    // REPLACE YOUR THEORY BY THE CONTENT & DESIRED MARKDOWN PREFERENCES
    <>
      <div style={{ background: "white" }}>
        <div
          style={{
            mixBlendMode: "difference",
          }}
        >
          <iframe src={embedURL} width="100%" style={{height: "85vh"}}></iframe>
        </div>
      </div>
    </>
  );
}

function Question() {
  var KinematicsSample = String.raw`\section{KINEMATICS}

\section{JEE 2023 by NITIN SACHAN}

1. A truck driver driving at $72 \mathrm{~km} / \mathrm{h}$ finds a red light $100 \mathrm{~m}$ ahead of him. He instantly applies brakes to stop the truck. The truck retards uniformly and stops just at stop line of red light. How much time did the driver take to stop the truck?

Ans. $10 \mathrm{~s}$

2. A particle moves with uniform acceleration and passes 600 metres in the 10th second and 720 metres in the 12 th second. Find the initial velocity of the particle.

Ans. $30 \mathrm{~m} / \mathrm{s}$

3. A train moving at the rate of $60 \mathrm{~km} / \mathrm{h}$, is brought to rest in 3 minutes by uniform retardation. Find the retardation and also the distance that the train travels before coming to rest.

$$
\left(\text { Ans. } \frac{5}{54} \mathrm{~m} / \mathrm{s}^{2}, 1500 \mathrm{~m}\right)
$$

4. A body has a velocity of $25 \mathrm{~m} / \mathrm{s}$ at a certain instant. After $10 \mathrm{~s}$ of that instant, velocity increases to $55 \mathrm{~m} / \mathrm{s}$. If the velocity changes uniformly, find the distance traveled.

(Ans. $400 \mathrm{~m}$ )

5. A particle starts with a velocity of $10 \mathrm{~cm} / \mathrm{s}$ and travels $150 \mathrm{~cm}$ in 30 seconds. Calculate the retardation of the particle.

Ans. $\frac{1}{3} \mathrm{~cm} / \mathrm{s}^{2}$

6. The speed of a train is reduced from $36 \mathrm{~km} / \mathrm{h}$ to $9 \mathrm{~km} / \mathrm{h}$ while it travels a distance of $150 \mathrm{~m}$. If the retardation be uniform, find how much further it will travel before coming to rest.

Ans. $10 \mathrm{~m}$

7. A body is projected vertically upward with a velocity of $80 \mathrm{~m} / \mathrm{s}$. Find (i) how high it will go? and (ii) at what time will it be $96 \mathrm{~m}$ above the point of projection?

Ans. $326.5 \mathrm{~m}, 1.3 \mathrm{~s}$ and $15 \mathrm{~s}$

8. A stone is dropped into a well and sound of splash is heard after 4 seconds Assuming the velocity of sound to be $340 \mathrm{~m} / \mathrm{s}$; determine the depth of the well.

Ans. $70.38 \mathrm{~m}$

9. A ball is thrown vertically upwards with a velocity of $30 \mathrm{~m} / \mathrm{s}$

(i) How high will it go? (ii) What time will it take to reach the highest point?

(iii) How fast will it be moving at the end of $2 \mathrm{~s}$ ?

(iv) With what velocity will it, come back to the ground?

Ans. (i) $46 \mathrm{~m}$ (ii) $3 \mathrm{~s}($ iii) $10.4 \mathrm{~m} / \mathrm{s}$ (iv) $30 \mathrm{~m} / \mathrm{s}$

10. A particle is dropped from the top of a tower $200 \mathrm{~m}$ high and another particle is projected at the same time vertically upwards from the foot of the tower so as to meet the first particle at a height of $56 \mathrm{~m}$. Find the velocity of projection of the second particle.

Ans. $37 \mathrm{~m} / \mathrm{s}$
`;

  return (
    // REPLACE YOUR QUESTION BY THE CONTENT & DESIRED MARKDOWN PREFERENCES
    <div style={{ fontSize: "1.3rem" }}>
      <MathpixLoader>
        <MathpixMarkdown text={KinematicsSample} />
      </MathpixLoader>
    </div>
  );
}

var subContent = [<Theory key={1} />, <Question key={2} />];

type Props = {
  subindex: Key;
};

const PanelExp = ({ subindex }: Props) => {
  return (
    <div>
      <PanelHeading>{HeadLine}</PanelHeading>
      <TabGroup
        tabsTitle={NameTabs}
        tabsPanelobject={subContent}
        defIndex={subindex}
      ></TabGroup>
    </div>
  );
};

export { PanelExp };

export default function kinematics() {
  return (
    <>
      <PanelExp subindex={0} />
    </>
  );
}

kinematics.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
