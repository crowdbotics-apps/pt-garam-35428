import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_30_61}>
        <View style={styles.View_I30_61_1_384} />
        <View style={styles.View_I30_61_1_385}>
          <Text style={styles.Text_I30_61_1_385}>SIGNED IN</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2581/4088/0af54c364319d94060d863e5a64dedc8"
          }}
          style={styles.ImageBackground_I30_61_1_386}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("109%") },
  View_30_61: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("109%"),
    minHeight: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 155, 216, 1)"
  },
  View_I30_61_1_384: {
    flexGrow: 1,
    width: wp("67%"),
    height: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("19%"),
    backgroundColor: "rgba(64, 116, 164, 1)"
  },
  View_I30_61_1_385: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_I30_61_1_385: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I30_61_1_386: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("48%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
