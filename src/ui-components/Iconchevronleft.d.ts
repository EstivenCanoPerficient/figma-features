/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IconchevronleftOverridesProps = {
    Iconchevronleft?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type IconchevronleftProps = React.PropsWithChildren<Partial<IconProps> & {
    size?: "Large" | "Medium" | "Small";
    variations?: "onPrimary" | "onSurface";
} & {
    overrides?: IconchevronleftOverridesProps | undefined | null;
}>;
export default function Iconchevronleft(props: IconchevronleftProps): React.ReactElement;
