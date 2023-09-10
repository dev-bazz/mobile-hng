import {
	StyleSheet,
	Text,
	View,
	Pressable,
	useWindowDimensions,
} from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import WebView from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";
import CONSTANTS from "../constants/Colors";

const github = () => {
	const { url } = useLocalSearchParams<{
		url: string;
	}>();

	console.log(url);
	const { width } = useWindowDimensions();
	const closeWebview = () => {
		router.replace("/");
	};
	return (
		<SafeAreaView style={styles.container}>
			<WebView
				style={[styles.webview, { width: width }]}
				source={{ uri: url }}
			/>

			<View>
				<Pressable
					style={styles.button}
					onPress={closeWebview}>
					<Text
						style={{
							color: CONSTANTS.colors.white,
						}}>
						Close
					</Text>
				</Pressable>
			</View>
		</SafeAreaView>
	);
};

export default github;

const styles = StyleSheet.create({
	webview: {
		flex: 0.98,
		backgroundColor: CONSTANTS.colors.white,
		borderRadius: 24,
		padding: 24,
		shadowColor: "rgb(0, 0, 0)",
		shadowOpacity: 0.1,
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowRadius: 10,
	},
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: CONSTANTS.colors.bg,
		justifyContent: "center",
		gap: 0,
	},
	button: {
		width: 259,
		backgroundColor: "rgba(28, 25, 23, 1)",
		shadowColor: "rgb(0, 0, 0)",
		shadowOpacity: 0.1,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowRadius: 4,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		columnGap: 4,
		padding: 18,
		borderRadius: 110,
		marginTop: 4,
		textAlign: "center",
		marginBottom: 16,
	},
});
