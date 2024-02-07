import { useTranslation } from "react-i18next";
// import { useSettingsContext } from "../components/settings";
import { LangType, allLangs, defaultLang } from "./config";

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();

  // const { onChangeDirectionByLang } = useSettingsContext();

  const langStorage =
    typeof window !== "undefined" ? localStorage.getItem("i18nextLng") : "";

  const currentLang =
    allLangs.find((_lang) => _lang.value === langStorage) || defaultLang;

  const handleChangeLanguage = (newlang: LangType) => {
    i18n.changeLanguage(newlang);
    // onChangeDirectionByLang(newlang);
  };

  return {
    onChangeLang: handleChangeLanguage,
    currentLang,
    allLangs,
  };
}
