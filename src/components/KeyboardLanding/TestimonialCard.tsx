import Icon from '@/components/ui/icon';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

const TestimonialCard = ({ name, role, quote, avatar, rating }: TestimonialCardProps) => {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-lg text-foreground mb-6 leading-relaxed">"{quote}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
          {avatar}
        </div>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
