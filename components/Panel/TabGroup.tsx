import { TabList, TabPanels, TabPanel, Tabs, Tab } from "@carbon/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Key } from "react";

// Edit Tab Panel for dark mode light mode using mix-blend-mode

type Props = {
  tabsTitle: any;
  tabsPanelobject: any;
  defIndex: Key;
};

export default function TabGroup({
  tabsTitle,
  tabsPanelobject,
  defIndex,
}: Props): JSX.Element {
  const router = useRouter();
  let tabtitle = tabsTitle;
  let tabList: any = [];
  type Props = {
    tabname: {
      urlpath: string;
      tabname: string;
    }[];
    urlpath: string;
  };
  tabtitle.forEach(({ tabname, urlpath }: Props, uniquekey: Key | null | undefined ) => {
    tabList.push(
      <Tab onClick={() => router.push(urlpath)} key={uniquekey}>
        {tabname}
      </Tab>
    );
  });

  let tabpanel = tabsPanelobject;
  let tabPanelList: any = [];
  tabpanel.forEach(function (item: any, uniquekey: Key | null | undefined) {
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
        key={uniquekey}
      >
        {item}
      </TabPanel>
    );
  });

  return (
    <>
      <section className="cds--grid ">
        <Tabs defaultSelectedIndex={defIndex}>
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
