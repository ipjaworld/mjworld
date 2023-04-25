// useSocket.ts
import { ref } from "vue";

export function useSocket() {
  const socket = ref<WebSocket | null>(null);

  const connect = (url: string) => {
    socket.value = new WebSocket(url);

    socket.value.addEventListener("open", (event) => {
      console.log("WebSocket opened:", event);
    });

    socket.value.addEventListener("close", (event) => {
      console.log("WebSocket closed:", event);
    });

    socket.value.addEventListener("error", (event) => {
      console.error("WebSocket error:", event);
    });
  };

  const disconnect = () => {
    if (socket.value) {
      socket.value.close();
    }
  };

  const subscribe = (callback: (message: MessageEvent) => void) => {
    if (socket.value) {
      socket.value.addEventListener("message", callback);
    }
  };

  return {
    connect,
    disconnect,
    subscribe,
  };
}
