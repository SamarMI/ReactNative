import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
export default class ImagePickerExample extends React.Component {
  state = {
    img: null,
    email: "",
  };

  handleEmail = (text) => {
    this.setState({ email: text });
  };
  login = (email) => {
    alert("email: " + email);
  };
  async ComponentDidMount() {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  }

  pickImage = async () => {
    console.log("pick image");
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ img: result.uri });
    }
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#9a73ef"
          autoCapitalize="none"
          onChangeText={this.handleEmail}
        />
        <Button
          title="Pick an image from camera roll"
          onPress={this.pickImage}
        />
        {this.state.img && (
          <Image
            source={{ uri: this.state.img }}
            style={{ width: 200, height: 200 }}
          />
        )}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login(this.state.email)}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 5,
    padding: 10,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});
