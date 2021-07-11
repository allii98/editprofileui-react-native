import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={{flex:1}}>
      <StatusBar barStyle='light-content' backgroundColor="#0288d1" />
      
      {/* Header */}
      <View style={{
        backgroundColor:'#03a9f4',
        paddingVertical: 15,
        elevation:3,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
      }}>

      <TouchableOpacity>
      <Icon name="chevron-left" size={25} color="#ffffff" />
      </TouchableOpacity>
        <Text style={{color:'#ffffff', marginLeft: 10, fontWeight:'bold'}}>Edit Profile</Text>
      </View>
        {/* ENd Header */}

        <View style={{
          backgroundColor:'#e0e0e0',
          paddingBottom: 20
        }}>

          <TouchableOpacity style={{
            justifyContent:'flex-end',
            alignItems:'flex-end',
            marginTop: 20,
            marginRight: 20
            
          }}>
          <Icon name="edit" size={25} color="#bdbdbd" />
          </TouchableOpacity>
          <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
          <Image
            style={{width: 200, height: 200, borderRadius: 100}}
            source={{uri: 'https://images.unsplash.com/photo-1622495966087-4b72dd849db7?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80'}}
          />
          
          <Text style={{ marginLeft: 10, fontWeight:'bold', marginTop:10}}>PROFILE PHOTO</Text>
          </View>
        </View>


        <TouchableOpacity style={{
        marginHorizontal:20,
        marginTop:10, 
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#bdbdbd',
        paddingBottom:10,
        }}>
        <View style={{flex:1, justifyContent:'center'}}>
          <Text style={{fontWeight:'bold'}}>NAME</Text>
          <Text style={{marginTop:3}}>Ali</Text>
        </View>
        <View style={{justifyContent:'center'}}>
          
          <Icon name="chevron-right" size={25} color="#bdbdbd" />
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
        marginHorizontal:20,
        marginTop:10, 
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#bdbdbd',
        paddingBottom:10,
        }}>
        <View style={{flex:1, justifyContent:'center'}}>
          <Text style={{fontWeight:'bold'}}>EMAIL</Text>
          <Text style={{marginTop:3}}>Ali</Text>
        </View>
        <View style={{justifyContent:'center'}}>
          
          <Icon name="chevron-right" size={25} color="#bdbdbd" />
        </View>
        </TouchableOpacity>

        <TouchableOpacity style={{
        marginHorizontal:20,
        marginTop:10, 
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#bdbdbd',
        paddingBottom:10,
        }}>
        <View style={{flex:1, justifyContent:'center'}}>
          <Text style={{fontWeight:'bold'}}>LOCATION</Text>
          <Text style={{marginTop:3}}>Tegal</Text>
        </View>
        <View style={{justifyContent:'center'}}>
          
          <Icon name="chevron-right" size={25} color="#bdbdbd" />
        </View>
        </TouchableOpacity>

      </ScrollView>
    );
  }
}
