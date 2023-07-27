/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ColorpaletteOverridesProps = {
    Colorpalette?: PrimitiveOverrideProps<FlexProps>;
    Color?: PrimitiveOverrideProps<ViewProps>;
    "color name"?: PrimitiveOverrideProps<FlexProps>;
    Primary?: PrimitiveOverrideProps<TextProps>;
    "Hex #CC1F20"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ColorpaletteProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ColorpaletteOverridesProps | undefined | null;
}>;
export default function Colorpalette(props: ColorpaletteProps): React.ReactElement;
