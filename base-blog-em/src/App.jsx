import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { Posts } from "./components/Posts/Posts"
import { ErrorBoundary } from "react-error-boundary"
import { ErrorFallback } from "./components/ErrorFallback/ErrorFallback"

const queryClient = new QueryClient()

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <h1>Blog Posts</h1>
          <Posts />
        </div>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default App
