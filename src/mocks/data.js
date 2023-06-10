import appstore from 'assets/selo-app-store@2x.png'
import playstore from 'assets/selo-google-play@2x.png'
import linkedin from 'assets/linkedin-with-circle@2x.png'
import instagram from 'assets/instagram-with-circle@2x.png'
import facebook from 'assets/facebook-with-circle@2x.png'
import youtube from 'assets/youtube-with-circle@2x.png'

import events from 'assets/events.png'
import phone from 'assets/smartphone.png'
import gym from 'assets/gym.png'
import friends from 'assets/friends.png'

import halter from 'assets/halter.png'
import comida from 'assets/comida.png'
import basket from 'assets/basket.png'
import whey from 'assets/whey.png'

import { Input, InputPhone, InputSelect } from 'components/Input'


const data = {
    Header: {
        Button: 'Já sou parceiro'
    },
    Banner: {
        Title: 'Fitpath: o app que te motiva para se exercitar!',
        Subtitle: 'Temos uma comunidade ansiosa para que você faça parte e ajude mais pessoas a sair do sedentarismo.',
        Form: [
            {
                Title: 'Quero criar minha conta',
                Subtitle: 'Dê o primeiro passo para seu novo estilo de vida',
                Label: [
                    {
                        Split: false,
                        Input: {
                            Component: Input,
                            Type: 'text',
                            Name: 'Nome',
                            Placeholder: 'Leonercio Goesfeeld'
                        },
                    },
                    {
                        Split: false,
                        Input: {
                            Component: Input,
                            Type: 'e-mail',
                            Name: 'E-mail',
                            Placeholder: 'leonercio.goesfeeld@email.com'
                        },
                    },
                    {
                        Split: false,
                        Input: {
                            Component: InputPhone,
                            Type: 'tel',
                            Name: 'Telefone',
                            Placeholder: '(95) 99876-5432'
                        },
                    }
                ],
                Text: 'Ao continuar, aceito que a Fitpath crie uma conta para meu usuário.',
                Button: 'Continuar'
            },
            {
                Title: 'Qual a sua localização?',
                Label: [
                    {
                        Split: false,
                        Input: {
                            Component: Input,
                            Type: 'number',
                            Name: 'CEP',
                            Placeholder: '00000-00'
                        },
                    },
                    {
                        Split: true,
                        Input: [
                            {   
                                Component: InputSelect,
                                Type: 'select',
                                Name: 'Estado',
                                Placeholder: 'UF'
                            },
                            {   
                                Component: InputSelect,
                                Type: 'select',
                                Name: 'Cidade',
                                Placeholder: 'Selecione'
                            },
                        ]
                    },
                    {
                        Split: false,
                        Input: {
                            Component: Input,
                            Type: 'text',
                            Name: 'Endereço',
                            Placeholder: 'Avenida Brasil'
                        },
                    },
                    {
                        Split: true,
                        Input: [
                            {
                                Component: Input,
                                Type: 'number',
                                Name: 'Número',
                                Placeholder: '123'
                            },
                            {
                                Component: Input,
                                Type: 'text',
                                Name: 'Complemento',
                                Placeholder: 'Sala 1'
                            },
                        ]
                    }
                ],
                Button: 'Concluir'
            },
            {
                Title: 'Me conta um pouco sobre a sua saúde',
                Label: [
                    {
                        Split: false,
                        Input: {
                            Component: Input,
                            Type: 'text',
                            Name: 'Pratica atividade física',
                            Placeholder: 'Sim, pratico'
                        },
                    },
                    {
                        Split: false,
                        Input: {
                            Component: Input,
                            Type: 'number',
                            Name: 'Peso',
                            Placeholder: '65kg'
                        },
                    },
                    {
                        Split: false,
                        Input: {
                            Component: Input,
                            Type: 'number',
                            Name: 'Idade',
                            Placeholder: '20'
                        },
                    }
                ],
                Button: 'Concluir'
            },
        ]
    },
    Facilities: {
        Title: 'Seja bem-vindo ao Fitpath!',
        GridBoxs: [
            {
                Title: 'Eventos',
                Paragraph: 'Convide seus amigos para participar de eventos com você',
                Icon: events
            },
            {
                Title: 'Acesso fácil',
                Paragraph: 'Pode levar junto para qualquer lugar',
                Icon: phone
            },
            {
                Title: 'Veja treinos para auxiliar',
                Paragraph: 'Diversos conteúdos que ajudam a melhorar seu treino',
                Icon: gym
            },
            {
                Title: 'Construa sua rede',
                Paragraph: 'Aumente suas amizades e conheça pessoas novas',
                Icon: friends
            },
        ]
    },
    Market: {
        Title: 'Tudo que você precisa para evoluir',
        Subtitle: 'Tenha as funcionalidades Fitpath para ajudar você a sair do sedentárismo e ter uma vida mais saudável',
        GridBoxs: [
            {
                Title: 'Diversos treinos',
                Paragraph: 'Além de uma página exclusiva, com sessões de diversos tipos de treinos e exercícios para algumas modalidades, como academia, natação, yoga e entre outros, venha conhecer.',
                Image: halter
            },
            {
                Title: 'Alimente-se melhor',
                Paragraph: 'Com vários tipos de receitas saudáveis para você adquar a sua dieta ou meta alimentar, seja com objetivo de proteína, carboidrato ou outros nutrientes.',
                Image: comida
            },
            {
                Title: 'Qualquer atividade',
                Paragraph: 'Você pode criar qualquer tipo de participação em conjunto com seus amigos, seja para esporte, lazer ou diversão, convide-os e personalize.',
                Image: basket,
            },
            {
                Title: 'Produtos baixo-custo',
                Paragraph: 'Junto a todos outros recursos estamos implementando a sessão para compra de produtos, dentro da nossa sessão de lojas, produtos a sua escolha para conferir.',
                Image: whey,
            },
        ]
    },
    Products: {
        Title: 'E mais: suporte que realmente funciona!',
        Subtitle: 'Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre disponível pra ajudar você e seus clientes.',
        GridBoxs: [
            {
                Title: 'Fitpath',
                Subtitle: 'Tudo o que você precisa',
                List: ['Fitpath desconto no Marketplace', 'Página exclusiva', 'Gestão de produtos'],
                Info: 'R$65/mês',
                Button: 'Comprar o plano'
            },
            {
                Title: 'Pagamento On-line',
                Subtitle: 'Segurança e agilidade',
                List: ['Aceite Pix e Cartão de Crédito', 'Antecipação Pix automática', 'Segurança para sua página', 'Professores para treino particular'],
                Info: 'Entregas grátis',
                Button: 'Saiba mais'
            }
        ]
    },
    Contact: {
        Text: 'Fale com a Fitpath',
        Prefix: '99',
        Number: '9999-9999'
    },
    Footer: {
        Text: 'Sua nova jornada começa aqui.',
        Download: {
            Title: 'Baixe o APP',
            Icons: [appstore, playstore]
        },
        About: {
            Title: 'Fitpath',
            List: ['Sobre o Fitpath', 'Portal do Parceiro', 'Quero ser um Fitpath Partner']
        },
        ContactUs: {
            Title: 'Fale Conosco',
            List: ['falecom@fitpath.com.br', '(99) 9999-9999']
        },
        Networks: {
            Title: 'Fitpath nas redes',
            List: [linkedin, instagram, facebook, youtube]
        },
        Copyright: {
            List: ['Nossos termos', 'Privacidade', 'Ajuda'],
            Text: '© Copyright 2023 • Fitpath •'
        }
    }

}

export default data;