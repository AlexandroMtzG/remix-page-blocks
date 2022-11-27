export interface LogoCloudsBlockDto {
  style: LogoCloudsBlockStyle | string;
  headline?: string;
  logos?: LogoCloudDto[];
}

export interface LogoCloudDto {
  src: string;
  srcDark?: string;
  alt: string;
  href: string;
}

export enum LogoCloudsBlockStyle {
  custom = "custom",
  simple = "simple",
}
