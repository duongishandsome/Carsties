'use client'

import { Button, Dropdown } from 'flowbite-react'
import { User } from 'next-auth'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { AiFillCar, AiFillTrophy, AiOutlineLogout } from 'react-icons/ai'
import { HiCog, HiUser } from 'react-icons/hi2'

type Props = {
    user: Partial<User>
}

export default function UserAction({ user }: Props) {
    return (
        <Dropdown className='z-10' label={`Welcome ${user.name}`} inline>
            <Dropdown.Item icon={HiUser}>
                <Link href='/'>My auctions</Link>
            </Dropdown.Item>
            <Dropdown.Item icon={AiFillTrophy}>
                <Link href='/'>Auctions won</Link>
            </Dropdown.Item>
            <Dropdown.Item icon={AiFillCar}>
                <Link href='/'>Sell my car</Link>
            </Dropdown.Item>
            <Dropdown.Item icon={HiCog}>
                <Link href='/session'>Session(dev only)</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item icon={AiOutlineLogout} onClick={() => signOut({ callbackUrl: '/' })}>
                Sign out
            </Dropdown.Item>
        </Dropdown>
    )
}
