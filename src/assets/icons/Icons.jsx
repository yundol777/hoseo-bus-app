import styled, { useTheme } from "styled-components";
import CheckboxIcon from "./checkbox.svg";
import CheckboxIconBlue from "./checkboxBlue.svg";
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
  Checkbox: () => {
    const theme = useTheme();
    const isAsan = theme.campus === "asan";

    return (
      <BoxIconsImg
        src={isAsan ? CheckboxIcon : CheckboxIconBlue}
        alt="CheckboxIcon"
      />
    );
  },
  NonCheckbox: () => (
    <BoxIconsImg src={NonCheckboxIcon} alt="NonCheckboxIcon" />
  ),
  ChangeButton: () => (
    <ChangeBtnImg src={ChangeBtnIcon} alt="CampusChangeIcon" />
  ),
};

export default Icons;
