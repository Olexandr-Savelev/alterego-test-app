import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";

const SwitchButton = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState<Language>("uk");

  type Language = "en" | "uk";

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
        value="uk"
        sx={{
          color: "white",
          borderColor: "white",
          "&.Mui-selected, &.Mui-selected:hover": {
            color: "blue",
            backgroundColor: "yellow",
          },
        }}
      >
        UK
      </ToggleButton>
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
    </ToggleButtonGroup>
  );
};

export default SwitchButton;
