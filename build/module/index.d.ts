import React from "react";
declare type Tags = string[];
export interface ReactTagInputProps {
    tags: Tags;
    onChange: (tags: Tags) => void;
    input: string;
    onInput: (input: string) => void;
    placeholder?: string;
    maxTags?: number;
    validator?: (val: string) => boolean;
    editable?: boolean;
    readOnly?: boolean;
    removeOnBackspace?: boolean;
    delimiters?: [number];
}
interface State {
}
export default class ReactTagInput extends React.Component<ReactTagInputProps, State> {
    inputRef: React.RefObject<HTMLInputElement>;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onInputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    addTag: (value: string) => void;
    removeTag: (i: number) => void;
    updateTag: (i: number, value: string) => void;
    render(): JSX.Element;
}
export {};
