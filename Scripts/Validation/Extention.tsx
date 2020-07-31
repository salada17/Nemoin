import * as _ from "lodash";
import * as React from "react";

export namespace HtmlFormExtention {
    "use strict";

    interface IFileBoxProps {
        onSelectedFiles(e: any): void;
        multiple: boolean;
        buttonText?: string;
        disabled?: boolean;
        className?: string;
        onChange?: any;
        onClick?: any;
    }

    interface IFileBoxState {
    }

    export class FileBox extends React.Component<IFileBoxProps, IFileBoxState> {
        constructor(props: IFileBoxProps) {
            super(props);

            this.uid = _.uniqueId("fileBox_");
            this.inputFileRef = React.createRef();
        }

        private uid: string;
        private inputFileRef: React.RefObject<HTMLInputElement>;

        handleClick(e: Event): void {
            if (this.props.onClick) {
                this.props.onClick();
            }
        }

        handleBlur(action: any, name: string, e: Event): void {
            if (this.props.onChange) {
                this.props.onChange();
            }
        }

        handleChange(e: any): void {
            e.stopPropagation();
            e.preventDefault();

            var files: any = e.target.files || e.originalEvent.dataTransfer.files;

            if (files && files.length > 0) {
                this.props.onSelectedFiles(files);

                this.inputFileRef.current.value = null;
            }
        }

        render(): JSX.Element {
            var className: string = "btn btn-default";
            if (this.props.className) {
                className += " " + this.props.className;
            }

            return <div style={{ display: "inline-block" }}>
                <input id={this.uid} type="file" ref={this.inputFileRef} className="form-control" multiple={this.props.multiple} accept="image/jpeg,image/png"
                    style={{ display: "none" }} onClick={this.handleClick.bind(this)} onChange={this.handleChange.bind(this)} disabled={this.props.disabled} />
                <label htmlFor={this.uid}>
                    <span className={className}>
                        {this.props.buttonText ? this.props.buttonText : "파일첨부"}
                    </span>
                </label>
            </div>;
        }
    }

    interface IValidationMessageProps {
        name: string;
        isIconMode?: boolean;
    }

    interface IValidationMessageState {
    }

    export class ValidationMessage extends React.Component<IValidationMessageProps, IValidationMessageState> {
        constructor(props: IValidationMessageProps) {
            super(props);
        }

        render(): JSX.Element {
            return <span data-valmsg-for={this.props.name}
                data-valmsg-replace={this.props.isIconMode ? "false" : "true"}>{this.props.isIconMode && <span className="sg-alert"></span>}</span>;
        }
    }

    interface IValidationSummaryMessageProps {
        message: string;
    }

    interface IValidationSummaryMessageState {
    }

    class ValidationSummaryMessage extends React.Component<IValidationSummaryMessageProps, IValidationSummaryMessageState> {
        constructor(props: IValidationSummaryMessageProps) {
            super(props);
        }

        render(): JSX.Element {
            return <li>{this.props.message}</li>;
        }
    }

    interface IValidationSummaryProps {
        modelState: any;
    }

    interface IValidationSummaryState {
    }

    export class ValidationSummary extends React.Component<IValidationSummaryProps, IValidationSummaryState> {
        constructor(props: IValidationSummaryProps) {
            super(props);
        }

        renderMessages(): JSX.Element[] {
            var errorMessages: string[] = _.reduce(this.props.modelState, function (a: string[], b: string[]): string[] {
                return _.union(a, b);
            });

            return _.map(errorMessages, function (m: string, i: number): JSX.Element {
                return <ValidationSummaryMessage message={m} key={i} />;
            });
        }

        render(): JSX.Element {
            return <div data-valmsg-summary="true">
                <ul>{this.renderMessages()}</ul>
            </div>;
        }
    }

    interface IValidationSummaryV2Props {
        modelState: any;
    }

    interface IValidationSummaryV2State {
    }

    export class ValidationSummaryV2 extends React.Component<IValidationSummaryV2Props, IValidationSummaryV2State> {
        constructor(props: IValidationSummaryV2Props) {
            super(props);
        }

        renderMessages(): JSX.Element[] {
            var errorMessages: string[] = _.reduce(this.props.modelState, function (a: string[], b: string[]): string[] {
                return _.union(a, b);
            });

            return _.map(errorMessages, function (m: string, i: number): JSX.Element {
                return <ValidationSummaryMessage message={m} key={i} />;
            });
        }

        render(): JSX.Element {
            let hasError: boolean = _.keys(this.props.modelState).length > 0;
            return hasError ? <div data-valmsg-summary="false" className="validation-summary-errors">
                <ul>{this.renderMessages()}</ul>
            </div> : null;
        }
    }

    interface IValidationMessageV2Props {
        modelState: any;
        name: string;
        iconMode?: boolean;
    }

    interface IValidationMessageV2State {

    }

    export class ValidationMessageV2 extends React.Component<IValidationMessageV2Props, IValidationMessageV2State> {
        constructor(props: IValidationMessageV2Props) {
            super(props);
        }

        render(): JSX.Element {
            let keys: string[] = _.keys(this.props.modelState);

            let message: string = "";
            let hasError: boolean = _.some(keys, function (key: string): boolean {
                let hasKey: boolean = key.toLowerCase() === this.props.name.toLowerCase();

                if (hasKey) {
                    message = this.props.modelState[key][0];
                }

                return hasKey;
            }.bind(this));

            return hasError && <span className="field-validation-error" >
                {this.props.iconMode ? <span className="sg-alert" title={message}></span> : <span>{message}</span>}
            </span >
        }
    }

    interface SingleValidationFormMessageProps extends IValidationMessageV2Props {
        className: string;
    }

    export class SingleValidationFormMessage extends React.Component<SingleValidationFormMessageProps, {}> {
        constructor(props: SingleValidationFormMessageProps) {
            super(props);
        }
        
        render(): JSX.Element {
            let keys: string[] = _.keys(this.props.modelState);

            let message: string = "";
            let hasError: boolean = _.some(keys, function (key: string): boolean {

                let hasKey: boolean = key.toLowerCase() === this.props.name.toLowerCase();

                if (hasKey) {
                    message = this.props.modelState[key][0];
                } 

                return hasKey;
            }.bind(this));

            return hasError && <p className={this.props.className} dangerouslySetInnerHTML={{ __html: message }}></p>
        }
    }
}