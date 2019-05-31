import { Injectable} from '@angular/core';

@Injectable()
export class EventsService 
{
    filmes:any = [];
	pecas: any = [];
	bestEvents:any = [];
    constructor()
    {
        this.filmes = [
            { id: 1, imgBkg: 'https://wearepalermo.com/wp-content/uploads/2016/11/godfather-locations-shooting.jpg', img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Godfather3Poster.jpg/250px-Godfather3Poster.jpg', dia: '13', mes: 'janeiro', local: 'Marina da Glória - Rio de Janeiro', hora:'20:00', titulo: 'O Poderoso Chefão', descricao: 'Venha ver o show de stand up comedy mais famoso da zona sul do Rio! São diversos comediantes - conhecidos e também novos - se revezando no palco enquanto você curte uma cerveja gelada e excelente gastronomia. Fica no andar superior do Saloon 79 em Botafogo. Não perca!' },
            { id: 2, imgBkg: 'https://img.theculturetrip.com/768x432/wp-content/uploads/2016/02/titanic-movie-promo-stills-wallpaper-4.jpg', img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/2/22/Titanic_poster.jpg/250px-Titanic_poster.jpg', dia: '02', mes: 'fevereiro', local: 'Marina da Glória - Rio de Janeiro', hora:'22:00', titulo: 'Titanic', descricao: 'Venha ver o show de stand up comedy mais famoso da zona sul do Rio! São diversos comediantes - conhecidos e também novos - se revezando no palco enquanto você curte uma cerveja gelada e excelente gastronomia. Fica no andar superior do Saloon 79 em Botafogo. Não perca!' },
            { id: 3, imgBkg: 'https://cnet3.cbsistatic.com/img/fcD6VeAd186qOIQzQayGOIV4PqU=/2019/03/14/c12c9e9d-e470-4020-a699-5c4be5509321/avengers-endgame-poster-og-social-crop.jpg', img: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/10/1520596571-avengers-art.jpg', dia: '23', mes: 'fevereiro', local: 'Marina da Glória - Rio de Janeiro', hora:'21:00', titulo: 'The Avengers', descricao: 'Venha ver o show de stand up comedy mais famoso da zona sul do Rio! São diversos comediantes - conhecidos e também novos - se revezando no palco enquanto você curte uma cerveja gelada e excelente gastronomia. Fica no andar superior do Saloon 79 em Botafogo. Não perca!' },
            { id: 4, imgBkg: 'https://s3-us-west-2.amazonaws.com/flx-editorial-wordpress/wp-content/uploads/2017/12/22183341/Deadpool-Sweet.jpg', dia: '15', mes: 'março', local: 'Marina da Glória - Rio de Janeiro', hora:'19:30', titulo: 'Dead Pool', descricao: 'Venha ver o show de stand up comedy mais famoso da zona sul do Rio! São diversos comediantes - conhecidos e também novos - se revezando no palco enquanto você curte uma cerveja gelada e excelente gastronomia. Fica no andar superior do Saloon 79 em Botafogo. Não perca!'},
            { id: 5, imgBkg: 'https://img.elo7.com.br/product/zoom/25AB2B5/painel-festa-jurassic-world-jw06-painel-digital.jpg', dia: '20', mes: 'maio', local: 'Marina da Glória - Rio de Janeiro', hora:'23:00', titulo: 'Jurassic Word', descricao: 'Venha ver o show de stand up comedy mais famoso da zona sul do Rio! São diversos comediantes - conhecidos e também novos - se revezando no palco enquanto você curte uma cerveja gelada e excelente gastronomia. Fica no andar superior do Saloon 79 em Botafogo. Não perca!' },
            { id: 6, imgBkg: 'https://blogs.uai.com.br/opipoqueiro/wp-content/uploads/sites/54/2019/04/Shazam-01.jpg', img:'https://oyster.ignimgs.com/wordpress/stg.ign.com/2018/12/Shazam.jpg', dia: '19', mes: 'junho', local: 'Marina da Glória - Rio de Janeiro', hora:'00:00', titulo: 'Shazam', descricao: 'Venha ver o show de stand up comedy mais famoso da zona sul do Rio! São diversos comediantes - conhecidos e também novos - se revezando no palco enquanto você curte uma cerveja gelada e excelente gastronomia. Fica no andar superior do Saloon 79 em Botafogo. Não perca!' },
            { id: 7, imgBkg: 'https://i.ytimg.com/vi/CIM8bMUgOVk/maxresdefault.jpg', img:'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4a/Skyfall007.jpg/260px-Skyfall007.jpg', dia: '05', mes: 'julho', local: 'Marina da Glória - Rio de Janeiro', hora:'18:00', titulo: '007 Skyfall', descricao: 'Venha ver o show de stand up comedy mais famoso da zona sul do Rio! São diversos comediantes - conhecidos e também novos - se revezando no palco enquanto você curte uma cerveja gelada e excelente gastronomia. Fica no andar superior do Saloon 79 em Botafogo. Não perca!' },
            { id: 8, imgBkg: 'https://images1.westword.com/imager/u/original/11081392/edu_amadeus_thumbnail_1600x900.jpg', img:'https://upload.wikimedia.org/wikipedia/pt/thumb/0/0f/AmadeusPoster.jpg/245px-AmadeusPoster.jpg', dia: '14', mes: 'agosto', local: 'Marina da Glória - Rio de Janeiro', hora:'20:00', titulo: 'Amadeus', descricao: 'Venha ver o show de stand up comedy mais famoso da zona sul do Rio! São diversos comediantes - conhecidos e também novos - se revezando no palco enquanto você curte uma cerveja gelada e excelente gastronomia. Fica no andar superior do Saloon 79 em Botafogo. Não perca!' },
            { id: 9, imgBkg: 'https://amp.businessinsider.com/images/5b50eac4f47d3420008b4898-750-416.jpg', dia: '04', mes: 'agosto', local: 'KINOPLEX - Shopping Tijuca - Rio de Janeiro', hora:'20:00', titulo: 'X-MEN: O ultimato', descricao: 'Venha ver o show de stand up comedy mais famoso da zona sul do Rio! São diversos comediantes - conhecidos e também novos - se revezando no palco enquanto você curte uma cerveja gelada e excelente gastronomia. Fica no andar superior do Saloon 79 em Botafogo. Não perca!' }
        ];
        this.pecas = [
            { id: 1, img: 'assets/img/show-1.jpg', dia: '23', mes: 'maio', hora:'20:00', titulo: 'Lago dos Cisnes' },
            { id: 2, img: 'assets/img/show-2.jpg', dia: '23', mes: 'maio', hora:'22:00', titulo: 'Minha mãe é uma peça' },
            { id: 3, img: 'assets/img/show-3.jpg', dia: '23', mes: 'maio', hora:'21:00', titulo: 'A morte da bezerra' },
            { id: 4, img: 'assets/img/show-4.jpg', dia: '23', mes: 'maio', hora:'19:30', titulo: 'As cônicas de Nárnia' },
            { id: 5, img: 'assets/img/show-5.jpg', dia: '23', mes: 'maio', hora:'23:00', titulo: 'A bela de a fera' },
            { id: 6, img: 'assets/img/show-6.jpg', dia: '23', mes: 'maio', hora:'00:00', titulo: 'Um conto de fadas' },
            { id: 7, img: 'assets/img/show-7.jpg', dia: '23', mes: 'maio', hora:'18:00', titulo: 'Dancing days' },
            { id: 8, img: 'assets/img/show-8.jpg', dia: '23', mes: 'maio', hora:'20:00', titulo: 'Sherlock Holmes' }
		];
		this.bestEvents = [
			{ img:'assets/img/destaque-1.jpg', dia: '19', mes:'JAN', titulo:'FESTIVAL DE HEAVY METAL RIO DE JANEIRO 2019', local:'CITY BANK HALL'},
			{ img:'assets/img/destaque-1.jpg', dia: '02', mes:'JAN', titulo:'LOS HERMANOS APRESENTAÇÃO DO NOVO DISCO', local:'GARDEN HALL'},
			{ img:'assets/img/destaque-1.jpg', dia: '16', mes:'MAR', titulo:'BABILÔNIA FEIRA HYPE', local:'VIVO RIO'},
			{ img:'assets/img/destaque-1.jpg', dia: '25', mes:'JUN', titulo:'SHELL OPEN AIR - 2019', local:'MARINA DA GLÓRIA'},
			{ img:'assets/img/destaque-1.jpg', dia: '11', mes:'AGO', titulo:'FESTROBIER EDIÇÃO ESPECIAL', local:'CITY BANK HALL'}
		]
    }
}
