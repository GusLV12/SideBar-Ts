import { SideBarMenuItems } from "../types/types";
import { classesCss } from '../utils/elements';
import '../css/SideBarMenuItemView.scss';

interface SideBarMenuItemViewProps {
  item: SideBarMenuItems;
  isOpen: boolean;
}

export const SideBarMenuItemView = ({ item, isOpen }: SideBarMenuItemViewProps) => {
  return (
    <div className="SideBarMenuItemView">
      <a href={item.url}>
        <div className={classesCss('ItemContent', isOpen ? '' : 'collapsed')}>
          <div className="icon">
            <item.icon size="32" />
          </div>
          <span className="label">{item.title}</span>
        </div>
      {
        !isOpen ? <div className="tooltip">{item.title}</div> : null
      }
      </a>
    </div>
  );
};
