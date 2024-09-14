import React from 'react';
import { NavLink } from 'react-router-dom';

const Icons = React.lazy(() => import("../../icons"));
const Tooltip = React.lazy(() => import('../../customComponents/Tooltip/Tooltip'));

interface MenuProps {
  label: string;
  link: string;
}

export default function Sidebar() {
  const menus = [
    {
      label: 'dashboard',
      link: '/'
    },
    {
      label: 'user',
      link: '/user-creation'
    },
    {
      label: 'setting',
      link: '/setting'
    }
  ];
  return (
    <aside className="sidebar">
      {
        menus.map((menu: MenuProps) => (
          <NavLink key={menu.label} to={menu.link} className={({ isActive }) =>
            isActive ? 'active-link' : 'link'
          } role={`${menu.label}-icon`} aria-label={`${menu.label}-icon`}>
            {({ isActive }) => (
              <Tooltip position='right' label={menu.label}>
                <Icons
                  iconKey={menu.label}
                  type={isActive ? 'active' : 'dark'}
                />
              </Tooltip>
            )}
          </NavLink>
        ))
      }
    </aside>
  );
}