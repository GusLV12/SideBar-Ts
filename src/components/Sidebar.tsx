import { useState } from 'react';
import {SideBarMenuCard, SideBarMenuItems} from '../types/types';
import {classesCss} from '../utils/elements';
import { VscMenu } from 'react-icons/vsc';
import { SideBarMenuCardView } from './SideBarMenuCardView';
import { SideBarMenuItemView } from './SideBarMenuItemView';
import '../css/SideBarMenu.scss';

interface SideBarMenuProps {
  items: SideBarMenuItems[];
  card: SideBarMenuCard;
}


export const Sidebar = ({items, card}: SideBarMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const handlemenu = () => {
    setIsOpen(!isOpen)
  }

  return <div className={classesCss('SideBarMenu', isOpen ? 'expanded' : 'collapsed')}>
    <div className='menuButton'>
      <button className='hamburgerButton' onClick={handlemenu}>
        <VscMenu/>
      </button>
    </div>
    <SideBarMenuCardView card={card} isOpen={isOpen}/>
    {
      items.map(item => (
        <SideBarMenuItemView key={item.id} item={item} isOpen={isOpen}/>
      ))
    }
  </div>;
};
