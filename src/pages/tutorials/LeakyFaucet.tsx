import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Bookmark, ThumbsUp, MessageSquare, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { PrimaryButton, OutlineButton, Badge, Card, SectionTitle } from "@/components/ui/shared";

const LeakyFaucet = () => {
  // Tutorial data
  const tutorial = {
    id: "1",
    title: "How to Fix a Leaky Faucet",
    description: "Learn how to identify and fix common faucet leaks without calling a plumber. Save money and gain confidence in basic home repairs.",
    image: "https://images.unsplash.com/photo-1585704032915-c3400ee75147?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    duration: "15 min",
    author: "Mike R.",
    difficulty: "Beginner",
    category: "Home Repair",
    date: "April 2, 2025",
    views: 1245,
    likes: 87,
    comments: 23,
    content: [
      {
        type: "section",
        title: "Introduction",
        text: "A leaky faucet is more than just an annoyance. It wastes water, can lead to higher utility bills, and might even cause water damage if left unattended. The good news is that fixing a leaky faucet is a relatively simple DIY project that most homeowners can handle with basic tools."
      },
      {
        type: "section",
        title: "Tools You'll Need",
        list: [
          "Adjustable wrench",
          "Screwdriver (flathead and Phillips)",
          "Pliers",
          "Replacement parts (washers, O-rings, or cartridge)",
          "Plumber's tape",
          "Clean rag or towel"
        ]
      },
      {
        type: "section",
        title: "Step 1: Turn Off the Water",
        text: "Before you begin any plumbing repair, always turn off the water supply to the fixture. Look for the shut-off valves under the sink and turn them clockwise until they're fully closed. If there are no shut-off valves, you'll need to turn off the main water supply to your home."
      },
      {
        type: "section",
        title: "Step 2: Plug the Drain",
        text: "Place a rag or stopper in the drain to prevent small parts from falling down the drain during the repair process."
      },
      {
        type: "section",
        title: "Step 3: Identify Your Faucet Type",
        text: "There are four common types of faucets: compression, ball-type, cartridge, and ceramic disk. Each type has a different internal mechanism and repair process. Look at your faucet's design or the manufacturer's information to determine which type you have."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1585704032915-c3400418cfc9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        alt: "Different types of faucets",
        caption: "Common faucet types: compression (top left), ball-type (top right), cartridge (bottom left), and ceramic disk (bottom right)"
      },
      {
        type: "section",
        title: "Step 4: Disassemble the Faucet",
        text: "Carefully take apart the faucet, keeping track of the order of parts. For most faucets, you'll need to remove the handle first, which is usually secured by a screw hidden under a decorative cap."
      },
      {
        type: "section",
        title: "Step 5: Inspect and Replace Damaged Parts",
        text: "Once disassembled, inspect all parts for damage or wear. Common culprits for leaks include worn-out washers, O-rings, or cartridges. Replace any damaged parts with exact matches."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        alt: "Faucet parts",
        caption: "Common faucet parts that may need replacement"
      },
      {
        type: "section",
        title: "Step 6: Reassemble the Faucet",
        text: "Put everything back together in the reverse order of disassembly. Make sure all parts are properly aligned and secured."
      },
      {
        type: "section",
        title: "Step 7: Turn On the Water and Test",
        text: "Turn the water supply back on and test the faucet for leaks. If it's still leaking, you may need to recheck your work or consider replacing the entire faucet if it's old or severely damaged."
      },
      {
        type: "section",
        title: "Troubleshooting Tips",
        list: [
          "If the faucet leaks from the spout, the problem is usually a worn washer or cartridge.",
          "If it leaks around the base, the O-rings might need replacement.",
          "If water pressure is low after repair, check for debris in the aerator.",
          "If you're unsure about any step, consult the manufacturer's instructions or consider calling a professional."
        ]
      },
      {
        type: "section",
        title: "Conclusion",
        text: "Congratulations! You've successfully learned how to fix a leaky faucet. This simple repair can save you money on water bills and prevent potential water damage. As you gain confidence in basic plumbing repairs, you'll find that many household maintenance tasks are well within your capabilities."
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Tutorial Header */}
        <div className="bg-gradient-to-r from-red-500 to-red-600 py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <OutlineButton 
                  className="text-white border-white mb-4 hover:bg-white/10"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </OutlineButton>
                <Badge variant="default" className="mb-2">{tutorial.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {tutorial.title}
                </h1>
                <p className="text-red-100 mb-6">
                  {tutorial.description}
                </p>
                <div className="flex items-center gap-4 text-white">
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {tutorial.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {tutorial.author}
                  </span>
                  <Badge variant="outline" className="text-white border-white">
                    {tutorial.difficulty}
                  </Badge>
                </div>
              </div>
              <div className="md:w-1/3 flex items-center justify-center">
                <div className="bg-white p-2 rounded-lg shadow-lg">
                  <img 
                    src={tutorial.image}
                    alt={tutorial.title}
                    className="w-full h-auto rounded" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tutorial Content */}
        <div className="container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              {tutorial.content.map((section, index) => (
                <div key={index} className="mb-10">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900">{section.title}</h2>
                  {section.text && <p className="text-gray-700 mb-4">{section.text}</p>}
                  {section.list && (
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.type === "image" && (
                    <div className="my-6">
                      <img 
                        src={section.src} 
                        alt={section.alt || "Tutorial image"} 
                        className="rounded-lg shadow-md w-full"
                      />
                      {section.caption && (
                        <p className="text-sm text-gray-500 mt-2 text-center">{section.caption}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 border-t border-b py-6 my-8">
                <OutlineButton className="flex items-center gap-2">
                  <ThumbsUp className="h-4 w-4" />
                  <span>Helpful ({tutorial.likes})</span>
                </OutlineButton>
                <OutlineButton className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Comment ({tutorial.comments})</span>
                </OutlineButton>
                <OutlineButton className="flex items-center gap-2">
                  <Bookmark className="h-4 w-4" />
                  <span>Save</span>
                </OutlineButton>
                <OutlineButton className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </OutlineButton>
              </div>

              {/* Comments Section */}
              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-6">Comments ({tutorial.comments})</h3>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <textarea 
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Share your thoughts or ask a question..."
                      rows={4}
                    ></textarea>
                    <div className="mt-4 flex justify-end">
                      <PrimaryButton>Post Comment</PrimaryButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="mb-6">
                  <h3 className="font-semibold mb-4">Related Tutorials</h3>
                  <div className="space-y-4">
                    <Link to="/tutorials/fix-running-toilet" className="block">
                      <p className="font-medium hover:text-red-500 transition-colors">How to Fix a Running Toilet</p>
                      <p className="text-sm text-gray-500">10 min read</p>
                    </Link>
                    <Link to="/tutorials/unclog-drain" className="block">
                      <p className="font-medium hover:text-red-500 transition-colors">Unclog a Drain Without Chemicals</p>
                      <p className="text-sm text-gray-500">12 min read</p>
                    </Link>
                    <Link to="/tutorials/shower-head-replacement" className="block">
                      <p className="font-medium hover:text-red-500 transition-colors">Replace a Shower Head</p>
                      <p className="text-sm text-gray-500">8 min read</p>
                    </Link>
                  </div>
                  <div className="mt-6">
                    <Link to="/skills/home-repair">
                      <OutlineButton className="w-full">
                        View All Home Repair Tutorials
                      </OutlineButton>
                    </Link>
                  </div>
                </Card>

                <Card className="mb-6">
                  <h3 className="font-semibold mb-4">Tools You Might Need</h3>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center text-sm gap-2 hover:text-red-500 transition-colors">
                      <span>• Adjustable Wrench Set</span>
                    </a>
                    <a href="#" className="flex items-center text-sm gap-2 hover:text-red-500 transition-colors">
                      <span>• Plumbing Tape</span>
                    </a>
                    <a href="#" className="flex items-center text-sm gap-2 hover:text-red-500 transition-colors">
                      <span>• Faucet Repair Kit</span>
                    </a>
                    <a href="#" className="flex items-center text-sm gap-2 hover:text-red-500 transition-colors">
                      <span>• Pliers Set</span>
                    </a>
                  </div>
                </Card>

                <Card>
                  <h3 className="font-semibold mb-4">Share Your Success</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Successfully fixed your leaky faucet? Share your experience and help others learn!
                  </p>
                  <PrimaryButton className="w-full">
                    Share Your Story
                  </PrimaryButton>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LeakyFaucet;
