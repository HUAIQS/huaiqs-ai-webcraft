import { useState } from "react";

const Chat = () => {
  const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Añadir mensaje del usuario al estado
    setMessages((prev) => [...prev, { from: "user", text: input }]);

    try {
      const res = await fetch("https://bonorocky.app.n8n.cloud/webhook/aa1407db-ed34-4147-ba10-c05d333e2ca2/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          sessionId: "user-hugo-001", // puedes hacerlo dinámico por usuario
        }),
      });

      const data = await res.json();
      const respuesta = data.response ?? "Sin respuesta";

      setMessages((prev) => [...prev, { from: "bot", text: respuesta }]);
    } catch (err) {
      console.error("Error al conectar con el chatbot:", err);
      setMessages((prev) => [...prev, { from: "bot", text: "❌ Error al conectar con el chatbot." }]);
    }

    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 w-[320px] bg-white rounded-xl shadow-lg border border-gray-300 flex flex-col overflow-hidden">
      <div className="bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple text-white font-semibold text-center py-2">
        Chat HUAIQS
      </div>
      <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm max-h-[400px]">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`rounded-lg px-3 py-2 max-w-[80%] ${
              msg.from === "user"
                ? "ml-auto bg-huaiqs-blue text-white"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex border-t border-gray-200">
        <input
          type="text"
          className="flex-1 px-3 py-2 text-sm outline-none"
          placeholder="Escribe un mensaje..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="bg-huaiqs-purple text-white px-4 text-sm"
          onClick={sendMessage}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
