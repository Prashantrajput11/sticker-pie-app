import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageViewer = ({ imageSource, selectedImage }) => {
	const backgroundImageSource =
		selectedImage !== null ? { uri: selectedImage } : imageSource;
	return (
		<View>
			<Image source={backgroundImageSource} style={styles.image} />
		</View>
	);
};

export default ImageViewer;

const styles = StyleSheet.create({
	image: {
		width: 320,
		height: 440,
		borderRadius: 18,
	},
});
