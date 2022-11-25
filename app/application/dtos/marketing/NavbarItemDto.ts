export interface NavbarItemDto {
  id?: string;
  title: string;
  path?: string;
  description?: string;
  className?: string;
  target?: string;
  items?: NavbarItemDto[];
}
