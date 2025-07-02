
import React, { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// n8n chat
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

import Index from "@/pages/Index";
import CasoExito from "@/pages/CasoExito";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    createChat({
      webhookUrl: "https://n8n-n8n.nnkddt.easypanel.host/webhook/aa1407db-ed34-4147-ba10-c05d333e2ca2/chat",
      defaultLanguage: "en",
      showWelcomeScreen: false,
      loadPreviousSession: true,
      initialMessages: [
        "¡Hola! 👋 Soy el asistente virtual de HUAIQS.",
        "¿En qué puedo ayudarte hoy?"
      ],
      i18n: {
        es: {
          title: "¡Hola! 👋",
          subtitle: "Estoy aquí para ayudarte con soluciones de IA y automatización.",
          footer: "HUAIQS - Inteligencia Aplicada",
          getStarted: "Iniciar conversación",
          inputPlaceholder: "Escribe tu mensaje aquí...",
          closeButtonTooltip: "Cerrar chat"
        }
      }
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/caso-exito/:id" element={<CasoExito />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
