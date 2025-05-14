import React, { useState } from "react";
import styles from "./sidebar.module.scss";
import {
  FaBars,
  FaDesktop,
  FaCube ,
  FaFile,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { Link, Route } from "react-router-dom";

const menuData = [
  {
    icon: <FaDesktop />,
    label: "Dashboard",
  },
  {
    icon: <FaCube  />,
    label: "Advanced Ui",
    children: [
      {
        label: "Web",
        route:'/toaster',
        children: [
          { label: "React Project", icon: <FaFile />, route:'#' },
          { label: "Vue Project", icon: <FaFile />, route:'#' },
        ],
      },
      {
        label: "Mobile",
        children: [
          { label: "Flutter App", icon: <FaFile /> },
          { label: "React Native", icon: <FaFile /> },
        ],
      },
    ],
  },
  // List Item end
    {
    icon: <FaCube  />,
    label: "Pages",
    children: [
      {
        label: "Blog",
        route:'#',
        children: [
          { label: "Blog1", icon: <FaFile />, route:'#' },
          { label: "Blog Details", icon: <FaFile />, route:'#' },
          { label: "Create Blog", icon: <FaFile />, route:'#' },
        ],
      },
      {
        label: "Chat",
        children: [
          { label: "Chat App", icon: <FaFile /> },
          { label: "React Native", icon: <FaFile /> },
        ],
      },
    ],
  },
  // List Item end
   {
    icon: <FaDesktop />,
    label: "Utilities",
  },
  // List Item end
   // List Item end
    {
    icon: <FaCube  />,
    label: "Authentication",
    children: [
      {
        label: "Coming Soon",
        route:'#',
      },
     {
        label: "Create Password",
        route:'#',
      },
         {
        label: "Lock Screen",
        route:'#',
      },
    ],
  },
];

const SidebarItem = ({ item, collapsed, level = 0 }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children?.length > 0;

  return (
    <li className={styles.sidebarItem}>
      <div id="ul2"
        className={styles.menuItem}
        // style={{ paddingLeft: `${level * 20 + 16}px` }}
        onClick={() => hasChildren && setOpen(!open)}
      >
        
        {!collapsed && <Link to={item?.route} className={styles.label} id="tetet"><span className={styles.icon} id="test">{item.icon ? item.icon : '-'}</span> {item.label}</Link>}
        {hasChildren && !collapsed && (
          <span className={styles.chevron}>
            {open ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />}
          </span>
        )}
      </div>

      {hasChildren && open && (
        <ul className={styles.children} id="ul4">
          {item.children.map((child, idx) => (
            <SidebarItem
              key={idx}
              item={child}
              collapsed={collapsed}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`${styles.appSidebar} ${collapsed ? styles.collapsedSidebar : ""}`} id="sidebar">
      <div
        className={`${styles.mainSidebar} `}
      >
        <div className={styles.header}>
          {!collapsed && <span className={styles.logo}>My App</span>}
          <button
            className={styles.toggle}
            onClick={() => setCollapsed(!collapsed)}
          >
            <FaBars />
          </button>
        </div>

        <ul className={styles.menuList} id="ul3">
          {menuData.map((item, idx) => (
            <SidebarItem key={idx} item={item} collapsed={collapsed} />
          ))}
        </ul>
      </div>

      
    </aside>
  );
};

export default Sidebar;
