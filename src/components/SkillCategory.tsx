
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  color?: string;
  borderColor?: string;
}

const SkillCategory = ({
  title,
  description,
  icon: Icon,
  path,
  color = "bg-teal-100",
  borderColor = "border-t-teal-500",
}: SkillCategoryProps) => {
  return (
    <Link to={path}>
      <Card className={`overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border-t-4 ${borderColor} group`}>
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className={`${color} p-3 rounded-full mb-4 text-teal-600 shadow-md transition-transform group-hover:scale-110 duration-300`}>
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-medium mb-2 group-hover:text-teal-500 transition-colors">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SkillCategory;
