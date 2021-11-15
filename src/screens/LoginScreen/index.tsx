import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import CustomButton from '../../customs/CustomButton';
import InputText from '../../customs/InputText';
import {globalColor} from '../../common/global';
import {loginImages} from '../../common/images/sources';

const index = () => {
  const refEmail = useRef();
  const [emailErrorMessage, SetEmailErrorMessage] = useState('');
  const [passErrorMessage, SetPassErrorMessage] = useState('');
  const [approved, setapproved] = useState(false);

  const onSubmitEmail = () => {};

  const onPressLogin = () => {};

  return (
    <View style={styles.containerStyle}>
      <Image style={styles.logo} source={loginImages.logo} />
      <InputText
        forwordRef={refEmail}
        label={'Email'}
        onSubmitEditing={onSubmitEmail}
        keyboardType="text"
        error={emailErrorMessage}
        maxLength={30}
      />
      <InputText
        forwordRef={refEmail}
        label={'Password'}
        onSubmitEditing={onSubmitEmail}
        keyboardType="text"
        error={passErrorMessage}
        maxLength={30}
      />
      <CustomButton
        title="Login"
        onPress={onPressLogin}
        approved={approved}
        bgColor={globalColor.gray}
        textColor={globalColor.blue}
        fontSize={20}
        width={200}
        height={50}
        borderColor={globalColor.blue}
        borderWidth={0}
      />
    </View>
  );
};

export default index;
const styles = StyleSheet.create({
  containerStyle: {
    top: 20,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  logo: {
    margin: 10,
    width: '80%',
    height: 200,
  },
});
