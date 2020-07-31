"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styledComponents = require("styled-components");
function withProps(styledFunction) {
    return styledFunction;
}
exports.withProps = withProps;
var _a = styledComponents, styled = _a.default, css = _a.css, keyframes = _a.keyframes, ThemeProvider = _a.ThemeProvider;
exports.css = css;
exports.keyframes = keyframes;
exports.ThemeProvider = ThemeProvider;
exports.default = styled;
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
//# sourceMappingURL=themeTypes.js.map