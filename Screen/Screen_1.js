import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native';




const Screen_1 = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    { imagePro: require('../images/ca_nau_lau.png'), decription: 'Ca nấu lẩu, nấu mì mini..', shop: 'Devang' },
                    { imagePro: require('../images/ga_bo_toi.png'), decription: '1KG KHÔ GÀ BƠ TỎI...', shop: 'LTD Food' },
                    { imagePro: require('../images/xa_can_cau.png'), decription: 'Xe cần cẩu đa năng', shop: 'Thế giới dồ chơi' },
                    { imagePro: require('../images/do_choi_dang_mo_hinh.png'), decription: 'Đồ chơi dạng mô hình', shop: 'Thế giới dồ chơi' },
                    { imagePro: require('../images/lanh_dao_gian_don.png'), decription: 'Lãnh đạo giản đơn', shop: 'Minh Long Book' },
                    { imagePro: require('../images/hieu_long_con_tre.png'), decription: 'Hiểu lòng trẻ con', shop: 'Minh Long Book' },
                    { imagePro: require('../images/trump 1.png'), decription: 'Donal Trump Thiên tài lãnh đạo', shop: '...' },

                ]}
                renderItem={({ item }) => <View style={styles.Product_container}>
                    <Image style={styles.imageProduct} source={item.imagePro} />

                    <View>
                        <Text>{item.decription}</Text>
                        <Text>Shop {item.shop}</Text>
                    </View>
                    <Pressable style = {styles.container_btn}>
                        <Text style = {{color: 'white'}}>Chat</Text>
                    </Pressable>
                </View>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Product_container: {
        borderBottomWidth: '1px',
        borderColor: 'grey',
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },
    imageProduct: {

        height: '100px',
        width: '100px',
        resizeMode: 'contain'
    },
    container_btn:{
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor:'red',
        height: '50%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },

});

export default Screen_1;