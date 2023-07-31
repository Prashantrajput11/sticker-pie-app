import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";

const EmojiList = ({ onClose, onSelect }) => {
	// List of emojis
	const [emoji] = useState([
		"😁",
		"😎",
		"🥹",
		"🥹",
		"😀",
		"😂",
		"😃",
		"😄",
		"😅",
		"😆",
		"😉",
		"😊",
		"😋",
		"😌",
		"😍",
		"😘",
		"😚",
		"😜",
		"😝",
		"😏",
		"😒",
		"😓",
		"😔",
		"😞",
		"😟",
		"😠",
		"😡",
		"😢",
		"😣",
		"😤",
		"😥",
		"😦",
		"😧",
		"😨",
		"😩",
		"😪",
		"😫",
		"😬",
		"😭",
		"😮",
		"😯",
		"😰",
		"😱",
		"😲",
		"😳",
		"😴",
		"😵",
		"😶",
		"😷",
		"🙁",
		"🙂",
		"🙃",
		"🙄",
		"🤐",
		"🤑",
		"🤒",
		"🤓",
		"🤔",
		"🤕",
		"🤗",
	]);

	return (
		<View style={{ paddingBottom: 36 }}>
			<FlatList
				data={emoji}
				renderItem={({ item }) => (
					<Pressable
						style={{ marginHorizontal: 6 }}
						onPress={() => {
							// onSelect --> setSelectedEmoji
							onSelect(item);
							onClose();
						}}
					>
						<Text style={{ fontSize: 35 }}>{item}</Text>
					</Pressable>
				)}
				numColumns={7}
			/>
		</View>
	);
};

export default EmojiList;

const styles = StyleSheet.create({});
