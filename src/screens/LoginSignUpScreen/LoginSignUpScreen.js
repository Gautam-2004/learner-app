import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import backIcon from '../../assets/images/png/arrow-back-outline.png';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomButton2 from '../../components/CustomButtonOutlined/CustomButtonOutlined';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useTranslation } from '../../context/LanguageContext';


const LoginSignUpScreen = () => {
  //multi language setup
  const { t } = useTranslation();

  const nav = useNavigation();

  const navigate = () => {
    nav.navigate("LanguageScreen");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backbutton} onPress={navigate}>
        <Image source={backIcon} resizeMode='contain' style={{ width: 30, height: 30 }} />
      </TouchableOpacity>
      <View style={styles.buttonContainer}>

        <CustomButton text={t('i_am_new_user')}  onPress={()=> {nav.navigate("ContinueRegisterScreen")}}/>
        <View style={{padding: 10}}></View>
        <CustomButton2 onPress={()=> {nav.navigate("LoginScreen")}}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: 'white',
  },
  backbutton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  buttonContainer: {
    padding: 10,
    flex: 1,
    marginBottom: 100,
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
});

export default LoginSignUpScreen;