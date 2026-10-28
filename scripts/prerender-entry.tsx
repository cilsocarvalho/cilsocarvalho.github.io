import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "@/pages/Index";
import { caseStudies } from "@/data/case-studies";

export { caseStudies };

export function renderHome(): string {
  const queryClient = new QueryClient();
  return renderToString(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MemoryRouter initialEntries={["/"]}>
          <Index />
        </MemoryRouter>
      </TooltipProvider>
    </QueryClientProvider>,
  );
}
