import React, { useState } from "react";
import styles from "./sidebar.module.scss";
import {
  FaBars,
  FaHome,
  FaFolder,
  FaFile,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

const menuData = [
  {
    icon: <FaHome />,
    label: "Dashboard",
  },
  {
    icon: <FaFolder />,
    label: "Projects",
    children: [
      {
        label: "Web",
        children: [
          { label: "React Project", icon: <FaFile /> },
          { label: "Vue Project", icon: <FaFile /> },
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
];

const SidebarItem = ({ item, collapsed, level = 0 }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children?.length > 0;

  return (
    <div className={styles.sidebarItem}>
      <div
        className={styles.menuItem}
        style={{ paddingLeft: `${level * 20 + 16}px` }}
        onClick={() => hasChildren && setOpen(!open)}
      >
        <span className={styles.icon}>{item.icon}</span>
        {!collapsed && <span className={styles.label}>{item.label}</span>}
        {hasChildren && !collapsed && (
          <span className={styles.chevron}>
            {open ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />}
          </span>
        )}
      </div>

      {hasChildren && open && (
        <div className={styles.children}>
          {item.children.map((child, idx) => (
            <SidebarItem
              key={idx}
              item={child}
              collapsed={collapsed}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.sidebarWrapper}>
      <div
        className={`${styles.sidebar} ${collapsed ? styles.collapsedSidebar : ""}`}
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

        <div className={styles.menuList}>
          {menuData.map((item, idx) => (
            <SidebarItem key={idx} item={item} collapsed={collapsed} />
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Sidebar;
