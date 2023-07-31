import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

const EmojiModal = ({ isVisible, onClose, children }) => {
	return (
		<Modal animationType="slider" visible={isVisible} transparent={true}>
			<View style={styles.modalContent}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Choose an emoji</Text>
					<Pressable onPress={onClose}>
						<Icon name="close" color="#fff" size={24} />
					</Pressable>
				</View>
				{children}
			</View>
		</Modal>
	);
};

export default EmojiModal;

const styles = StyleSheet.create({
	modalContent: {
		height: "25%",
		width: "100%",
		backgroundColor: "#25292e",
		borderTopRightRadius: 18,
		borderTopLeftRadius: 18,
		position: "absolute",
		bottom: 0,
	},
	titleContainer: {
		height: "16%",
		backgroundColor: "#464C55",
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		paddingHorizontal: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	title: {
		color: "#fff",
		fontSize: 16,
	},
	pickerContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 50,
		paddingVertical: 20,
	},
});
