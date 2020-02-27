import { SET_LOCALE, ADD_TRANSLATION, SET_TRANSLATIONS } from "./actions";
import { I18n } from "./index";

/***/
export function reducer(state = {}, action) {
  switch (action.type) {
    case SET_LOCALE:
      I18n.setLocale(action.locate);
      return {
        ...state,
        locate: action.locate
      };
    case SET_TRANSLATIONS:
      I18n.setTranslations(action.translations);
      return {
        ...state,
        translations: action.translations
      };
    case ADD_TRANSLATION:
      I18n.setTranslations({ ...state.translations, ...action.translation });
      return {
        ...state,
        translations: { ...state.translations, ...action.translation }
      };
    default:
      return state;
  }
}
