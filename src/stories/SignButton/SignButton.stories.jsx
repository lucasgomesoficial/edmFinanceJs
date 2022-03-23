import React from 'react';
import { SignButton } from '../../components/SignButton/SignButton';
import googleImg from '../../assets/img/logoGoogle.svg';
import discordImg from '../../assets/img/logoDiscord.png';
import githubImg from '../../assets/img/logoGithub.png';
import twitchImg from '../../assets/img/logoTwitch.png';
import twitterImg from '../../assets/img/logoTwitter.png';

export default {
  title: 'Components/SignButton',
  component: SignButton,
  args: {
    image: googleImg,
    title: 'Entre com sua conta Google',
    backgroundColor: '#EA4335',
  },
  argTypes: {
    backgroundColor: {
      options: ['#EA4335', '#353CEA', '#6F35EA', '#359EEA', '#555863'],
      control: {
        type: 'select',
      },
    },
    image: {
      options: [googleImg, discordImg, githubImg, twitchImg, twitterImg],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args) => <SignButton {...args} />;

export const Button = Template.bind({});

const possibilitiesProps = [
  {
    image: googleImg,
    title: 'Entre com sua conta Google',
    backgroundColor: '#EA4335',
  },
  {
    image: discordImg,
    title: 'Entre com sua conta Discord',
    backgroundColor: '#353CEA',
  },
  {
    image: twitchImg,
    title: 'Entre com sua conta Twitch',
    backgroundColor: '#6F35EA',
  },
  {
    image: twitterImg,
    title: 'Entre com sua conta Twitter',
    backgroundColor: '#359EEA',
  },
  {
    image: githubImg,
    title: 'Entre com sua conta Github',
    backgroundColor: '#555863',
  },
];

export const Possibilities = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '1120px',
        gap: '10px',
      }}
    >
      <h1
        style={{
          fontSize: '30px',
          border: '1px solid #dedee4',
          width: '100%',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        Possibilidades de SignButton
      </h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          justifyContent: 'center',
        }}
      >
        {possibilitiesProps.map(({ image, title, backgroundColor }) => (
          <SignButton
            backgroundColor={backgroundColor}
            title={title}
            image={image}
          />
        ))}
      </div>
    </div>
  );
};
