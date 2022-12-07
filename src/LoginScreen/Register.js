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
import {
  isValidEmail,
  isValidPassword,
  isValidUser,
} from '../utilies/Validations';

function Register({navigation}) {
  //State for validating:
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorUser, setErrorUser] = useState('');
  //State to store email/password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  //disable button Register
  const isValidOK = () => {
    return (
      email.length > 0 &&
      password.length > 0 &&
      user.length > 0 &&
      isValidEmail(email) === true &&
      isValidPassword(password) === true &&
      isValidUser(user) === true
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
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Image source={icons.icon_back} style={styles.icon_back} />
            </TouchableOpacity>
            <Image source={icons.icon_cradle} style={styles.icon_cradle} />
            <Text style={styles.textHeader}>Smart Cradle App</Text>
            <View style={styles.container}></View>
            <Image source={icons.icon_question} style={styles.icon_question} />
          </View>
        </View>

        <View style={styles.titleHeader}>
          <Text style={styles.titleRegister}>REGISTER</Text>
          <Text style={styles.titleTextRegister}>
            {' '}
            Please input your information
          </Text>
        </View>

        <View style={styles.input}>
          <Text style={styles.textTittleInput}>UserName: </Text>

          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={styles.textInput}
              placeholder="dinomanh_2k1"
              onChangeText={text => {
                setErrorUser(
                  isValidUser(text) === true
                    ? ' '
                    : 'User is not in correct form',
                );
                setUser(text);
              }}
              value={user}
              placeholderTextColor={'rgba(0,0,0,0.6)'}
            />
            <Icon
              name="user-circle-o"
              size={25}
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
            {errorUser}
          </Text>
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
              placeholderTextColor={'rgba(0,0,0,0.6)'}></TextInput>
            <Icon
              name="envelope"
              size={25}
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
            {errorEmail}
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
                    : 'Password must be at least one number, one upercase and lowercase letter, and at least 8 or more characters',
                );
                setPassword(text);
              }}
              value={password}
              placeholder="Enter your password"
              placeholderTextColor={'rgba(0,0,0,0.6)'}></TextInput>
            <Icon
              name="key"
              size={25}
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
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={styles.TextLogin}>Register</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
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
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#1E90FF',
    height: 40,
  },
  textHeader: {
    marginTop: 6,
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  icon_back: {
    marginHorizontal: 5,
    width: 25,
    height: 25,
    tintColor: 'white',
  },
  icon_cradle: {
    marginHorizontal: 5,
    width: 28,
    height: 28,
    tintColor: 'white',
  },
  icon_question: {
    marginRight: 5,
    width: 26,
    height: 26,
    tintColor: 'white',
  },

  //titleHeader:
  titleHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  titleRegister: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleTextRegister: {
    marginVertical: 6,
    color: 'white',
    fontSize: 16,
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
  iconOtherMethod: {
    marginTop: 10,
    marginHorizontal: 10,
  },
});

export default Register;
