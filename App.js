import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import * as ImagePicker from "expo-image-picker";
import { useRef, useState } from "react";
import CircleButton from "./components/CircleButton";
import IconButton from "./components/IconButton";
import EmojiModal from "./components/EmojiModal";
import EmojiList from "./components/EmojiList";
import EmojiSticker from "./components/EmojiSticker";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";

export default function App() {
	const imageRef = useRef();

	// local states
	const [selectedImage, setSelectedImage] = useState(null);
	const [showAddOptions, setShowAddOptions] = useState(false);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [selectedEmoji, setSelectedEmoji] = useState(null);
	const [status, requestPermission] = MediaLibrary.usePermissions();

	if (status === null) {
		requestPermission();
	}

	const pickImageFromGallery = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			quality: 1, // 1 means least compression, high quality || 0 would opposite
		});

		console.log(result);
		if (!result.canceled) {
			// set image

			setSelectedImage(result.assets[0].uri);
			setShowAddOptions(true);
		} else {
			alert("user did not pick any image");
		}
	};

	const saveImageToGallery = async () => {
		try {
			// get a  screenshot uri
			// if uri exist, save it to gallery

			const screenshotUri = await captureRef(imageRef, {
				height: 440,
				quality: 1,
			});

			await MediaLibrary.saveToLibraryAsync(screenshotUri);

			if (screenshotUri) {
				alert("saved");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<GestureHandlerRootView style={styles.container}>
			<View style={styles.imageContainer}>
				<View ref={imageRef} collapsable={false}>
					<ImageViewer
						imageSource={require("./assets/placeholderImage.jpeg")}
						selectedImage={selectedImage}
					/>
					{selectedEmoji !== null ? (
						<EmojiSticker fontSize={35} stickerSource={selectedEmoji} />
					) : null}
				</View>
			</View>

			{/* modal component */}

			<EmojiModal
				isVisible={isModalVisible}
				onClose={() => setIsModalVisible(false)}
			>
				{/* list of emojis */}
				<EmojiList
					onClose={() => setIsModalVisible(false)}
					onSelect={setSelectedEmoji}
				/>
			</EmojiModal>

			{showAddOptions ? (
				<View style={styles.optionContainer}>
					<IconButton
						label="Reset"
						icon="refresh"
						onPress={() => setShowAddOptions(false)}
					/>
					<CircleButton onPress={() => setIsModalVisible(true)} />
					<IconButton
						label="Save"
						icon="save-alt"
						onPress={saveImageToGallery}
					/>
				</View>
			) : (
				<View style={styles.footerContainer}>
					<Button
						label="Upload a photo"
						theme="primary"
						onPress={pickImageFromGallery}
					/>
					<Button
						label="Use this photo"
						onPress={() => setShowAddOptions(true)}
					/>
				</View>
			)}

			<StatusBar style="auto" />
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#2c3e50",
		alignItems: "center",
		justifyContent: "center",
	},

	imageContainer: {
		flex: 1,
		paddingTop: 50,
	},

	footerContainer: {
		// backgroundColor: "green",
		flex: 1 / 3,
		alignItems: "center",
	},

	optionContainer: {
		// backgroundColor: "red",
		position: "absolute",
		bottom: 80,
		flexDirection: "row",
		alignItems: "center",
	},
});
