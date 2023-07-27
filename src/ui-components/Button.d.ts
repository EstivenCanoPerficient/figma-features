/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconchevronleftProps } from "./Iconchevronleft";
import { LabelProps } from "./Label";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ButtonOverridesProps = {
    Button?: PrimitiveOverrideProps<FlexProps>;
    "Icon-chevron_left33263050"?: IconchevronleftProps;
    label?: LabelProps;
    "Icon-chevron_left33263052"?: IconchevronleftProps;
} & EscapeHatchProps;
export declare type ButtonProps = React.PropsWithChildren<Partial<FlexProps> & {
    leftIconHidden?: "false" | "true";
    rightIconHidden?: "false" | "true";
    variation?: "Primary" | "Secondary" | "test";
} & {
    overrides?: ButtonOverridesProps | undefined | null;
}>;
export default function Button(props: ButtonProps): React.ReactElement;
