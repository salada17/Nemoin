import { ThemeObject } from './themeTypes';

declare module "styled-components" {
    export interface DefaultTheme extends ThemeObject {
        name: "default";
    }
}
