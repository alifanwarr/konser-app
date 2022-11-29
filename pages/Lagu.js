
import { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";

function Lagu({route}) {
  const [data, setData] = useState([]);

  useEffect (() => {
    getData();
})

function getData(){
    fetch('https://spotify23.p.rapidapi.com/search/?q='+route.params.msg+'&type=tracks&offset=0&limit=8&numberOfTopResults=5&rapidapi-key=f89164673emsh75e6ab700285b7ep132e73jsnd1188017b343')
	.then((response) => response.json())
    .then((json) => {
        setData(json.tracks.items)
    })
	.catch(err => console.error(err));
}
  
  return (
    <View style={{flex:1}}>
      <View
            style={{
              alignItems: 'center',
              marginTop: 5,
              padding: 5,
              borderRadius: 10,
              backgroundColor: 'black',
              marginBottom: 10,
              marginHorizontal: 5
            }}>
              <Text style={{color: 'white'}}>Pencarian Spotify</Text>
            </View>
      <FlatList 
        data={data}
        renderItem={({ item }) => (
          <View style={{
            backgroundColor: '#212121',
            paddingBottom: 10,
            marginBottom: 10,
            borderRadius: 10,
            elevation: 2,
            marginHorizontal: 10
           }}>
            <Image source={{uri: item.data.albumOfTrack.coverArt.sources[0].url}} style={{ height: 300, width: '100%', display: 'flex', borderTopLeftRadius: 10, borderTopRightRadius: 10}}/>
            <Text numberOfLines={1} style={{color: '#FFFFFF', textAlign: "center", marginHorizontal: 10, width: '95%', marginTop: 5, fontSize: 30}}>{item.data.name}</Text>
          </View>
        )}
      />
      
      </View>
  );
};

export default Lagu;