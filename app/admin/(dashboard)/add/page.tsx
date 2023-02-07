'use client'

import MainLayout from '@/components/layout/MainLayout'
import AdminNavBar from '@/components/UI/AdminNavBar'
import Header from '@/components/UI/Header'
import { usePathname } from 'next/navigation'

export default function Add() {
	const path = usePathname()

	return <>Add</>
}
