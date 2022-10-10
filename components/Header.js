// import React from 'react';
// import { StyleSheet, View, Text, Dimensions } from 'react-native';
// // import WavyHeader from '../components/WavyHeader';
// import { Flex, Spacer } from "native-base";

// export default function ScreenOne({ navigation }) {
//     return (
//         <View style={styles.container}>
//             {/* <WavyHeader customStyles={styles.svgCurve} /> */}
//             <View style={styles.headerContainer}>
//                 <Text style={styles.headerText} onPress={() => {
//                     navigation.navigate('ScreenOne', { title: 'ScreenOne' })
//                 }}>Custom Header</Text>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     svgCurve: {
//         position: 'absolute',
//         width: Dimensions.get('window').width
//       },
//     container: {
//         flex: 1,
//         backgroundColor: '#fff'
//     },
//     headerContainer: {
//         marginTop: 50,
//         marginHorizontal: 10
//     },
//     headerText: {
//         fontSize: 30,
//         fontWeight: 'bold',
//         color: '#333',
//         textAlign: 'center',
//         marginTop: 35
//     }
// });