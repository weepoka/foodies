"use client"
import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';

export default function Messnger() {
    return (
        <>
            <FacebookProvider appId="1402374406984788" chatSupport>
                <CustomChat pageId="106777042355587" minimized={true} />
            </FacebookProvider>
        </>
    )
}
