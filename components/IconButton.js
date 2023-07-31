import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
const IconButton = ({ label, icon, onPress }) => {
	return (
		<Pressable style={{ alignItems: "center" }} onPress={onPress}>
			<Icon name={icon} size={34} color="#fff" />
			<Text style={{ color: "#fff", fontSize: 20 }}>{label}</Text>
		</Pressable>
	);
};

export default IconButton;

const styles = StyleSheet.create({});
