import { Typography } from 'antd'
import type { NextPage } from 'next'

const Home: NextPage = () => {
    return (
        <div>
            <main>
                <div className="ant-row" style={{ minHeight: '100vh' }}>
                    <div
                        className="ant-col ant-col-24"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography.Title data-testid="hello">
                            Hello World!
                        </Typography.Title>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home
