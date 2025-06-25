
import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const Chat = () => {
  const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón flotante circular */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
      >
        <button
          onClick={toggleChat}
          className="w-16 h-16 bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
        >
          <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-200" />
        </button>
        
        {/* Indicador de notificación (opcional) */}
        {messages.length > 0 && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">{messages.length}</span>
          </div>
        )}
      </div>

      {/* Ventana de chat expandida */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        <div className="w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header del chat */}
          <div className="bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Chat HUAIQS</h3>
                <p className="text-xs text-white/80">En línea</p>
              </div>
            </div>
            <button 
              onClick={toggleChat}
              className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Área de mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 text-sm mt-8">
                <MessageCircle className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p>¡Hola! ¿En qué puedo ayudarte?</p>
              </div>
            ) : (
              messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                      msg.from === "user"
                        ? "bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple text-white rounded-br-md"
                        : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Input de mensaje */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex space-x-2">
              <input
                type="text"
                className="flex-1 px-4 py-2 border border-gray-200 rounded-full text-sm text-gray-900 outline-none focus:border-huaiqs-blue transition-colors duration-200"
                placeholder="Escribe un mensaje..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className="w-10 h-10 bg-gradient-to-r from-huaiqs-blue to-huaiqs-purple text-white rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
