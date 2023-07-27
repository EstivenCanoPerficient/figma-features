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
import Iconchevronleft from "./Iconchevronleft";
import Label from "./Label";
import { Flex } from "@aws-amplify/ui-react";
export default function Button(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Icon-chevron_left33263050": {},
        label: {},
        "Icon-chevron_left33263052": {},
        Button: {},
      },
      variantValues: {
        variation: "Primary",
        leftIconHidden: "false",
        rightIconHidden: "false",
      },
    },
    {
      overrides: {
        "Icon-chevron_left33263050": {},
        label: {},
        "Icon-chevron_left33263052": { display: "none" },
        Button: {},
      },
      variantValues: {
        variation: "Primary",
        leftIconHidden: "false",
        rightIconHidden: "true",
      },
    },
    {
      overrides: {
        "Icon-chevron_left33263050": { display: "none" },
        label: {},
        "Icon-chevron_left33263052": { display: "none" },
        Button: {},
      },
      variantValues: {
        variation: "Primary",
        leftIconHidden: "true",
        rightIconHidden: "true",
      },
    },
    {
      overrides: {
        "Icon-chevron_left33263050": { display: "none" },
        label: {},
        "Icon-chevron_left33263052": {},
        Button: {},
      },
      variantValues: {
        variation: "Primary",
        leftIconHidden: "true",
        rightIconHidden: "false",
      },
    },
    {
      overrides: {
        "Icon-chevron_left33263050": {},
        label: {},
        "Icon-chevron_left33263052": {},
        Button: { backgroundColor: "rgba(56,56,56,1)" },
      },
      variantValues: {
        variation: "Secondary",
        leftIconHidden: "false",
        rightIconHidden: "false",
      },
    },
    {
      overrides: {
        "Icon-chevron_left33263050": {},
        label: {},
        "Icon-chevron_left33263052": { display: "none" },
        Button: { backgroundColor: "rgba(56,56,56,1)" },
      },
      variantValues: {
        variation: "Secondary",
        leftIconHidden: "false",
        rightIconHidden: "true",
      },
    },
    {
      overrides: {
        "Icon-chevron_left33263050": { display: "none" },
        label: {},
        "Icon-chevron_left33263052": { display: "none" },
        Button: { backgroundColor: "rgba(56,56,56,1)" },
      },
      variantValues: {
        variation: "Secondary",
        leftIconHidden: "true",
        rightIconHidden: "true",
      },
    },
    {
      overrides: {
        "Icon-chevron_left33263050": { display: "none" },
        label: {},
        "Icon-chevron_left33263052": {},
        Button: { backgroundColor: "rgba(56,56,56,1)" },
      },
      variantValues: {
        variation: "Secondary",
        leftIconHidden: "true",
        rightIconHidden: "false",
      },
    },
    {
      overrides: {
        "Icon-chevron_left33263050": { variations: "onSurface" },
        label: { variations: "onSurface" },
        "Icon-chevron_left33263052": { variations: "onSurface" },
        Button: {
          borderRadius: "5.200000047683716px",
          backgroundColor: "rgba(255,255,255,1)",
          border: "1.2px SOLID rgba(56,56,56,1)",
        },
      },
      variantValues: {
        variation: "test",
        leftIconHidden: "false",
        rightIconHidden: "false",
      },
    },
    {
      overrides: {
        "Icon-chevron_left33263050": { variations: "onSurface" },
        label: { variations: "onSurface" },
        "Icon-chevron_left33263052": {
          display: "none",
          variations: "onSurface",
        },
        Button: {
          borderRadius: "5.200000047683716px",
          backgroundColor: "rgba(255,255,255,1)",
          border: "1.2px SOLID rgba(56,56,56,1)",
        },
      },
      variantValues: {
        variation: "test",
        leftIconHidden: "false",
        rightIconHidden: "true",
      },
    },
    {
      overrides: {
        "Icon-chevron_left33263050": {
          display: "none",
          variations: "onSurface",
        },
        label: { variations: "onSurface" },
        "Icon-chevron_left33263052": {
          display: "none",
          variations: "onSurface",
        },
        Button: {
          borderRadius: "5.200000047683716px",
          backgroundColor: "rgba(255,255,255,1)",
          border: "1.2px SOLID rgba(56,56,56,1)",
        },
      },
      variantValues: {
        variation: "test",
        leftIconHidden: "true",
        rightIconHidden: "true",
      },
    },
    {
      overrides: {
        "Icon-chevron_left33263050": {
          display: "none",
          variations: "onSurface",
        },
        label: { variations: "onSurface" },
        "Icon-chevron_left33263052": { variations: "onSurface" },
        Button: {
          borderRadius: "5.200000047683716px",
          backgroundColor: "rgba(255,255,255,1)",
          border: "1.2px SOLID rgba(56,56,56,1)",
        },
      },
      variantValues: {
        variation: "test",
        leftIconHidden: "true",
        rightIconHidden: "false",
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="8px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      borderRadius="4px"
      padding="16px 24px 16px 24px"
      backgroundColor="rgba(204,31,32,1)"
      display="flex"
      {...getOverrideProps(overrides, "Button")}
      {...rest}
    >
      <Iconchevronleft
        width="32px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        size="Large"
        variations="onPrimary"
        {...getOverrideProps(overrides, "Icon-chevron_left33263050")}
      ></Iconchevronleft>
      <Label
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        size="Large"
        variations="onPrimary"
        {...getOverrideProps(overrides, "label")}
      ></Label>
      <Iconchevronleft
        width="32px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        size="Large"
        variations="onPrimary"
        {...getOverrideProps(overrides, "Icon-chevron_left33263052")}
      ></Iconchevronleft>
    </Flex>
  );
}
