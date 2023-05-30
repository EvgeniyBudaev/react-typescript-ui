import { createContext } from "react";
import type { Socket } from "socket.io-client";
import type { DefaultEventsMap } from "socket.io/dist/typed-events";

export const SocketContext = createContext<Socket<DefaultEventsMap, DefaultEventsMap> | undefined>(
  undefined,
);

export const SocketProvider = SocketContext.Provider;
