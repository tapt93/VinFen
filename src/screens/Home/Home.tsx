import {TitleCategory, VCard, VFlashSale} from 'components';
import {ScrollView} from 'native-base';
import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {IProduct} from 'models/Production';

const SIZE_ICON = 15;

const listProduct: IProduct[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Siêu phẩm thời trang từ Sơn Tùng M-TP',
    img: 'https://cdn-www.vinid.net/0347db01-dhc-539x303.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Siêu phẩm thời trang từ Sơn Tùng M-TP',
    img: 'https://cdn-www.vinid.net/713c859b-oedo-web.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Siêu phẩm thời trang từ Sơn Tùng M-TP',
    img: 'https://cdn-www.vinid.net/2020/03/20200327_AppVinID_BannerWeb_DuyenSpa-1024x576.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Siêu phẩm thời trang từ Sơn Tùng M-TP',
    img: 'https://cdn-www.vinid.net/2de2ec61-untitled-1-539x303.jpg',
  },
];

const listService = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Voucher',
    img: 'https://cdn-www.vinid.net/43f90829-voucher-new.png',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'WinMart',
    img: 'https://cdn-www.vinid.net/79ae887d-muasam-new.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'VinID',
    img: 'https://cdn-www.vinid.net/ed75bc1c-diemvinid-new.png',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Housing',
    img: 'https://cdn-www.vinid.net/21fb7033-hoadon-new.png',
  },
];

const Home = ({navigation}: any) => {
  console.log(navigation);

  return (
    <SafeAreaView style={styles.containerSafeAreaView}>
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
                  <MaterialCommunityIcons
                    name="currency-usd"
                    size={SIZE_ICON}
                  />
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

        {/* Service session */}
        <View style={styles.service}>
          <TitleCategory
            footer={
              <Pressable>
                <Text style={{color: 'blue'}}>All</Text>
              </Pressable>
            }>
            Service
          </TitleCategory>
          <View style={styles.serviceContent}>
            {listService.map(({img, title}, index) => {
              return (
                <View key={index} style={styles.serviceItem}>
                  <Image
                    source={{
                      uri: img,
                    }}
                    style={styles.imgService}
                  />
                  <Text>{title}</Text>
                </View>
              );
            })}
          </View>
          <VFlashSale arrFlashSale={listProduct} />
        </View>

        {/* Hot Deal session */}
        <View style={styles.hotDeal}>
          <TitleCategory footer={null}>Hot Deal</TitleCategory>

          <View style={styles.containerHotDeal}>
            {listProduct.map(({img, title}, index) => {
              return (
                <View style={styles.p5} key={index}>
                  <VCard
                    img={img}
                    title={title}
                    footer={
                      <View style={styles.cardFooter}>
                        <MaterialCommunityIcons
                          name="star-outline"
                          size={10}
                        />
                        <Text>Mua ngay</Text>
                      </View>
                    }
                    isFlashSale={false}
                  />
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  containerSafeAreaView: {
    flex: 1,
  },
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
    color: '#767676',
  },

  mgr5: {
    marginRight: 5,
  },

  imgService: {
    width: 45,
    height: 36,
  },
  serviceContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 10,
  },
  service: {
    marginTop: 20,
  },
  serviceItem: {
    marginTop: 20,
    alignItems: 'center',
  },

  hotDeal: {
    marginTop: 20,
    width: '100%',
  },
  containerHotDeal: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  p5: {
    padding: 5,
    width: '50%',
  },
  fs18: {
    fontSize: 18,
  },
  text: {
    fontWeight: '500',
    color: '#22313f',
  },
  cardFooter:{
    flexDirection: 'row',
  }
});
