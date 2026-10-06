export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "insaitiq-theme";

/**
 * Выполняется в <head> до отрисовки, чтобы не было вспышки тёмной темы
 * у пользователей, выбравших светлую.
 */
export const themeInitScript = `try{if(localStorage.getItem("${THEME_STORAGE_KEY}")==="light"){document.documentElement.dataset.theme="light"}}catch(e){}`;
