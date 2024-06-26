import Contact from "./components/topPage/Contanct";
import ProfileBox from "./components/topPage/ProfileBox";
import SkillBox from "./components/topPage/SkillBox";
import TimeLineBox from "./components/topPage/TimeLineBox";
import TitleBox from "./components/common/TitleBox";
import { Profile } from "./types/profile";
import { TimeLine } from "./types/timeLine";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const profileData: Profile = {
  birthday: "2003,10,04",
  belongTo: "東京工科大学 コンピュータサイエンス学部",
  certification: ["普通自動車第一種運転免許"],
  hobby: ["旅行", "プログラミング", "サーバ保守"],
  pgpKey: "",
  sshKeyListUrl: "https://github.com/6mile0.keys"
}

const mainSkills: string[] = ["TypeScript", "React", "Next.js", "Node.js", "Express.js", "Python", "FastAPI", "Git", "Docker"];
const hadSkills = ["Kotlin", "SpringBoot", "Firebase"];
const studyingSkills = ["Go", "Flutter", "Ruby", "Ruby on Rails"];

const timelineData: TimeLine[] = [
  {
    time: "2023/04 - 現在",
    title: "ZUNDA株式会社でアルバイト",
    descriptions: "B2Bの販売管理システムの開発、コーポレートページのコーディングや運用を担当しています。",
    buttons: [
      {
        title: "実績",
        to: "https://www.zunda.co.jp/blog/company-site-made-with-contentful"
      }
    ]
  },
  {
    time: "2022/04 - 現在",
    title: "メディアロビー(株式会社有隣堂)でアルバイト",
    descriptions: "学生のPCトラブル対応や、新入生PCのキッティング業務などを行っています。",
    buttons: [
      {
        title: "実績",
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
            <Contact />
          </div>
          <div className="flex-1 md:p-6 lg:p-8">
            <TimeLineBox title="TimeLine" data={timelineData} />
          </div>
        </div>
        <Footer />
      </>
  );
}
