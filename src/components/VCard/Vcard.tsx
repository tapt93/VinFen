import {Center, Skeleton, VStack} from 'native-base';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

type Props = {
  footer: React.ReactNode;
  img: string;
  title: string;
  isFlashSale: boolean;
};

const VCard = ({footer, img, title, isFlashSale}: Props) => {
  return (
    <Pressable style={[styles.card]}>
      <View style={[styles.cardContainer]}>
        {isFlashSale ? (
          <View style={[styles.flashSale]}>
            <Text style={{color: 'white'}}>02:07:00</Text>
          </View>
        ) : null}
        {img ? (
          <Image style={[styles.cardImg]} source={{uri: img}}></Image>
        ) : (
          <Center w="100%">
            <VStack
              w="90%"
              maxW="400"
              borderWidth="1"
              space={8}
              overflow="hidden"
              rounded="md"
              _dark={{
                borderColor: 'coolGray.500',
              }}
              _light={{
                borderColor: 'coolGray.200',
              }}>
              <Skeleton h="40" />
              <Skeleton.Text px="4" />
              <Skeleton px="4" my="4" rounded="md" startColor="primary.100" />
            </VStack>
          </Center>
        )}
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{title}</Text>
          <View style={styles.cardBottom}>{footer}</View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#c5c5c5',
  },
  cardContainer: {
    position: 'relative',
  },
  flashSale: {
    position: 'absolute',
    top: 10,
    borderWidth: 1,
    zIndex: 1,
    backgroundColor: '#030435',
    padding: 2,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  cardImg: {
    flex: 1,
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  cardContent: {
    padding: 5,
  },
  cardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    borderWidth: 1,
    borderRadius: 15,
    padding: 2,
    alignSelf: 'center',
    backgroundColor: '#dc2323',
    borderColor: '#dc2323',
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#22313f',
  },
  subTitle: {
    fontSize: 11,
    color: '#3c3d48',
  },
  mgr5: {
    marginRight: 5,
  },
});
export default VCard;
