import {useState} from 'react';
import {Text, View, StyleSheet, Image, Switch} from 'react-native';
import {React} from 'react-native';
import {icons} from '../constants';
import {useDispatch} from 'react-redux';
import {ChangeFanStatus, ChangeMusicStatus} from './HomeSlice';

function DetailCradle({id, fan, temp, hum, noice, angle, music}) {
  const [isEnabledFan, setEnabledFan] = useState(fan);
  const [isEnabledMusic, setEnabledMusic] = useState(music);
  const dispatch = useDispatch();
  const handleChangeFan = () => {
    setEnabledFan(!isEnabledFan);
    dispatch(ChangeFanStatus(id));
  };
  const handleChangeMusic = () => {
    setEnabledMusic(!isEnabledMusic);
    dispatch(ChangeMusicStatus(id));
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 40,
        borderWidth: 4,
        marginHorizontal: 20,
        marginBottom: 20,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#1E90FF',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Cradle{id}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <View
          style={{
            marginLeft: 45,
            height: 100,
            width: 100,
          }}>
          <Image
            source={icons.icon_temperature}
            style={styles.icon_home}></Image>
          <Text
            style={{
              marginLeft: 18,
              fontSize: 17,
              fontWeight: 'bold',
            }}>
            {temp}
          </Text>
        </View>
        <View style={{flex: 1}} />
        <View
          style={{
            marginRight: 40,
            height: 100,
            width: 100,
          }}>
          <Image source={icons.icon_humidity} style={styles.icon_home}></Image>
          <Text
            style={{
              marginLeft: 22,
              fontSize: 17,
              fontWeight: 'bold',
            }}>
            {hum}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <View
          style={{
            marginLeft: 54,
            height: 100,
            width: 100,
          }}>
          <Image source={icons.icon_noise} style={styles.icon_home}></Image>
          <Text
            style={{
              marginTop: 5,
              fontSize: 17,
              fontWeight: 'bold',
            }}>
            {noice}
          </Text>
        </View>
        <View style={{flex: 1}} />
        <View
          style={{
            marginRight: 40,
            height: 100,
            width: 100,
          }}>
          <Image
            source={icons.icon_cradle_home}
            style={styles.icon_home}></Image>
          <Text
            style={{
              marginTop: 5,
              marginLeft: 22,
              fontSize: 17,
              fontWeight: 'bold',
            }}>
            {angle}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginLeft: 10,
          marginVertical: 20,
          flexDirection: 'row',
          height: 50,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={icons.icon_fan} style={styles.icon_fan_music}></Image>
        <Text
          style={{
            marginLeft: 5,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Open fan
        </Text>
        <View style={{flex: 1}}></View>
        <Switch
          trackColor={{false: '#767577', true: '#99CCCC'}}
          thumbColor={isEnabledFan ? 'blue' : '#f4f3f4'}
          onValueChange={handleChangeFan}
          value={isEnabledFan}
          style={{
            marginRight: 20,
          }}
        />
      </View>
      <View
        style={{
          marginLeft: 10,
          flexDirection: 'row',
          height: 50,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={icons.icon_music} style={styles.icon_fan_music}></Image>
        <Text
          style={{
            marginLeft: 5,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Open music
        </Text>
        <View style={{flex: 1}}></View>
        <Switch
          trackColor={{false: '#767577', true: '#99CCCC'}}
          thumbColor={isEnabledMusic ? 'blue' : '#f4f3f4'}
          onValueChange={handleChangeMusic}
          value={isEnabledMusic}
          style={{
            marginRight: 20,
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  icon_home: {
    marginHorizontal: 5,
    width: 60,
    height: 60,
    tintColor: '#1E90FF',
  },
  icon_fan_music: {
    marginHorizontal: 5,
    width: 30,
    height: 30,
    tintColor: '#1E90FF',
  },
});

export default DetailCradle;
