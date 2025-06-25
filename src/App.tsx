
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CasoExito from "./pages/CasoExito";
import NotFound from "./pages/NotFound";

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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

import React from "react";
import Chat from "@/components/Chat";

function App() {
  return (
    <>
      <div>
        <h1 style={{ color: "white", textAlign: "center", marginTop: "40px" }}>
          Bienvenido a HUAIQS
        </h1>
        <p style={{ color: "gray", textAlign: "center" }}>
          Este es el sitio oficial de automatización con IA ✨
        </p>
      </div>

      {/* El chatbot flotante aparece en la esquina inferior derecha */}
      <Chat />
    </>
  );
}	

export default App;
