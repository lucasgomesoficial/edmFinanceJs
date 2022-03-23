import React from 'react';
import Google from '../../assets/img/logoGoogle.svg';
import { SignButton } from '../../components/SignButton/SignButton';

export default {
  title: 'Components/SignButton',
  component: SignButton,
};

const Template = (args) => <SignButton {...args} />;

export const Google = Template.bind({});

Google.args = {
  image: Google,
  title: 'Entre com sua conta Google',
};
