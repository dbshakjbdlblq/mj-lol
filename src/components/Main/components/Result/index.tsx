import * as S from './index.styles';

interface ResultProps {
  name: string;
  level: number;
  win: number;
  lose: number;
}

const Result = ({ name, level, win, lose }: ResultProps) => {
  return (
    <S.Container>
      <S.Head>
        <S.Name>{name}</S.Name>
        <S.Level>Lv.{level}</S.Level>
      </S.Head>
      <S.Body>
        <S.Win>승 {win}</S.Win>
        <S.Lose>패 {lose}</S.Lose>
      </S.Body>
    </S.Container>
  );
};

export default Result;
