import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Bookmark, ThumbsUp, MessageSquare, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { PrimaryButton, OutlineButton, Badge, Card, SectionTitle } from "@/components/ui/shared";

const CookingTechniques = () => {
  // Tutorial data
  const tutorial = {
    id: "4",
    title: "Master Basic Cooking Techniques",
    description: "Learn essential cooking methods that will serve as the foundation for countless delicious meals. Includes knife skills and food safety.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    duration: "45 min",
    author: "Emma T.",
    difficulty: "Beginner",
    category: "Cooking",
    date: "April 1, 2025",
    views: 2356,
    likes: 198,
    comments: 45,
    content: [
      {
        type: "section",
        title: "Introduction",
        text: "Mastering basic cooking techniques is the key to becoming confident in the kitchen. Rather than relying solely on recipes, understanding fundamental methods allows you to cook creatively and adapt to whatever ingredients you have on hand. This tutorial covers essential techniques that form the foundation of culinary skills."
      },
      {
        type: "section",
        title: "Kitchen Safety First",
        text: "Before diving into cooking techniques, let's establish some safety guidelines. Always wash your hands before handling food and after touching raw meat. Keep your workspace clean, use separate cutting boards for meat and produce, and ensure knives and other tools are handled safely. Have a fire extinguisher accessible and know how to use it."
      },
      {
        type: "section",
        title: "Essential Knife Skills",
        text: "Good knife skills are fundamental to efficient cooking. Start by selecting a quality chef's knife that feels comfortable in your hand. Hold the knife with your dominant hand, gripping the handle with your thumb and index finger on opposite sides of the blade for control. Use your non-dominant hand to hold the food, curling your fingertips under to protect them while using your knuckles as a guide for the knife."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1591261730799-ee4e6c2d1b75?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hvcHBpbmclMjB2ZWdldGFibGVzfGVufDB8fDB8fHww",
        alt: "Knife skills demonstration",
        caption: "Proper knife grip and hand position for safe, efficient cutting"
      },
      {
        type: "section",
        title: "Basic Cutting Techniques",
        list: [
          "Slicing: Cut food into flat, even pieces by moving the knife forward while pressing down",
          "Dicing: Create uniform cubes by first slicing, then cutting crosswise, and finally cutting across",
          "Mincing: Finely chop food by rocking the knife back and forth over pre-chopped ingredients",
          "Julienne: Cut food into thin, matchstick-sized strips",
          "Chiffonade: Stack and roll leafy herbs or greens, then slice thinly to create ribbon-like strips"
        ]
      },
      {
        type: "section",
        title: "Sautéing",
        text: "Sautéing is a quick cooking method that uses a small amount of oil in a hot pan. It's perfect for tender foods that cook quickly. Heat your pan before adding oil (the oil should shimmer but not smoke). Add food in a single layer without overcrowding, which would cause steaming rather than sautéing. Cook with occasional stirring or tossing until food is browned and cooked through."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29va2luZ3xlbnwwfHwwfHx8MA%3D%3D",
        alt: "Sautéing vegetables",
        caption: "Sautéing creates flavorful, quickly cooked dishes with minimal oil"
      },
      {
        type: "section",
        title: "Roasting",
        text: "Roasting uses dry heat in an oven to cook food, creating delicious caramelization. Preheat your oven (typically between 350-450°F depending on the food). Toss vegetables with oil, salt, and pepper before arranging in a single layer on a baking sheet. For meats, consider searing first for extra flavor. Use a meat thermometer to ensure proper doneness."
      },
      {
        type: "section",
        title: "Boiling and Simmering",
        text: "Boiling uses water at 212°F (100°C) with large, vigorous bubbles. It's ideal for pasta and blanching vegetables. Simmering uses lower heat with small bubbles and is perfect for soups, stews, and sauces. Always start with cold water when cooking starches like pasta or rice, and with hot water when making stock or blanching vegetables."
      },
      {
        type: "section",
        title: "Steaming",
        text: "Steaming cooks food with hot vapor while preserving nutrients and color. Use a steamer basket or improvise with a heat-proof plate over a pot with a small amount of simmering water. Make sure the water doesn't touch the food. Cover and cook until food reaches desired tenderness, checking occasionally to ensure the pot hasn't boiled dry."
      },
      {
        type: "section",
        title: "Braising",
        text: "Braising combines dry and moist cooking methods, perfect for tough cuts of meat. First, sear the meat in a hot pan with oil to develop flavor. Then add liquid (broth, wine, etc.) to partially cover the meat, reduce heat, cover, and cook slowly until tender. The result is flavorful, tender meat and a rich sauce."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1620626432934-9eacc0c2b9f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJyYWlzaW5nfGVufDB8fDB8fHww",
        alt: "Braising meat",
        caption: "Braising transforms tough cuts into tender, flavorful dishes"
      },
      {
        type: "section",
        title: "Making a Basic Sauce",
        text: "Many sauces begin with a roux (equal parts fat and flour) cooked together, then liquid is added to create a thickened sauce. For a basic white sauce (béchamel), cook butter and flour together until bubbling but not browned, then slowly whisk in milk and cook until thickened. Season with salt, pepper, and optional nutmeg. This becomes the base for many other sauces."
      },
      {
        type: "section",
        title: "Seasoning Properly",
        text: "Learning to season food properly is crucial. Salt enhances flavors rather than just making food taste salty. Season in layers throughout cooking, tasting as you go. Remember that some salt will be absorbed during cooking. Acids like lemon juice or vinegar brighten flavors and can balance richness. Fresh herbs are best added near the end of cooking to preserve their flavor."
      },
      {
        type: "section",
        title: "Practice Makes Perfect",
        text: "These techniques take practice to master. Start with simple recipes that focus on one or two techniques, then gradually combine them as you gain confidence. Don't be discouraged by mistakes—they're part of the learning process. Keep a cooking journal to note what works and what doesn't."
      },
      {
        type: "section",
        title: "Conclusion",
        text: "By mastering these fundamental cooking techniques, you've built a strong foundation for culinary creativity. You'll find yourself relying less on strict recipes and more on your understanding of how cooking methods affect different ingredients. Continue practicing these skills, and you'll soon develop the confidence to create delicious meals with whatever you have on hand."
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
                    <Link to="/tutorials/meal-prep-basics" className="block">
                      <p className="font-medium hover:text-red-500 transition-colors">Meal Prep Basics: Cook Once, Eat All Week</p>
                      <p className="text-sm text-gray-500">25 min read</p>
                    </Link>
                    <Link to="/tutorials/baking-bread" className="block">
                      <p className="font-medium hover:text-red-500 transition-colors">Beginner's Guide to Baking Bread</p>
                      <p className="text-sm text-gray-500">35 min read</p>
                    </Link>
                    <Link to="/tutorials/simple-sauces" className="block">
                      <p className="font-medium hover:text-red-500 transition-colors">5 Simple Sauces to Elevate Any Meal</p>
                      <p className="text-sm text-gray-500">20 min read</p>
                    </Link>
                  </div>
                  <div className="mt-6">
                    <Link to="/skills/cooking">
                      <OutlineButton className="w-full">
                        View All Cooking Tutorials
                      </OutlineButton>
                    </Link>
                  </div>
                </Card>

                <Card className="mb-6">
                  <h3 className="font-semibold mb-4">Tools You Might Need</h3>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center text-sm gap-2 hover:text-red-500 transition-colors">
                      <span>• Chef's Knife Set</span>
                    </a>
                    <a href="#" className="flex items-center text-sm gap-2 hover:text-red-500 transition-colors">
                      <span>• Cutting Boards</span>
                    </a>
                    <a href="#" className="flex items-center text-sm gap-2 hover:text-red-500 transition-colors">
                      <span>• Measuring Cups and Spoons</span>
                    </a>
                    <a href="#" className="flex items-center text-sm gap-2 hover:text-red-500 transition-colors">
                      <span>• Quality Cookware Set</span>
                    </a>
                  </div>
                </Card>

                <Card>
                  <h3 className="font-semibold mb-4">Share Your Cooking Tips</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Have a cooking technique or tip you'd like to share? Help others improve their cooking skills!
                  </p>
                  <PrimaryButton className="w-full">
                    Share Your Tip
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

export default CookingTechniques;
