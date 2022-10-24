import { IBreadcrumb } from "@/interfaces/IBreadcrumb";
import { BreadcrumbUI } from "./styles";

const BreadCrumb: React.FC<IBreadcrumb> = ({
  children,
}) => <BreadcrumbUI>{children}</BreadcrumbUI>;

export { BreadCrumb };
