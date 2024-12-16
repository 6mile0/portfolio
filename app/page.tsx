import Contact from "./components/topPage/Contanct";
import ProfileBox from "./components/topPage/ProfileBox";
import SkillBox from "./components/topPage/SkillBox";
import TimeLineBox from "./components/topPage/TimeLineBox";
import TitleBox from "./components/common/TitleBox";
import { Profile } from "./types/profile";
import { TimeLine } from "./types/timeLine";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import AwardBox from "./components/topPage/AwardBox";
import { Awards } from "./types/awards";
import DarkModeSelector from "./components/common/DarkModeSelector";

const profileData: Profile = {
  birthday: "2003,10,04",
  belongTo: "東京工科大学 コンピュータサイエンス学部",
  certification: ["普通自動車第一種運転免許"],
  hobby: ["旅行", "プログラミング", "サーバ保守"],
  pgpKey: "",
  sshKeyListUrl: "https://github.com/6mile0.keys"
}

const mainSkills: string[] = ["TypeScript", "React", "Next.js", "Node.js", "Express.js", "Hono.js", "Python", "FastAPI", "Git", "Docker"]
const hadSkills = ["Kotlin", "SpringBoot", "Firebase"];
const studyingSkills = ["Go", "Ruby", "Ruby on Rails", "Nest.js"];

const timelineData: TimeLine[] = [
  {
    time: "2024/12 - 現在",
    title: "Airion株式会社でインターン",
    descriptions: "null",
  },
  {
    time: "2024/09/09 - 2024/09/13",
    title: "ラクスル株式会社でインターン",
    descriptions: "1週間で実課題のテーマにチームで取り組みました。主にリーダで技術選定やタスク管理、実装面は主にフロントエンドを担当しました。",
  },
  {
    time: "2024/08/19 - 2024/08/30",
    title: "サイボウズ株式会社でインターン",
    descriptions: "2週間でkintone開発チーム内の実際のタスクに取り組みました。主に検索画面のReact化を担当しました。",
    buttons: [
      {
        title: "完走賞",
        to: "/assets/cybozu_award.png"
      }
    ]
  },
  {
    time: "2023/04 - 現在",
    title: "ZUNDA株式会社でアルバイト",
    descriptions: "B2Bの販売管理システムの開発を行っています。主にフロントエンドを担当しています。",
  },
  {
    time: "2022/04 - 現在",
    title: "メディアロビー(株式会社有隣堂)でアルバイト",
    descriptions: "従来の新入生受付システムの開発・運用体制の見直しを行い、新たなシステムの開発を行いました。",
    buttons: [
      {
        title: "Zenn記事",
        to: "https://zenn.dev/6mile/articles/359f52afbc3709"
      }
    ]
  },
  {
    time: "2022/04",
    title: "東京工科大学 入学",
    descriptions: "コンピュータサイエンス学部 先進情報専攻"
  },
  {
    time: "2021/08",
    title: "連絡網サービス 開発・提供",
    descriptions: "体温報告などを行うことができる、LINEを用いた(顧問の先生と保護者直結型)連絡網サービスを母校の陸上部に提供する。\n※代替サービスの乗り換えに伴い、2022年でサービス終了。"
  },
  {
    time: "2020/04 - 2021/03",
    title: "単発案件のWeb制作",
    descriptions: "ココナラでいくつかの案件を受注・納品"
  },
  {
    time: "2019/04",
    title: "高校入学"
  }
]

const hadAwards: Awards = [
  {
    title: "学部長賞（コンピュータサイエンス学部）2024",
    url: "https://www.openbadge-global.com/api/v1.0/openBadge/v2/Wallet/Public/GetAssertionShare/QnlyOExIcis1dFAwYVVFK1JXd0NSZz09",
    date: "2024/03/25"
  },
  {
    title: "学部長賞（コンピュータサイエンス学部）",
    url: "https://www.openbadge-global.com/api/v1.0/openBadge/v2/Wallet/Public/GetAssertionShare/Ni9sbDFUSnRSRVFuMUpndmRKUEJXQT09",
    date: "2023/04/01"
  }
]

export default function Home() {
  return (
    <>
      <Header title="6mile.dev" description="Hello! I&apos;m Kakeru Hokida (a.k.a 6mile / ろくまいる)." imgUrl="/me.webp" />
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 md:p-6 lg:p-8">
          <ProfileBox title="Profile" data={profileData} />
          <TitleBox title="Skills" />
          <SkillBox titleName="Main" skillItems={mainSkills} />
          <SkillBox titleName="Experience" skillItems={hadSkills} />
          <SkillBox titleName="Studying" skillItems={studyingSkills} />
          <TitleBox title="Awards" />
          <AwardBox awards={hadAwards} />
          <Contact />
        </div>
        <div className="flex-1 md:p-6 lg:p-8">
          <TimeLineBox title="TimeLine" data={timelineData} />
        </div>
      </div>
      <Footer />
      <DarkModeSelector />
    </>
  );
}
