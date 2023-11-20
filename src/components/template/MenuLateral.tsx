import Image from "next/image"
import useAuth from "../../data/hook/useAuth"
import { IconeAjustes, IconeCadastro, IconeCasa, IconeMapa, IconePrice, IconeSair, IconeSino, IconeSobre } from "../icons"
import Logo from "../../../public/Logo.png"
import MenuItem from "./MenuItem"

export default function MenuLateral() {

    const { logout } = useAuth()

    return (
        <aside className={`
            flex flex-col
            bg-gray-200 text-gray-700
            dark:bg-gray-900
        `}>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20
            `}>
                <Image
                    src={Logo}
                    alt="Logo"
                />
            </div>
            <ul className="flex-grow h-full">
                <MenuItem url="/" texto="Início" icone={IconeCasa} />
                <MenuItem url="/mapa" texto="Mapa" icone={IconeMapa} />
                <MenuItem url="/postos" texto="Postos" icone={IconePrice} />
                <MenuItem url="/sobre" texto="Sobre" icone={IconeSobre} />
                <MenuItem url="/cadastroPosto" texto="Cadastro" icone={IconeCadastro} />
            </ul>
            <ul>
                <MenuItem
                    texto="Sair" icone={IconeSair} 
                    onClick={logout}
                    className={`
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}