import { NavLink } from "react-router-dom";

interface Props {
  label: string;
  link: string;
}

export default function Breadcrumb({ options }: any) {
  return (
    <div className="breadcrumb" role="breadcrumb" aria-label="breadcrumb">
      {
        options.map((option: Props, idx: number) => (
          <NavLink to={option.link} className={({ isActive }) =>
            isActive ? 'active' : 'link'
          }>
            <div className="breadcrumb-label">
              <span>
                {option.label}
              </span>
              {idx < options.length - 1 && <svg className="label-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
                <path fill="currentColor" fill-rule="evenodd" d="M5.47 13.03a.75.75 0 0 1 0-1.06L9.44 8L5.47 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0" clip-rule="evenodd" />
              </svg>}
            </div>
          </NavLink>
        ))
      }
    </div>
  );
}