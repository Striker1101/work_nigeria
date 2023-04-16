import React from "react";
import { useRouter } from "next/router";
function Translate() {
  const { locale, locales, push } = useRouter();
  const handleClick = (l: string) => () => {
    // push("/", undefined, { locale: l });
    push("/", undefined, { locale: l });
  };
  return (
    <select>
      {locales?.map((l) => {
        return (
          <option key={l} onChange={handleClick(l)}>
            {l}
          </option>
        );
      })}
    </select>
  );
}

export default Translate;
