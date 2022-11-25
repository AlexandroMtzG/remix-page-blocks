import BreadcrumbSimple from "~/components/ui/breadcrumbs/BreadcrumbSimple";

interface Props {
  items: { title: string; routePath: string }[];
}

export default function DocBreadcrumb({ items }: Props) {
  return <BreadcrumbSimple menu={[{ title: "Docs", routePath: "/docs" }, ...items]} />;
}
