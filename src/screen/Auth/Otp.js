import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import FormButton from '../../component/FormButton';
import {COLOR, HP, WP} from '../../utils/theme';

const CELL_COUNT = 4;

const OTP = () => {
  const [value, setValue] = React.useState('');
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {/* <Text style={styles.text1}>Verify Phone Number</Text> */}
        <Text style={styles.text2}>
          Code has been sent to omidioraemmanue**
        </Text>
      </View>

      <View style={styles.root}>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />

        <View style={styles.resendContainer}>
          <TouchableOpacity style={styles.confirm1}>
            <Text style={styles.confirmText}>Didn’t receive code?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.confirm2}>
            <Text style={styles.confirmText}>Change Phone Number</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formContainer}>
          <FormButton text="Submit" />
        </View>
      </View>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  subContainer: {
    alignItems: 'center',
    top: HP(15),
  },
  text1: {
    top: HP(4),
    fontSize: HP(3),
    fontWeight: 'bold',
  },
  text2: {
    top: WP(12),
    textAlign: 'center',
    width: WP(95),
    color: COLOR.grey,
  },
  root: {flex: 1, padding: HP(6)},
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  codeFieldRoot: {
    marginTop: HP(18),
  },
  cell: {
    width: WP(15),
    height: HP(8),
    lineHeight: HP(8),
    fontSize: HP(5),
    top: WP(2),
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    borderRadius: WP(2),
  },
  focusCell: {
    borderColor: COLOR.mainColor,
  },
  resendContainer: {
    top: WP(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  confirm1: {
    right: WP(5),
    backgroundColor: 'rgba(154, 23, 37, 0.1)',
    padding: WP(3),
    opacity: 0.9,
    borderRadius: WP(2),
  },
  confirmText: {
    color: COLOR.mainColor,
    fontWeight: 'bold',
  },
  confirm2: {
    marginTop: HP(1.3),
  },
  formContainer: {
    top: WP(35),
    right: WP(7),
  },
});
