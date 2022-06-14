import PanelHeading from "../../../components/Panel/PanelHeading";
import TabGroup from "../../../components/Panel/TabGroup";
import Layout from "../../../components/Layout";
import { Key, ReactElement } from "react";

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
  return (
    // REPLACE YOUR THEORY BY THE CONTENT & DESIRED MARKDOWN PREFERENCES
    <>
      <h1>Replace this Theory content</h1>
    </>
  );
}
function Question() {
  return (
    // REPLACE YOUR QUESTION BY THE CONTENT & DESIRED MARKDOWN PREFERENCES
    <>Replace this by questions</>
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
