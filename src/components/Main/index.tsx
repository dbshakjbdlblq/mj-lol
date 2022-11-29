import { useState } from 'react';
import Search from './components/Search';
import Result from './components/Result';
import Logo from '../../assets/mj_logo.png';
import * as S from './index.styles';

const Main = () => {
  const [summonerResult, setSummonerResult] = useState<null | Summoner>(null);
  const [leagueResult, setLeagueResult] = useState<null | League>(null);

  return (
    <S.Container>
      <S.Logo src={Logo} />
      <Search
        setSummonerResult={setSummonerResult}
        setLeagueResult={setLeagueResult}
      />
      {summonerResult && leagueResult && (
        <Result
          name={summonerResult.name}
          level={summonerResult.summonerLevel}
          win={leagueResult.wins}
          lose={leagueResult.losses}
        />
      )}
    </S.Container>
  );
};

export default Main;
