import { Theme } from "@carbon/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderMenuButton,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderPanel,
  Switcher,
  SwitcherItem,
  SwitcherDivider,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SideNavLink,
  SideNavDivider,
} from "@carbon/react";
import {
  Notification,
  UserAvatar,
  Close,
  Launch,
  LogoYoutube,
  LogoGithub,
  Locked,
} from "@carbon/react/icons";
import SwitcherIco from "./SwitcherIco";
import { useState } from "react";
const StoryContent = ({ children }: any) => {
  const content = <>{children}</>;
  return <>{content}</>;
};

export default function Navbar({ children }: any) {
  const router = useRouter();

  function fired({ route }: any) {
    return route === router.pathname;
  }

  const kinematics = [
    "/mechanics/kinematics",
    "/mechanics/kinematics/questions",
  ];

  const fluids = [
    "/mechanics/fluids",
    "/mechanics/fluids/sheets",
    "/mechanics/fluids/AITS",
  ];

  const mechanics = [
    "/mechanics/kinematics",
    "/mechanics/kinematics/questions",
    "/mechanics/nlm",
    "/mechanics/friction",
    "/mechanics/wpe",
    "/mechanics/circularmotion",
    "/mechanics/com",
    "/mechanics/rotation",
    "/mechanics/fluids",
    "/mechanics/mechanicalproperties",
    "/mechanics/shm",
    "/mechanics/gravitation",
    "/mechanics/fluids/sheets",
    "/mechanics/fluids/AITS",
  ];
  const electromagnetism = [
    "/electromagnetism/electrostatics",
    "/electromagnetism/currentelectricity",
    "/electromagnetism/capacitors",
    "/electromagnetism/magnetism",
    "/electromagnetism/emi",
    "/electromagnetism/ac",
  ];

  const thermodynamics = [
    "/thermodynamics/ktg",
    "/thermodynamics/calorimetry",
    "/thermodynamics/heattransfer",
  ];

  const waves = ["/waves"];

  const topic = (element: any) => element === router.pathname;

  const [state, changeState] = useState(false);
  const outbound = true;

  return (
    <>
      <style jsx>{`
        .cds--header-panel {
          transform: translateX(0);
          transition: all 0.11s cubic-bezier(0.2, 0, 1, 0.9);
        }
        .cds--header-panel--expanded {
          transform: translateX(16rem);
          transition: all 0.11s cubic-bezier(0.2, 0, 1, 0.9);
        }
        .cds--side-nav__icon .cds--side-nav__icon--small {
          margin-right: 0 !important;
        }
        .dividerswitcher {
          color: #525252;
        }
        .dividerswitcher span {
          color: #c6c6c6;
          font-size: var(--cds-label-01-font-size, 0.75rem);
          font-weight: var(--cds-label-01-font-weight, 400);
          letter-spacing: var(--cds-label-01-letter-spacing, 0.32px);
          line-height: var(--cds-label-01-line-height, 1.33333);
        }
      `}</style>

      <Theme theme="g100">
        <HeaderContainer
          render={({ isSideNavExpanded, onClickSideNavExpand }: any) => (
            <Header aria-label="Carbon Tutorial">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              {/* BOND TITLE */}
              <HeaderName prefix="">
                <Link href="/" passHref>
                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: "16px",
                      fontFamily:
                        "IBM Plex Sans,Helvetica Neue,Arial,sans-serif",
                      cursor: "pointer",
                    }}
                  >
                    Physics for JEEADV.ac.in
                  </span>
                </Link>
              </HeaderName>

              <SideNav
                aria-label=""
                expanded={isSideNavExpanded}
                isChildOfHeader={true}
                style={{ borderRight: "1px solid #464646" }}
              >
                <SideNavItems>
                  <SideNavMenu title="About Physics for JEEADV...">
                    <SideNavMenuItem isActive={false} href="#">
                      About Us
                    </SideNavMenuItem>
                    <SideNavMenuItem href="#">
                      Adopting the system
                    </SideNavMenuItem>
                  </SideNavMenu>

                  <SideNavLink href="#">What&apos;s Happening</SideNavLink>

                  <SideNavMenu title="Designing">
                    <SideNavMenuItem href="#">L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem href="#">L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem href="#">L0 menu item</SideNavMenuItem>
                  </SideNavMenu>

                  <SideNavMenu title="Developing">
                    <SideNavMenuItem href="#">L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem href="#">L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem href="#">L0 menu item</SideNavMenuItem>
                  </SideNavMenu>

                  <SideNavMenu title="Contributing">
                    <SideNavMenuItem href="#">L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem href="#">L0 menu item</SideNavMenuItem>
                    <SideNavMenuItem href="#">L0 menu item</SideNavMenuItem>
                  </SideNavMenu>

                  <SideNavDivider />

                  {/* MECHANICS */}
                  <SideNavMenu
                    title="Mechanics"
                    defaultExpanded={mechanics.some(topic)}
                    isActive={mechanics.some(topic)}
                  >
                    <Link passHref href="/mechanics/kinematics">
                      <SideNavMenuItem isActive={kinematics.some(topic)}>
                        Kinematics
                      </SideNavMenuItem>
                    </Link>
                    <Link passHref href="/mechanics/nlm">
                      <SideNavMenuItem isActive={fired("/mechanics/nlm")}>
                        Newton&apos;s Law Of Motion
                      </SideNavMenuItem>
                    </Link>
                    <Link passHref href="/mechanics/friction">
                      <SideNavMenuItem isActive={fired("/mechanics/friction")}>
                        Friction
                      </SideNavMenuItem>
                    </Link>
                    <Link passHref href="/mechanics/circularmotion">
                      <SideNavMenuItem
                        isActive={fired("/mechanics/circularmotion")}
                      >
                        Circular Motion
                      </SideNavMenuItem>
                    </Link>
                    <Link passHref href="/mechanics/wpe">
                      <SideNavMenuItem isActive={fired("/mechanics/wpe")}>
                        Work Power Energy
                      </SideNavMenuItem>
                    </Link>
                    <Link passHref href="/mechanics/com">
                      <SideNavMenuItem isActive={fired("/mechanics/com")}>
                        Center Of Mass & Collision
                      </SideNavMenuItem>
                    </Link>
                    <Link passHref href="/mechanics/rotation">
                      <SideNavMenuItem isActive={fired("/mechanics/rotation")}>
                        Rotational Mechanics
                      </SideNavMenuItem>
                    </Link>
                    <Link passHref href="/mechanics/fludis">
                      <SideNavMenuItem isActive={fluids.some(topic)}>
                        Fluid Mechanics
                      </SideNavMenuItem>
                    </Link>
                    <Link passHref href="/mechanics/gravitation">
                      <SideNavMenuItem
                        isActive={fired("/mechanics/gravitation")}
                      >
                        Gravitation
                      </SideNavMenuItem>
                    </Link>
                    <Link passHref href="/mechanics/shm">
                      <SideNavMenuItem isActive={fired("/mechanics/shm")}>
                        Simple Harmonic Motion
                      </SideNavMenuItem>
                    </Link>

                    <Link passHref href="/mechanics/mechanicalproperties">
                      <SideNavMenuItem
                        isActive={fired("/mechanics/mechanicalproperties")}
                      >
                        Mechanical Properties Of Matter
                      </SideNavMenuItem>
                    </Link>
                  </SideNavMenu>

                  {/* THERMODYNAMICS */}
                  <SideNavMenu
                    title="Thermal Physics"
                    defaultExpanded={thermodynamics.some(topic)}
                    isActive={thermodynamics.some(topic)}
                  >
                    <Link href="/thermodynamics/ktg" passHref>
                      <SideNavMenuItem isActive={fired("/thermodynamics/ktg")}>
                        KTG & Thermodynamics
                      </SideNavMenuItem>
                    </Link>
                    <Link href="/thermodynamics/calorimetry" passHref>
                      <SideNavMenuItem
                        isActive={fired("/thermodynamics/calorimetry")}
                      >
                        Calorimetry
                      </SideNavMenuItem>
                    </Link>
                    <Link href="/thermodynamics/heattransfer" passHref>
                      <SideNavMenuItem
                        isActive={fired("/thermodynamics/heattransfer")}
                      >
                        Heat Transfer
                      </SideNavMenuItem>
                    </Link>
                  </SideNavMenu>

                  {/* ELECTROMAGNETISM */}
                  <SideNavMenu
                    title="Electromagnetism"
                    defaultExpanded={electromagnetism.some(topic)}
                    isActive={electromagnetism.some(topic)}
                  >
                    <Link href="/electromagnetism/electrostatics">
                      <SideNavMenuItem
                        isActive={fired("/electromagnetism/electrostatics")}
                      >
                        Electrostatics
                      </SideNavMenuItem>
                    </Link>
                    <Link href="/electromagnetism/currentelectricity">
                      <SideNavMenuItem
                        isActive={fired("/electromagnetism/currentelectricity")}
                      >
                        Current Electricity
                      </SideNavMenuItem>
                    </Link>
                    <Link href="/electromagnetism/capacitors">
                      <SideNavMenuItem
                        isActive={fired("/electromagnetism/capacitors")}
                      >
                        Capacitors
                      </SideNavMenuItem>
                    </Link>
                    <Link href="/electromagnetism/magnetism">
                      <SideNavMenuItem
                        isActive={fired("/electromagnetism/magnetism")}
                      >
                        Magnetism
                      </SideNavMenuItem>
                    </Link>
                    <Link href="/electromagnetism/emi">
                      <SideNavMenuItem
                        isActive={fired("/electromagnetism/emi")}
                      >
                        Electromagnetic Induction
                      </SideNavMenuItem>
                    </Link>
                    <Link href="/electromagnetism/ac">
                      <SideNavMenuItem isActive={fired("/electromagnetism/ac")}>
                        Alternating Current
                      </SideNavMenuItem>
                    </Link>
                  </SideNavMenu>

                  <Link href="/modern-physics/modern">
                    <SideNavLink isActive={fired("/modern-physics/modern")}>
                      Modern Physics
                    </SideNavLink>
                  </Link>

                  <Link href="/optics/optics">
                    <SideNavLink isActive={fired("/optics/optics")}>
                      Optics
                    </SideNavLink>
                  </Link>

                  {/* WAVES */}
                  <SideNavMenu
                    title="Waves"
                    defaultExpanded={waves.some(topic)}
                    isActive={waves.some(topic)}
                  >
                    <Link href="/waves" passHref>
                      <SideNavMenuItem isActive={fired("/waves")}>
                        Waves
                      </SideNavMenuItem>
                    </Link>
                  </SideNavMenu>

                  <SideNavDivider />

                  <Link href="https://www.github.com" passHref>
                    <SideNavLink
                      target="_black"
                      renderIcon={outbound ? LogoGithub : undefined}
                      className="outboundLink outbound"
                      // element={outbound ? "a" : Link}
                      direction="right"
                    >
                      Github
                    </SideNavLink>
                  </Link>

                  <Link
                    href="https://www.youtube.com/c/INDIANSCHOOLOFPHYSICSnitin"
                    passHref
                  >
                    <SideNavLink
                      renderIcon={outbound ? LogoYoutube : undefined}
                      className="outboundLink outbound"
                      // element={outbound ? "a" : Link}
                      direction="right"
                      target="_blank"
                    >
                      Youtube
                    </SideNavLink>
                  </Link>

                  <SideNavLink
                    href="#"
                    renderIcon={outbound ? Launch : undefined}
                    className="outboundLink outbound"
                    // element={outbound ? "a" : Link}
                    style={{marginBottom: "3rem"}}
                    direction="right"
                  >
                    Our Web Standards
                  </SideNavLink>
                </SideNavItems>
              </SideNav>

              <HeaderGlobalBar>
                {/* <Button>Log In</Button>
                <Button>I am Button</Button> */}
                <HeaderGlobalAction
                  aria-label="Notifications"
                  tooltipAlignment="center"
                >
                  <Notification size={20} />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="User Avatar"
                  tooltipAlignment="center"
                >
                  <UserAvatar size={20} />
                </HeaderGlobalAction>

                <HeaderGlobalAction
                  aria-label="Settings"
                  isActive={state}
                  onClick={() => {
                    changeState(!state);
                  }}
                  tooltipAlignment="end"
                  style={{ background: !state ? "#161616" : "rgb(22, 22, 22)" }}
                >
                  {/* <Switcher size={20} /> */}
                  {!state && <SwitcherIco />}
                  {state && <Close size={20} className="fade-in" />}
                </HeaderGlobalAction>
              </HeaderGlobalBar>

              {/* SWITCHER */}
              <HeaderPanel
                aria-label="Header Panel"
                expanded={state}
                style={{
                  background: "rgb(22, 22, 22)",
                }}
                className={!state ? "slideIn" : "slideOut"}
                // isPersistent={false}
              >
                <Switcher aria-label="Switcher Container">
                  <SwitcherItem
                    href="#"
                    aria-label="Link 10"
                    style={{ cursor: "initial", background: `#161616` }}
                    className={!state ? "slideIn" : "slideOut"}
                  >
                    <div className="dividerswitcher">
                      <span>Foundations</span>
                    </div>
                  </SwitcherItem>
                  <SwitcherDivider
                    style={{ marginTop: "0", marginBottom: ".5rem" }}
                  />
                  <SwitcherItem aria-label="Link 1" href="#">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      Our Brand Center <Locked size={16} />
                    </div>
                  </SwitcherItem>
                  <SwitcherDivider />
                  <SwitcherItem href="#" aria-label="Link 2">
                    Link 1
                  </SwitcherItem>
                  <SwitcherItem href="#" aria-label="Link 2">
                    Link 2
                  </SwitcherItem>
                  <SwitcherItem isSelected href="#" aria-label="Link 3">
                    Link 3
                  </SwitcherItem>
                  <SwitcherItem href="#" aria-label="Link 4">
                    Link 4
                  </SwitcherItem>
                  <SwitcherItem href="#" aria-label="Link 5">
                    Link 5
                  </SwitcherItem>
                  <SwitcherDivider />
                  <SwitcherItem href="#" aria-label="Link 6">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      Carbon For Our Producs <Locked size={16} />
                    </div>
                  </SwitcherItem>
                </Switcher>
              </HeaderPanel>
            </Header>
          )}
        />

        <StoryContent>{children}</StoryContent>
      </Theme>
    </>
  );
}
