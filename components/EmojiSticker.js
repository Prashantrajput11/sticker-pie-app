import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
	useAnimatedStyle,
	useSharedValue,
	useAnimatedGestureHandler,
	withSpring,
} from "react-native-reanimated";
import {
	TapGestureHandler,
	PanGestureHandler,
} from "react-native-gesture-handler";

// cretaed Animated version
const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedView = Animated.createAnimatedComponent(View);

const EmojiSticker = ({ fontSize, stickerSource }) => {
	// Make shared value
	const scaleEmoji = useSharedValue(fontSize); // 43 ---> 80

	const translateX = useSharedValue(0);
	const translateY = useSharedValue(0);

	// Tap Function
	const onDoubleTap = useAnimatedGestureHandler({
		onActive: () => {
			if (scaleEmoji.value !== fontSize * 2) {
				scaleEmoji.value = scaleEmoji.value * 2;
			} else {
				scaleEmoji.value = fontSize;
			}
		},
	});

	const onDrag = useAnimatedGestureHandler({
		onStart: (event, context) => {
			context.translateX = translateX.value;
			context.translateY = translateY.value;
		},
		onActive: (event, context) => {
			translateX.value = event.translationX + context.translateX;
			translateY.value = event.translationY + context.translateY;
		},
	});

	// Adding new styles
	const fontStyle = useAnimatedStyle(() => {
		return { fontSize: withSpring(scaleEmoji.value) };
	});

	const containerStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateX: translateX.value,
				},
				{
					translateY: translateY.value,
				},
			],
		};
	});

	return (
		<PanGestureHandler onGestureEvent={onDrag}>
			<AnimatedView style={[containerStyle, { top: -350 }]}>
				<TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
					<AnimatedText style={[fontStyle, { fontSize: fontSize }]}>
						{stickerSource}
					</AnimatedText>
				</TapGestureHandler>
			</AnimatedView>
		</PanGestureHandler>
	);
};

export default EmojiSticker;

const styles = StyleSheet.create({});
