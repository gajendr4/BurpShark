import { PanelExp } from "./index";
import Layout from "../../../components/Layout";
import { ReactElement } from "react";

export default function questions() {
  return <PanelExp subindex={1} />;
}


questions.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};