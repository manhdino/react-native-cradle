import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {icons} from '../constants/index';
import Slider from '@react-native-community/slider';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {userInfoSelector} from '../redux/selectors';

function CustomDrawer({navigation}) {
  const [isEnabledNoti, setEnabledNoti] = useState(true);
  const [isEnabledSound, setEnabledSound] = useState(true);
  const account = useSelector(userInfoSelector);
  return (
    <View>
      {/* Header:  UserInfo */}
      <View>
        <View style={styles.header}>
          <Text style={styles.textHeader}>User Info</Text>
        </View>
      </View>

      {/* Account */}
      <View style={styles.accountContainer}>
        <Image source={icons.icon_user} style={styles.icon_user} />
        <View style={styles.container}>
          <Text style={styles.textUsername}>{account.username}</Text>
          <Text style={styles.textEmail}>{account.email}</Text>
        </View>
      </View>

      <View style={styles.notiContainer}>
        {/* Notification */}
        <View style={styles.notiHeader}>
          <Image
            source={icons.icon_notification}
            style={styles.icon_notiHeader}
          />
          <Text style={styles.notiTextHeader}>Notification</Text>
        </View>

        <View style={{marginTop: 20, marginLeft: 36, flexDirection: 'row'}}>
          <View>
            <Text
              style={{
                color: 'rgba(0,0,0,0.6)',
                fontSize: 14,
                marginHorizontal: 10,
                fontWeight: 'bold',
              }}>
              Notification?
            </Text>
            <Text
              style={{
                color: 'rgba(0,0,0,0.6)',
                fontSize: 10,
                marginHorizontal: 10,
              }}>
              Automatically receive notification
            </Text>
          </View>

          <View style={{flex: 1}}></View>
          <Switch
            trackColor={{false: '#767577', true: '#99CCCC'}}
            thumbColor={isEnabledNoti ? 'blue' : '#f4f3f4'}
            onValueChange={() => {
              setEnabledNoti(!isEnabledNoti);
            }}
            value={isEnabledNoti}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 36,
          }}>
          <Text
            style={{
              color: 'rgba(0,0,0,0.6)',
              fontSize: 14,
              marginHorizontal: 10,
              fontWeight: 'bold',
            }}>
            How often?
          </Text>
          <Text
            style={{
              color: 'rgba(0,0,0,0.6)',
              fontSize: 10,
              marginHorizontal: 10,
            }}>
            Every hour
          </Text>
        </View>
        <View
          style={{
            marginTop: 15,
            height: 1,
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}></View>
      </View>
      <View style={{height: 350}}>
        <View
          style={{
            marginVertical: 15,
            flexDirection: 'row',
          }}>
          <Image source={icons.icon_sound} style={styles.icon_sound}></Image>
          <Text
            style={{
              color: 'blue',
              fontSize: 16,
              marginHorizontal: 5,
              fontWeight: 'bold',
            }}>
            Sound
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              color: 'rgba(0,0,0,0.6)',
              fontSize: 14,
              marginLeft: 46,
              fontWeight: 'bold',
            }}>
            Allow sound?
          </Text>
          <View style={{flex: 1}}></View>
          <View>
            <Switch
              trackColor={{false: '#767577', true: '#99CCCC'}}
              thumbColor={isEnabledSound ? 'blue' : '#f4f3f4'}
              onValueChange={() => {
                setEnabledSound(!isEnabledSound);
              }}
              value={isEnabledSound}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              color: 'rgba(0,0,0,0.6)',
              fontSize: 14,
              marginLeft: 46,
              fontWeight: 'bold',
            }}>
            Sound volume
          </Text>
        </View>
        <Slider
          style={{marginLeft: 35, width: 200, height: 40}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="rgba(0,0,0,0.6)"
          maximumTrackTintColor="blue"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.closeDrawer(), navigation.goBack();
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={icons.icon_logout}
                style={styles.icon_logout}></Image>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
                Sign out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 40,
    width: '100%',
    backgroundColor: '#1E90FF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textHeader: {
    marginLeft: 5,
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  accountContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginRight: 20,
  },
  textUsername: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.6)',
  },
  textEmail: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.6)',
  },

  notiContainer: {
    marginTop: 30,
    height: 150,
  },
  notiHeader: {
    flexDirection: 'row',
  },
  icon_notiHeader: {
    marginHorizontal: 10,
    width: 20,
    height: 20,
    tintColor: 'blue',
  },
  notiTextHeader: {
    color: 'blue',
    fontSize: 16,
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
  icon_cradle: {
    marginHorizontal: 5,
    width: 33,
    height: 33,
    tintColor: 'white',
  },
  icon_question: {
    marginRight: 5,
    width: 25,
    height: 25,
    tintColor: 'white',
  },
  icon_user: {
    marginHorizontal: 10,
    width: 90,
    height: 90,
    tintColor: 'rgba(0,0,0,0.6)',
  },

  icon_sound: {
    marginHorizontal: 10,
    width: 20,
    height: 20,
    tintColor: 'blue',
  },
  icon_logout: {
    marginHorizontal: 10,
    width: 35,
    height: 35,
    tintColor: 'rgba(0,0,0,0.6)',
  },
});

export default CustomDrawer;
