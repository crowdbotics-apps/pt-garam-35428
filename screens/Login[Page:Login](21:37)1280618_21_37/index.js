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
      <View style={styles.View_21_38}>
        <View style={styles.View_21_39} />
        <View style={styles.View_21_40} />
        <View style={styles.View_23_62}>
          <View style={styles.View_23_63}>
            <Text style={styles.Text_23_63}>Forgot password ?</Text>
          </View>
        </View>
        <View style={styles.View_23_61}>
          <View style={styles.View_23_60}>
            <Text style={styles.Text_23_60}>Don’t have an account ?</Text>
          </View>
          <View style={styles.View_23_59}>
            <Text style={styles.Text_23_59}>Sign up</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_21_41}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("23_90"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f68/9587/a55a7f998561728868e12b103e5fcddd"
            }}
            style={styles.ImageBackground_21_42}
          />
          <View style={styles.View_21_43}>
            <Text style={styles.Text_21_43}>Sign in</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_21_44}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/166b/735a/b352c7d5731f4ada8df2991f1d71251c"
            }}
            style={styles.ImageBackground_21_45}
          />
          <View style={styles.View_21_46}>
            <Text style={styles.Text_21_46}>Password</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8664/2cd9/969766847d7f1b51fe5fd706f27158f2"
            }}
            style={styles.ImageBackground_21_47}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a65/3d19/9d7df1d8f68c57b33404eba85139160d"
            }}
            style={styles.ImageBackground_21_48}
          />
        </View>
        <View style={styles.View_21_49}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/166b/735a/b352c7d5731f4ada8df2991f1d71251c"
            }}
            style={styles.ImageBackground_21_50}
          />
          <View style={styles.View_21_51}>
            <Text style={styles.Text_21_51}>Email</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8664/2cd9/969766847d7f1b51fe5fd706f27158f2"
            }}
            style={styles.ImageBackground_21_52}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aced/8804/f4f8632896beb6844d32a0e1201d7f6c"
            }}
            style={styles.ImageBackground_21_53}
          />
        </View>
        <View style={styles.View_21_54}>
          <View style={styles.View_21_55}>
            <Text style={styles.Text_21_55}>LOGIN FORM</Text>
          </View>
          <View style={styles.View_21_56}>
            <Text style={styles.Text_21_56}>Sign in to your account</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9338/9c68/e48b9cc19f774ff4aa5f95e920454539"
          }}
          style={styles.ImageBackground_21_57}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/db6d/b72b/856ac09e5234fbd94a19aa431aeaa524"
          }}
          style={styles.ImageBackground_56_45}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("109%") },
  View_21_38: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("109%"),
    minHeight: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 0)",
    overflow: "hidden"
  },
  View_21_39: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("19%"),
    backgroundColor: "rgba(64, 116, 164, 1)"
  },
  View_21_40: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("19%"),
    backgroundColor: "rgba(254, 162, 54, 1)"
  },
  View_23_62: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("64%")
  },
  View_23_63: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_63: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_61: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("57%")
  },
  View_23_60: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_60: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_59: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_59: {
    color: "rgba(167, 166, 164, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_21_41: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("60%")
  },
  ImageBackground_21_42: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_21_43: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_21_43: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_44: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("53%")
  },
  ImageBackground_21_45: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_21_46: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_21_46: {
    color: "rgba(154, 151, 151, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_21_47: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%")
  },
  ImageBackground_21_48: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_21_49: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("49%")
  },
  ImageBackground_21_50: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_21_51: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_21_51: {
    color: "rgba(154, 151, 151, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_21_52: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%")
  },
  ImageBackground_21_53: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_21_54: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("30%")
  },
  View_21_55: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_21_55: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_56: {
    width: wp("39%"),
    minWidth: wp("39%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_21_56: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_21_57: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("20%"),
    resizeMode: "cover"
  },
  ImageBackground_56_45: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("22%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
