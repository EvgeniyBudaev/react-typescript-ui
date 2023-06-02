import { useEffect, useState } from "react";
import type { Socket } from "socket.io-client";
import { connect } from "socket.io-client";
import type { DefaultEventsMap } from "socket.io/dist/typed-events";

export const useSocket = (url: string) => {
  const [socket, setSocket] = useState<Socket<DefaultEventsMap, DefaultEventsMap>>();

  useEffect(() => {
    const connection = connect(url);
    setSocket(connection);
    return () => {
      connection.close();
    };
  }, [url]);

  return socket;
};
