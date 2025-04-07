import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Bookmark, ThumbsUp, MessageSquare, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { PrimaryButton, OutlineButton, Badge, Card, SectionTitle } from "@/components/ui/shared";

const CarOilChange = () => {
  // Tutorial data
  const tutorial = {
    id: "3",
    title: "Change Your Car's Oil",
    description: "Learn how to change your car's oil yourself with these easy-to-follow steps, saving you time and money on regular maintenance.",
    image: "https://images.unsplash.com/photo-1620149401198-97db226527d4?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    duration: "30 min",
    author: "Carlos G.",
    difficulty: "Intermediate",
    category: "Car Maintenance",
    date: "March 28, 2025",
    views: 1876,
    likes: 132,
    comments: 37,
    content: [
      {
        type: "section",
        title: "Introduction",
        text: "Changing your car's oil is one of the most fundamental maintenance tasks you can learn. Regular oil changes extend your engine's life and improve performance. While it might seem intimidating at first, with the right tools and instructions, you can save money and gain satisfaction from doing it yourself."
      },
      {
        type: "section",
        title: "Tools and Materials You'll Need",
        list: [
          "New oil (check your owner's manual for the correct type and amount)",
          "New oil filter",
          "Oil filter wrench",
          "Wrench for the drain plug",
          "Oil drain pan",
          "Funnel",
          "Jack and jack stands or ramps",
          "Wheel chocks",
          "Gloves",
          "Shop rags or paper towels"
        ]
      },
      {
        type: "section",
        title: "Step 1: Prepare Your Vehicle",
        text: "Start by parking your car on a level surface and engaging the parking brake. Run the engine for a few minutes to warm up the oil, which helps it drain more completely. Then turn off the engine. If your car is low to the ground, you'll need to raise it using a jack and secure it with jack stands, or drive it onto ramps."
      },
      {
        type: "section",
        title: "Safety First",
        text: "Always use wheel chocks to prevent the vehicle from rolling. Never rely solely on a jack to hold up your vehicle - always use jack stands. Make sure the engine has cooled enough that you won't burn yourself when draining the oil."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyJTIwb2lsJTIwY2hhbmdlfGVufDB8fDB8fHww",
        alt: "Car maintenance setup",
        caption: "Proper setup for changing your car's oil safely"
      },
      {
        type: "section",
        title: "Step 2: Locate the Oil Drain Plug and Filter",
        text: "Look under your car to find the oil drain plug on the bottom of the engine oil pan. Also locate the oil filter, which is usually on the side of the engine. Consult your owner's manual if you have trouble finding either component."
      },
      {
        type: "section",
        title: "Step 3: Drain the Old Oil",
        text: "Position your drain pan under the drain plug. Using the appropriate wrench, loosen the drain plug by turning it counterclockwise. Once it's loose enough, unscrew it by hand, being careful as the oil will begin flowing out. Allow all the oil to drain completely, which may take 5-10 minutes."
      },
      {
        type: "section",
        title: "Step 4: Replace the Oil Filter",
        text: "Position the drain pan under the oil filter. Using an oil filter wrench if necessary, turn the filter counterclockwise to remove it. Before installing the new filter, apply a thin film of new oil to the gasket of the new filter. Screw the new filter on by hand until the gasket makes contact with the engine surface, then tighten it an additional three-quarters of a turn."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1620085330319-542a4e5edf08?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9pbCUyMGZpbHRlcnxlbnwwfHwwfHx8MA%3D%3D",
        alt: "Oil filter replacement",
        caption: "Replacing the oil filter is a crucial part of an oil change"
      },
      {
        type: "section",
        title: "Step 5: Replace the Drain Plug",
        text: "Once all the old oil has drained, clean the drain plug and replace it. Tighten it securely with your wrench, but be careful not to overtighten as this can strip the threads."
      },
      {
        type: "section",
        title: "Step 6: Add New Oil",
        text: "Remove the oil filler cap on top of the engine. Using a funnel to avoid spills, add the new oil. Check your owner's manual for the correct amount. Pour slowly and check the dipstick periodically to avoid overfilling."
      },
      {
        type: "section",
        title: "Step 7: Check for Leaks and Proper Oil Level",
        text: "Replace the oil filler cap, start the engine, and let it run for a minute. Check underneath the car for any leaks around the oil filter and drain plug. Turn off the engine, wait a few minutes for the oil to settle, then check the oil level with the dipstick. Add more oil if necessary."
      },
      {
        type: "section",
        title: "Step 8: Dispose of the Old Oil Properly",
        text: "Pour the old oil from your drain pan into containers with secure lids. Take it to an auto parts store, recycling center, or service station that accepts used oil. Never pour used oil down the drain or on the ground."
      },
      {
        type: "section",
        title: "Troubleshooting Tips",
        list: [
          "If the drain plug or filter is too tight, try using a longer wrench for more leverage",
          "If you notice metal particles in your old oil, consult a mechanic as this could indicate engine problems",
          "If your oil light comes on after changing the oil, check the level immediately and add more if needed",
          "Keep track of your mileage so you know when it's time for the next oil change (typically every 3,000-7,500 miles, depending on your vehicle and oil type)"
        ]
      },
      {
        type: "section",
        title: "Conclusion",
        text: "Congratulations! You've successfully changed your car's oil. This simple maintenance task can save you money and give you a better understanding of how your vehicle works. As you become more comfortable with this process, it will take less time and feel more routine."
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
                    <Link to="/tutorials/change-air-filter" className="block">
                      <p className="font-medium hover:text-red-500 transition-colors">How to Change Your Car's Air Filter</p>
                      <p className="text-sm text-gray-500">15 min read</p>
                    </Link>
                    <Link to="/tutorials/check-tire-pressure" className="block">
                      <p className="font-medium hover:text-red-500 transition-colors">How to Check and Adjust Tire Pressure</p>
                      <p className="text-sm text-gray-500">10 min read</p>
                    </Link>
                    <Link to="/tutorials/jump-start-car" className="block">
                      <p className="font-medium hover:text-red-500 transition-colors">Jump Start a Dead Battery</p>
                      <p className="text-sm text-gray-500">12 min read</p>
                    </Link>
                  </div>
                  <div className="mt-6">
                    <Link to="/skills/car-maintenance">
                      <OutlineButton className="w-full">
                        View All Car Maintenance Tutorials
                      </OutlineButton>
                    </Link>
                  </div>
                </Card>

                <Card className="mb-6">
                  <h3 className="font-semibold mb-4">Tools You Might Need</h3>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center text-sm gap-2 hover:text-red-500 transition-colors">
                      <span>• Oil Filter Wrench</span>
                    </a>
                    <a href="#" className="flex items-center text-sm gap-2 hover:text-red-500 transition-colors">
                      <span>• Oil Drain Pan</span>
                    </a>
                    <a href="#" className="flex items-center text-sm gap-2 hover:text-red-500 transition-colors">
                      <span>• Jack and Jack Stands</span>
                    </a>
                    <a href="#" className="flex items-center text-sm gap-2 hover:text-red-500 transition-colors">
                      <span>• Funnel Kit</span>
                    </a>
                  </div>
                </Card>

                <Card>
                  <h3 className="font-semibold mb-4">Share Your Success</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Successfully changed your car's oil? Share your experience and help others learn!
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

export default CarOilChange;
