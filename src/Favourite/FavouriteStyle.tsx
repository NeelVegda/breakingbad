import { Dimensions, StyleSheet } from 'react-native';
import {StatusBar} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: StatusBar.currentHeight
    },
    headerContainer: {
      width: windowWidth,
      // height: 54,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginBottom: 20
    },
    headerText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'left',
      width: windowWidth - 100,
      paddingLeft: 10
    },
    dataContainer: {
      flex: .9,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      // paddingTop: StatusBar.currentHeight,
      width: windowWidth
    },
    charecterImageStyle: {
      width: windowWidth / 2 - 20,
      height: windowWidth / 2,
      alignSelf:'center',
      borderRadius: 5,
      marginRight: 10,
      marginLeft: 10
    },
    charecterTextContainer: {
      display: 'flex',
      alignItems: 'center', 
      justifyContent:'center',
      flexDirection: 'column',
      height: 40,
      width: windowWidth / 2 - 75,
    },
    charecterText: {
      color: 'white',
      fontSize: 15,
      fontWeight: '500',
      textAlign: 'left',
      width: '100%'
    },

  });