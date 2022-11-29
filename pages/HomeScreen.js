import { useEffect, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import {TouchableOpacity } from "react-native";


function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData(){
    fetch('http://192.168.197.164:3000/concert')
    .then(response => response.json())
    .then(json => {
      setData(json)
    })
    .catch(error => {
      console.error(error);
    });
  }
  
  return (
    <View style={{flex:1}}>
      
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View
              style={{
                backgroundColor: "#212121",
                paddingBottom: 10,
                borderRadius: 10,
                elevation: 2,
                marginHorizontal: 10,
                marginBottom: 10,
              }}
            >
              <Image
                source={{ uri: item.urlToImage }}
                style={{
                  height: 300,
                  width: "100%",
                  display: "flex",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
              <Text
                numberOfLines={1}
                style={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  width: "100%",
                  marginTop: 5,
                  fontSize: 30,
                }}
              >
                {item.name}
              </Text>
            <View style={{alignItems: 'center', flexDirection: 'row', marginTop: 5, marginHorizontal: 10}}>
              <Text  numberOfLines={1}  style={{color: '#FFFFFF',  fontSize: 20, width: '85%', marginTop: 5, textTransform: 'uppercase'}}>{item.tanggal}</Text>
              <TouchableOpacity style={{padding: 5, backgroundColor: 'white', borderRadius: 4}} onPress={() => navigation.navigate('DETAIL', {msg: item.id})}>
                <Text>Detail</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        )}
      />
      
      </View>
  );
};


export default HomeScreen;
