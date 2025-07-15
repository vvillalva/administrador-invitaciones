import { Inter } from "next/font/google";

export const inter = Inter({
    subsets: ['latin', 'latin-ext'], // Solo los subsets más comunes
    weight: ['100','200','300', '400', '500', '600', '700', '800', '900'], // Solo los pesos más usados
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font-inter'
})