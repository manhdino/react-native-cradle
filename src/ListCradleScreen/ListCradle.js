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
import {useSelector} from 'react-redux';
import {dataSeclector} from '../redux/selectors';
function Home({navigation}) {
  const Info = useSelector(dataSeclector);
  console.log('List Cradle:', Info.length);
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
                navigation.navigate('HomeDrawer', {
                  params: {goBack: true},
                  screen: 'Home',
                });
              }}>
              <Image
                source={icons.icon_back}
                style={styles.icon_question}></Image>
            </TouchableOpacity>
            <Text style={styles.textHeader}>Smart Cradle App</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.textTitle}>List Cradle</Text>
        </View>

        <View
          style={{
            marginVertical: 30,
            flex: 1,
            backgroundColor: '#EEEEEE',
            borderRadius: 40,
            borderWidth: 3,
            marginHorizontal: 20,
            marginBottom: 80,
          }}>
          <View>
            {Info.map(item => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    navigation.navigate('HomeDrawer', {
                      params: {Id: item.id},
                      screen: 'Home',
                    });
                  }}
                  style={styles.btnLogin}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        marginLeft: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#53d6f2',
                        width: 40,
                        height: 40,
                        borderRadius: 15,
                      }}>
                      <Text style={styles.TextLogin}>0{item.id}</Text>
                    </View>
                    <Text
                      style={{
                        marginLeft: 20,
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>
                      Cradle {item.id}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
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
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  textTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  icon_back: {
    marginHorizontal: 5,
    width: 20,
    height: 20,
    tintColor: 'white',
  },
  icon_question: {
    marginRight: 5,
    width: 30,
    height: 30,
    tintColor: 'white',
  },
  icon_home_title: {
    marginLeft: 120,
    width: 25,
    height: 25,
    tintColor: 'white',
  },
  btnLogin: {
    // flexDirection: 'row',
    marginVertical: 10,
    height: 45,
    borderRadius: 28,
    marginHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor: '#fff'
    backgroundColor: 'white',
  },
  TextLogin: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Home;
