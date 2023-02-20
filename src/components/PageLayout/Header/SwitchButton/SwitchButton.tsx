import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";

const SwitchButton = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<Language>("en");

  type Language = "en" | "ua";

  const onLanguageChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: Language
  ) => {
    if (newAlignment) {
      setLanguage(newAlignment);
    }
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <ToggleButtonGroup
      size="small"
      color="primary"
      value={language}
      exclusive={true}
      onChange={onLanguageChange}
      aria-label="Platform"
      sx={{
        color: "white",
        display: "block",
        marginLeft: { sx: 0, md: 2 },
      }}
    >
      <ToggleButton
        value="en"
        sx={{
          color: "white",
          borderColor: "white",
          "&.Mui-selected, &.Mui-selected:hover": {
            color: "blue",
            backgroundColor: "yellow",
          },
        }}
      >
        EN
      </ToggleButton>
      <ToggleButton
        value="ua"
        sx={{
          color: "white",
          borderColor: "white",
          "&.Mui-selected, &.Mui-selected:hover": {
            color: "blue",
            backgroundColor: "yellow",
          },
        }}
      >
        UA
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default SwitchButton;
