import React from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";
// import BG from "../../assets/images/BG.png";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/BG.png")}
        resizeMode="cover"
      ></ImageBackground>

      <View style={styles.registrationBox}>
        <View style={styles.registrationAvatar}></View>
        <Text style={styles.registrationTitle}>Реєстрація</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // position: "relative",
  },
  image: {
    flex: 1,
    // justifyContent: "flex-end",
  },
  registrationBox: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 549,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 45,
    paddingTop: 92,
  },
  registrationAvatar: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "rgba(246, 246, 246, 1)",
    top: -60,
    left: 128,
    },
  registrationTitle: {
      color: '#212121',
textAlign: 'center',
fontSize: 30,
// fontFamily: 'Roboto',
fontWeight: 500,
letterSpacing: 0.3,
  }
});

export default RegistrationScreen;
