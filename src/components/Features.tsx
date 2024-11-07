import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import FeaturesImg1 from "@/assets/illustration-features-tab-1.svg";
import FeaturesImg2 from "@/assets/illustration-features-tab-2.svg";
import FeaturesImg3 from "@/assets/illustration-features-tab-3.svg";

const Features = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-28 md:mt-4">
        <h2 className="text-2xl md:text-3xl font-medium my-3">Features</h2>
        <p className="text-grayish-blue text-base md:text-lg max-w-xl text-center my-3 mx-5">
          Our aim is to make it quick and easy for you to access your favorite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="w-full p-4 md:pb-48 relative overflow-y-visible overflow-x-hidden">
        <div className="absolute left-0 bottom-52 h-1/4 w-3/4 rounded-r-full bg-soft-blue -z-10 md:-bottom-1 md:h-1/3 md:w-2/5 md:-translate-y-1/2 " />
        <Tabs defaultValue="bookmarking" className="max-w-4xl mx-auto">
          <TabsList className="flex flex-col sm:flex-row h-auto bg-inherit border-b border-gray-200 rounded-none p-0">
            <TabsTrigger
              value="bookmarking"
              className="flex-1 data-[state=active]:border-b-4 data-[state=active]:border-soft-red data-[state=active]:shadow-none rounded-none pb-4 text-lg hover:text-soft-red"
            >
              Simple Bookmarking
            </TabsTrigger>
            <TabsTrigger
              value="searching"
              className="flex-1 data-[state=active]:border-b-4 data-[state=active]:border-soft-red data-[state=active]:shadow-none rounded-none pb-4 text-lg hover:text-soft-red"
            >
              Speedy Searching
            </TabsTrigger>
            <TabsTrigger
              value="sharing"
              className="flex-1 data-[state=active]:border-b-4 data-[state=active]:border-soft-red data-[state=active]:shadow-none rounded-none pb-4 text-lg hover:text-soft-red"
            >
              Easy Sharing
            </TabsTrigger>
          </TabsList>
          <TabsContent value="bookmarking" className="mt-24">
            <div className="grid md:grid-cols-2 gap-16 md:gap-36 items-center">
              <div>
                <img src={FeaturesImg1} />
              </div>
              <div className="space-y-4 ">
                <h3 className="text-2xl md:text-3xl font-medium text-center md:text-left">
                  Bookmark in one click
                </h3>
                <p className="text-grayish-blue text-base md:text-lg text-center md:text-left leading-6 md:mx-0">
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
                <button className="hidden md:block bg-soft-blue text-white px-6 py-2 rounded-md text-sm font-medium">
                  More Info
                </button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="searching" className="mt-24">
            <div className="grid md:grid-cols-2 gap-16 md:gap-36 items-center">
              <div>
                <img src={FeaturesImg2} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-medium text-center md:text-left">
                  Intelligent search
                </h3>
                <p className="text-grayish-blue text-base md:text-lg text-center md:text-left leading-6 md:mx-0">
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to crawl through all of your
                  bookmarks.
                </p>
                <button className="hidden md:block bg-soft-blue text-white px-6 py-2 rounded-md text-sm font-medium">
                  More Info
                </button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="sharing" className="mt-24">
            <div className="grid md:grid-cols-2 gap-16 md:gap-36 items-center">
              <div>
                <img src={FeaturesImg3} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-medium text-center md:text-left">
                  Share your bookmarks
                </h3>
                <p className="text-grayish-blue text-base md:text-lg text-center md:text-left leading-6 md:mx-0">
                  Easily share your bookmarks and collections with others.
                  Create a shareable link that you can send at the click of a
                  button.
                </p>
                <button className="hidden md:block bg-soft-blue text-white px-6 py-2 rounded-md text-sm font-medium">
                  More Info
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Features;
