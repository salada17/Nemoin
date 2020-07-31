export type ThemeKeys = ThemeKey | ((string | number) & {});
export type ThemeKey = keyof ThemeObject;

export interface ThemeObject {
    color_orange_eb3024: ThemeKeys;
    color_red_fe2c54: ThemeKeys;
    color_red_f52a51: ThemeKeys;
    color_red_d01639: ThemeKeys;
    color_red_ec284e: ThemeKeys;
    color_blue_aad3ff: ThemeKeys;
    color_black_000000: ThemeKeys;
    color_black_b8bfc4: ThemeKeys;
    color_black_e0e0e0: ThemeKeys;
    color_black_f5f7f7: ThemeKeys;
    color_black_212529: ThemeKeys;
    color_black_1f2327: ThemeKeys;
    color_black_e2e7ed: ThemeKeys;
    color_black_edf0f4: ThemeKeys;
    color_black_808991: ThemeKeys;
    color_black_e8e8e8: ThemeKeys;
    color_black_eeeeee: ThemeKeys;
    color_black_rgba2: ThemeKeys;
    color_black_rgba4: ThemeKeys;
    color_white_f6f6f6: ThemeKeys;
    color_white_ffeef1: ThemeKeys;
    color_white_ffe3e9: ThemeKeys;
    color_white_ffffff: ThemeKeys;
    color_white_rgba4: ThemeKeys;
}

import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

type StyledFunction<T> = styledComponents.ThemedStyledFunction<any, ThemeObject>;

function withProps<T, U extends HTMLElement = HTMLElement>(
    styledFunction: StyledFunction<React.HTMLProps<U>>,
): StyledFunction<T & React.HTMLProps<U>> {
    return styledFunction;
}

const {
    default: styled,
    css,
    keyframes,
    ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<any>;

export { css, keyframes, ThemeProvider, withProps }
export default styled;

//function withProps<U>() {
//    return <
//        P extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
//        T extends object,
//        O extends object = {}
//    >(
//        fn: ThemedStyledFunction<P, T, O>,
//    ): ThemedStyledFunction<P & U, T, O & U> =>
//        (fn as unknown) as ThemedStyledFunction<P & U, T, O & U>;
//}