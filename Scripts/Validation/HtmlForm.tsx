import * as React from "react";
import { map } from "lodash";

export namespace HtmlForm {
    "use strict";

    interface IFormField {
        name: string;
        validations: Array<any>;
    }

    interface IStateChangable {
        title?: string;
        onChange(action: any, name: string, e: Event): void;
    }

    interface IValueChangable extends IStateChangable {
        field: IFormField;
        value?: any;
    }

    interface IDisable {
        disabled?: boolean;
    }

    interface IReadOnlyable {
        readOnly?: boolean;
    }

    // label
    interface ILabelProps {
        className?: string;
        text: string;
        title?: string;
        htmlFor?: string;
    }

    interface ILabelState {
    }

    export class Label extends React.Component<ILabelProps, ILabelState> {
        constructor(props: ILabelProps) {
            super(props);
        }

        render(): JSX.Element {
            let className: string = "control-label";
            if (this.props.className) {
                className += ` ${this.props.className}`;
            }
            return <label className={className} title={this.props.title} htmlFor={this.props.htmlFor}>{this.props.text}</label>;
        }
    }

    // hidden
    interface IHiddenProps {
        field: IFormField;
        value: any;
    }

    interface IHiddenState {
    }

    export class Hidden extends React.Component<IHiddenProps, IHiddenState> {
        constructor(props: IHiddenProps) {
            super(props);
        }

        render(): JSX.Element {
            return <input
                type="hidden"
                id={this.props.field.name}
                name={this.props.field.name}
                value={this.props.value ? this.props.value : ""}
                {...this.props.field.validations} />;
        }
    };


    // checkbox
    interface ICheckBoxProps extends IStateChangable, IDisable {
        field: any;
        checked: boolean;
    }

    interface ICheckBoxState {
    }

    export class CheckBox extends React.Component<ICheckBoxProps, ICheckBoxState> {
        constructor(props: ICheckBoxProps) {
            super(props);
        }

        handleChange(action: any, name: string, e: Event): void {
            this.props.onChange(action, name, e);
        }

        render(): JSX.Element {
            return <label>
                <input
                    disabled={this.props.disabled}
                    type="checkbox"
                    id={this.props.field.name}
                    name={this.props.field.name}
                    checked={this.props.checked}
                    onChange={this.handleChange.bind(this, this.props.field.name)}
                    title={this.props.title} />
                {this.props.field.labelName}
            </label>;
        }
    }


    // textBox
    interface ITextBoxProps extends IValueChangable, IDisable, IReadOnlyable {
        placeholder?: string;
        autoComplete?: string;
        maxLength?: number;
        className?: string;
        style?: any;
        onBlur?: any;
        onKeyPress?: (e: KeyboardEvent) => void;
        onKeyUp?: (e: KeyboardEvent) => void;
        onKeyDown?: (e: KeyboardEvent) => void;
        onClick?: (e: Event) => void;
        onFocus?: (e: KeyboardEvent) => void;
    }

    interface ITextBoxState {
    }

    export class TextBox extends React.Component<ITextBoxProps, ITextBoxState> {
        constructor(props: ITextBoxProps) {
            super(props);
        }

        handleChange(action: any, name: string, e: Event): void {
            this.props.onChange(action, name, e);
        }

        handleBlur(action: any, name: string, e: Event): void {
            if (this.props.onBlur) {
                this.props.onBlur();
            }
        }

        handleKeyPress(e: KeyboardEvent): void {
            if (this.props.onKeyPress) {
                this.props.onKeyPress(e);
            }
        }

        handleKeyUp(e: KeyboardEvent): void {
            if (this.props.onKeyUp) {
                this.props.onKeyUp(e);
            }
        }

        handleKeyDown(e: KeyboardEvent): void {
            if (this.props.onKeyDown) {
                this.props.onKeyDown(e);
            }
        }

        handleClick(e: Event): void {
            if (this.props.onClick) {
                this.props.onClick(e);
            }
        }

        handleKeyFocus(e: KeyboardEvent): void {
            if (this.props.onFocus) {
                this.props.onFocus(e);
            }
        }

        render(): JSX.Element {
            let className: string = "form-control";
            if (this.props.className) {
                className += ` ${this.props.className}`;
            }
            return <input
                className={className}
                style={this.props.style}
                type="text"
                id={this.props.field.name}
                name={this.props.field.name}
                value={this.props.value ? this.props.value : ""}
                readOnly={this.props.readOnly}
                disabled={this.props.disabled}
                autoComplete={this.props.autoComplete}
                placeholder={this.props.placeholder}
                maxLength={this.props.maxLength}
                {...this.props.field.validations}
                onChange={this.handleChange.bind(this, this.props.field.name)}
                onBlur={this.handleBlur.bind(this)}
                onKeyPress={this.handleKeyPress.bind(this)}
                onKeyUp={this.handleKeyUp.bind(this)}
                onKeyDown={this.handleKeyDown.bind(this)}
                onClick={this.handleClick.bind(this)}
                onFocus={this.handleKeyFocus.bind(this)}
                title={this.props.title}
            />;
        }
    };

    export class TextBoxV2 extends TextBox {
        render(): JSX.Element {
            return <input
                className={this.props.className}
                style={this.props.style}
                type="text"
                id={this.props.field.name}
                name={this.props.field.name}
                readOnly={this.props.readOnly}
                disabled={this.props.disabled}
                autoComplete={this.props.autoComplete}
                placeholder={this.props.placeholder}
                maxLength={this.props.maxLength}
                {...this.props.field.validations}
                onChange={this.handleChange.bind(this, this.props.field.name)}
                onBlur={this.handleBlur.bind(this)}
                onKeyPress={this.handleKeyPress.bind(this)}
                onKeyUp={this.handleKeyUp.bind(this)}
                onKeyDown={this.handleKeyDown.bind(this)}
                onClick={this.handleClick.bind(this)}
                onFocus={this.handleKeyFocus.bind(this)}
                title={this.props.title}
            />;
        }
    }


    // password
    interface IPasswordProps extends IValueChangable {
        type?: string;
        autoComplete?: string;
        maxLength?: number;
        className?: string;
        onBlur?: any;
        placeholder?: string;
        isExcludeBootstrap?: boolean;
        tabIndex?: number;
    }

    interface IPasswordState {
    }

    export class Password extends React.Component<IPasswordProps, IPasswordState> {
        constructor(props: IPasswordProps) {
            super(props);
        }

        handleChange(action: any, name: string, e: Event): void {
            this.props.onChange(action, name, e);
        }

        handleBlur(action: any, name: string, e: Event): void {
            if (this.props.onBlur) {
                this.props.onBlur();
            }
        }

        render(): JSX.Element {
            let className: string = this.props.isExcludeBootstrap ? "" : "form-control";
            if (this.props.className) {
                className += ` ${this.props.className}`;
            }
            return <input
                className={className}
                type={this.props.type ? this.props.type : "password"}
                id={this.props.field.name}
                name={this.props.field.name}
                value={this.props.value}
                autoComplete={this.props.autoComplete}
                maxLength={this.props.maxLength}
                placeholder={this.props.placeholder}
                {...this.props.field.validations}
                onChange={this.handleChange.bind(this, this.props.field.name)}
                onBlur={this.handleBlur.bind(this)}
                title={this.props.title}
                tabIndex={this.props.tabIndex}
            />;
        }
    }


    // textArea
    interface ITextAreaProps extends IValueChangable {
        rows: number;
        placeholder: string;
        maxLength?: number;
        disabled?: boolean;
        className?: string;
        onBlur?: any;
        style?: any;
        isExcludeBootstrap?: boolean;
    }

    interface ITextAreaState {
    }

    export class TextArea extends React.Component<ITextAreaProps, ITextAreaState> {
        constructor(props: ITextAreaProps) {
            super(props);
        }

        handleChange(action: any, name: string, e: Event): void {
            this.props.onChange(action, name, e);
        }

        handleBlur(action: any, name: string, e: Event): void {
            if (this.props.onBlur) {
                this.props.onBlur();
            }
        }

        render(): JSX.Element {
            let className: string = this.props.isExcludeBootstrap ? "" : "form-control";
            if (this.props.className) {
                className += ` ${this.props.className}`;
            }
            return <textarea
                className={className}
                rows={this.props.rows ? this.props.rows : 3}
                id={this.props.field.name}
                name={this.props.field.name}
                value={this.props.value === null ? "" : this.props.value}
                placeholder={this.props.placeholder}
                maxLength={this.props.maxLength}
                disabled={this.props.disabled}
                {...this.props.field.validations}
                style={this.props.style}
                onChange={this.handleChange.bind(this, this.props.field.name)}
                onBlur={this.handleBlur.bind(this)}
                title={this.props.title}
            />;
        }
    }

    // select
    export interface ISelectOption {
        text: string;
        value: any;
        selected?: boolean;
    }

    interface ISelectProps extends IValueChangable, IDisable {
        className?: string;
        style?: any;
        options: Array<ISelectOption>;
        onClick?(e: Event): void;
    }

    interface ISelectState {
    }

    export class Select extends React.Component<ISelectProps, ISelectState> {
        constructor(props: ISelectProps) {
            super(props);
        }

        handleChange(action: any, name: string, e: Event): void {
            this.props.onChange(action, name, e);
        }

        handleClick(e: Event): void {
            if (this.props.onClick) {
                this.props.onClick(e);
            }
        }

        renderOptions(): {}[] {
            return map(this.props.options, (o: ISelectOption, index: number): JSX.Element => {
                return <option key={index} value={o.value}>{o.text}</option>;
            });
        }

        render(): JSX.Element {
            let className: string = "form-control";
            if (this.props.className) {
                className += ` ${this.props.className}`;
            }
            return <select
                className={className}
                id={this.props.field.name}
                name={this.props.field.name}
                style={this.props.style}
                value={this.props.value === null ? "" : this.props.value}
                disabled={this.props.disabled}
                onChange={this.handleChange.bind(this, this.props.field.name)}
                onClick={this.handleClick.bind(this)}
                title={this.props.title}>
                {this.renderOptions()}
            </select>;
        }
    }

    export class SelectV2 extends Select {
        render(): JSX.Element {
            return <select
                className={this.props.className}
                id={this.props.field.name}
                name={this.props.field.name}
                style={this.props.style}
                value={this.props.value === null ? "" : this.props.value}
                disabled={this.props.disabled}
                onChange={this.handleChange.bind(this, this.props.field.name)}
                onClick={this.handleClick.bind(this)}
                title={this.props.title}>
                {this.renderOptions()}
            </select>;
        }
    }

    // radiobox
    interface IRadioBoxProps {
        field: any;
        value: any;
        className?: string;
        onClick?(action: any, name: string, e: Event): void;
        onMouseLeave?: any;
    }

    interface IRadioBoxState {
    }

    export class RadioBox extends React.Component<IRadioBoxProps, IRadioBoxState> {
        constructor(props: IRadioBoxProps) {
            super(props);
        }

        handleClick(action: any, name: string, e: Event): void {
            if (this.props.onClick) {
                this.props.onClick(action, name, e);
            }
        }

        handleMouseLeave(action: any, name: string, e: Event): void {
            if (this.props.onMouseLeave) {
                this.props.onMouseLeave();
            }
        }

        render(): JSX.Element {
            return <span
                className={this.props.className}
                value={this.props.value ? this.props.value : ""}
                onClick={this.handleClick.bind(this, this.props.field.name)}
                onMouseLeave={this.handleMouseLeave.bind(this)}
                {...this.props.field.validations}></span>;
        }
    }
}