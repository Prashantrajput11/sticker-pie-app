import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const CircleButton = ({ onPress }) => {
	return (
		<View style={styles.buttonContainer}>
			<Pressable style={styles.button} onPress={onPress}>
				<Icon name="add" size={34} color="#000" />
			</Pressable>
		</View>
	);
};

export default CircleButton;

const styles = StyleSheet.create({
	buttonContainer: {
		borderColor: "#ffd33d",
		borderWidth: 2,
		borderRadius: 42,
		width: 84,
		height: 84,
		padding: 4,
		marginHorizontal: 60,
	},
	button: {
		backgroundColor: "#fff",
		borderRadius: 42,
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
});
