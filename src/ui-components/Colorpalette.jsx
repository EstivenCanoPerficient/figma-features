/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Colorpalette(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(248,248,248,1)"
      boxShadow="0px 0px 8px rgba(0, 0, 0, 0.11999999731779099)"
      borderRadius="4px"
      padding="7px 7px 7px 7px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Colorpalette")}
      {...rest}
    >
      <View
        width="120px"
        height="120px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(204,31,32,1)"
        {...getOverrideProps(overrides, "Color")}
      ></View>
      <Flex
        gap="4px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "color name")}
      >
        <Text
          fontFamily="Lato"
          fontSize="16px"
          fontWeight="600"
          color="rgba(33,37,41,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Primary"
          {...getOverrideProps(overrides, "Primary")}
        ></Text>
        <Text
          fontFamily="Lato"
          fontSize="15px"
          fontWeight="400"
          color="rgba(33,37,41,1)"
          lineHeight="22.5px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Hex #CC1F20"
          {...getOverrideProps(overrides, "Hex #CC1F20")}
        ></Text>
      </Flex>
    </Flex>
  );
}
