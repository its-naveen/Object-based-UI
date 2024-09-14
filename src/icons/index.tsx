import React from "react";
import { Badge, IconButton } from "@mui/material";

const LoginIcon = React.lazy(() => import("./login"));
const BellIcon = React.lazy(() => import("./bell"));
const GlobeIcon = React.lazy(() => import("./globe"));
const LoaderIcon = React.lazy(() => import("./loader"));
const SearchIcon = React.lazy(() => import("./search"));
const DashboardIcon = React.lazy(() => import("./dashboard"));
const UserIcon = React.lazy(() => import("./user"));
const SettingIcon = React.lazy(() => import("./setting"));

interface IconProps {
  iconKey: string;
  type: string;
  badge?: boolean;
  count?: number;
  click?: () => void;
}

const icons: Record<string, React.ReactNode> = {
  login: <LoginIcon />,
  bell: <BellIcon />,
  globe: <GlobeIcon />,
  loader: <LoaderIcon />,
  search: <SearchIcon />,
  dashboard: <DashboardIcon />,
  user: <UserIcon />,
  setting: <SettingIcon />,
}

export default function Icons({ click, iconKey, type, badge, count }: IconProps) {
  let color = 'var(--primary-clr)';
  if (type === 'light') {
    color = 'var(--white-clr)';
  } else if (type === 'active') {
    color = 'var(--active-clr)';
  } else {
    color = 'var(--primary-clr)';
  }

  return (
    badge ? (
      <IconButton sx={{ color }} onClick={click} role="icon button" aria-label={`${iconKey} button`}>
        <Badge badgeContent={count} color="secondary">
          {icons[iconKey]}
        </Badge>
      </IconButton>
    ) : <IconButton sx={{ color }} role="icon button" aria-label={`${iconKey} button`}>
      {icons[iconKey]}
    </IconButton>
  );
}
