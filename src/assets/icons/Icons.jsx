import styled from "styled-components";
import CheckboxIcon from "./checkbox.svg";
import NonCheckboxIcon from "./noncheckbox.svg";
import ChangeBtnIcon from "./changeBtn.svg";

const BoxIconsImg = styled.img`
  width: 12px;
  height: 12px;
`;

const ChangeBtnImg = styled.img`
  width: 16px;
  height: 16px;
`;

const Icons = {
  Checkbox: () => <BoxIconsImg src={CheckboxIcon} alt="CheckboxIcon" />,
  NonCheckbox: () => (
    <BoxIconsImg src={NonCheckboxIcon} alt="NonCheckboxIcon" />
  ),
  ChangeButton: () => (
    <ChangeBtnImg src={ChangeBtnIcon} alt="CampusChangeIcon" />
  ),
};

export default Icons;
