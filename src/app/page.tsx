import { Metadata } from "next";

export const metadata: Metadata = {
  title: "最初のページ",
  description: "Playwrightハンズオンの最初のステップ",
};

export default function Home() {
  return (
    <main>
      <h1>ハンズオン</h1>
      <p>ほげほげ</p>
      <p>
        <button>操作ボタン</button>
      </p>
    </main>
  );
}
