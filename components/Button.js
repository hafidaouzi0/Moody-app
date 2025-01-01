import { fugaz } from '@/app/layout'
import React from 'react'

export default function Button(props) {
    const { text, dark } = props
    return (
        <button className={' border-2 border-solid rounded-full border-indigo-600 overflow-hidden duration-200 hover:opacity-60 ' + (dark ? ' bg-indigo-600 text-white ' : ' text-indigo-600')}>
            <p className={'whitespace-nowrap px-6 sm:px-20 py-2 sm:py-3 ' + fugaz.className}>{text}</p>
        </button>
    )
}
