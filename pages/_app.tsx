import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import 'antd/dist/antd.css'
import configs from '../configs'

//Create Query Client
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
    const { env } = configs
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
            {env == 'development' ? <ReactQueryDevtools /> : null}
        </QueryClientProvider>
    )
}

export default MyApp
