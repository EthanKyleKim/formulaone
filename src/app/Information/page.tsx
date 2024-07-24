'use client'

import { Suspense } from 'react'
import Main from '../../containers/Main/Main'

export default function Page() {
    return (
        <Suspense fallback={<p style={{ textAlign: 'center' }}>loading... on initial request</p>}>
            <Main />
        </Suspense>
    )
}
