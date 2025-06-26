import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { createChat } from "@n8n/chat";
import "@n8n/chat/style.css";

import Index from "@/pages/Index";
import CasoExito from "@/pages/CasoExito";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    createChat({
      webhookUrl: "https://bonorocky.app.n8n.cloud/webhook/aa1407db-ed34-4147-ba10-c05d333e2ca2/chat",
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/caso-exito/:id" element={<CasoExito />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
