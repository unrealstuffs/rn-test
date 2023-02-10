import { StyleSheet, View } from 'react-native'
import LottieView from 'lottie-react-native'

const animationConfig = require('./assets/animationConfig.json')

export default function App() {
	return (
		<View style={styles.container}>
			<LottieView
				autoPlay
				style={{
					width: 200,
					height: 200,
					backgroundColor: '#fff',
				}}
				source={animationConfig}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
