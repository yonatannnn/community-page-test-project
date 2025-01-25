import { LeftSidebar } from "../components/layout/LeftSIdebar";
import { RightSidebar } from "../components/layout/RightSidebar";
import { PostCard } from "../components/PostCard";
import PostModel from "../models/postModel";
import { useSelector } from "react-redux";
import { AppBar } from "../components/AppBar";
import { CreatePost } from "../components/CreatePost";
import { Footer } from "../components/Footer";

const HomePage = () => {
    const posts = useSelector((state: any) => state.post).posts;
  console.log("Posts:", posts);

    return ( 
        <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* App Bar */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <AppBar />
      </header>

      {/* Main Layout */}
      <div className="flex flex-grow flex-col lg:flex-row gap-6 p-4 lg:p-6">
        {/* Left Sidebar */}
        <aside className="hidden lg:block lg:w-1/4 bg-white shadow-md p-4 rounded-lg">
          <LeftSidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-grow lg:w-1/2 space-y-6">
          {/* Create Post Section */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <CreatePost />
          </div>

          {/* Posts List */}
          <div className="space-y-4">
            {posts.map((post: PostModel, index: number) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden lg:block lg:w-1/4 bg-white shadow-md p-4 rounded-lg">
          <RightSidebar />
        </aside>
      </div>
      <Footer />
    </div>
     );
}
 
export default HomePage;