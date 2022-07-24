import { useSearchParams } from "react-router-dom";

export function Configuration() {
  const [searchParams] = useSearchParams();
  return <div>{searchParams.get("name")}</div>;
}
