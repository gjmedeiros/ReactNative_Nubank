import React from 'react';
import QRCode from 'react-native-qrcode-image';

import {Container, Code} from './styles';

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="https://rocketseat.com.br"
          size={80}
          bgColor="#FFFFFF"
          fgColor="#8B10AE"
        />
      </Code>
    </Container>
  );
}
