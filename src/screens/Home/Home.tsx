import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {VButton, VCard} from 'components';
import Carousel from 'react-native-snap-carousel';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Button, FlatList, ScrollView} from 'native-base';

const SIZE_ICON = 15;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Siêu phẩm thời trang từ Sơn Tùng M-TP',
    img: 'https://cdn-www.vinid.net/0347db01-dhc-539x303.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Siêu phẩm thời trang từ Sơn Tùng M-TP',
    img: 'https://cdn-www.vinid.net/0347db01-dhc-539x303.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Siêu phẩm thời trang từ Sơn Tùng M-TP',
    img: 'https://cdn-www.vinid.net/0347db01-dhc-539x303.jpg',
  },
];

const Item = ({title, img}: {title: string; img: string}) => (
  <View>
    <Text>{title}</Text>
    <Image style={styles.img} source={{uri: img}}></Image>
  </View>
);

const Home = () => {
  const renderItem = ({item}: any) => (
    <Item title={item.title} img={item.img} />
  );
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.greeting}>
          <Text style={[styles.text, styles.fs18]}>Hello Nguyễn Hà</Text>
          <Text style={styles.temperatureText}>
            Today's temperature 28°C{' '}
            <Fontisto
              name="day-cloudy"
              size={12}
              style={styles.mgr5}
              color="blue"
            />
          </Text>
        </View>

        <View style={styles.actionBarContainer}>
          <View style={styles.actionBar}>
            <Pressable style={styles.mgr5}>
              <Text style={styles.border}>
                <MaterialCommunityIcons name="currency-usd" size={SIZE_ICON} />
                <Text style={styles.text}>0</Text>
              </Text>
            </Pressable>
            <Pressable>
              <View style={styles.border}>
                <Ionicons
                  name="wallet-outline"
                  size={SIZE_ICON}
                  style={styles.mgr5}
                />
                <Text style={styles.text}>Active now</Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.actionBar}>
            <Pressable style={[styles.border, styles.mgr5]}>
              <Ionicons name="search" size={SIZE_ICON} />
            </Pressable>
            <Pressable style={styles.border}>
              <SimpleLineIcons name="handbag" size={SIZE_ICON} />
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable>
        <Image
          style={styles.img}
          source={{
            uri: 'https://cdn-www.vinid.net/b68d641d-top-banner-mobile.png',
          }}
        />
      </Pressable>

      <View style={styles.service}>
        <View style={styles.serviceTitle}>
          <Text style={[styles.text, styles.fs18]}> Service </Text>
          <Pressable>
            <Text style={styles.blue}>All</Text>
          </Pressable>
        </View>
        <View style={styles.serviceContent}>
          <View style={styles.service}>
            <Image
              source={{
                uri: 'https://cdn-www.vinid.net/69490176-vidientu-new.png',
              }}
              style={styles.imgService}></Image>
            <Text>Voucher</Text>
          </View>
          <View style={styles.service}>
            <Image
              source={{
                uri: 'https://cdn-www.vinid.net/69490176-vidientu-new.png',
              }}
              style={styles.imgService}></Image>
            <Text>Voucher</Text>
          </View>
          <View style={styles.service}>
            <Image
              source={{
                uri: 'https://cdn-www.vinid.net/69490176-vidientu-new.png',
              }}
              style={styles.imgService}></Image>
            <Text>Voucher</Text>
          </View>
          <View style={styles.service}>
            <Image
              source={{
                uri: 'https://cdn-www.vinid.net/69490176-vidientu-new.png',
              }}
              style={styles.imgService}></Image>
            <Text>Voucher</Text>
          </View>
        </View>
      </View>

      <View style={styles.hotDeal}>
        <View style={styles.serviceTitle}>
          <Text style={[styles.text, styles.fs18]}> Hot Deal </Text>
        </View>

        <View style={styles.containerHotDeal}>
          {DATA.map((item, index) => {
            return (
              <View style={styles.p5}>
                <VCard key={index} data={item} footer={<Text>abc</Text>} isBorder={true} />
              </View>
              
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center'
    padding: 15,
  },
  header: {},
  actionBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionBar: {flexDirection: 'row'},
  greeting: {
    marginBottom: 20,
  },
  img: {
    width: 347,
    height: 260,
  },
  border: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    padding: 8,
    alignSelf: 'center',
    borderColor: '#c5c5c5',
  },
  temperatureText: {
    fontSize: 10,
    color: '#c5c5c5',
  },

  mgr5: {
    marginRight: 5,
  },
  text: {
    fontWeight: '500',
    color: '#22313f',
  },
  fs18: {
    fontSize: 18,
  },
  service: {
    marginTop: 20,
  },
  imgService: {
    width: 45,
    height: 36,
  },
  serviceTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
  },
  blue: {
    color: 'blue',
  },
  hotDeal: {
    marginTop: 20,
    width: "100%"
  },
  containerHotDeal: {
    marginTop: 20,
    width: "100%",
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  p5:{
    padding: 5,
    width: "50%"
  }
});
