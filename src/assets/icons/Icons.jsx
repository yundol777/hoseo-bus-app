import styled from "styled-components";
import CheckboxIcon from "./checkbox.svg";
import NonCheckboxIcon from "./noncheckbox.svg";

const IconsImg = styled.img`
  width: 12px;
  height: 12px;
`;

const Icons = {
  Checkbox: () => <IconsImg src={CheckboxIcon} alt="CheckboxIcon" />,
  NonCheckbox: () => <IconsImg src={NonCheckboxIcon} alt="NonCheckboxIcon" />,
};

export default Icons;
