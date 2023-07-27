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
import { Icon } from "@aws-amplify/ui-react";
export default function Iconchevronleft(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { Iconchevronleft: {} },
      variantValues: { size: "Large", variations: "onPrimary" },
    },
    {
      overrides: {
        Iconchevronleft: {
          paths: [
            {
              d: "M9.88 1.88L8 0L0 8L8 16L9.88 14.12L3.77333 8L9.88 1.88Z",
              fill: "rgba(56,56,56,1)",
              fillRule: "nonzero",
              style: { transform: "translate(33.33%, 25%)" },
            },
          ],
        },
      },
      variantValues: { size: "Large", variations: "onSurface" },
    },
    {
      overrides: {
        Iconchevronleft: {
          width: "24px",
          height: "24px",
          viewBox: { minX: 0, minY: 0, width: 24, height: 24 },
          paths: [
            {
              d: "M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              style: { transform: "translate(33.33%, 25%)" },
            },
          ],
        },
      },
      variantValues: { size: "Medium", variations: "onPrimary" },
    },
    {
      overrides: {
        Iconchevronleft: {
          width: "24px",
          height: "24px",
          viewBox: { minX: 0, minY: 0, width: 24, height: 24 },
          paths: [
            {
              d: "M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z",
              fill: "rgba(56,56,56,1)",
              fillRule: "nonzero",
              style: { transform: "translate(33.33%, 25%)" },
            },
          ],
        },
      },
      variantValues: { size: "Medium", variations: "onSurface" },
    },
    {
      overrides: {
        Iconchevronleft: {
          width: "16px",
          height: "16px",
          viewBox: { minX: 0, minY: 0, width: 16, height: 16 },
          paths: [
            {
              d: "M4.94 0.94L4 0L0 4L4 8L4.94 7.06L1.88667 4L4.94 0.94Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              style: { transform: "translate(33.33%, 25%)" },
            },
          ],
        },
      },
      variantValues: { size: "Small", variations: "onPrimary" },
    },
    {
      overrides: {
        Iconchevronleft: {
          width: "16px",
          height: "16px",
          viewBox: { minX: 0, minY: 0, width: 16, height: 16 },
          paths: [
            {
              d: "M4.94 0.94L4 0L0 4L4 8L4.94 7.06L1.88667 4L4.94 0.94Z",
              fill: "rgba(56,56,56,1)",
              fillRule: "nonzero",
              style: { transform: "translate(33.33%, 25%)" },
            },
          ],
        },
      },
      variantValues: { size: "Small", variations: "onSurface" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Icon
      width="32px"
      height="32px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 32, height: 32 }}
      paths={[
        {
          d: "M9.88 1.88L8 0L0 8L8 16L9.88 14.12L3.77333 8L9.88 1.88Z",
          fill: "rgba(255,255,255,1)",
          fillRule: "nonzero",
          style: { transform: "translate(33.33%, 25%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Iconchevronleft")}
      {...rest}
    ></Icon>
  );
}
