import { SideBarMenuCard } from "../types/types"
import {classesCss} from '../utils/elements';
import '../css/SideBarMenuCardView.scss';

interface SideBarMenuCardViewProps {
  card: SideBarMenuCard;
  isOpen: boolean;
}

export const SideBarMenuCardView = ({card, isOpen}: SideBarMenuCardViewProps) => {
  return (
    <div className="SideBarMenuCardView">
      <img className="profile" src={card.photoUrl} alt={card.title} width="100%"/>
      <div className={classesCss("profileInfo", isOpen ? '' : 'collapsed')}>
        <div className="name">{card.displayName}</div>
        <div className="title">{card.title}</div>
        <div className="url"><a href={card.url}>Ir al perfil</a></div>
      </div>
    </div>
  )
}
