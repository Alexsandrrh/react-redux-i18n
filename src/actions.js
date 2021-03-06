// Actions types
/**
 * @param type {String}
 * @return {String}
 * */
const type = type => `@i18n/${type}`;

export const SET_LOCALE = type(`SET_LOCALE`);
export const SET_TRANSLATIONS = type(`SET_TRANSLATIONS`);
export const ADD_TRANSLATION = type(`ADD_TRANSLATION`);

/**
 * @name setLocale
 * @param locale {String}
 * @return {Object}
 * */
const setLocale = locale => dispatch => dispatch({ type: SET_LOCALE, locale });

/**
 * @name setTranslations
 * @param translations {Object}
 * @return {Object}
 * */
const setTranslations = translations => dispatch =>
  dispatch({
    type: SET_TRANSLATIONS,
    translations
  });

/**
 * @name addTranslation
 * @param translation {Object}
 * @return {Object}
 * */
const addTranslation = translation => dispatch =>
  dispatch({
    type: ADD_TRANSLATION,
    translation
  });

export const i18nActions = { setLocale, setTranslations, addTranslation };
