import { SET_LOCALE, ADD_TRANSLATION, SET_TRANSLATIONS } from "./actions";
import { setLocale, setTranslations } from "./index";

/***/
export function reducer(state = {}, action) {
  switch (action.type) {
    case SET_LOCALE:
      setLocale(action.locate);
      return {
        ...state,
        locate: action.locate
      };
    case SET_TRANSLATIONS:
      setTranslations(action.translations);
      return {
        ...state,
        translations: action.translations
      };
    case ADD_TRANSLATION:
      setTranslations({ ...state.translations, ...action.translation });
      return {
        ...state,
        translations: { ...state.translations, ...action.translation }
      };
    default:
      return state;
  }
}
