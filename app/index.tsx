import { Image, Pressable, StyleSheet } from "react-native";

import { View, Text, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CONSTANTS from "../constants/Colors";
import { Link } from "expo-router";

const profile = require(`../assets/images/profile.png`),
	github = require(`../assets/images/github.png`);
export default function TabOneScreen() {
	const { width } = useWindowDimensions();

	return (
		<SafeAreaView style={styles.container}>
			<View
				style={[
					styles.card,
					{
						width: width - 24,
					},
				]}>
				<Image source={profile} />
				<Text style={styles.userName}>Mr B</Text>
				<Text style={styles.track}>Frontend Development</Text>

				<Link
					href={{
						pathname: "/github",
						params: {
							url: "https://github.com/dev-bazz",
						},
					}}
					style={styles.buttonProfile}>
					<Image
						source={github}
						style={styles.gitHub}
					/>
					<Text style={styles.profileText}>Open Github</Text>
				</Link>
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
	buttonProfile: {
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
		marginTop: 28,
		textAlign: "center",
	},
	gitHub: {
		flexShrink: 0,
		width: 28,
		height: 28,
	},

	profileText: {
		flexShrink: 0,
		textAlign: "left",
		color: "rgba(255, 255, 255, 1)",
		fontSize: 14,
		fontWeight: "600",
		letterSpacing: 0,
	},

	userName: {
		flexShrink: 0,
		textAlign: "left",
		color: "rgba(0, 0, 0, 1)",

		fontSize: 32,
		fontWeight: "600",
		letterSpacing: 0,
		marginTop: 18,
	},
	track: {
		flexShrink: 0,
		textAlign: "left",
		color: "rgba(55, 65, 81, 1)",
		fontSize: 14,
		fontWeight: "400",
		letterSpacing: 0,
	},
});
