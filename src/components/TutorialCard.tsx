
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TutorialCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  author: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  category: string;
}

const TutorialCard = ({
  id,
  title,
  description,
  image,
  duration,
  author,
  difficulty,
  category,
}: TutorialCardProps) => {
  const difficultyColor = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-blue-100 text-blue-700",
    Advanced: "bg-amber-100 text-amber-700",
  }[difficulty];

  // Map tutorial IDs to their respective routes
  const tutorialRoutes: Record<string, string> = {
    "1": "/tutorials/leaky-faucet",
    "2": "/tutorials/monthly-budget",
    "3": "/tutorials/car-oil-change",
    "4": "/tutorials/cooking-techniques"
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col group transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform group-hover:scale-105 duration-500"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />
        <Badge 
          className="absolute top-3 left-3 shadow-md" 
          variant="secondary"
        >
          {category}
        </Badge>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardContent className="pt-6 flex-grow">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {duration}
          </span>
          <span className="flex items-center gap-1">
            <User className="h-3 w-3" />
            {author}
          </span>
          <Badge variant="outline" className={`ml-auto ${difficultyColor}`}>{difficulty}</Badge>
        </div>
        <Link to={tutorialRoutes[id] || `/tutorial/${id}`}>
          <h3 className="font-medium text-lg mb-2 transition-colors hover:text-teal-500">
            {title}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="pt-2 pb-6 flex gap-2">
        <Button 
          className="w-full bg-teal-500 hover:bg-teal-600 text-white transition-all duration-300"
          asChild
        >
          <Link to={tutorialRoutes[id] || `/tutorial/${id}`}>
            Start Learning
          </Link>
        </Button>
        <Button variant="outline" size="icon" className="flex-shrink-0 hover:bg-teal-50 transition-colors">
          <Bookmark className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TutorialCard;
