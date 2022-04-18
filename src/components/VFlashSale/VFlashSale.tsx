import VCard from 'components/VCard/Vcard';
import {IProduct} from 'models/Production';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
  arrFlashSale: IProduct[];
};

const VFlashSale = ({arrFlashSale}: Props) => {
  return (
    <ScrollView horizontal={true} style={styles.container}>
      <View style={styles.flashSales}>
        <View style={styles.flashSaleItem}>
          <View style={styles.adFlashSale}>
            <View style={styles.cardHeader}>
              <AntDesign name="tagso" size={30} style={[styles.colorYellow]} />
              <View style={styles.iconText}>
                <Text style={[styles.iconTag, styles.colorYellow]}>VINID</Text>
                <Text style={[styles.iconTag, styles.colorYellow]}>
                  Giá sốc
                </Text>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.textFlashSale}>
                Ưu đãi ngập tràn cùng cô vàn sản phẩm giá tốt từ VinID
              </Text>
            </View>
          </View>
        </View>
        {/* <View > */}
        {arrFlashSale.map(({img, title}, index) => {
          return (
            <View style={styles.flashSaleItem} key={index}>
              <VCard
                img={img}
                title={title}
                footer={<Text>abc</Text>}
                isFlashSale={true}
              />
            </View>
          );
        })}
        {/* </View> */}
      </View>
    </ScrollView>
  );
};

export default VFlashSale;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  flashSales: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  flashSaleItem: {
    padding: 5,
    width: '8%',
    height: '100%',
  },
  adFlashSale: {
    backgroundColor: '#dc2323',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#c5c5c5',
    marginBottom: 0,
    padding: 8,
    height: '100%',
  },
  textFlashSale: {
    color: '#fff',
    fontSize: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  colorYellow: {
    color: 'yellow',
  },
  iconTag: {
    fontSize: 16,
  },
  iconText: {
    color: 'yellow',
    transform: [{rotate: '5deg'}],
  },
  p5: {
    padding: 5,
    width: '50%',
  },
});
