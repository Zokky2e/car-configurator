interface Props {
  configuratorPart: string;
}

export function Configurator(props: Props) {
  return <div>Configurator - {props.configuratorPart}</div>;
}
