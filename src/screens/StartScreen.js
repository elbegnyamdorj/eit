import React from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

const StartScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Smart Car Wash</Header>
    <Paragraph>Цаг захиалгын апп</Paragraph>
    <Button mode='contained' onPress={() => navigation.navigate('LoginScreen')}>
      Нэвтрэх
    </Button>
    <Button
      mode='outlined'
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Бүртгүүлэх
    </Button>
  </Background>
);

export default StartScreen;
