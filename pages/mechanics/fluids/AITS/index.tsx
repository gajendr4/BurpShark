import { PanelExp } from "../index";
import Layout from "../../../../components/Layout";
import { ReactElement } from "react";

export default function aits() {
  return <PanelExp subindex={2} />;
}

aits.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
