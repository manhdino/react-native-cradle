import {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {React} from 'react-native';
import {images, icons} from '../constants';
import {useEffect} from 'react';
import DetailCradle from './DetailCradle';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {dataSeclector} from '../redux/selectors';

function Home({navigation, route}) {
  const [isIdDetailCradle, setIdDetailCradle] = useState(false);
  const data = useSelector(dataSeclector);
  console.log('Data from Home:', data);
  useEffect(() => {
    if (route.params?.Id) {
      setIdDetailCradle(true);
    }
  }, [route.params?.Id]);

  useEffect(() => {
    if (route.params?.goBack) {
      setIdDetailCradle(false);
    }
  }, [route.params?.goBack]);
  return (
    <View style={{flex: 1}}>
      <ImageBackground style={{flex: 1}} source={images.background}>
        <View
          style={{
            height: 40,
            width: '100%',
            backgroundColor: '#1E90FF',
            justifyContent: 'center',
          }}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.openDrawer();
              }}>
              <Image source={icons.icon_menu} style={styles.icon_back} />
            </TouchableOpacity>
            <Image source={icons.icon_home} style={styles.icon_home_title} />
            <Text style={styles.textHeader}>HOME</Text>
          </View>
        </View>
        <View
          style={{
            marginVertical: 30,
            flex: 1,
            backgroundColor: 'white',
            borderRadius: 40,
            borderWidth: 2,
            marginHorizontal: 20,
            marginBottom: 25,
          }}>
          <View
            style={{
              height: 80,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#1E90FF',
                fontSize: 22,
                fontWeight: 'bold',
              }}>
              {' '}
              Here are your cradle specs:
            </Text>
          </View>

          {!isIdDetailCradle && (
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={data}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <DetailCradle
                  keyExtractor={item.id}
                  id={item.id}
                  fan={item.fan}
                  temp={item.temp}
                  hum={item.hum}
                  noice={item.noice}
                  angle={item.angle}
                  music={item.music}
                />
              )}
            />
          )}
          {isIdDetailCradle &&
            data.map(
              item =>
                item.id === route.params?.Id && (
                  <DetailCradle
                    key={item.id}
                    id={item.id}
                    fan={item.fan}
                    temp={item.temp}
                    hum={item.hum}
                    noice={item.noice}
                    angle={item.angle}
                    music={item.music}
                  />
                ),
            )}

          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ListCradle');
              }}
              style={styles.btnLogin}>
              <Text style={styles.TextLogin}>All Cradle</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textHeader: {
    marginHorizontal: 10,
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  icon_back: {
    marginHorizontal: 5,
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  icon_cradle: {
    marginHorizontal: 5,
    width: 35,
    height: 35,
    tintColor: 'white',
  },
  icon_home: {
    marginHorizontal: 5,
    width: 60,
    height: 60,
    tintColor: '#1E90FF',
  },
  icon_noise: {
    marginHorizontal: 5,
    width: 80,
    height: 80,
    tintColor: '#66CCFF',
  },
  icon_fan_music: {
    marginHorizontal: 5,
    width: 30,
    height: 30,
    tintColor: '#1E90FF',
  },
  icon_home_title: {
    marginLeft: 120,
    width: 25,
    height: 25,
    tintColor: 'white',
  },
  welcomeText: {
    marginTop: 20,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleText: {
    marginVertical: 10,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  btnLogin: {
    marginBottom: 40,
    borderColor: 'white',
    borderWidth: 1,
    height: 45,
    borderRadius: 25,
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E90FF',
  },
  TextLogin: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Home;
