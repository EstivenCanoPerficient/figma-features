/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Label(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Button: {}, Label: {} },
      variantValues: { size: "Large", variations: "onPrimary" },
    },
    {
      overrides: { Button: { color: "rgba(56,56,56,1)" }, Label: {} },
      variantValues: { size: "Large", variations: "onSurface" },
    },
    {
      overrides: {
        Button: { fontSize: "16px", lineHeight: "24px" },
        Label: {},
      },
      variantValues: { size: "Medium", variations: "onPrimary" },
    },
    {
      overrides: {
        Button: {
          fontSize: "16px",
          color: "rgba(56,56,56,1)",
          lineHeight: "24px",
        },
        Label: {},
      },
      variantValues: { size: "Medium", variations: "onSurface" },
    },
    {
      overrides: {
        Button: { fontSize: "14px", lineHeight: "20px" },
        Label: {},
      },
      variantValues: { size: "Small", variations: "onPrimary" },
    },
    {
      overrides: {
        Button: {
          fontSize: "14px",
          color: "rgba(56,56,56,1)",
          lineHeight: "20px",
        },
        Label: {},
      },
      variantValues: { size: "Small", variations: "onSurface" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "Label")}
      {...rest}
    >
      <Text
        fontFamily="Lato"
        fontSize="20px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="30px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Button"
        {...getOverrideProps(overrides, "Button")}
      ></Text>
    </Flex>
  );
}
