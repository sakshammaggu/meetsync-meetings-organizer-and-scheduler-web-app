"use client"
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

export default function Dashboard() {
    return (
        <div>Dashboard
            <LogoutLink>Logout</LogoutLink>
        </div>
    )
}