import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Bookmark, ThumbsUp, MessageSquare, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import { PrimaryButton, OutlineButton, Badge, Card, SectionTitle } from "@/components/ui/shared";

const MonthlyBudget = () => {
  // Tutorial data
  const tutorial = {
    id: "2",
    title: "Create Your First Monthly Budget",
    description: "Take control of your finances with this simple step-by-step guide to creating a monthly budget that works for your lifestyle.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
    duration: "20 min",
    author: "Sarah L.",
    difficulty: "Beginner",
    category: "Budgeting",
    date: "April 5, 2025",
    views: 2130,
    likes: 156,
    comments: 42,
    content: [
      {
        type: "section",
        title: "Introduction",
        text: "Creating a monthly budget is the foundation of financial wellness. It helps you understand where your money goes, identify areas where you can save, and work toward your financial goals. This guide will walk you through creating a practical budget that fits your lifestyle."
      },
      {
        type: "section",
        title: "What You'll Need",
        list: [
          "Your income information (pay stubs, freelance income, etc.)",
          "Bills and statements from the last 3 months",
          "Bank and credit card statements",
          "Spreadsheet software or budgeting app (optional)",
          "Calculator",
          "30-60 minutes of uninterrupted time"
        ]
      },
      {
        type: "section",
        title: "Step 1: Calculate Your Total Income",
        text: "Start by determining how much money you bring home each month after taxes and deductions. Include all sources of income: your primary job, side hustles, investment income, etc. For irregular income, calculate an average based on the past 6-12 months."
      },
      {
        type: "section",
        title: "Step 2: Track Your Spending",
        text: "Review your bank and credit card statements from the past three months. Categorize each expense (housing, utilities, groceries, transportation, entertainment, etc.) to see where your money is going. This will give you a realistic picture of your spending habits."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVkZ2V0fGVufDB8fDB8fHww",
        alt: "Budget tracking",
        caption: "Tracking your expenses is crucial for creating an effective budget"
      },
      {
        type: "section",
        title: "Step 3: Categorize Expenses as Fixed or Variable",
        text: "Fixed expenses are consistent monthly payments like rent/mortgage, car payments, and insurance. Variable expenses fluctuate, such as groceries, dining out, and entertainment. Identifying which expenses are fixed and which are variable helps you see where you have flexibility to make changes."
      },
      {
        type: "section",
        title: "Step 4: Set Realistic Spending Limits",
        text: "Based on your income and spending analysis, establish spending limits for each category. A popular approach is the 50/30/20 rule: 50% for needs (housing, food, transportation), 30% for wants (entertainment, dining out), and 20% for savings and debt repayment."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVkZ2V0fGVufDB8fDB8fHww",
        alt: "Budget planning",
        caption: "The 50/30/20 rule provides a simple framework for budgeting"
      },
      {
        type: "section",
        title: "Step 5: Plan for Irregular Expenses",
        text: "Don't forget about expenses that don't occur monthly, such as car maintenance, gifts, or annual subscriptions. Divide these annual costs by 12 and set aside that amount each month to avoid being caught off guard."
      },
      {
        type: "section",
        title: "Step 6: Create a System for Tracking",
        text: "Choose a method to track your budget that works for you. Options include spreadsheets, budgeting apps like Mint or YNAB, or even a simple notebook. The key is consistency in recording your expenses and reviewing your budget regularly."
      },
      {
        type: "section",
        title: "Step 7: Review and Adjust Regularly",
        text: "Your budget isn't set in stone. Review it at the end of each month to see how well you stayed within your limits. Adjust categories as needed based on your lifestyle changes or financial goals."
      },
      {
        type: "section",
        title: "Common Budgeting Challenges",
        list: [
          "Unexpected expenses: Build an emergency fund to cover these",
          "Irregular income: Budget based on your lowest income month",
          "Overspending in certain categories: Use cash envelopes or prepaid cards to limit spending",
          "Feeling restricted: Include a 'fun money' category for guilt-free spending",
          "Forgetting to track: Set a daily reminder or use automatic tracking through apps"
        ]
      },
      {
        type: "section",
        title: "Conclusion",
        text: "Creating and maintaining a budget takes time and practice, but the financial awareness and control it provides are worth the effort. Remember that a good budget should help you live the life you want, not make you feel restricted. As you become more comfortable with budgeting, you'll find it easier to achieve your financial goals and reduce money-related stress."
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Tutorial Header */}
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 py-12">
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
                <p className="text-teal-100 mb-6">
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
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
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
                    <Link to="/tutorials/emergency-fund" className="block">
                      <p className="font-medium hover:text-teal-500 transition-colors">How to Build an Emergency Fund</p>
                      <p className="text-sm text-gray-500">15 min read</p>
                    </Link>
                    <Link to="/tutorials/debt-reduction" className="block">
                      <p className="font-medium hover:text-teal-500 transition-colors">Simple Debt Reduction Strategies</p>
                      <p className="text-sm text-gray-500">25 min read</p>
                    </Link>
                    <Link to="/tutorials/save-for-goals" className="block">
                      <p className="font-medium hover:text-teal-500 transition-colors">Saving for Major Financial Goals</p>
                      <p className="text-sm text-gray-500">18 min read</p>
                    </Link>
                  </div>
                  <div className="mt-6">
                    <Link to="/skills/financial-planning">
                      <OutlineButton className="w-full">
                        View All Budgeting Tutorials
                      </OutlineButton>
                    </Link>
                  </div>
                </Card>

                <Card className="mb-6">
                  <h3 className="font-semibold mb-4">Tools You Might Need</h3>
                  <div className="space-y-3">
                    <a href="#" className="flex items-center text-sm gap-2 hover:text-teal-500 transition-colors">
                      <span>• Budget Template Spreadsheet</span>
                    </a>
                    <a href="#" className="flex items-center text-sm gap-2 hover:text-teal-500 transition-colors">
                      <span>• Expense Tracker App</span>
                    </a>
                    <a href="#" className="flex items-center text-sm gap-2 hover:text-teal-500 transition-colors">
                      <span>• Financial Calculator</span>
                    </a>
                    <a href="#" className="flex items-center text-sm gap-2 hover:text-teal-500 transition-colors">
                      <span>• Debt Snowball Planner</span>
                    </a>
                  </div>
                </Card>

                <Card>
                  <h3 className="font-semibold mb-4">Share Your Budgeting Tips</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Have budgeting strategies that worked for you? Share them to help others improve their financial wellness!
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

export default MonthlyBudget;
