import React from "react";
import { ReactComponent as CheckboxIcon } from "./checkbox.svg";
import { ReactComponent as NonCheckboxIcon } from "./noncheckbox.svg";

const Icons = {
  Checkbox: (props) => <CheckboxIcon {...props} />,
  NonCheckbox: (props) => <NonCheckboxIcon {...props} />,
};

export default Icons;
