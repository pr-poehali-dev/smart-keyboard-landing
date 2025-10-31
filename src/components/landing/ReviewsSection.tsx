import { ReviewCard } from "./ReviewCard";

export const ReviewsSection = () => {
  const reviews = [
    {
      name: "Артём",
      role: "Профессиональный геймер",
      image: "https://cdn.poehali.dev/projects/01b7fa8c-f4ed-4433-a4b5-92afd67858b5/files/838cd0dc-d05f-4ea7-81ea-abcc487711c7.jpg",
      review: "С подключением 8K Гц, игра стала настолько плавной, что я никогда не вернусь к старым клавиатурам! Каждое нажатие регистрируется мгновенно.",
      rating: 5
    },
    {
      name: "Максим",
      role: "Стример",
      image: "https://cdn.poehali.dev/projects/01b7fa8c-f4ed-4433-a4b5-92afd67858b5/files/838cd0dc-d05f-4ea7-81ea-abcc487711c7.jpg",
      review: "С подключением 8K Гц, клавиатура работает невероятно быстро и плавно. А магнитные свитчи — это что-то особенное! Работают тихо и отзывчиво.",
      rating: 5
    },
    {
      name: "Анна",
      role: "Разработчик",
      image: "https://cdn.poehali.dev/projects/01b7fa8c-f4ed-4433-a4b5-92afd67858b5/files/8e2970e6-0ebb-4946-a82f-b637d237c57e.jpg",
      review: "Программируемые макросы значительно ускорили мою работу. Теперь могу выполнять сложные команды одним нажатием. Это экономит массу времени!",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Что говорят наши 
            <span className="block text-accent">пользователи</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Тысячи довольных пользователей уже оценили X-Pro
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};
