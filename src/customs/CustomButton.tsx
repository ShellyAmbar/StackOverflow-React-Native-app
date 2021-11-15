import React from 'react';

import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {globalColor} from '../common/global';

type CustomButtonProps = {
  onPress: () => void;
  title: string;
  approved: boolean;
  bgColor: string;
  textColor: string;
  fontSize: number;
  width: number;
  height: number;
  borderWidth: number;
  borderColor: string;
};
const CustomButton = (props: CustomButtonProps) => (
  <TouchableOpacity
    onPress={props.onPress}
    disabled={!props.approved}
    style={{
      backgroundColor: !props.approved ? globalColor.lightGray : props.bgColor,
      elevation: 8,
      height: props.height,
      borderWidth: props.borderWidth,
      borderColor: props.borderColor,
      width: props.width,
      borderRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 12,
      justifyContent: 'center',
      alignItems: 'center',
      top: 20,
    }}>
    <Text
      style={{
        fontSize: props.fontSize,
        alignSelf: 'center',
        color: props.textColor,
      }}>
      {props.title}
    </Text>
  </TouchableOpacity>
);

export default CustomButton;

const styles = StyleSheet.create({
  appButtonContainer: {},
  appButtonText: {},
});
