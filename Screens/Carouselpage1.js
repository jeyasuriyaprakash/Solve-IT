import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';
import SimplePagination from './SimplePagination';
import {Ionicons} from '@expo/vector-icons'


const {width: windowWidth} = Dimensions.get('window');

const data = [
  {
    // uri: 'https://i.imgur.com/GImvG4q.jpg',
    title: 'Category1',
    content:
      'Sub category1',
  },
  {
    // uri: 'https://i.imgur.com/Pz2WYAc.jpg',
    title: 'Category2',
    content:
      'Sub category2',
  },
  {
    // uri: 'https://i.imgur.com/IGRuEAa.jpg',
    title: 'Category3',
    content:
      'Sub category3',
  },
  {
    // uri: 'https://i.imgur.com/fRGHItn.jpg',
    title: 'Category4',
    content:
      'Sub category4',
  },
  // {
  //   // uri: 'https://i.imgur.com/WmenvXr.jpg',
  //   title: 'Lorem ipsum ',
  //   content: 'Neque porro quisquam est qui dolorem ipsum quia dolor ',
  // },
];

const INITIAL_INDEX = 0;
export default function Carouselpage1(props) {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(INITIAL_INDEX);

  function handleCarouselScrollEnd(item, index) {
    setCurrentIndex(index);
  }

  function renderItem({item, index}) {
    const {uri, title, content} = item;
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.item}
        onPress={() => {
          carouselRef.current.scrollToIndex(index);
        }}>
        {/* <ImageBackground source={{uri: uri}} style={styles.imageBackground}>
          <View style={styles.rightTextContainer}>
            <Text style={styles.rightText}>Lorem</Text>
          </View>
        </ImageBackground> */}
        <View style={styles.lowerContainer}>
          <View style={styles.lowertext}>
          <Text style={styles.titleText}>{title}</Text>
          <Ionicons name='ellipsis-horizontal' size={15} color={'#FFA726'} />
          </View>
          <Text style={styles.contentText}>{content}</Text>

          <View style={{height:4,width:200,backgroundColor:'#DDB984',borderRadius:6,flexDirection:'row',alignItems:'center',}}>
            <View style={{height:4,width:109,backgroundColor:'#FFA726',borderRadius:6}}></View>
        <Ionicons name='ellipse' size={10} color={'#fff'} style={{position:'absolute',marginLeft:109}} />
        </View>

          <View  style={styles.lowertext}>
          <Text style={styles.lowertext2}>Till 20 Feb 2023</Text>
          <Text style={styles.lowertext2}>70%</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <Carousel
        style={styles.carousel}
        data={data}
        renderItem={renderItem}
        itemWidth={0.7 * windowWidth}
        inActiveOpacity={0.5}
        containerWidth={windowWidth}
        onScrollEnd={handleCarouselScrollEnd}
        ref={carouselRef}
      />
      <SimplePagination currentIndex={currentIndex} length={data.length} />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {backgroundColor: '#fff', paddingVertical: 20,margin:20},
  carousel: {
    // backgroundColor: '#fff',
    aspectRatio: 3.5,
    flexGrow: 0,
    marginBottom: 20,
    marginTop:10,
    // borderWidth:2,
    
    
   
  },
  item: {
    // borderWidth: 2,
    backgroundColor: '#263A96',
    flex: 1,
    borderRadius: 5,
    // borderColor: '#263a89',
    // elevation: 3,
    width:230,
    // height:101
    
    
  },
  // imageBackground: {
  //   flex: 2,
  //   backgroundColor: '#EBEBEB',
  //   borderWidth: 5,
  //   borderColor: 'white',
  // },
  // rightTextContainer: {
  //   marginLeft: 'auto',
  //   marginRight: -2,
  //   backgroundColor: 'rgba(49, 49, 51,0.5)',
  //   padding: 3,
  //   marginTop: 3,
  //   borderTopLeftRadius: 5,
  //   borderBottomLeftRadius: 5,
  // },
  // rightText: {color: 'white'},
  lowerContainer: {
    flex: 1,
    margin: 15,
    justifyContent:'space-between'
  },
  lowertext:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  titleText: {
    fontSize:8,fontWeight:'500',color:'#fff',
  },
  contentText: {
    // marginTop: 10,
    fontSize: 10,
    color:'#ffffff'
  },
  lowertext2:{
    color:'#fff',
    fontSize:8,
    fontWeight:'500',
    // marginTop:10
  }
});