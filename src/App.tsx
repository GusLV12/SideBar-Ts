import { Sidebar } from "./components/Sidebar";
import { SideBarMenuCard, SideBarMenuItems } from "./types/types";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { VscMail } from "react-icons/vsc";
import { FcAdvertising } from "react-icons/fc";

export const App = () => {
  const items: SideBarMenuItems[] = [
    {
      id: '1',
      title: 'Home',
      icon: FcAdvertising,
      url: '/'
    },
    {
      id: '2',
      title: 'About',
      icon: AiOutlineInfoCircle,
      url: '/about'
    },
    {
      id: '3',
      title: 'Contact',
      icon: VscMail,
      url: '/contact'
    }
  ];

  const card: SideBarMenuCard = {
    id: '1',
    displayName: 'John Doe',
    photoUrl: 'https://via.placeholder.com/150',
    title: 'Software Engineer',
    url: '/profile'
  };

  return (
    <>
      <Sidebar items={items} card={card}/>
    </>
  );
};
