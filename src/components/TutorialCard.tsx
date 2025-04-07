
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

  return (
    <Card className="overflow-hidden card-hover h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
        <Badge 
          className="absolute top-3 left-3" 
          variant="secondary"
        >
          {category}
        </Badge>
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
        <Link to={`/tutorial/${id}`}>
          <h3 className="font-medium text-lg mb-2 hover:text-lifecraft-500 transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="pt-2 pb-6 flex gap-2">
        <Button className="w-full bg-lifecraft-500 hover:bg-lifecraft-600">
          Start Learning
        </Button>
        <Button variant="outline" size="icon" className="flex-shrink-0">
          <Bookmark className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TutorialCard;
