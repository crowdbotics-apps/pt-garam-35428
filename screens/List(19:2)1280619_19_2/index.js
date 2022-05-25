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
      <View style={styles.View_19_3}>
        <View style={styles.View_19_12}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b00/5c46/9c128695f7a9af813dba55b1fbec421e"
            }}
            style={styles.ImageBackground_19_13}
          />
          <View style={styles.View_19_36}>
            <Text style={styles.Text_19_36}>
              “Memastikan kualitas produk dengan seksama”
            </Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_19_37}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("21_37"))
            }
          >
            <View style={styles.View_19_38} />
            <View style={styles.View_19_39} />
            <View style={styles.View_19_40}>
              <Text style={styles.Text_19_40}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.View_19_8}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5c7/108a/a1e4da55b3a523e83e2c4ba0cf4188b5"
            }}
            style={styles.ImageBackground_19_9}
          />
          <View style={styles.View_19_27}>
            <Text style={styles.Text_19_27}>
              “Menjamin kepuasan para konsumen”
            </Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_56_33}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("21_37"))
            }
          >
            <View style={styles.View_56_34} />
            <View style={styles.View_56_35} />
            <View style={styles.View_56_36}>
              <Text style={styles.Text_56_36}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.View_19_4}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5fd/9afd/be5e3a08f0542093df66c709d8766687"
            }}
            style={styles.ImageBackground_19_5}
          />
          <View style={styles.View_18_14}>
            <Text style={styles.Text_18_14}>
              “Supplier garam pangan berkualitas nasional”
            </Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_56_37}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("21_37"))
            }
          >
            <View style={styles.View_56_38} />
            <View style={styles.View_56_39} />
            <View style={styles.View_56_40}>
              <Text style={styles.Text_56_40}>LOGIN</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.View_20_5} />
        </View>
      </View>
      <View style={styles.View_19_16}>
        <View style={styles.View_19_22}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9445/f2d1/fb9a97ae82d563d5ebb4ec0ee3c36c1c"
            }}
            style={styles.ImageBackground_18_13}
          />
          <View style={styles.View_18_23}>
            <Text style={styles.Text_18_23}>PT GARAM </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("109%") },
  View_19_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("37%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_19_12: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("98%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_19_13: {
    width: wp("63%"),
    minWidth: wp("63%"),
    height: hp("39%"),
    minHeight: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-3%"),
    resizeMode: "cover"
  },
  View_19_36: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_19_36: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_19_37: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("31%")
  },
  View_19_38: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(3, 154, 219, 1)",
    opacity: 0.8100000023841858
  },
  View_19_39: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 162, 54, 1)"
  },
  View_19_40: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_19_40: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_8: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_19_9: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_19_27: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_19_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_56_33: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("31%")
  },
  View_56_34: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(3, 154, 219, 1)",
    opacity: 0.8100000023841858
  },
  View_56_35: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 162, 54, 1)"
  },
  View_56_36: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_56_36: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_4: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_19_5: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_18_14: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_18_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_56_37: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("31%")
  },
  View_56_38: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(3, 154, 219, 1)",
    opacity: 0.8100000023841858
  },
  View_56_39: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 162, 54, 1)"
  },
  View_56_40: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_56_40: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 5,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_5: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("34%")
  },
  View_19_16: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(73, 123, 218, 1)",
    overflow: "hidden"
  },
  View_19_22: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%"),
    top: hp("1%")
  },
  ImageBackground_18_13: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_18_23: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_18_23: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
