"use client";

import { useRef, useState } from "react";

export function ShuffleMemberForm() {
  const [result, setResult] = useState([] as string[]);
  const firstRef = useRef<HTMLInputElement>(null);
  const secondRef = useRef<HTMLInputElement>(null);
  const thirdRef = useRef<HTMLInputElement>(null);

  const callApi = async () => {
    const members = [] as string[];
    const refs = [firstRef, secondRef, thirdRef];
    for (const ref of refs) {
      if (ref.current) {
        members.push(ref.current.value);
      }
    }

    const res = await fetch("/api/shuffle", {
      method: "POST",
      body: JSON.stringify({ members }),
    });

    if (res.ok) {
      const result = await res.json();
      console.log({ result });
      setResult(result.members);
    }
  };

  return (
    <>
      <label htmlFor="first">1人目:</label>
      <input type="text" name="first" id="first" ref={firstRef} />
      <br />
      <label htmlFor="second">2人目:</label>
      <input type="text" name="second" id="second" ref={secondRef} />
      <br />
      <label htmlFor="third">3人目:</label>
      <input type="text" name="third" id="third" ref={thirdRef} />
      <br />
      <br />
      <button onClick={callApi}>シャッフル</button>
      <br />
      <label htmlFor="result">結果</label>
      <output id="result">{result.join("→")}</output>
    </>
  );
}
