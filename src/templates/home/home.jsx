import DiscordImg from '../../assets/img/logoDiscord.png';
import GithubImg from '../../assets/img/logoGithub.png';
import GoogleImg from '../../assets/img/logoGoogle.svg';
import TwitchImg from '../../assets/img/logoTwitch.png';
import TwitterImg from '../../assets/img/logoTwitter.png';
import { SignButton } from '../../components/SignButton/SignButton';
import { SignButtons } from '../../components/Signbuttons/SignButtons';

export const HomeTemplate = () => {
  return (
    <SignButtons>
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
    </SignButtons>
  );
};
