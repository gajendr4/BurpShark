export default function PanelHeading({ children }) {
  return (
    <>
      <div id="main-content" style={{ background: "black" }}>
        <div className="tab-margin cds--grid">
          <div className="bx--row">
            <div
              className="bx--col-lg-12"
              style={{
                marginTop: "3rem",
                lineHeight: "1.19",
                fontFamily: " 'IBM Plex Sans', sans-serif",
                color: "white",
                paddingTop: "11rem",
              }}
            >
              <h1 className="landing-page__heading">{children}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
