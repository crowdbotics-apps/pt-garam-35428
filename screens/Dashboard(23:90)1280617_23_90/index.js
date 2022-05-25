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
      <View style={styles.View_23_92} />
      <View style={styles.View_23_204} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37ef/e17a/fb7554251a752d86a8ea56f532c7ca0d"
        }}
        style={styles.ImageBackground_23_205}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46b1/c8fb/7292c9e20a6fcebbab334cf096d3db88"
        }}
        style={styles.ImageBackground_23_206}
      />
      <View style={styles.View_23_207}>
        <Text style={styles.Text_23_207}>
          Enterprise Resource Planning. Version 1.1
        </Text>
      </View>
      <View style={styles.View_23_208}>
        <Text style={styles.Text_23_208}>PT Garam (Persero)</Text>
      </View>
      <View style={styles.View_23_209} />
      <View style={styles.View_23_210}>
        <Text style={styles.Text_23_210}>Senin, 04 April 2022 13:00:55</Text>
      </View>
      <View style={styles.View_23_211}>
        <Text style={styles.Text_23_211}>Profile</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_23_212}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("21_37"))
        }
      >
        <View style={styles.View_23_213} />
        <View style={styles.View_23_214}>
          <Text style={styles.Text_23_214}>LOGOUT</Text>
        </View>
      </TouchableOpacity>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/994b/1c5c/113e06ce3061d14eec1497f125f965e2"
        }}
        style={styles.ImageBackground_23_215}
      />
      <View style={styles.View_23_216} />
      <View style={styles.View_23_217}>
        <Text style={styles.Text_23_217}>Muhammad Amin Ilyasyah</Text>
      </View>
      <View style={styles.View_23_218}>
        <Text style={styles.Text_23_218}>797</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3123/07f8/6523968214976e2c7c5be98210a10807"
        }}
        style={styles.ImageBackground_23_219}
      />
      <View style={styles.View_23_220}>
        <View style={styles.View_23_221}>
          <Text style={styles.Text_23_221}>Modules</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ac5/cd2a/8fd608dd936b4aff6ac173ae4feaec7d"
          }}
          style={styles.ImageBackground_23_222}
        />
      </View>
      <View style={styles.View_23_223} />
      <View style={styles.View_23_224}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0fd/40a4/9a72ff8ed07c32e0ca760cc41e8c32e1"
          }}
          style={styles.ImageBackground_23_225}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a33/fe97/1f463a856ffd14ec3c8d922df1bb6853"
          }}
          style={styles.ImageBackground_23_226}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffa1/b0a7/03b38fbc565e7c419bce4fbcee290b24"
          }}
          style={styles.ImageBackground_23_227}
        />
        <View style={styles.View_23_228}>
          <Text style={styles.Text_23_228}>My Task</Text>
        </View>
      </View>
      <View style={styles.View_23_229}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0fd/40a4/9a72ff8ed07c32e0ca760cc41e8c32e1"
          }}
          style={styles.ImageBackground_23_230}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a33/fe97/1f463a856ffd14ec3c8d922df1bb6853"
          }}
          style={styles.ImageBackground_23_231}
        />
        <View style={styles.View_23_232}>
          <Text style={styles.Text_23_232}>Survei</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d41/9ed7/c64f3aec72213856e076e97207434726"
          }}
          style={styles.ImageBackground_23_233}
        />
      </View>
      <View style={styles.View_23_234}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0fd/40a4/9a72ff8ed07c32e0ca760cc41e8c32e1"
          }}
          style={styles.ImageBackground_23_235}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a33/fe97/1f463a856ffd14ec3c8d922df1bb6853"
          }}
          style={styles.ImageBackground_23_236}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5f3/a14d/f66c41a28d2d18fa593bd16fd33da5d5"
          }}
          style={styles.ImageBackground_23_237}
        />
        <View style={styles.View_23_238}>
          <Text style={styles.Text_23_238}>Help desk</Text>
        </View>
      </View>
      <View style={styles.View_23_239}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0fd/40a4/9a72ff8ed07c32e0ca760cc41e8c32e1"
          }}
          style={styles.ImageBackground_23_240}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a33/fe97/1f463a856ffd14ec3c8d922df1bb6853"
          }}
          style={styles.ImageBackground_23_241}
        />
        <View style={styles.View_23_242}>
          <Text style={styles.Text_23_242}>E-Letter</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35bf/c97d/24784b7410a411f2a82af8cfdcba281b"
          }}
          style={styles.ImageBackground_23_243}
        />
      </View>
      <View style={styles.View_23_244}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0fd/40a4/9a72ff8ed07c32e0ca760cc41e8c32e1"
          }}
          style={styles.ImageBackground_23_245}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a33/fe97/1f463a856ffd14ec3c8d922df1bb6853"
          }}
          style={styles.ImageBackground_23_246}
        />
        <View style={styles.View_23_247}>
          <Text style={styles.Text_23_247}>Warehouse</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1a5/878f/eca5b873475953d1b207bdd9e1bb2d65"
          }}
          style={styles.ImageBackground_23_248}
        />
      </View>
      <View style={styles.View_23_249}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0fd/40a4/9a72ff8ed07c32e0ca760cc41e8c32e1"
          }}
          style={styles.ImageBackground_23_250}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a33/fe97/1f463a856ffd14ec3c8d922df1bb6853"
          }}
          style={styles.ImageBackground_23_251}
        />
        <View style={styles.View_23_252}>
          <Text style={styles.Text_23_252}>Finance</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ea4/dbed/752ec4947860fd295b9bababc82439b0"
          }}
          style={styles.ImageBackground_23_253}
        />
      </View>
      <View style={styles.View_23_254}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0fd/40a4/9a72ff8ed07c32e0ca760cc41e8c32e1"
          }}
          style={styles.ImageBackground_23_255}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a33/fe97/1f463a856ffd14ec3c8d922df1bb6853"
          }}
          style={styles.ImageBackground_23_256}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51df/3604/ec1c49ba37b6c0f56ec31ef899a95734"
          }}
          style={styles.ImageBackground_23_257}
        />
      </View>
      <View style={styles.View_23_258}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0fd/40a4/9a72ff8ed07c32e0ca760cc41e8c32e1"
          }}
          style={styles.ImageBackground_23_259}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a33/fe97/1f463a856ffd14ec3c8d922df1bb6853"
          }}
          style={styles.ImageBackground_23_260}
        />
        <View style={styles.View_23_261}>
          <Text style={styles.Text_23_261}>Accounting</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bed7/2f7c/b13c31389516155c77564519a7e5fc2b"
          }}
          style={styles.ImageBackground_23_262}
        />
      </View>
      <View style={styles.View_23_263}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0fd/40a4/9a72ff8ed07c32e0ca760cc41e8c32e1"
          }}
          style={styles.ImageBackground_23_264}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a33/fe97/1f463a856ffd14ec3c8d922df1bb6853"
          }}
          style={styles.ImageBackground_23_265}
        />
        <View style={styles.View_23_266}>
          <Text style={styles.Text_23_266}>Meeting</Text>
        </View>
      </View>
      <View style={styles.View_23_267}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0fd/40a4/9a72ff8ed07c32e0ca760cc41e8c32e1"
          }}
          style={styles.ImageBackground_23_268}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a33/fe97/1f463a856ffd14ec3c8d922df1bb6853"
          }}
          style={styles.ImageBackground_23_269}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b5cc/411d/52052bc580e50977cd1974c614b451e3"
          }}
          style={styles.ImageBackground_23_270}
        />
        <View style={styles.View_23_271}>
          <Text style={styles.Text_23_271}>Administrator</Text>
        </View>
      </View>
      <View style={styles.View_23_272}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0fd/40a4/9a72ff8ed07c32e0ca760cc41e8c32e1"
          }}
          style={styles.ImageBackground_23_273}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a33/fe97/1f463a856ffd14ec3c8d922df1bb6853"
          }}
          style={styles.ImageBackground_23_274}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b4d/468e/e74b8da96de88a18cf828b310ee4fd18"
          }}
          style={styles.ImageBackground_23_275}
        />
        <View style={styles.View_23_276}>
          <Text style={styles.Text_23_276}>Report</Text>
        </View>
      </View>
      <View style={styles.View_23_277}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0fd/40a4/9a72ff8ed07c32e0ca760cc41e8c32e1"
          }}
          style={styles.ImageBackground_23_278}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a33/fe97/1f463a856ffd14ec3c8d922df1bb6853"
          }}
          style={styles.ImageBackground_23_279}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1f4/e871/0be3e84e2a315b39c241dbb6af41d909"
          }}
          style={styles.ImageBackground_23_280}
        />
        <View style={styles.View_23_281}>
          <Text style={styles.Text_23_281}>Planning</Text>
        </View>
      </View>
      <View style={styles.View_23_282}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0fd/40a4/9a72ff8ed07c32e0ca760cc41e8c32e1"
          }}
          style={styles.ImageBackground_23_283}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a33/fe97/1f463a856ffd14ec3c8d922df1bb6853"
          }}
          style={styles.ImageBackground_23_284}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c47/e32d/38ded4ee0f7dc1ed014f0a93393cd331"
          }}
          style={styles.ImageBackground_23_285}
        />
        <View style={styles.View_23_286}>
          <Text style={styles.Text_23_286}>HR</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_23_287}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("28_2"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0fd/40a4/9a72ff8ed07c32e0ca760cc41e8c32e1"
          }}
          style={styles.ImageBackground_23_288}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a33/fe97/1f463a856ffd14ec3c8d922df1bb6853"
          }}
          style={styles.ImageBackground_23_289}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83b4/4442/939585233890ccd9ea6ff4ace52ade8e"
          }}
          style={styles.ImageBackground_23_290}
        />
      </TouchableOpacity>
      <View style={styles.View_23_291}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0fd/40a4/9a72ff8ed07c32e0ca760cc41e8c32e1"
          }}
          style={styles.ImageBackground_23_292}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a33/fe97/1f463a856ffd14ec3c8d922df1bb6853"
          }}
          style={styles.ImageBackground_23_293}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d2d/8443/db2e320422b246205aa21901ca7cafc4"
          }}
          style={styles.ImageBackground_23_294}
        />
      </View>
      <View style={styles.View_23_295}>
        <Text style={styles.Text_23_295}>Absensi</Text>
      </View>
      <View style={styles.View_23_296}>
        <Text style={styles.Text_23_296}>Setting</Text>
      </View>
      <View style={styles.View_23_297}>
        <Text style={styles.Text_23_297}>Sales</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b97/66a5/23c647d33e34b79114cdb46f596676f6"
        }}
        style={styles.ImageBackground_23_298}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc8a/54cc/ddf8757665bc4fdff0c6f9bdd7e0a813"
        }}
        style={styles.ImageBackground_23_299}
      />
      <View style={styles.View_23_300} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("109%") },
  View_23_92: {
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
  View_23_204: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(8, 109, 183, 1)",
    opacity: 0.7200000286102295
  },
  ImageBackground_23_205: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  ImageBackground_23_206: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%")
  },
  View_23_207: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_23_207: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_208: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_23_208: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_209: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(254, 140, 6, 1)",
    opacity: 0.8100000023841858
  },
  View_23_210: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_23_210: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_211: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_23_211: {
    color: "rgba(254, 162, 54, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_23_212: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("8%")
  },
  View_23_213: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_23_214: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_214: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 2,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_215: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("7%"),
    resizeMode: "cover"
  },
  View_23_216: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("16%"),
    backgroundColor: "rgba(229, 221, 221, 1)"
  },
  View_23_217: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_23_217: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_218: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_23_218: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_219: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%")
  },
  View_23_220: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("31%")
  },
  View_23_221: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_221: {
    color: "rgba(254, 162, 54, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_222: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_23_223: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("35%"),
    backgroundColor: "rgba(229, 221, 221, 1)"
  },
  View_23_224: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("81%")
  },
  ImageBackground_23_225: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_226: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_23_227: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_23_228: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_23_228: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_229: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("96%")
  },
  ImageBackground_23_230: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_231: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_23_232: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_23_232: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_233: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_23_234: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("81%")
  },
  ImageBackground_23_235: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_236: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_23_237: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_23_238: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_23_238: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_239: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("96%")
  },
  ImageBackground_23_240: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_241: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_23_242: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_23_242: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_243: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  View_23_244: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("52%")
  },
  ImageBackground_23_245: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_246: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_23_247: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_23_247: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_248: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_23_249: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("52%")
  },
  ImageBackground_23_250: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_251: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_23_252: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_23_252: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_253: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_23_254: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("52%")
  },
  ImageBackground_23_255: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_256: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_23_257: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_23_258: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("67%")
  },
  ImageBackground_23_259: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_260: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_23_261: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_23_261: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_262: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_23_263: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("67%")
  },
  ImageBackground_23_264: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_265: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_23_266: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_23_266: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_267: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("67%")
  },
  ImageBackground_23_268: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_269: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_23_270: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_23_271: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_23_271: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_272: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("81%")
  },
  ImageBackground_23_273: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_274: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_23_275: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_23_276: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_23_276: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_277: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("96%")
  },
  ImageBackground_23_278: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_279: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_23_280: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_23_281: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_23_281: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_282: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("38%")
  },
  ImageBackground_23_283: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_284: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_23_285: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_23_286: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_23_286: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_23_287: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("38%")
  },
  ImageBackground_23_288: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_289: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_23_290: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_23_291: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("38%")
  },
  ImageBackground_23_292: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_23_293: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_23_294: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_23_295: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_23_295: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_296: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_23_296: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_297: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_23_297: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_23_298: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("70%"),
    resizeMode: "cover"
  },
  ImageBackground_23_299: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("18%"),
    resizeMode: "cover"
  },
  View_23_300: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
