import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert
} from "react-native";
import axios from "axios";

function ProfileScreen() {
  const [data, setData] = useState("");

  useEffect ( () => {
    async function fetchData() {
      const request = await axios
        .get("https://api.github.com/users/alifanwarr")
        .then((res) => setData(res.data))
        .catch((e) => Alert.alert("Gagal!", e))
      return request;
    };
    fetchData();
  }, []);


  return (
    <View style={styles.container}>
    <View style={{justifyContent: 'center', flexDirection: 'row', marginTop: '30%'}}>
        <Text style={{marginLeft: 5}}>INFO KONSER APP</Text>
      </View>
      <View style={{justifyContent: 'center', flexDirection: 'row'}}>
        <Text style={{textAlign: 'center'}}>{'Computer Engineering, 2022\nDiponegoro University\n\nTugas Akhir Praktikum PPB 2022'}</Text>
      </View>
      <View style={{padding: 10, backgroundColor: 'black', alignItems: 'center', marginTop: 10, marginHorizontal: 30, borderRadius: 24}}>
        <Text style={{color: 'white'}}>Muhammad Rafi Anwar</Text>
            <View style={{justifyContent: 'center', flexDirection: 'row', marginTop: 0}}>
                <Image
                source={{uri : data.avatar_url}}
                style={styles.headerImage}
                />
            <View style={{marginTop: '20%', marginLeft: 10}}>
                <Text style={styles.headerText}>
                    {data.login}
                </Text>
                <Text style={styles.headerTextDesc}>{"Public Repos: " + data.public_repos}</Text>
                <Text style={styles.bodyText}>{data.bio}</Text>
            </View>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerImage: {
    height: 120,
    width: 120,
    borderRadius: 0,
    marginVertical: 10
  },
  headerText: {
    fontWeight: "bold",
    color: "#fff"
  },
  headerTextDesc: {
    color: "#fff"
  },
  bodyText: {
    marginHorizontal: 25,
    marginTop: 10,
    color: "#efd",
    fontSize: 10,
    textAlign: 'center',
  }
});

export default ProfileScreen;
