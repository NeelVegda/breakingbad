
import React, { useState } from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View, Image,
} from 'react-native';
import HomeStyle from './HomeStyle'
import { connect } from 'react-redux';
import { addToFavourite } from './home-action-creater';
import { getCharacters } from '../Url/URL';
import Icon from 'react-native-vector-icons/MaterialIcons';

const getCharecters = async() => {
  let url = getCharacters();
  return await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-type':'application/json'
    }
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('response : ', data);
    return data;
  })
  .catch((error) => {
    console.log('error ------- ',error);
  });
}

const _renderItem = (item: any) => {
  console.log('home item: ------> ', item)
  let Image_Http_URL ={ uri: item.img};
  let iconName = require('../../assets/love.png');
  return (
    <TouchableOpacity style={{marginBottom: 20}}>
      <Image style={HomeStyle.charecterImageStyle} source={Image_Http_URL} resizeMode='stretch'/>
      <View style={{flexDirection: 'row', alignItems: 'center', display:'flex', justifyContent: 'center', height: 45}}>
        <View style={HomeStyle.charecterTextContainer}>
          <Text style={HomeStyle.charecterText}>{item.name}</Text>
          <Text style={{color: 'white', fontSize: 14, textAlign: 'left', width: '100%'}}>{item.nickname}</Text>
        </View>
        <TouchableOpacity style={{height: 35, width: 35, marginLeft: 20, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{height: 30, width: 30}} source={iconName}/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

function Home(props){
  console.log('props: ', props);
  getCharecters().then((data: any) => {
    console.log('data :: ', data);
  });

  let fileData = require('./data.json');
  const [characters, setCharectors] = useState(fileData);

  return (
    <View style={HomeStyle.container}>
      <StatusBar/>
      <View style={HomeStyle.headerContainer}>
        <Text style={HomeStyle.headerText}>The Breaking bad</Text>
        <TouchableOpacity style={{height: 35, width: 35, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{height: 30, width: 30}} source={require('../../assets/search.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 35, width: 35, marginLeft: 10, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Image style={{height: 30, width: 30}} source={require('../../assets/loveselected.png')}/>
        </TouchableOpacity>
      </View>
      <View style={HomeStyle.dataContainer}>
        <FlatList 
          numColumns={2}
          data={characters}
          renderItem={({item}) => _renderItem(item) }
          showsHorizontalScrollIndicator={false}
          keyExtractor={this._keyExtractor}
        />
      </View>
    </View>
  );
};

const mapStatetoProps = (state) =>{
  return {
    charcters: state.homeReducer.charecterList
  }
}

const mapDispatchtoProps = (dispatch) =>{
  return {
    addToFavourite: () => dispatch([])
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Home);
