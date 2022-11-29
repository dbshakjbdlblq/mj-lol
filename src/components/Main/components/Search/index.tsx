import axios from 'axios';
import { useState } from 'react';
import * as S from './index.styles';

interface SearchProps {
  setSummonerResult: React.Dispatch<React.SetStateAction<null | Summoner>>;
  setLeagueResult: React.Dispatch<React.SetStateAction<null | League>>;
}

const Search = ({ setSummonerResult, setLeagueResult }: SearchProps) => {
  const [name, setName] = useState('');

  const search: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    const summonerResponse = await axios.get(
      `/lol/summoner/v4/summoners/by-name/${name}`
    );

    const leagueResponse = await axios.get(
      `/lol/league/v4/entries/by-summoner/${summonerResponse.data.id}`
    );

    setSummonerResult(summonerResponse.data);
    setLeagueResult(leagueResponse.data[0]);
  };

  return (
    <S.Container onSubmit={search}>
      <S.Input value={name} onChange={e => setName(e.target.value)} />
      <button>
        <S.SearchIcon />
      </button>
    </S.Container>
  );
};

export default Search;
