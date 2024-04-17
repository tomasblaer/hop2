'use server'
import { cookies } from "next/headers";

export async function setToken(token: string) {
  cookies().set('accessToken', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict'
  })
}

export async function getToken() {
  return cookies().get('accessToken')
}

export async function removeToken() {
  cookies().delete('accessToken')
}