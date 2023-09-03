import { type HTMLAttributes } from "react";
import {
  library,
  type IconName,
  findIconDefinition,
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far);

export type IconProps = HTMLAttributes<SVGSVGElement> & {
  name: IconName;
  variant?: "solid" | "outline";
};

export const Icon = ({ name, variant = "solid", ...props }: IconProps) => {
  return (
    <FontAwesomeIcon
      {...props}
      icon={findIconDefinition({
        prefix: variant === "solid" ? "fas" : "far",
        iconName: name,
      })}
    />
  );
};
