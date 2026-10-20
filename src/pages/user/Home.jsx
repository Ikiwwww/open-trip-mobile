import Header from "../../components/common/Header";
import BottomNavbar from "../../components/common/BottomNavbar";

import Hero from "../../components/home/Hero";
import SearchBox from "../../components/home/SearchBox";
import CategorySection from "../../components/home/CategorySection";
import PromoSection from "../../components/home/PromoSection";
import DestinationSection from "../../components/home/DestinationSection";
import TripSection from "../../components/home/TripSection";
import RecommendationSection from "../../components/home/RecommendationSection";
import ArticleSection from "../../components/home/ArticleSection";

import Loading from "../../components/common/Loading";
import EmptyState from "../../components/common/EmptyState";

import useHome from "../../hooks/useHome";

export default function Home() {

    const {
        data,
        loading,
        error,
        refresh,
    } = useHome();

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return (
            <EmptyState
                title="Terjadi Kesalahan"
                description="Gagal memuat data."
                onRetry={refresh}
            />
        );
    }

    return (
        <div className="bg-slate-100 min-h-screen pb-24">

            <Header />

            <SearchBox />

            <Hero hero={data.hero} />

            <CategorySection
                categories={data.categories}
            />

            <PromoSection
                promotions={data.promotions}
            />

            <DestinationSection
                destinations={data.popular}
            />

            <TripSection
                trips={data.openTrips}
            />

            <RecommendationSection
                recommendations={data.recommendations}
            />

            <ArticleSection
                articles={data.articles}
            />

            <BottomNavbar />

        </div>
    );
}