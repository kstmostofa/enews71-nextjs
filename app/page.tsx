import CategoryNews from "@/components/common/CategoryNews";
import Comment from "@/components/common/Comment";
import CommonNews from "@/components/common/CommonNews";
import FilterNews from "@/components/common/FilterNews";
import GoogleAdsense from "@/components/common/GoogleAdsense";
import InternationalNews from "@/components/common/InternationalNews";
import PoliticalNews from "@/components/common/PoliticalNews";
import ShowbizNews from "@/components/common/ShowbizNews";
import SportNews from "@/components/common/SportNews";
import Banner from "@/components/homepage/Banner";

async function Home() {
  return (
    <>
      <Banner />
      <div className="container mx-auto p-4 md:p-0 ">
        <div className="grid grid-cols-4 gap-4 my-4">
          <div className="col-span-4 md:col-span-3">
            <CommonNews sectionTitle="জাতীয়" category="national" />
          </div>
          <div className="col-span-4 md:col-span-1">
            <FilterNews />
          </div>
        </div>
        <div className="my-4">
          <Comment />
        </div>
        <div className="grid grid-cols-4 gap-4 my-4">
          <div className="col-span-4 md:col-span-3">
            <CommonNews sectionTitle="রাজনীতি" category="politics" />
          </div>
          <div className="col-span-4 md:col-span-1">
            <GoogleAdsense />
          </div>
        </div>
        {/* <div className="my-4">
          <PoliticalNews title="রাজনীতি" category="political" />
        </div> */}
        <div className="">
          <GoogleAdsense ratio="wide" />
        </div>

        <div className="my-4">
          <InternationalNews
            title="আন্তর্জাতিক"
            category="international"
            limit={9}
          />
        </div>
        <div className="">
          <GoogleAdsense ratio="wide" />
        </div>
        <div className="grid grid-cols-4 gap-4 my-4">
          <div className="col-span-4 md:col-span-3">
            <SportNews title="খেলাধুলা" category="sports" limit={9} />
          </div>
          <div className="col-span-4 md:col-span-1">
            <ShowbizNews />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 md:gap-8 mb-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
            return (
              <div key={index} className="col-span-3 md:col-span-1">
                <CategoryNews />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
