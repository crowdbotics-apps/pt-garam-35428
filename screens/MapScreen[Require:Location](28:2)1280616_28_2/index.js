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
      <View style={styles.View_28_3}>
        <View style={styles.View_28_4} />
        <View style={styles.View_28_14}>
          <View style={styles.View_28_15} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7730/3c39/88bf6481ecf531ca4eced8132ad9dd11"
            }}
            style={styles.ImageBackground_28_16}
          />
          <View style={styles.View_28_17}>
            <Text style={styles.Text_28_17}>Muhammad Amin Ilyasyah</Text>
          </View>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc70/0c60/babb2b655f85df4fd2d0e282aaf27067"
            }}
            style={styles.TouchableOpacity_56_54}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("23_90"))
            }
          />
        </View>
        <View style={styles.View_28_11} />
        <View style={styles.View_28_12}>
          <Text style={styles.Text_28_12}>
            Anda absen pada Senin, 13:00:55{" "}
          </Text>
        </View>
      </View>
      <View style={styles.View_28_27}>
        <View style={styles.View_28_28} />
        <View style={styles.View_28_29}>
          <Text style={styles.Text_28_29}>Refresh Maps</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b8e/f8ba/dbac01c1519f11219427a62286a08d65"
        }}
        style={styles.ImageBackground_28_30}
      />
      <View style={styles.View_28_31}>
        <View style={styles.View_28_32}>
          <Text style={styles.Text_28_32}>Shift</Text>
        </View>
        <View style={styles.View_28_33}>
          <Text style={styles.Text_28_33}>Aktifitas anda hari ini </Text>
        </View>
        <View style={styles.View_28_34} />
        <View style={styles.View_28_35}>
          <Text style={styles.Text_28_35}>07.30 - 16.30</Text>
        </View>
        <View style={styles.View_28_36} />
        <View style={styles.View_28_38}>
          <Text style={styles.Text_28_38}>Text area</Text>
        </View>
      </View>
      <View style={styles.View_28_39}>
        <View style={styles.View_28_40}>
          <View style={styles.View_28_41} />
          <View style={styles.View_28_42}>
            <Text style={styles.Text_28_42}>Camera</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_28_43}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("21_37"))
          }
        >
          <View style={styles.View_28_44} />
          <View style={styles.View_28_45}>
            <Text style={styles.Text_28_45}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_28_46} />
      <View style={styles.View_28_47}>
        <View style={styles.View_28_48} />
        <View style={styles.View_28_49}>
          <Text style={styles.Text_28_49}>Take picture</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9d89/315b/df705aa7164b7c804d0c07c8d51d8539"
        }}
        style={styles.ImageBackground_28_50}
      />
      <View style={styles.View_28_51} />
      <View style={styles.View_28_52}>
        <Text style={styles.Text_28_52}>Save</Text>
      </View>
      <View style={styles.View_28_53}>
        <Text style={styles.Text_28_53}>BAGAIMANA PERASAANMU ?</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf67/7d7d/ef7da3879f45e72d4bfa06d5a15593bf"
        }}
        style={styles.ImageBackground_28_54}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c46/b3fe/120541f99763f28123721804472e7757"
        }}
        style={styles.ImageBackground_28_55}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ec2/5f03/541c5a5bbce1d47918a076047272a4ac"
        }}
        style={styles.ImageBackground_28_56}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a78b/d083/8f503fbe56665580489dbe5b536a8b71"
        }}
        style={styles.ImageBackground_28_57}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/520d/23b0/5c988899d1b57d19c17bf17c6ca9985f"
        }}
        style={styles.ImageBackground_28_58}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("109%") },
  View_28_3: {
    width: wp("106%"),
    minWidth: wp("106%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_28_4: {
    width: wp("103%"),
    minWidth: wp("103%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_28_14: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_28_15: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 140, 6, 1)",
    opacity: 0.8100000023841858
  },
  ImageBackground_28_16: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_28_17: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_28_17: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_56_54: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  View_28_11: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(21, 209, 119, 1)"
  },
  View_28_12: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_28_12: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_27: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("25%")
  },
  View_28_28: {
    width: wp("13%"),
    minWidth: wp("13%"),
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
  View_28_29: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_28_29: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_28_30: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("26%")
  },
  View_28_31: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("35%")
  },
  View_28_32: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_28_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_33: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_28_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_34: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("0%"),
    backgroundColor: "rgba(220, 208, 208, 1)"
  },
  View_28_35: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_28_35: {
    color: "rgba(154, 151, 151, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_36: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("8%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(239, 230, 230, 1)",
    borderWidth: 2
  },
  View_28_38: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_28_38: {
    color: "rgba(220, 208, 208, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_39: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("61%")
  },
  View_28_40: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_28_41: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 140, 6, 1)",
    opacity: 0.8100000023841858
  },
  View_28_42: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_28_42: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_28_43: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41%")
  },
  View_28_44: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 140, 6, 1)",
    opacity: 0.8100000023841858
  },
  View_28_45: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_28_45: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_46: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("66%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_28_47: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("82%")
  },
  View_28_48: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(220, 208, 208, 1)"
  },
  View_28_49: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_28_49: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_28_50: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("74%"),
    resizeMode: "cover"
  },
  View_28_51: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("82%"),
    backgroundColor: "rgba(3, 154, 219, 1)",
    opacity: 0.8100000023841858
  },
  View_28_52: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("83%"),
    justifyContent: "flex-start"
  },
  Text_28_52: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_53: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("88%"),
    justifyContent: "flex-start"
  },
  Text_28_53: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_28_54: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("92%"),
    resizeMode: "cover"
  },
  ImageBackground_28_55: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("92%"),
    resizeMode: "cover"
  },
  ImageBackground_28_56: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("92%"),
    resizeMode: "cover"
  },
  ImageBackground_28_57: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("92%"),
    resizeMode: "cover"
  },
  ImageBackground_28_58: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("88%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
