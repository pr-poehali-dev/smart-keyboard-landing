import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-primary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Увидьте X-Pro в действии
            </h2>
            <p className="text-xl text-muted-foreground">
              Демонстрация магнитных свитчей и преимущества 8K Гц подключения
            </p>
          </div>
          
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-card border border-border/50 shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <img 
                src="https://cdn.poehali.dev/projects/01b7fa8c-f4ed-4433-a4b5-92afd67858b5/files/dbcd972b-05d1-43e0-8354-76b43ac859ca.jpg"
                alt="Видео демонстрация клавиатуры"
                className="w-full h-full object-cover opacity-50"
              />
              <Button 
                size="lg"
                className="absolute w-20 h-20 rounded-full shadow-lg hover:scale-110 transition-transform"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <Icon name={isPlaying ? "Pause" : "Play"} size={32} />
              </Button>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Посмотреть подробный обзор
              <Icon name="ExternalLink" className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};