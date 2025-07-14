import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { forwardRef } from "react";

const SideBar = forwardRef<HTMLDivElement, object>((props, ref) => {
  return (
    <div ref={ref} className="fixed top-0 right-0 flex h-screen w-64 shadow ">
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: "transparent !important",
          },
          [`.${sidebarClasses.root}`]: {
            opacity: 1,
            backgroundColor: "transparent !important",
          },
        }}
        className="bg-[#212B36] text-white "
      >
        <Menu>
          <MenuItem href="/login">
            <span>Fazer login</span>
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
});
Sidebar.displayName = "Sidebar";
export default SideBar;
