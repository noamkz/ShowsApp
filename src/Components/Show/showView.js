import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {Text, View, Card, CardItem} from 'native-base';
import StarRating from 'react-native-star-rating';
import HTML from 'react-native-render-html';

// הצגת פרטי סדרה
const ShowView = show => {
  return (
    <Card style={{elevation: 3}}>
      <CardItem cardBody>
        <View style={styles.continerImage}>
          <Image style={styles.image} source={{uri: show.image.medium}} />
        </View>
      </CardItem>

      <CardItem>
        <View>
          <View style={styles.container}>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={show.rating.average / 2}
              fullStarColor={'gold'}
            />
            <Text> ({show.rating.average / 2}) </Text>
          </View>
          <Text style={styles.bold}>Summary:</Text>
          <HTML emSize={20} html={show.summary} />
          <Text style={styles.bold}>{'\r\n'}Genres:</Text>
          <Text style={{fontSize: 20}}>{show.genres.toString()}</Text>
          <Text style={styles.bold}>{'\r\n'}Broadcast Airs:</Text>
          <Text style={{fontSize: 20}}>
            {show.schedule.days.toString()}, {show.schedule.time}
          </Text>
          <Text style={styles.bold}>{'\r\n'}Network:</Text>
          <Text style={{fontSize: 20}}>{show.network.name.toString()}</Text>
          <Text style={styles.bold}>{'\r\n'}Language:</Text>
          <Text style={{fontSize: 20}}>{show.language.toString()}</Text>
        </View>
      </CardItem>
    </Card>
  );
};
const styles = StyleSheet.create({
  bold: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 250,
    width: '90%',
    resizeMode: 'stretch',
  },
  continerImage: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ShowView;
