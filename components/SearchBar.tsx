import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#AB8BFF"
      />
      <TextInput
        style={{ flex: 1, paddingLeft: 8, color: "#FFF" }}
        placeholder={placeholder}
        placeholderTextColor="#A8B5DB"
        onPress={onPress}
        onChangeText={() => {}}
      />
    </View>
  );
};

export default SearchBar;
