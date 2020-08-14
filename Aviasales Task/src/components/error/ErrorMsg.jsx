import React from "react";

const ErrorMsg = () => {
  return (
    <div className="error">
      <span>Ошибка загрузки билетов</span>
      <button onClick={() => window.location.reload()}>
        Обновить страницу
      </button>
    </div>
  );
};

export default ErrorMsg;
