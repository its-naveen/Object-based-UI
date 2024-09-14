import { capitalize } from "lodash";

type TooltipProps = {
  position: string;
  label: string;
  children: React.ReactNode;
};

export default function Tooltip({ position, label, children }: TooltipProps) {
  return (
    <div className="tooltip" role="tooltip" aria-label="tooltip">
      <p
        className={`tooltip-label ${
          position === 'top' ? 'top' : ''
        } ${position === 'bottom' ? 'bottom' : ''} ${
          position === 'right' ? 'right' : ''
        } ${position === 'left' ? 'left' : ''}`}
      >
        {capitalize(label)}
      </p>
      {children}
    </div>
  );
}
