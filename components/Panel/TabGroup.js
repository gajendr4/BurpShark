import { TabList, TabPanels, TabPanel, Tabs, Tab } from "@carbon/react";
import Link from "next/link";
import { useRouter } from "next/router";

// Edit Tab Panel for dark mode light mode using mix-blend-mode

export default function TabGroup(props) {
  const router = useRouter();
  let tabtitle = props.tabsTitle;
  let tabList = [];
  tabtitle.forEach((item, index) => {
    tabList.push(
      <Tab onClick={() => router.push(item.urlpath)} key={index}>
        {item.tabname}
      </Tab>
    );
  });

  let tabpanel = props.tabsPanelobject;
  let tabPanelList = [];
  tabpanel.forEach((item, index) => {
    tabPanelList.push(
        <TabPanel  
          style={{
            // color: "black",
            color: "white",
            // background: "#e9e9e9",
            background: "#161616",
            // mixBlendMode: "difference",
          }}
          className="tab-margin"
          key={index}
        >
          {item}
        </TabPanel>
    );
  });


  return (
    <>
      <section className="cds--grid ">
        <Tabs defaultSelectedIndex={props.defIndex}>
          <TabList
            aria-label="List of tabs"
            className="tab-margin tab-must"
            contained
            style={{ marginLeft: "-13px", background: "black" }}
          >
            {tabList}
          </TabList>
          <TabPanels style={{ background: "black" }}>{tabPanelList}</TabPanels>
        </Tabs>
      </section>
    </>
  );
}
