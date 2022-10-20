import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { Posts } from "./components/Posts/Posts"
import { ErrorBoundary } from "react-error-boundary"

const queryClient = new QueryClient()

const ErrorFallback = () => <p>ERROR</p>

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
