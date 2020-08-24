import { useEffect, useState } from "react";

//подключаем fb
import fire from "../servies/firebase";

const useChat = () => {
  const [error, setError] = useState(null);
  const [masessages, setMasessages] = useState([]);

  //отслеживаем изменения в сообщениях, обновляем стейт при добавлении нового.
  //получаем сообщения по id, при ошибке - сообщаем
  useEffect(() => {
    const delivery = fire
      .firestore()
      .collection("messages")
      .onSnapshot(
        (snapshot) => {
          setMasessages(
            snapshot.docs.map((msg) => ({ id: msg.id, ...msg.data() }))
          );
        },
        (error) => {
          setError(error);
        }
      );

    return () => delivery();
  }, [setMasessages]);

  return { error, masessages };
};

export default useChat;
