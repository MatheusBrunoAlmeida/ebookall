import caminhaofrete from '../../public/images/caminhao-de-entrega.svg'
export default function Header(){
    return(
        <header>
            <style jsx>
                {
                    `
                        header{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #FFF6EA;
                            padding: 1rem;
                            color: #d2774c;
                            font-family: 'Comfortaa', cursive;
                            font-size: 1.2rem;
                            font-weight: 600;
                        }

                        img{
                            width: 2rem;
                            margin-right: 1rem;
                        }
                    `
                }
            </style>
            <img src={caminhaofrete} alt=""/>
            <strong>Postagens podem levar até 3 dias úteis</strong>
        </header>
    )
}