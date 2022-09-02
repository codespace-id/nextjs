import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'antd/dist/antd.css'

//Create Query Client
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
}

export default MyApp
