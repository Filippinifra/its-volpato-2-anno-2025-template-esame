import { useState } from "react";
import { BiHome, BiMenu, BiPlus, BiUser } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { SidebarItem } from "../SidebarItem";
import {
  externalWrapperClass,
  hamburgerWrapperClass,
  headerWrapperClass,
  sidebarWrapperClass,
} from "./style.css";

export const SidebarLayout = ({ children, boxAction }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={externalWrapperClass}>
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100dvh",
            backgroundColor: "white",
            zIndex: 10,
            padding: 48,
            boxSizing: "border-box",
          }}
        >
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
          <BiUser />
          <BiMenu
            className={hamburgerWrapperClass}
            onClick={() => setMobileMenuOpen(true)}
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
