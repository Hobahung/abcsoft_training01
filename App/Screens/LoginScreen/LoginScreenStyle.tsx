import {StyleSheet} from 'react-native';
import {Colors} from '@themes';

export default StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginTop: 54,
    resizeMode: 'contain',
  },
  contentContainer: {
    backgroundColor: Colors.White,
    width: 340,
    borderRadius: 13,
    alignItems: 'center',
    paddingVertical: 30,
  },
  textSignIn: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.Blue,
  },
  buttonSubmit: {
    backgroundColor: Colors.Blue,
    width: 171,
    height: 45,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
  },
  input: {
    marginTop: 32,
    width: 279,
    height: 45,
    borderWidth: 1,
    borderColor: Colors.Border,
    borderRadius: 5,
    paddingHorizontal: 20,
    fontWeight: '600',
    fontSize: 18,
    color: Colors.TextPrimary,
  },
  textForgotYourPassword: {
    fontSize: 16,
    color: Colors.TextPrimary,
    fontWeight: '600',
  },
});
