import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { AirbnbRating } from 'react-native-ratings'

const Screen_2 = () => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={[
          { imagePro: require('../images/giacchuyen 1.png'), decription1: 'Cáp chuyển từ cổng', decription2: 'USB sang PS2...' },
          { imagePro: require('../images/daynguon 1.png'), decription1: 'Cáp chuyển từ cổng', decription2: 'USB sang PS2...' },
          { imagePro: require('../images/dauchuyendoipsps2 1.png'), decription1: 'Cáp chuyển từ cổng', decription2: 'USB sang PS2...' },
          { imagePro: require('../images/dauchuyendoi 1.png'), decription1: 'Cáp chuyển từ cổng', decription2: 'USB sang PS2...' },
          { imagePro: require('../images/carbusbtops2 1.png'), decription1: 'Cáp chuyển từ cổng', decription2: 'USB sang PS2...' },
          { imagePro: require('../images/daucam 1.png'), decription1: 'Cáp chuyển từ cổng', decription2: 'USB sang PS2...' },

        ]}
        renderItem={({ item }) => <View style={styles.Product_container}>
          <Image style={styles.imageProduct} source={item.imagePro} />

          <View>
            <Text>{item.decription1}</Text>
            <Text>{item.decription2}</Text>
          </View>
          <View style = {{flexDirection: 'row'}}>
            <AirbnbRating
              showRating={false}
              size={15}
              defaultRating={4} />
            <Text>(15)</Text>
          </View>
          <View style = {{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text>69.900đ</Text>
            <Text>-39%</Text>
          </View>
        </View>}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Product_container: {
    marginVertical: -10,
    alignItems: 'center'

  },
  imageProduct: {

    height: '190px',
    width: '190px',
    resizeMode: 'contain'
  },


});
export default Screen_2