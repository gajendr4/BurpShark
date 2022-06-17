import { PanelExp } from "./index";
import Layout from "../../../components/Layout";
import { ReactElement } from "react";

export default function sheets() {
  return <PanelExp subindex={1} />;
}

sheets.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
