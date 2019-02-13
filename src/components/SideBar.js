import React from "react";
import { SideNav, SideNavItem, Button } from "react-materialize";
import logo from "../imagens/logo.png";

const imagem = logo;
console.log(typeof logo);
const Sidebar = () => {
    return (
        <SideNav
            fixed={true}
            trigger={<Button>SIDE NAV DEMO</Button>}
            options={{ closeOnClick: false }}
        >
            <SideNavItem
                userView
                user={{
                    background: imagem,
                    image: 'https://media.licdn.com/dms/image/C4E03AQGBWEDrA-ihBg/profile-displayphoto-shrink_200_200/0?e=1551916800&v=beta&t=F8Aa3hax_3zoIgMuDD4G4ff0qIIzuMrD09zex_9_qog',
                    name: "John Doe",
                    email: "jdandturk@gmail.com"
                }}
            />
            <SideNavItem href="#!icon" icon="cloud">
                First Link With Icon
            </SideNavItem>
            <SideNavItem href="#!second">Second Link</SideNavItem>
            <SideNavItem divider />
            <SideNavItem subheader>Subheader</SideNavItem>
            <SideNavItem waves href="#!third">
                Third Link With Waves
            </SideNavItem>
        </SideNav>
    );
};

export default Sidebar;
