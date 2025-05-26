import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import type { CardData } from '../../Type';
import styles from "../../assets/styles/InfoSection.module.css"; // импорт стилей InfoSection

const CardList: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((response) => response.json())
      .then((data) => {
        const cardsData: CardData[] = data.map((item: any, index: number) => ({
          id: item.id,
          title: `Comment ${index + 1}`,
          text: item.body,
          image: null,
        }));
        setCards(cardsData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <div className={styles.features} id="features-container">
      {cards.map((card) => (
        <div key={card.id} className={styles.feature}>
          <Card
            title={card.title}
            text={card.text}
            image={card.image}
            onClick={() => console.log(card.image)}
          />
        </div>
      ))}
    </div>
  );
};

export default CardList;
