import React, { PropsWithChildren } from "react";
import { Menu, MenuButton, MenuProps } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import "./menu.css";
import classNames from "classnames";

export {
  Menu,
  ControlledMenu,
  MenuButton,
  MenuRadioGroup,
  MenuGroup,
  SubMenu,
  MenuDivider,
  MenuHeader,
  MenuItem,
  useMenuState,
} from "@szhsin/react-menu";

type DropdownMenuProps = PropsWithChildren<{
  direction: "top" | "bottom";
  text: string;
}> &
  Omit<MenuProps, "menuButton">;

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  direction,
  text,
  children,
  ...props
}) => (
  <Menu
    direction={direction}
    transition
    {...props}
    menuButton={
      <MenuButton
        className={classNames({
          [`szh-menu-button-${direction}`]: true,
        })}
      >
        {text}
      </MenuButton>
    }
  >
    {children}
  </Menu>
);

export default DropdownMenu;
