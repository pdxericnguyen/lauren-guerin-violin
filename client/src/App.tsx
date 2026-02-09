import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import Reserve from "@/pages/Reserve";
import LessonsPay from "@/pages/LessonsPay";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/reserve" component={Reserve} />
      <Route path="/payment" component={Reserve} />
      <Route path="/lessons/pay" component={LessonsPay} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
