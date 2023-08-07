import { View, Text,Image,TextInput, TouchableOpacity, ScrollView, Animated, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import {Ionicons} from '@expo/vector-icons'
import { StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Card } from 'react-native-paper';


export default function ProfileProfileSettings() {

  const Separator = () => <View style={styles.separator} />;

  const [selectedTab, setSelectedTab] = useState(0);

  const [selectedClose, setSelectedClose] = useState(0);


  const starRatingOptions = [1, 2, 3, 4, 5, ];

  const [starRating, setStarRating] = useState(null);

  const animatedButtonScale = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      useNativeDriver: true,
      // speed: 0,
      // bounciness: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animatedButtonScale, {
      toValue: 1,
      useNativeDriver: true,
      // speed: 0,
      // bounciness: 4,
    }).start();
  };

  const animatedScaleStyle = {
    transform: [{ scale: animatedButtonScale }],
  };



  return (
    <View style={styles.container}>
    
      <View style={{margin:20,marginTop:40}}>

{/* --------------------------------- header contant --------------------------------- */}

        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Ionicons name='arrow-back-outline' size={20} color={'#263a96'} />
          <Text style={{fontSize:16,fontWeight:'500',color:'#263a96',marginLeft:14}}>Back</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:16,fontWeight:'500',color:'#263a96',marginRight:11}}>Edit Mode</Text>
            <FontAwesome name="toggle-on" size={20} color="#263a96" />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} >
<View style={{justifyContent:'center',alignItems:'center'}}>
        <Image
            style={{
              height: 94,
              width: 94,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: "#ffffff",
            }}
            source={require("../assets/Profileimg1.jpg")}
          />
        </View>

        <View style={{ marginTop: 20, alignItems: "center" }}>
          <Text
            style={{ fontSize: 16, fontWeight: "600", color: "#263a96" }}
          >
            Jeyaprakash G
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              color: "#686868",
              marginTop: 10,
            }}
          >
            Jeyaprakash@gmail.com
          </Text>
        </View>

{/* ------------------------------------- Body contant ------------------------------ */}

<View style={{ marginTop: 20, margin: 0 }}>
            <Text style={styles.emailText}>First Name</Text>
            <View style={styles.wrapperInput}>
              <TextInput style={styles.input} placeholder="xxxxxx" />
            </View>
          </View>


          <View style={{ marginTop: 20, margin: 0 }}>
            <Text style={styles.emailText}>Last Name</Text>
            <View style={styles.wrapperInput}>
              <TextInput style={styles.input} placeholder="xxxxxx" />
            </View>
          </View>


          <View style={{ marginTop: 20, margin: 0 }}>
            <Text style={styles.emailText}>DOB</Text>
            <View style={styles.wrapperInput}>
              <TouchableOpacity style={styles.input}
                keyboardType={"numeric"}
                placeholder="xxxxx">
                
                <Text style={{color:"#373B4A",}}>
                   {/* {selectedDate} */}
                    </Text>
              </TouchableOpacity>

              {/* <Ionicons
                name="calendar-outline"
                size={17}
                color={"#919191"}
                style={{ marginRight: 0 }}
                onPress = {()=>{showDatePicker();}}
              />
               <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      /> */}
            </View>
          </View>

          <Text
            style={{
              marginTop: 20,
              fontSize: 12,
              fontWeight: "400",
              color: "#353948",
            }}
          >
            
            Gender
          </Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                padding: 0,
                borderColor: selectedClose == 0 ? '#263a96':'#DADADA',
                borderWidth: 1,
                borderRadius: 25,
                height: 38,
                width: "48%",
                color: "#263A96",
                alignItems: "center",
                justifyContent: "center",
              }}  onPress={() => {setSelectedClose(0);}}
            >
              <Text
                style={{ color: selectedClose == 0 ? '#263A96':'#919191', fontSize: 14, fontWeight: "400" }}
              >
                
                Male
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                padding: 0,
                borderColor: selectedClose == 1 ? '#263a96':'#DADADA',
                borderWidth: 1,
                borderRadius: 25,
                height: 38,
                width: "48%",
                color: "#263A96",
                alignItems: "center",
                justifyContent: "center",
              }}  onPress={() => {setSelectedClose(1);}}
            >
              <Text
                style={{ color: selectedClose == 1 ? '#263A96':'#919191', fontSize: 14, fontWeight: "400" }}
              >
                
                Female
              </Text>
            </TouchableOpacity>
          </View>


          <View style={{marginTop:10}}>
            <Text style={styles.text}>Mobile No</Text>
            </View>
            <TextInput
              style={{
                height: 38,
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: 18,
                borderWidth: 1,
                borderColor: "#DADADA",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
               
                textAlign: "left",
                paddingLeft: 20,
                color:'#373B4A'
              }}
              placeholder={"+91  7677739283"}
              
              keyboardType={"number-pad"}
            > +91  <Ionicons
            name="chevron-down-outline"
            size={20}
            color={"#919191"}
            style={{}}
          /></TextInput>


            <Text style={styles.text}>Email ID</Text>

            <TextInput
              style={{
                height: 38,
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: 18,
                borderWidth: 1,
                borderColor: "#DADADA",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                // marginBottom: 10,
                paddingLeft: 20,
              }}
              placeholder={"abcd@gmail.com"}
            ></TextInput>
            <Text style={styles.text}>Street /Apartment</Text>

            <TextInput
              style={{
                height: 38,
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: 18,
                borderWidth: 1,
                borderColor: "#DADADA",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                // marginBottom: 10,
                paddingLeft: 20,
              }}
              placeholder={"xxxxxxxxx"}
            ></TextInput>
            <Text style={styles.text}>Locality /Landmark</Text>

            <TextInput
              style={{
                height: 38,
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: 18,
                borderWidth: 1,
                borderColor: "#DADADA",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                // marginBottom: 10,
                paddingLeft: 20,
              }}
              placeholder={"xxxxxxxxx"}
            ></TextInput>
            <Text style={styles.text}>City</Text>

            <View style={styles.wrapperInput}>
              <TextInput style={styles.input} placeholder="xxxxxxx" />

              <Ionicons
                name="chevron-down-outline"
                size={20}
                color={"#919191"}
                style={{ marginRight: 10 }}
              />
            </View>

            <Text style={styles.text}>State</Text>

            <View style={styles.wrapperInput}>
              <TextInput style={styles.input} placeholder="xxxxxxx" />

              <Ionicons
                name="chevron-down-outline"
                size={20}
                color={"#919191"}
                style={{ marginRight: 10 }}
              />
            </View>
            <Text style={styles.text}>Country</Text>

            <View style={styles.wrapperInput}>
              <TextInput style={styles.input} placeholder="xxxxxxx" />

              <Ionicons
                name="chevron-down-outline"
                size={20}
                color={"#919191"}
                style={{ marginRight: 10 }}
              />
            </View>
            <Text style={styles.text}>Pincode</Text>

            <TextInput
              style={{
                height: 38,
                width: "100%",
                backgroundColor: "#FFFFFF",
                borderRadius: 18,
                borderWidth: 1,
                borderColor: "#DADADA",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 10,
                marginBottom: 10,
                paddingLeft:20,
              }}
              placeholder={"xxxxxxxxx"}
              keyboardType={"number-pad"}
            ></TextInput>

<View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 14,
                fontWeight: "400",
                color: "#263A96",
              }}
            >
              Skillset
            </Text>
            <TouchableOpacity
              style={{
                height: 27,
                width: 99,
                backgroundColor: "#FFF",
                borderRadius: 18,
                justifyContent: "center",
                borderColor: "#263A96",
                borderWidth: 1,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#263A96",
                }}
              >
                Add Skill
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Card
              style={{
                height: 170,
                width: "100%",
                backgroundColor: "#F3F3F3",
                borderRadius: 10,
                alignItems: "center",
                marginTop: 20,
                shadowColor:'#fff',
                
              }}
            >
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop: 10,
                  margin: 5,}}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  color: "#353948",
                  
                }}
              >
                Skill
              </Text>
              {/* <Ionicons name="close-circle-outline" size={20}/> */}
              </View>

              <View style={styles.wrapperInput}>
                <TextInput style={styles.input} placeholder="xxxxxxx" />

                <Ionicons
                  name="chevron-down-outline"
                  size={20}
                  color={"#919191"}
                  style={{ marginRight: 10 }} 
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  margin: 10,
                }}
              >
                <Text
                  style={{ fontSize: 12, fontWeight: "400", color: "#353948" }}
                >
                  Experience
                </Text>

                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "400",
                    color: "#353948",
                    marginRight: 60,
                  }}
                >
                  Level
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: 'space-between',
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    height: 38,
                    width: 138,
                    backgroundColor: "#fff",
                    borderColor: "#DADADA",
                    borderRadius: 18,
                    justifyContent: "space-around",
                    alignItems: "center",
                    borderWidth: 1,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      alignItems: "flex-start",
                      fontSize: 14,
                      fontWeight: "400",
                      color: selectedTab == 0 ? '#263A96':'#919191',
                    }}  onPress={() => {setSelectedTab(0);}}
                  >
                    Years
                  </Text>

                  <Separator />
                  <Text
                    style={{
                      alignItems: "flex-end",
                      fontSize: 14,
                      fontWeight: "400",
                      color:  selectedTab == 1 ? '#263A96':'#919191',
                    }}  onPress={() => {setSelectedTab(1);}}
                  >
                    Months
                  </Text>
                </TouchableOpacity>
                <View style={styles.stars}>
          {starRatingOptions.map((option) => (
            <TouchableWithoutFeedback
              onPressIn={() => handlePressIn(option)}
              onPressOut={() => handlePressOut(option)}
              onPress={() => setStarRating(option)}
              key={option}
            >
              <Animated.View style={animatedScaleStyle}>
                <Ionicons
                  name={starRating >= option ? 'ellipse' : 'ellipse-outline'}
                  size={20}
                  style={starRating >= option ? styles.starSelected : styles.starUnselected}
                />
              </Animated.View>
            </TouchableWithoutFeedback>
          ))}
        </View>
              </View>
            </Card>
          </View>


          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 14,
                fontWeight: "400",
                color: "#263A96",
              }}
            >
              Certificates
            </Text>
            <TouchableOpacity
              style={{
                height: 27,
                width: 99,
                backgroundColor: "#FFF",
                borderRadius: 18,
                justifyContent: "center",
                borderColor: "#263A96",
                borderWidth: 1,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  alignItems: "center",
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#263A96",
                }}
              >
                Add
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
              marginBottom:20,
            }}
          >
            <Card
              style={{
                height: 136,
                width: '100%',
                backgroundColor: "#F3F3F3",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                borderStyle: "dashed",
                borderWidth: 1,
                shadowColor:'#fff',
                borderColor:'#DADADA'
              }}
            >
              {/* <Text style={{ margin: 5 }}>Achievements</Text> */}
              {/* <TextInput style={{ height: 84, width: 281, borderWidth: 1, borderRadius: 18, borderColor: '#DADADA', alignItems: 'center', justifyContent: 'center', padding: 10 }}> */}
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Ionicons
                  name="add-circle-outline"
                  size={40}
                  color="#8E95B7"
                  style={{ justifyContent: "center", alignItems: "center" }}
                ></Ionicons>
              </View>
              <Text
                style={{ fontSize: 12, fontWeight: "400", color: "#919191",textAlign:'center' }}
              >
                Upload Certificates in {"\n"} PDF / JPG Format.
              </Text>
              {/* </TextInput> */}
            </Card>
          </View>


</ScrollView>
      </View>
      
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fafafa',
  },

  wrapperInput: {
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#DADADA",
    backgroundColor: "#fff",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    margin: 0,
  },

  input: {
    marginLeft: 20,
    height: 38,
    width: "80%",
    justifyContent:'center'
  },
  emailText: {
    color: "#353948",
    fontWeight: "400",
    fontSize: 12,
  },
  text: {
    fontSize: 12,
    fontWeight: "400",
    color: "#353948",
    marginTop: 20,
  },

  stars: {
    display: 'flex',
    flexDirection: 'row',
  },
  starUnselected: {
    color: '#DADADA',
  },
  starSelected: {
    color: '#263A96',
  },

  separator: {
   
    borderColor: "#d5d5d5",
    // borderBottomWidth: 2,
    backgroundColor:'#d5d5d5',
    borderWidth:0.5,
   
    height: 35,
    
    // transform:[{ rotate: '90deg'}]
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginBottom: 15
  },

});