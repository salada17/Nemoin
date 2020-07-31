import * as React from "react";

export namespace View {
    "use strict";

    export interface IViewBaseProps {
    }

    export interface IViewBaseState {
        form: any;
        modelState: any;
        isInProgress: boolean;
    }

    export class FormViewBase<TProps extends IViewBaseProps, TState extends IViewBaseState> extends React.Component<TProps, TState> {
        constructor(props: TProps) {
            super(props);
        }

        handleChangedFields(fieldsUpdateAction: (state: TState, e?: Event) => void, action?: (state: TState, e?: Event) => void, e?: Event): void {
            fieldsUpdateAction(this.state, e);

            if (action) {
                action(this.state, e);
            }

            this.setState(this.state, this.onChangedState && this.onChangedState.bind(this));
        }

        handleChangedField(name: string, value: any, action?: (state: TState, e?: Event) => void, e?: any): void {
            //const state: TState = this.state;
            const state: any = this.state;            
            const keys: Array<string> = name.split(".");

            if (keys.length === 1) {
                state[keys[0]] = value;
            } else if (keys.length === 2) {
                state[keys[0]][keys[1]] = value;
            } else if (keys.length === 3) {
                state[keys[0]][keys[1]][keys[2]] = value;
            }

            if (action) {
                action(state, e);
            }

            this.setState(state, this.onChangedState && this.onChangedState.bind(this));
        }

        handleChangedValueField(name: string, e: any): void {
            this.handleChangedField(name, e.target.value, null, e);
        }

        handleChangedCheckField(name: string, e: any): void {
            this.handleChangedField(name, e.target.checked, null, e);
        }

        handleChangedValueFieldCustom(action: (state: TState) => void, name: string, e: any): void {
            this.handleChangedField(name, e.target.value, action, e);
        }

        handleChangedCheckFieldCustom(action: (state: TState) => void, name: string, e: any): void {
            this.handleChangedField(name, e.target.checked, action, e);
        }

        handleChangedFormField(name: string, value: any, action?: (state: TState, e?: Event) => void, e?: any): void {
            const state: TState = this.state;

            const keys: Array<string> = name.split(".");
            if (keys.length === 1) {
                state.form[keys[0]] = value;                
            } else if (keys.length === 2) {
                state.form[keys[0]][keys[1]] = value;
            } else if (keys.length === 3) {
                state.form[keys[0]][keys[1]][keys[2]] = value;
            }

            if (action) {
                action(state, e);
            }          

            this.setState(state, this.onChangedState && this.onChangedState.bind(this));
        }

        handleChangedFormValueField(name: string, e: any): void {
            this.handleChangedFormField(name, e.target.value, null, e);
        }

        handleChangedFormCheckField(name: string, e: any): void {
            this.handleChangedFormField(name, e.target.checked, null, e);
        }

        handleChangedFormValueFieldCustom(action: (state: TState) => void, name: string, e: any): void {
            this.handleChangedFormField(name, e.target.value, action, e);
        }

        handleChangedFormCheckFieldCustom(action: (state: TState) => void, name: string, e: any): void {
            this.handleChangedFormField(name, e.target.checked, action, e);
        }

        //isValidForm(refName: string): boolean {
        //    const htmlForm: React.ReactInstance = this.refs[refName];
        //    const form: JQuery = $(ReactDOM.findDOMNode<HTMLFormElement>(htmlForm));
        //    form.validate();
        //    return form.valid();
        //}

        protected onChangedState: () => any;
    }
}