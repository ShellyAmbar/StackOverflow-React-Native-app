import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {OutlinedTextField} from 'rn-material-ui-textfield';
import {globalColor} from '../common/global';

type InputTextProps = {
  label: String;
  error: String;
  forwordRef: any;
  onSubmitEditing: () => void;
  keyboardType: string;
  maxLength: number;
};

const InputText = (props: InputTextProps) => {
  return (
    <OutlinedTextField
      label={props.label}
      keyboardType={props.keyboardType}
      tintColor={globalColor.blue}
      ref={props.forwordRef}
      error={props.error}
      style={styles.input}
      maxLength={props.maxLength}
      errorColor={globalColor.error}
      containerStyle={styles.containerStyle}
      onSubmitEditing={props.onSubmitEditing}
      returnKeyType="done"
      // inputAccessoryViewID="done"
    />
  );
};

export default InputText;

const styles = StyleSheet.create({
  input: {fontSize: 20},
  containerStyle: {
    width: '100%',
    top: 20,
    padding: 15,
  },
});
