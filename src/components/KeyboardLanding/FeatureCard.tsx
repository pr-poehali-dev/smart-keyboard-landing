import { ReactNode } from 'react';
import Icon from '@/components/ui/icon';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  image?: string;
}

const FeatureCard = ({ icon, title, description, image }: FeatureCardProps) => {
  return (
    <div className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 border border-border/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
      {image && (
        <div className="w-full h-48 mb-6 rounded-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
        <Icon name={icon} size={32} className="text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
