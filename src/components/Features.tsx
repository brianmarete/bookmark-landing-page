import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import FeaturesImg1 from "@/assets/illustration-features-tab-1.svg";
import FeaturesImg2 from "@/assets/illustration-features-tab-2.svg";
import FeaturesImg3 from "@/assets/illustration-features-tab-3.svg";

const Features = () => {
  return (
    <>
      <div className="flex flex-col items-center md:mt-4">
        <h2 className="text-3xl font-medium my-3">Features</h2>
        <p className="text-grayish-blue text-lg max-w-xl text-center my-3">
          Our aim is to make it quick and easy for you to access your favorite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="w-full max-w-4xl mx-auto p-4 md:mb-32">
        <Tabs defaultValue="bookmarking" className="w-full">
          <TabsList className="flex flex-col sm:flex-row h-auto bg-inherit border-b border-gray-200 rounded-none p-0">
            <TabsTrigger
              value="bookmarking"
              className="flex-1 data-[state=active]:border-b-4 data-[state=active]:border-soft-red data-[state=active]:shadow-none rounded-none pb-4 text-lg"
            >
              Simple Bookmarking
            </TabsTrigger>
            <TabsTrigger
              value="searching"
              className="flex-1 data-[state=active]:border-b-4 data-[state=active]:border-soft-red data-[state=active]:shadow-none rounded-none pb-4 text-lg"
            >
              Speedy Searching
            </TabsTrigger>
            <TabsTrigger
              value="sharing"
              className="flex-1 data-[state=active]:border-b-4 data-[state=active]:border-soft-red data-[state=active]:shadow-none rounded-none pb-4 text-lg"
            >
              Easy Sharing
            </TabsTrigger>
          </TabsList>
          <TabsContent value="bookmarking" className="mt-24">
            <div className="grid md:grid-cols-2 md:gap-36 items-center">
              <div>
                <img src={FeaturesImg1} />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-medium">Bookmark in one click</h3>
                <p className="text-grayish-blue text-lg">
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
                <button className="bg-soft-blue text-white px-6 py-2 rounded-md text-sm font-medium">
                  More Info
                </button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="searching" className="mt-24">
            <div className="grid md:grid-cols-2 md:gap-36 items-center">
              <div>
                <img src={FeaturesImg2} />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-medium">Intelligent search</h3>
                <p className="text-grayish-blue text-lg">
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to crawl through all of your
                  bookmarks.
                </p>
                <button className="bg-soft-blue text-white px-6 py-2 rounded-md text-sm font-medium">
                  More Info
                </button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="sharing" className="mt-24">
            <div className="grid md:grid-cols-2 md:gap-36 items-center">
              <div>
                <img src={FeaturesImg3} />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-medium">Share your bookmarks</h3>
                <p className="text-grayish-blue text-lg">
                  Easily share your bookmarks and collections with others.
                  Create a shareable link that you can send at the click of a
                  button.
                </p>
                <button className="bg-soft-blue text-white px-6 py-2 rounded-md text-sm font-medium">
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
