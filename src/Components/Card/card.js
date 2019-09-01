import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Text, View, Card, CardItem} from 'native-base';
import StarRating from 'react-native-star-rating';

// רכיב קלפ של סדרה
const CardView = show => {
  return (
    <Card style={{elevation: 3}}>
      <CardItem cardBody>
        <View style={styles.continerImage}>
          <Image style={styles.image} source={{uri: show.image}} />
        </View>
      </CardItem>

      <CardItem>
        <View style={styles.downView}>
          <Text style={{fontSize: 20}}>{show.title}</Text>
          <View style={styles.continer}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={show.rating / 2}
              fullStarColor={'gold'}
            />
            <Text> ({show.rating / 2}) </Text>
          </View>
        </View>
      </CardItem>
    </Card>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 250,
    width: '90%',
    resizeMode: 'stretch',
  },
  continer: {
    //  width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  continerImage: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  downView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default CardView;
