import { IconButton } from "@mui/material";
import { bars } from "./bars";

interface IconProps {
  iconKey: keyof typeof icons;
  color: string;
}

const icons: Record<string, JSX.Element> = {
  bars: bars(),
};

export default function Icons({ iconKey, color }: IconProps) {
  return <IconButton sx={{color: `${color == 'light' ? '#fff' : 'black'}`}}>{icons[iconKey]}</IconButton>
}
