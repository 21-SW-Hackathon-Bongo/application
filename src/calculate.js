import React, {useState} from "react";
import { StyleSheet, Text, View, ScrollView, Button, Alert, TouchableOpacity, TouchableHighlight, TextInput, Image, Modal } from "react-native";
import 'react-native-gesture-handler';
import {basicFont} from '../App';
import Feather from 'react-native-vector-icons/Feather'
import DropDownPicker from 'react-native-dropdown-picker';

import SemiCircleProgressBar from "react-progressbar-semicircle";
import SemiCircleProgress from './components/test';

import MoneyImg from './images/iconStrokeMoney.png';
import MoneyBlueImg from './images/iconStrokeMoneyBlue.png';
import ClockImg from './images/iconStrockClock.png';

const colors = {
  blue: "#0036d5",
  flatBlueSkyLight: "#fdfeff",
  signatureBlue: "#0047cc",
  veryLightPink: "#d0d0d0",
  lightGray: "#ededed",
  white: "#ffffff",
  textMiscBtnCenterBlackStyle: "#0b0b0b",
  veryLightPinkTwo: "#b7b7b7",
  signatureBlue2: "rgba(0, 71, 204, 0.2)",
  colorPrimary500: "#00d5a7"
};

////////////////// contents layout ///////////////

const pageBackTitle= {
    width: 375,
        height: 60
};

const layoutBarForTitle= {
    width: 375,
        height: 117
};

const titleTitle= {
    fontFamily: basicFont,
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 44.8,
    letterSpacing: 0,
    color: "#000000",
    paddingTop: 10
};
const choiceClickedOn= {
    width: 180,
    height: 44,
    borderRadius: 11,
    borderStyle: "solid",
    borderWidth: 1.7,
    borderColor: colors.blue,
};

const choiceClickedOff= {
    width: 180,
    height: 44,
    borderRadius: 11,
    borderStyle: "solid",
    borderWidth: 1.7,
    borderColor: "#9b9b9b"
};

const rectangleMail = {
  width: 243,
  height: 44,
  opacity: 0.7,
  borderRadius: 3.3,
  borderStyle: "solid",
  borderWidth: 1.1,
  borderColor: "#cecece"
};

const rectanglePwd = {
  width: 327,
  height: 283,
  opacity: 0.7,
  borderRadius: 3.3,
  borderStyle: "solid",
  borderWidth: 1.1,
  borderColor: "#cecece",
  paddingLeft: 10,
  paddingTop: 10
};
////////////////////////////////////

/////////////// text layout //////////

const notChoiceLayer = {
  fontFamily: basicFont,
  fontSize: 14.4,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "center",
  color: "#9b9b9b",
  paddingTop: 10
};

const choiceLayer = {
  fontFamily: basicFont,
  fontSize: 14.4,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "center",
  color: colors.blue,
  paddingTop: 10
};


const layerMail= {
  width: 227,
  height: 44,
  opacity: 0.7,
  borderRadius: 3.3,
  borderStyle: "solid",
  borderWidth: 1.1,
  borderColor: "#cecece"
};

const layer= {
  width: 331,
  height: 44,
  opacity: 0.7,
  borderRadius: 3.3,
  borderStyle: "solid",
  borderWidth: 1.1,
  borderColor: "#cecece"
};

const layerBirth= {
    width: 332,
        height: 22.1,
        fontFamily: "NotoSansCJKkr",
        fontSize: 14.4,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
};

const layerSex= {
    width: 343,
        height: 22.1,
        fontFamily: "NotoSansCJKkr",
        fontSize: 14.4,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
};

const layerAddr= {
    width: 123,
        height: 22.1,
        fontFamily: "NotoSansCJKkr",
        fontSize: 14.4,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
};

const layerAddrDetail= {
    width: 299,
        height: 19,
        fontFamily: "NotoSansCJKkr",
        fontSize: 14.4,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
};

////////////////////////////////////////////////////////

const calcPage = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: colors.white
  },
  scrollView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingBottom: 17.4,
      paddingTop: 25,
  },
  text: {
    flex: 1,
    fontFamily: basicFont,
    fontSize: 14.4,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    paddingBottom: -20,
    color: "#000000"
  },
  title: titleTitle,
  nextBtn: {
    alignSelf: 'stretch',
    height: 55,
    borderRadius: 27.6,
    backgroundColor: "#d1d1d1",
    marginTop: 30
  },
  nextBtnActive: {
    alignSelf: 'stretch',
    height: 55,
    borderRadius: 27.6,
    backgroundColor: colors.signatureBlue,
    marginTop: 30
  },
  doneBtn: {
    alignSelf: 'stretch',
    height: 55,
    borderRadius: 27.6,
    backgroundColor: colors.white,
    borderColor: colors.blue,
    marginTop: 30,
    borderRadius: 27.6,
    borderStyle: "solid",
    borderWidth: 1.7,
  },
  nextBtnLabel: {
    fontFamily: basicFont,
    fontSize: 17.7,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0.44,
    textAlign: "center",
    color: colors.white,
    paddingTop: 15
  },
  nextBtnLabelActive: {
    fontFamily: basicFont,
    fontSize: 17.7,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0.44,
    textAlign: "center",
    color: colors.blue,
    paddingTop: 15
  },
  seperation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 10,
    paddingLeft: 35,
    paddingRight: 35
  },
  interestBox: {
    width: 144,
    height: 130,
    opacity: 0.7,
    borderRadius: 10.7,
    borderStyle: "solid",
    borderWidth: 2.1,
    borderColor: '#cecece',
    alignItems: 'center'
  },
  interestBoxActive: {
    width: 144,
    height: 130,
    opacity: 0.7,
    borderRadius: 10.7,
    borderStyle: "solid",
    borderWidth: 2.1,
    borderColor: colors.blue,
    alignItems: 'center'
  },
  interestLabel: {
    color: "#9b9b9b",
    textAlign: 'center'
  },
  interestLabelActive: {
    color: colors.blue,
    textAlign: 'center'
  },
  interestImg: {
    width: 90,
    height: 90,
    alignItems: 'center',
    marginTop: 10
  },
  centeredView: {
    alignItems: 'center'
  },
  progressBox: {
    width: '100%',
    height: 220,
    backgroundColor: colors.white,
    borderRadius: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop:10,
    alignItems: 'center',
    paddingTop: 30
  },
  progressPer: {
    fontFamily: basicFont,
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#000000"
  },
  progressMsg: {
    fontFamily: basicFont,
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.signatureBlue
  },
  progressDesc: {
    fontFamily: basicFont,
    fontSize: 16,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: "#898989"
  },
  smallImg: {
    width:24,
    height:24
  },
  divider: {
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 2,
    width: '100%',
    marginTop: 10
  }
});

function calculateScreen({navigation}){
  const [interests, setInterests] = useState([0,0,0,0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [step, setStep] = useState(0);

  function stepChanger(){
    if (step == 0) {
      setStep(1);
    }
  }

  function openTipModal() {
    setModalVisible(true);
    setStep(2);
  }

  setTimeout(stepChanger, 3000);

  return (
  <View style={calcPage.container}>
    <ScrollView>
      <TipModal modalVisible = { modalVisible } setModalVisible={setModalVisible}/>
      <View style={{padding:22}}>
        <View style ={calcPage.header}>
            <Text style ={calcPage.title}>오늘 BONGO{"\n"}정산 확인</Text>
        </View>

        <Text style={calcPage.text}>2021년 2월 6일</Text>
        <View style={calcPage.progressBox}>
          <SemiCircleProgress
              percentage={step == 0 ? 35 : 100}
              progressColor={colors.blue}
          >
            <Text style={calcPage.progressPer}>
              {step == 0 ? '35' : '100'}%
            </Text>
            <Text style={calcPage.progressMsg}>
              {step == 0 ? '2h 30m' : step == 1 ? '100,000원' : '115,000원'}
            </Text>
            <Text style={calcPage.progressDesc}>
              {step == 0 ? '업무 시간이 남았어요' : '봉고가 완료되었습니다.'}
            </Text>
          </SemiCircleProgress>
        </View>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={[step == 1 ? calcPage.nextBtnActive : step == 0 ? calcPage.nextBtn : calcPage.doneBtn]}
          onPress={() => step == 1 ? openTipModal() : null}>
            <Text style={[step > 1 ? calcPage.nextBtnLabelActive : calcPage.nextBtnLabel]}>{step > 1 ? "정산 완료" : "정산 받기"}</Text>
          </TouchableOpacity>
        </View>

        <Text style={[calcPage.text, {color:colors.blue, marginTop:30, fontSize:14}]}>
          상세 내용
        </Text>
        <Text style={[calcPage.text, {marginTop:20, fontSize:16, fontWeight:'bold'}]}>
          오늘 10시간 강남구 전기 관련 업무자
        </Text>
        <View>
          <View style={[calcPage.seperation, {alignItems:'flex-start', paddingLeft:0, marginTop:25}]}>
            <Image style={calcPage.smallImg} source={ClockImg}/>
            <Text style={[calcPage.text, {textAlign:'left', paddingLeft:10, paddingTop:5}]}>시간</Text>
            <Text style={[calcPage.text, {paddingTop:5, textAlign:'left'}]}>10:00 - 20:00</Text>
          </View>
          <View style={calcPage.divider}></View>
          <View style={[calcPage.seperation, {alignItems:'flex-start', paddingLeft:0, marginTop:15}]}>
            <Image style={calcPage.smallImg} source={MoneyImg}/>
            <Text style={[calcPage.text, {textAlign:'left', paddingLeft:10, paddingTop:5}]}>일급</Text>
            <Text style={[calcPage.text, {paddingTop:5, textAlign:'left'}]}>100,000원</Text>
          </View>
          <View style={calcPage.divider}></View>
        </View>
      </View>
    </ScrollView>
    <View style ={[menuStyle.menu, {paddingTop:20}]}>
      <View>
          <TouchableOpacity 
              onPress={() => null}>
              <Feather
                  style ={{textAlign:'center'}}
                  name ="dollar-sign"
                  color ="blue"
                  size={25}/>
              <Text style={menuStyle.menuTextChoiced}>정산</Text>
          </TouchableOpacity>
      </View>
      <View>
          <TouchableOpacity 
              onPress={() => navigation.navigate('main')}>
              <Feather
                  style ={{textAlign:'center'}}
                  name ="home"
                  color ="black"
                  size={25}/>
              <Text style={menuStyle.menuText}>메인</Text>
          </TouchableOpacity>
      </View>
      <View>
          <TouchableOpacity 
              onPress={() => navigation.navigate('private')}>
          <Feather
              style ={{textAlign:'center'}}
              name ="user"
              color ="black"
              size={25}/>
          <Text style={menuStyle.menuText}>내 프로필</Text>
          </TouchableOpacity>
      </View>
    </View>
  </View> 
  );
}

function TipModal(props) {
  return (
    <Modal
          animationType="slide"
          transparent={true}
          visible={props.modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalLogo} >
                <Image style={{width:50, height:50, marginTop:10}} source={MoneyBlueImg}/>
              </View>
              <Text style={styles.modalText}>팁 15,000원이 들어왔습니다!</Text>

              <TouchableHighlight
                style={styles.bringBtn}
                onPress={() => {
                  props.setModalVisible(!props.modalVisible);
                }}
              >
                <Text style={styles.textStyle}>받기</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(52, 52, 52, 0.14)'
  },
  modalView: {
    width: 328,
    height: 200,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.5,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    fontFamily: basicFont,
    fontSize: 17.7,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0.44,
    textAlign: "center",
    color: colors.white,
    paddingTop: 15
  },
  modalText: {
    marginBottom: 30,
    fontFamily: basicFont,
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0.44,
    textAlign: "center",
    color: '#000000',
    marginTop: -50
  },
  bringBtn: {
    width: 265,
    height: 55,
    borderRadius: 27.6,
    backgroundColor: colors.signatureBlue
  },
  modalLogo: {
    top: -70,
    width:70,
    height: 70,
    borderRadius:40,
    backgroundColor:colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.5,
    alignItems:'center'
  }
});

const menuBox = {
  height: 84,
  backgroundColor: colors.flatBlueSkyLight,
  flexDirection: 'row',
  justifyContent: 'space-around',
  shadowColor: "rgba(0, 0, 0, 0.24)",
  shadowOffset: {
    width: 0,
    height: 8
  },
  shadowRadius: 20,
  shadowOpacity: 1,
};

const menuBoxText = {
  width: 60,
  height: 20,
  fontFamily: basicFont,
  fontSize: 12,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 19.2,
  letterSpacing: 0,
  textAlign: "center",
  color: colors.black
};


const menuBoxTextChoiced = {
  width: 60,
  height: 20,
  fontFamily: basicFont,
  fontSize: 12,
  fontWeight: "normal",
  fontStyle: "normal",
  lineHeight: 19.2,
  letterSpacing: 0,
  textAlign: "center",
  color: colors.blue
};

const menuStyle = StyleSheet.create({
    menu: menuBox,
    menuText: menuBoxText,
    menuTextChoiced : menuBoxTextChoiced,
});

export default calculateScreen