import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  color?: string;
}

const SkillCategory = ({
  title,
  description,
  icon: Icon,
  path,
  color = "bg-red-100",
}: SkillCategoryProps) => {
  return (
    <Link to={path}>
      <Card className="card-hover border overflow-hidden h-full">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className={`${color} p-3 rounded-full mb-4 text-red-600`}>
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-medium mb-2 hover:text-red-500 transition-colors">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SkillCategory;
