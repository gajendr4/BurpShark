import Navbar from "./Navbar/Navbar";

export default function Layout({ children }: any): JSX.Element {
    return (
      <>
        <Navbar>{children}</Navbar>
      </>
    );
}