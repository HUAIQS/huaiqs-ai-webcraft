import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Sonner } from "@/components/ui/sonner";

import Index from "@/pages/Index";
import CasoExito from "@/pages/CasoExito";
import NotFound from "@/pages/NotFound";

import Chat from "./Chat"; // ✅ Tu chatbot

const queryClient = new QueryClient();

const App = () => (
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

      <Chat /> {/* ✅ Chat agregado fuera del router */}
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
