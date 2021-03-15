import React from 'react';

import { ServerButton } from '../ServerButton';

import { Container, Separator } from './styles';

export function ServerList() {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={2} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
    </Container>
  )
}