import PanelHeading from "../../../components/Panel/PanelHeading";
import TabGroup from "../../../components/Panel/TabGroup";
import Layout from "../../../components/Layout";
import { Key, ReactElement, useState } from "react";
import { MathpixMarkdown, MathpixLoader } from "mathpix-markdown-it";

const HeadLine = "Fluids!";
var NameTabs = [
  {
    urlpath: "/mechanics/fluids",
    tabname: "Book",
  },
  {
    urlpath: "/mechanics/fluids/sheets",
    tabname: "Practice",
  },
  {
    urlpath: "/mechanics/fluids/AITS",
    tabname: "AITS",
  },
];

function Book() {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/1ojIGsf8wccw_zOX7zPrgDttjTvOD4PqE/preview"
  );
  return (
    // REPLACE YOUR Book BY THE CONTENT & DESIRED MARKDOWN PREFERENCES
    <>
      <div style={{ background: "white" }}>
        <div
          style={{
            mixBlendMode: "difference",
          }}
        >
          <iframe
            src={embedURL}
            width="100%"
            style={{ height: "85vh" }}
          ></iframe>
        </div>
      </div>
    </>
  );
}
function Question() {
  const [embedURL] = useState(
    "https://drive.google.com/file/d/154MvsjDaeT3WijTiDOVwN0LOC2ltFiFW/preview"
  );
  return (
    // REPLACE YOUR Book BY THE CONTENT & DESIRED MARKDOWN PREFERENCES
    <>
      <div style={{ background: "white" }}>
        <div
          style={{
            mixBlendMode: "difference",
          }}
        >
          <iframe
            src={embedURL}
            width="100%"
            style={{ height: "85vh" }}
          ></iframe>
        </div>
      </div>
    </>
  );
}


function AITS(){
  return(
    <>
   This file will only be shown to people provided access
    </>
  )
}

var subContent = [<Book key={1} />, <Question key={2} />, <AITS  key={3}/>];

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

export default function Fluids() {
  return (
    <>
      <PanelExp subindex={0} />
    </>
  );
}

Fluids.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
