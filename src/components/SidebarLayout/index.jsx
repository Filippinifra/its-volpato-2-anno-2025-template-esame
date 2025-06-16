import { useState } from "react";
import { BiExit, BiHome, BiMenu, BiPlus, BiUser } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { useUser } from "../../context/userContext";
import { SidebarItem } from "../SidebarItem";
import {
  externalWrapperClass,
  hamburgerWrapperClass,
  headerWrapperClass,
  mobileWrapperPanel,
  sidebarWrapperClass,
} from "./style.css";

export const SidebarLayout = ({ children, boxAction }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, onLogout } = useUser();

  return (
    <div className={externalWrapperClass}>
      {mobileMenuOpen && (
        <div className={mobileWrapperPanel}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 16,
            }}
          >
            <CgClose
              style={{ cursor: "pointer" }}
              onClick={() => setMobileMenuOpen(false)}
            />
            chiudi
          </div>
          <SidebarItem
            icon={<BiHome />}
            label={"Home"}
            path={"/"}
            onClick={() => setMobileMenuOpen(false)}
          />
          <SidebarItem
            icon={<BiPlus />}
            label={"Aggiungi"}
            path={"/add-new"}
            onClick={() => setMobileMenuOpen(false)}
          />
        </div>
      )}
      <div className={sidebarWrapperClass}>
        <div style={{ height: 100 }} />
        <SidebarItem icon={<BiHome />} label={"Home"} path={"/"} />
        <SidebarItem icon={<BiPlus />} label={"Aggiungi"} path={"/add-new"} />
      </div>
      <div
        style={{
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className={headerWrapperClass}>
          {user?.name} <BiUser />
          <BiMenu
            className={hamburgerWrapperClass}
            onClick={() => setMobileMenuOpen(true)}
          />
          <BiExit
            onClick={() => {
              onLogout();
            }}
          />
        </div>
        {boxAction && (
          <div
            style={{
              borderBottom: "1px solid rgb(187, 187, 187)",
              padding: "16px 32px",
            }}
          >
            {boxAction}
          </div>
        )}
        <div style={{ backgroundColor: "#DDDDDD", flexGrow: "1", padding: 32 }}>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
