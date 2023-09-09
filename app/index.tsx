import { StyleSheet } from "react-native";

import { View, Text, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CONSTANTS from "../constants/Colors";

export default function TabOneScreen() {
	const { width, height } = useWindowDimensions();
	return (
		<SafeAreaView style={styles.container}>
			<View
				style={[
					styles.card,
					{
						width: width - 24,
					},
				]}>
				<Text> Hello</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: CONSTANTS.colors.bg,
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	card: {
		backgroundColor: CONSTANTS.colors.white,
		flex: 0.6,
		borderRadius: 24,
		padding: 24,
		shadowColor: "rgb(0, 0, 0)",
		shadowOpacity: 0.1,
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowRadius: 10,
		alignItems: "center",
		justifyContent: "center",
	},
});
