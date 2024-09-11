import React from "react";
import { Badge, IconButton } from "@mui/material";

const LoginIcon = React.lazy(() => import("./login"));
const BellIcon = React.lazy(() => import("./bell"));
const GlobeIcon = React.lazy(() => import("./globe"));
const LoaderIcon = React.lazy(() => import("./loader"));
const SearchIcon = React.lazy(() => import("./search"));

interface IconProps {
  iconKey: string;
  type: string;
  badge?: boolean;
  count?: number;
}

const icons: Record<string, React.ReactNode> = {
  login: <LoginIcon />,
  bell: <BellIcon />,
  globe: <GlobeIcon />,
  loader: <LoaderIcon />,
  search: <SearchIcon />,
}

export default function Icons({ iconKey, type, badge, count }: IconProps) {
  return (
    badge ? (
      <IconButton sx={{ color: `${type === 'light' ? '#fff' : 'royalblue'} ` }}>
        <Badge badgeContent={count} color="primary" showZero>
          {icons[iconKey]}
        </Badge>
      </IconButton>
    ) : <IconButton sx={{ color: `${type === 'light' ? '#fff' : 'royalblue'} ` }}>
      {icons[iconKey]}
    </IconButton>
  );
}
