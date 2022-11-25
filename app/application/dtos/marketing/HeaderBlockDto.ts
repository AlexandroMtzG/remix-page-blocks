import { NavbarItemDto } from "./NavbarItemDto";

export interface HeaderBlockDto {
  style: HeaderBlockStyle | string;
  links: NavbarItemDto[];
  withLogo: boolean;
  withSignInAndSignUp: boolean;
  withThemeSwitcher: boolean;
  withLanguageSwitcher: boolean;
}

export enum HeaderBlockStyle {
  simple = "simple",
}
