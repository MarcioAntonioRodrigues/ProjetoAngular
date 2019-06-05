import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsService 
{
    filmes:any = [];
	pecas: any = [];
	bestEvents:any = [];
	baseUrl = "http://www.omdbapi.com/?t=";
	apiKey = "&apikey=99b98f24";
	
	moviesList = ["batman", "the avengers", 'dumbo', 'aladdin', 'captain marvel', 'What Men Want', 'Serenity', 'Happy Death Day 2U'];
	jsonList = [];

    constructor(private http: Http)
    {
        // this.filmes = [
        //     { id: 1, img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Godfather3Poster.jpg/250px-Godfather3Poster.jpg', dia: '13', mes: 'janeiro', local: 'Marina da Glória - Rio de Janeiro', hora:'20:00', titulo: 'O Poderoso Chefão', descricao: 'Venha ver o show de stand up comedy mais famoso da zona sul do Rio! São diversos comediantes - conhecidos e também novos - se revezando no palco enquanto você curte uma cerveja gelada e excelente gastronomia. Fica no andar superior do Saloon 79 em Botafogo. Não perca!' },
        //     { id: 2, img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/2/22/Titanic_poster.jpg/250px-Titanic_poster.jpg', dia: '02', mes: 'fevereiro', local: 'Marina da Glória - Rio de Janeiro', hora:'22:00', titulo: 'Titanic', descricao: 'Venha ver o show de stand up comedy mais famoso da zona sul do Rio! São diversos comediantes - conhecidos e também novos - se revezando no palco enquanto você curte uma cerveja gelada e excelente gastronomia. Fica no andar superior do Saloon 79 em Botafogo. Não perca!' },
        //     { id: 3, img: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/10/1520596571-avengers-art.jpg', dia: '23', mes: 'fevereiro', local: 'Marina da Glória - Rio de Janeiro', hora:'21:00', titulo: 'The Avengers', descricao: 'Venha ver o show de stand up comedy mais famoso da zona sul do Rio! São diversos comediantes - conhecidos e também novos - se revezando no palco enquanto você curte uma cerveja gelada e excelente gastronomia. Fica no andar superior do Saloon 79 em Botafogo. Não perca!' },
        //     { id: 4, img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/f/f3/Deadpool_cartaz.jpg/250px-Deadpool_cartaz.jpg', dia: '15', mes: 'março', local: 'Marina da Glória - Rio de Janeiro', hora:'19:30', titulo: 'Dead Pool', descricao: 'Venha ver o show de stand up comedy mais famoso da zona sul do Rio! São diversos comediantes - conhecidos e também novos - se revezando no palco enquanto você curte uma cerveja gelada e excelente gastronomia. Fica no andar superior do Saloon 79 em Botafogo. Não perca!'},
        //     { id: 5, img: 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10274632&qld=90&l=430&a=-1', dia: '20', mes: 'maio', local: 'Marina da Glória - Rio de Janeiro', hora:'23:00', titulo: 'Jurassic Word', descricao: 'Venha ver o show de stand up comedy mais famoso da zona sul do Rio! São diversos comediantes - conhecidos e também novos - se revezando no palco enquanto você curte uma cerveja gelada e excelente gastronomia. Fica no andar superior do Saloon 79 em Botafogo. Não perca!' },
        //     { id: 6, img:'https://oyster.ignimgs.com/wordpress/stg.ign.com/2018/12/Shazam.jpg', dia: '19', mes: 'junho', local: 'Marina da Glória - Rio de Janeiro', hora:'00:00', titulo: 'Shazam', descricao: 'Venha ver o show de stand up comedy mais famoso da zona sul do Rio! São diversos comediantes - conhecidos e também novos - se revezando no palco enquanto você curte uma cerveja gelada e excelente gastronomia. Fica no andar superior do Saloon 79 em Botafogo. Não perca!' },
        //     { id: 7, img:'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4a/Skyfall007.jpg/260px-Skyfall007.jpg', dia: '05', mes: 'julho', local: 'Marina da Glória - Rio de Janeiro', hora:'18:00', titulo: '007 Skyfall', descricao: 'Venha ver o show de stand up comedy mais famoso da zona sul do Rio! São diversos comediantes - conhecidos e também novos - se revezando no palco enquanto você curte uma cerveja gelada e excelente gastronomia. Fica no andar superior do Saloon 79 em Botafogo. Não perca!' },
        //     { id: 8, img:'https://upload.wikimedia.org/wikipedia/pt/thumb/0/0f/AmadeusPoster.jpg/245px-AmadeusPoster.jpg', dia: '14', mes: 'agosto', local: 'Marina da Glória - Rio de Janeiro', hora:'20:00', titulo: 'Amadeus', descricao: 'Venha ver o show de stand up comedy mais famoso da zona sul do Rio! São diversos comediantes - conhecidos e também novos - se revezando no palco enquanto você curte uma cerveja gelada e excelente gastronomia. Fica no andar superior do Saloon 79 em Botafogo. Não perca!' },
        //     { id: 9, dia: '04', mes: 'agosto', local: 'KINOPLEX - Shopping Tijuca - Rio de Janeiro', hora:'20:00', titulo: 'X-MEN: O ultimato', descricao: 'Venha ver o show de stand up comedy mais famoso da zona sul do Rio! São diversos comediantes - conhecidos e também novos - se revezando no palco enquanto você curte uma cerveja gelada e excelente gastronomia. Fica no andar superior do Saloon 79 em Botafogo. Não perca!' }
        // ];
        // this.filmes = [
        //     { id:1, descricao: 'Rocketman é uma épica fantasia musical sobre a incrível história de Elton John. A fantástica jornada de transformação de um garoto prodígio tímido no piano para a superestrela Elton John.', titulo: 'Dead Pool', duracao: 129, classificacao: 10, img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/f/f3/Deadpool_cartaz.jpg/250px-Deadpool_cartaz.jpg', data: ['11/05', '12/05', '13/05', '14/05', '15/05'], local: [{ cinema: 'São Luís Lgo do Machado', endereco: 'Lgo. do Machado, 161.', horarios: ['12:00', '15:00' , '17:00', '19:00', '22:00']}, { cinema: 'Knoplex Tijuca', endereco: 'Shopping Tijuca, 188.', horarios: ['12:00', '15:00' , '17:00']}, { cinema: 'Cinemark Rio Sul', endereco: 'Shopping Rio Sul, 123.', horarios: [ '12:00', '15:00' , '17:00']}], categoria: 'AVENTURA' },
        //     { id:2, descricao: 'Rocketman é uma épica fantasia musical sobre a incrível história de Elton John. A fantástica jornada de transformação de um garoto prodígio tímido no piano para a superestrela Elton John.', titulo: 'The Avengers', duracao: 124, classificacao: 18, img: 'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/10/1520596571-avengers-art.jpg', data: ['11/05', '12/05', '13/05', '14/05', '15/05'], local: [{ cinema: 'Knoplex Tijuca', endereco: 'Shopping Tijuca, 188.', horarios: [ '12:00', '15:00' , '17:00'] }, { cinema: 'Cinemark Barra', endereco: 'Barra Shopping, 1003.', horarios: [ '12:00', '15:00' , '17:00'] }], categoria: 'EM ALTA' },
        //     { id:3, descricao: 'Rocketman é uma épica fantasia musical sobre a incrível história de Elton John. A fantástica jornada de transformação de um garoto prodígio tímido no piano para a superestrela Elton John.', titulo: 'O Poderoso Chefão', duracao: 124, classificacao: 18, img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Godfather3Poster.jpg/250px-Godfather3Poster.jpg', data: ['11/05', '12/05', '13/05', '14/05', '15/05'], local: [{ cinema: 'Knoplex Tijuca', endereco: 'Shopping Tijuca, 188.', horarios: [ '12:00', '15:00' , '17:00'] }, { cinema: 'Cinemark Barra', endereco: 'Barra Shopping, 1003.', horarios: [ '12:00', '15:00' , '17:00'] }], categoria: 'SUSPENSE' },
        //     { id:4, descricao: 'Rocketman é uma épica fantasia musical sobre a incrível história de Elton John. A fantástica jornada de transformação de um garoto prodígio tímido no piano para a superestrela Elton John.', titulo: 'Titanic', duracao: 120, classificacao: 12, img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/2/22/Titanic_poster.jpg/250px-Titanic_poster.jpg', data: ['11/05', '12/05', '13/05', '14/05', '15/05'], local: [{ cinema: 'Knoplex Tijuca', endereco: 'Shopping Tijuca, 188.', horarios: [ '12:00', '15:00' , '17:00'] }, { cinema: 'Cinemark Barra', endereco: 'Barra Shopping, 1003.', horarios: [ '12:00', '15:00' , '17:00'] }], categoria: 'EM ALTA' },
        //     { id:5, descricao: 'Rocketman é uma épica fantasia musical sobre a incrível história de Elton John. A fantástica jornada de transformação de um garoto prodígio tímido no piano para a superestrela Elton John.', titulo: 'Jurassic World', duracao: 124, classificacao: 18, img: 'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10274632&qld=90&l=430&a=-1', data: ['11/05', '12/05', '13/05', '14/05', '15/05'], local: [{ cinema: 'Knoplex Tijuca', endereco: 'Shopping Tijuca, 188.', horarios: [ '12:00', '15:00' , '17:00'] }, { cinema: 'Cinemark Barra', endereco: 'Barra Shopping, 1003.', horarios: [ '12:00', '15:00' , '17:00'] }], categoria: 'EM ALTA' },
        //     { id:6, descricao: 'Rocketman é uma épica fantasia musical sobre a incrível história de Elton John. A fantástica jornada de transformação de um garoto prodígio tímido no piano para a superestrela Elton John.', titulo: 'Shazam', duracao: 121, classificacao: 14, img: 'https://oyster.ignimgs.com/wordpress/stg.ign.com/2018/12/Shazam.jpg', data: ['11/05', '12/05', '13/05', '14/05', '15/05'], local: [{ cinema: 'Knoplex Tijuca', endereco: 'Shopping Tijuca, 188.', horarios: [ '12:00', '15:00' , '17:00'] }, { cinema: 'Cinemark Barra', endereco: 'Barra Shopping, 1003.', horarios: [ '12:00', '15:00' , '17:00'] }], categoria: 'EM ALTA' },
        //     { id:7, descricao: 'Rocketman é uma épica fantasia musical sobre a incrível história de Elton John. A fantástica jornada de transformação de um garoto prodígio tímido no piano para a superestrela Elton John.', titulo: '007 Skyfall', duracao: 131, classificacao: 18, img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/4/4a/Skyfall007.jpg/260px-Skyfall007.jpg', data: ['11/05', '12/05', '13/05', '14/05', '15/05'], local: [{ cinema: 'Knoplex Tijuca', endereco: 'Shopping Tijuca, 188.', horarios: [ '12:00', '15:00' , '17:00'] }, { cinema: 'Cinemark Barra', endereco: 'Barra Shopping, 1003.', horarios: [ '12:00', '15:00' , '17:00'] }], categoria: 'EM ALTA' },
        //     { id:8, descricao: 'Rocketman é uma épica fantasia musical sobre a incrível história de Elton John. A fantástica jornada de transformação de um garoto prodígio tímido no piano para a superestrela Elton John.', titulo: 'Amadeus', duracao: 124, classificacao: 18, img: 'https://upload.wikimedia.org/wikipedia/pt/thumb/0/0f/AmadeusPoster.jpg/245px-AmadeusPoster.jpg', data: ['11/05', '12/05', '13/05', '14/05', '15/05'], local: [{ cinema: 'Knoplex Tijuca', endereco: 'Shopping Tijuca, 188.', horarios: [ '12:00', '15:00' , '17:00'] }, { cinema: 'Cinemark Barra', endereco: 'Barra Shopping, 1003.', horarios: [ '12:00', '15:00' , '17:00'] }], categoria: 'EM ALTA' }
        // ];
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

	getMoviesList():any
	{
		this.moviesList.forEach(element => {
			this.getMovies(element)
				.subscribe(res =>
				{
					this.jsonList.push(res);
				});
			});
	}
	
	getMovies(nomeEvento):any
    {
        return this.http
        .get(this.baseUrl + nomeEvento + this.apiKey)
        .map((res:any) => {
            return res.json();
        });
    }
}
