import * as S from "./style";

type TextProps = {
  title: string;
  subtitle: string;
  main: string;
};
export function Text({ title, subtitle, main }: TextProps) {
  return (
    <S.Box>
      <hgroup>
        <div className="title">
          <span></span>
          <h2>{title}</h2>
        </div>
        <h3>{subtitle}</h3>
      </hgroup>
      <p>{main}</p>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </S.Box>
  );
}
