import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import { Container, TopBar, BackButton, Title } from './styles';

const PageHeader: React.FC = ({ children }) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return (
    <Container>
      <TopBar>
        <BackButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode='contain' />
        </BackButton>

        <Image source={logoImg} resizeMode='contain' />
      </TopBar>

      <Title>{children}</Title>
    </Container>
  );
};

export default PageHeader;
