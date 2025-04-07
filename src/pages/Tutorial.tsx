import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowLeft, Bookmark, ThumbsUp, MessageSquare, Share2 } from "lucide-react";

const Tutorial = () => {
  const { id } = useParams();
  
  // This would normally come from an API or database
  // For now, we'll hardcode the tutorial data
  const tutorialData = {
    "1": {
      title: "How to Fix a Leaky Faucet",
      description: "Learn how to identify and fix common faucet leaks without calling a plumber. Save money and gain confidence in basic home repairs.",
      image: "/images/leaky-faucet-repair.jpg", // We'll add this image to public folder
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
          src: "/images/faucet-types.jpg",
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
          src: "/images/faucet-parts.jpg",
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
    },
    // Other tutorials would be defined here
  };
  
  const tutorial = tutorialData[id as keyof typeof tutorialData];
  
  if (!tutorial) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container py-16">
          <h1 className="text-3xl font-bold mb-4">Tutorial Not Found</h1>
          <p>The tutorial you're looking for doesn't exist or has been removed.</p>
          <Button className="mt-6" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Tutorial Header */}
        <div className="bg-gradient-to-r from-lifecraft-500 to-lifecraft-600 py-12">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <Button 
                  variant="ghost" 
                  className="text-white mb-4 hover:bg-white/10"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Badge className="mb-2">{tutorial.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {tutorial.title}
                </h1>
                <p className="text-lifecraft-100 mb-6">
                  {tutorial.description}
                </p>
                <div className="flex items-center gap-4 text-white">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {tutorial.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
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
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              {tutorial.content.map((section, index) => {
                if (section.type === "section") {
                  return (
                    <div key={index} className="mb-8">
                      {section.title && (
                        <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                      )}
                      {section.text && (
                        <p className="text-gray-700 mb-4">{section.text}</p>
                      )}
                      {section.list && (
                        <ul className="list-disc pl-6 space-y-2">
                          {section.list.map((item, i) => (
                            <li key={i} className="text-gray-700">{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                } else if (section.type === "image") {
                  return (
                    <div key={index} className="mb-8">
                      <div className="bg-gray-50 p-2 rounded-lg border">
                        <img 
                          src={section.src} 
                          alt={section.alt}
                          className="w-full h-auto rounded" 
                        />
                        {section.caption && (
                          <p className="text-sm text-gray-500 text-center mt-2">{section.caption}</p>
                        )}
                      </div>
                    </div>
                  );
                }
                return null;
              })}
              
              {/* Engagement Section */}
              <div className="border-t pt-8 mt-8">
                <h3 className="text-xl font-bold mb-4">Was this tutorial helpful?</h3>
                <div className="flex gap-4 mb-8">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4" /> Yes, it helped me
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" /> Leave feedback
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Share2 className="h-4 w-4" /> Share
                  </Button>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Comments (23)</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                            alt="User"
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">Alex Johnson</h4>
                          <p className="text-sm text-gray-500">2 days ago</p>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        This tutorial saved me a call to the plumber! My kitchen faucet had been dripping for weeks, and I finally fixed it following these steps. Thanks!
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                            alt="User"
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">Sarah Miller</h4>
                          <p className="text-sm text-gray-500">1 week ago</p>
                        </div>
                      </div>
                      <p className="text-gray-700">
                        Could you add more details about ceramic disk faucets? Mine seems different from the example shown.
                      </p>
                    </div>
                  </div>
                  <Button className="mt-4 w-full">View All Comments</Button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-20">
                <h3 className="text-xl font-bold mb-4">Related Tutorials</h3>
                <div className="space-y-4 mb-8">
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-medium mb-1">How to Unclog a Drain</h4>
                    <p className="text-sm text-gray-500 mb-2">10 min • Home Repair</p>
                    <Button variant="link" className="p-0 h-auto text-lifecraft-500">View Tutorial</Button>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-medium mb-1">Replace a Shower Head</h4>
                    <p className="text-sm text-gray-500 mb-2">15 min • Home Repair</p>
                    <Button variant="link" className="p-0 h-auto text-lifecraft-500">View Tutorial</Button>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-medium mb-1">Basic Plumbing Tools Guide</h4>
                    <p className="text-sm text-gray-500 mb-2">8 min • Home Repair</p>
                    <Button variant="link" className="p-0 h-auto text-lifecraft-500">View Tutorial</Button>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="text-xl font-bold mb-4">Save for Later</h3>
                  <Button className="w-full flex items-center justify-center gap-2 bg-lifecraft-500 hover:bg-lifecraft-600">
                    <Bookmark className="h-4 w-4" /> Save Tutorial
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tutorial;
