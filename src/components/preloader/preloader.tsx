import React, { useState, useEffect } from 'react';

function Preloader() {
  return (
    <div id="preloader" style={styles.preloader}>
      <div style={styles.loader}></div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки (например, данных или других операций)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 секунды

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          {/* Основной контент приложения */}
          <h1>Контент загружен</h1>
        </div>
      )}
    </>
  );
}