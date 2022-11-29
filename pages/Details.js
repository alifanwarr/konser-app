import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useEffect, useState } from "react";
import { Image, View, FlatList, Text } from "react-native";
import { TouchableOpacity } from "react-native";

const Details = ({ route, navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
        fetch('http://192.168.197.164:3000/concert?id=' + route.params.msg)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((e) => Alert.alert("Gagal!", e));
    }
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <View
              style={{
                backgroundColor: "#212121",
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
              <Text
                numberOfLines={1}
                style={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  width: "100%",
                  marginTop: 5,
                }}
              >
                {"Berlabuh pada " + item.tanggal}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  width: "100%",
                  marginTop: 5,
                }}
              >
                {"di " + item.lokasi}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  width: "100%",
                  marginTop: 5,
                }}
              >
                {"Harga: Rp." + item.harga}
              </Text>
              <TouchableOpacity
              style={{
                alignItems: 'center',
                marginTop: 5,
                padding: 5,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                backgroundColor: 'white'
              }}
                onPress={() =>
                  navigation.navigate("DETAIL TEMPAT", { msg: item.lokasi })
                }
              >
                <Text>Lihat Tempat</Text>
              </TouchableOpacity>
            </View>
            
            <FlatList
              data={item.guest_star}
              renderItem={({ item }) => (
                <TouchableOpacity
                
            onPress={() =>
              navigation.navigate("LAGU", { msg: item })
            }
                  style={{
                    backgroundColor: "#212121",
                    paddingVertical: 20,
                    marginBottom: 10,
                    borderRadius: 10,
                    elevation: 2,
                    marginHorizontal: 10,
                  }}
                >
                  <View style={{marginHorizontal: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'}}>
                  <Text
                    numberOfLines={1}
                    style={{
                      color: "#FFFFFF",
                      fontSize: 30,
                      width: "90%",
                      marginTop: 5,
                      marginRight: 20,
                      textTransform: "uppercase",
                    }}
                  >
                    {item}
                  </Text>
                  <TouchableOpacity
                      
                    >
                      <FontAwesomeIcon icon={faArrowCircleRight} style={{color: 'white'}}/>
                    </TouchableOpacity>
                  </View>
                  
                </TouchableOpacity>
              )}
            ></FlatList>
          </View>
          
        )}
      />
    </View>
  );
};

export default Details;
