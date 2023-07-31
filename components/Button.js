import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

// theme
const Button = ({ label, theme, onPress }) => {
	if (theme === "primary") {
		return (
			<View
				style={[
					styles.buttonContainer,
					{ borderColor: "#ffd33d", borderRadius: 10, borderWidth: 2 },
				]}
			>
				<Pressable
					style={[styles.button, { backgroundColor: "#fff" }]}
					onPress={onPress}
				>
					<Icon
						name="picture-o"
						color="#000"
						size={25}
						style={{ paddingRight: 6 }}
					/>
					<Text style={[styles.buttonLabel, { color: "#000" }]}>{label}</Text>
				</Pressable>
			</View>
		);
	}
	return (
		<View style={styles.buttonContainer}>
			<Pressable style={styles.button} onPress={onPress}>
				<Text style={styles.buttonLabel}>{label}</Text>
			</Pressable>
		</View>
	);
};

export default Button;

const styles = StyleSheet.create({
	buttonContainer: {
		width: 320,
		height: 68,
		marginHorizontal: 20,
		alignItems: "center",
		justifyContent: "center",
		padding: 3,
	},

	button: {
		borderRadius: 10,
		width: "100%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	buttonLabel: {
		color: "#fff",
		fontSize: 18,
	},
	buttonIcon: {
		paddingRight: 8,
	},
});
