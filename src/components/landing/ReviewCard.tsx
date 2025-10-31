import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ReviewCardProps {
  name: string;
  role: string;
  image: string;
  review: string;
  rating: number;
}

export const ReviewCard = ({ name, role, image, review, rating }: ReviewCardProps) => {
  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
      <CardContent className="p-6 space-y-4">
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
          ))}
        </div>
        
        <p className="text-muted-foreground leading-relaxed italic">
          "{review}"
        </p>
        
        <div className="flex items-center gap-4 pt-4 border-t border-border/50">
          <img 
            src={image} 
            alt={name}
            className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
          />
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
