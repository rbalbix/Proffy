import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import {
  Container,
  Banner,
  Title,
  TitleBold,
  ButtonsContainer,
  Button,
  ButtonText,
  TotalConnections,
} from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

export default function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    async function loadTotal() {
      const response = await api.get('connections');

      setTotalConnections(response.data.total);
    }

    loadTotal();
  }, []);

  const { navigate } = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  return (
    <Container>
      <Banner style={{ resizeMode: 'contain' }} source={landingImg} />

      <Title>
        Seja bem-vindo, {'\n'}
        <TitleBold>O que deseja fazer ?</TitleBold>
      </Title>

      <ButtonsContainer>
        <Button primary onPress={handleNavigateToStudyPages}>
          <Image source={studyIcon} />
          <ButtonText>Estudar</ButtonText>
        </Button>

        <Button onPress={handleNavigateToGiveClassesPage}>
          <Image source={giveClassesIcon} />
          <ButtonText>Dar aulas</ButtonText>
        </Button>
      </ButtonsContainer>

      <TotalConnections>
        Total de {totalConnections} conexões já realizadas{' '}
        <Image source={heartIcon} />
      </TotalConnections>
    </Container>
  );
}
