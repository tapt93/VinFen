import ImageSkeleton from 'components/ImageSkeleton/ImageSkeleton';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  footer: React.ReactNode;
  img: string;
  title: string;
};

const VCardNoBorder = ({ footer, img, title }: Props) => (
  <Pressable style={styles.borderRadius}>
    {img ? <Image
      style={[styles.cardImg, styles.borderRadius]}
      resizeMode="cover"
      source={{ uri: img }}
    />
      :
      <ImageSkeleton />
    }
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={styles.cardBottom}>{footer}</View>
    </View>
  </Pressable>
);

export default VCardNoBorder

const styles = StyleSheet.create({
  cardItem: {
  },
  borderRadius: {
    borderRadius: 15,
  },
  cardImg: {
    width: '100%',
    height: undefined,
    aspectRatio: 1 / 1
  },
  cardContent: {
    paddingVertical: 5,
  },
  cardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#22313f',
  }
});