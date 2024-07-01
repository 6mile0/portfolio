import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function Home() {
    return (
        <div>
            <Header title="6mile's blog" description="メモを書き溜める場所" imgUrl="/me.webp" />
            <div className="flex flex-col md:flex-row">
                <div className="flex-1 md:p-6 lg:p-8">

                </div>
                <div className="flex-1 md:p-6 lg:p-8">
                </div>
            </div>
            <Footer />
        </div>
    );
}
