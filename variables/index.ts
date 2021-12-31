export const SCREEN= {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 1024px) { ... }

    'xl': '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  }
export const MAX_ITEM= 30;
export const ITEM_WIDTH={
  'sm': 50,
  // => @media (min-width: 640px) { ... }

  'lg': 18.5,
  // => @media (min-width: 1024px) { ... }


}
export interface VIDEO{
title:string
category:string
thumbnail:string
tags:string[]
desc:string
source:string
views:number
}