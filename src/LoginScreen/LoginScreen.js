import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {React} from 'react-native';
import {images, icons} from '../constants/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';
import {isValidEmail, isValidPassword} from '../utilies/Validations';

import {useDispatch} from 'react-redux';
import {setupServer} from '../fakeApis/index';
import {fetchData} from '../HomeScreen/HomeSlice';
import {fetchAccount} from './LoginSlice';

if (process.env.NODE_ENV === 'development') {
  setupServer();
}

function LoginScreen({navigation, route}) {
  //State for validating:
  const dispatch = useDispatch();
  const handlePressLogin = () => {
    dispatch(fetchAccount());
    dispatch(fetchData());
    navigation.navigate('HomeDrawer', {
      screen: 'Home',
    });
  };
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  //State to store email/password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  //disable Login
  const isValidOK = () => {
    return (
      email.length > 0 &&
      password.length > 0 &&
      isValidEmail(email) === true &&
      isValidPassword(password) === true
    );
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.background}
        resizeMode="cover"
        style={styles.container}>
        <View>
          <View style={styles.header}>
            <Image source={icons.icon_cradle} style={styles.icon_cradle} />
            <Text style={styles.textHeader}>Smart Cradle App</Text>
            <View style={styles.container}></View>
          </View>
        </View>

        <View style={styles.titleHeader}>
          <Text style={styles.titleText}> LOGIN</Text>
          <Text style={styles.titleInfo}> Please Input your account</Text>
        </View>

        <View style={styles.input}>
          <Text style={styles.textTittleInput}>Email: </Text>

          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.textInput}
              placeholder="Example@gmail.com"
              onChangeText={text => {
                setErrorEmail(
                  isValidEmail(text) === true
                    ? ' '
                    : 'Email is not in correct form',
                );
                setEmail(text);
              }}
              value={email}
              placeholderTextColor={'rgba(0,0,0,0.6)'}
            />
            <Icon
              name="user-circle-o"
              size={30}
              color="rgba(0,0,0,0.6)"
              style={styles.iconInput}
            />
          </View>
          <Text
            style={{
              color: '#DC143C',
              fontSize: 13,
              marginLeft: 10,
              marginTop: 5,
              fontWeight: 'bold',
            }}>
            {errorEmail}/
          </Text>
          <Text style={styles.textTittleInput}>Password: </Text>

          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              onChangeText={text => {
                setErrorPassword(
                  isValidPassword(text) == true
                    ? ' '
                    : 'Password must be at least one number and length at least 8 or more',
                );
                setPassword(text);
              }}
              value={password}
              placeholder="Enter your password"
              placeholderTextColor={'rgba(0,0,0,0.6)'}></TextInput>
            <Icon
              name="lock"
              size={30}
              color="rgba(0,0,0,0.6)"
              style={styles.iconInput}
            />
          </View>
          <Text
            style={{
              color: '#DC143C',
              fontSize: 13,
              marginLeft: 10,
              marginTop: 5,
              fontWeight: 'bold',
            }}>
            {errorPassword}
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.btnLogin}
            disabled={isValidOK() === false}
            onPress={handlePressLogin}>
            <Text style={styles.TextLogin}>LOGIN</Text>
          </TouchableOpacity>
          <Text style={styles.textRegister}>
            {' '}
            Want to Register new Account?{' '}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text style={styles.register}> Regiser</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 15,
            height: 30,
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 25,
          }}>
          <View
            style={{
              height: 2,
              backgroundColor: 'white',
              flex: 1,
              marginTop: 8,
            }}></View>
          <Text
            style={{
              marginTop: 5,
              color: 'white',
              fontSize: 14,
              alignSelf: 'center',
              marginHorizontal: 25,
            }}>
            Use other method ?
          </Text>
          <View
            style={{
              height: 2,
              backgroundColor: 'white',
              flex: 1,
              marginTop: 8,
            }}></View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="facebook-square"
            size={35}
            color="blue"
            style={styles.iconOtherMethod}
          />
          <Icon
            name="google"
            size={35}
            color="red"
            style={styles.iconOtherMethod}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //header:
  header: {
    height: 40,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textHeader: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  icon_cradle: {
    marginHorizontal: 5,
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  icon_question: {
    marginRight: 5,
    width: 25,
    height: 25,
    tintColor: 'white',
  },

  //titleHeader:
  titleHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    marginTop: 60,
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  titleInfo: {
    marginVertical: 6,
    color: 'white',
    fontSize: 14,
  },

  //input:
  input: {
    marginVertical: 5,
    marginHorizontal: 15,
  },
  iconInput: {
    position: 'absolute',
    left: 20,
    top: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTittleInput: {
    color: 'white',
    fontSize: 16,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  textInput: {
    marginTop: 8,
    color: 'black',
    marginLeft: 10,
    borderColor: 'white',
    height: 45,
    marginHorizontal: 15,
    backgroundColor: 'white',
    fontSize: 16,
    flex: 1,
    paddingLeft: 45,
    borderRadius: 30,
  },
  //login:
  btnLogin: {
    borderColor: 'white',
    borderWidth: 1,
    height: 45,
    borderRadius: 5,
    marginHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextLogin: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },

  //register:
  textRegister: {
    marginTop: 5,
    color: 'white',
    fontSize: 14,
    alignSelf: 'center',
  },
  register: {
    marginTop: 5,
    color: 'white',
    fontSize: 14,
    alignSelf: 'center',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },

  iconOtherMethod: {
    marginTop: 10,
    marginHorizontal: 10,
  },
});

export default LoginScreen;
