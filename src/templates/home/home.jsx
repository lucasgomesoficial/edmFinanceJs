import DiscordImg from '../../assets/img/logoDiscord1.png';
import GithubImg from '../../assets/img/logoGithub1.png';
import GoogleImg from '../../assets/img/logoGoogle.svg';
import TwitchImg from '../../assets/img/logoTwitch1.png';
import TwitterImg from '../../assets/img/logoTwitter1.png';
import { SignButton } from '../../components/SignButton/SignButton';

export const HomeTemplate = () => {
  return (
    <>
      <SignButton
        backgroundColor='#EA4335'
        title='Entre com sua conta Google'
        image={GoogleImg}
      />{' '}
      <SignButton
        backgroundColor='#353CEA'
        title='Entre com sua conta Discord'
        image={DiscordImg}
      />
      <SignButton
        backgroundColor='#6F35EA'
        title='Entre com sua conta Twitch'
        image={TwitchImg}
      />
      <SignButton
        backgroundColor='#359EEA'
        title='Entre com sua conta Twitter'
        image={TwitterImg}
      />
      <SignButton
        backgroundColor='#555863'
        title='Entre com sua conta Github'
        image={GithubImg}
      />
    </>
  );
};
