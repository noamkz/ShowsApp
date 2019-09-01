import React from 'react';
import {StyleSheet} from 'react-native';
import {Footer, Text, View} from 'native-base';

// חלק תחתון
const FooterView = () => {
  return (
    <Footer>
      <View style={styles.staticFooter}>
        <Text style={styles.text}>Noam Keren-Zvi</Text>
      </View>
    </Footer>
  );
};
const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 20,
  },
  staticFooter: {
    flex: 1,
    backgroundColor: 'rgba(176,176,176,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default FooterView;
