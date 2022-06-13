import PanelHeading from "../../../components/Panel/PanelHeading";
import TabGroup from "../../../components/Panel/TabGroup";

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
    <>Replace this Theory content</>
  );
}
function Question() {
  return (
    // REPLACE YOUR QUESTION BY THE CONTENT & DESIRED MARKDOWN PREFERENCES
    <>Replace this by questions</>
  );
}

var subContent = [<Theory key={1} />, <Question key={2} />];

const PanelExp = (props) => {
  return (
    <div>
      <PanelHeading>{HeadLine}</PanelHeading>
      <TabGroup
        tabsTitle={NameTabs}
        tabsPanelobject={subContent}
        defIndex={props.subindex}
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
