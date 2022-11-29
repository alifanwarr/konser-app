import React from "react";
import { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { TouchableOpacity } from "react-native";

function DetailTempat({ route }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch("http://192.168.197.164:3000/detaillokasi?lokasi=" + route.params.msg)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              paddingBottom: 10,
              borderRadius: 10,
              elevation: 2,
              marginHorizontal: 10,
              backgroundColor: 'black'
            }}
          >
            <Image
              source={{ uri: item.img1 }}
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
                color: "white",
                textAlign: "center",
                width: "100%",
                marginTop: 5,
                textTransform: "uppercase",
              }}
            >
              {item.lokasi}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                color: "white",
                textAlign: "center",
                width: "100%",
                marginTop: 5,
              }}
            >
              {"Dapat menampung " + item.pengunjung + " pengunjung"}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                color: "white",
                textAlign: "center",
                width: "100%",
              }}
            >
              {"dan dapat untuk berparkir " + item.parkir}
            </Text>
            <FlatList
              horizontal
              data={item.image}
              renderItem={({ item }) => (
                <View
                  style={{
                    borderRadius: 10,
                    elevation: 2,
                    marginHorizontal: 10,
                    marginTop: 10
                  }}
                >
                  <Image
                    source={{ uri: item }}
                    style={{
                      height: 300,
                      width: 400,
                      display: "flex",
                      borderRadius: 10,
                    }}
                  />
                </View>
              )}
            />
          </View>
        )}
        
      />
      
      <TouchableOpacity 
            style={{
              alignItems: 'center',
              marginTop: 5,
              padding: 5,
              borderRadius: 10,
              backgroundColor: 'black',
              marginBottom: 10,
              marginHorizontal: 5
            }}
            onPress={"#"}>
              <Text style={{color: 'white'}}>View on Maps</Text>
            </TouchableOpacity>
    </View>
  );
}

export default DetailTempat;
